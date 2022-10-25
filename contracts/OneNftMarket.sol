// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OneNftMarket is Ownable {
    mapping(address => mapping(uint256 => NftItemInfo)) public nftInfos;
    // contract address to royaltyPercent
    mapping(address => uint256) public royaltyPercent;
    uint256 public marketPlaceFee = 1; // by default 1%

    struct NftItemInfo {
        address owner;
        // amount, make sure to consider the decimals before entering
        uint256 price;
        // should be ERC20 token address
        address currency;
        uint256 deadline;
    }

    function listNft(
        address nftAddress,
        uint256 nftId,
        uint256 price,
        address currency,
        uint256 deadline
    ) public {
        // check if the nft is owned by the caller
        require(
            IERC721(nftAddress).ownerOf(nftId) == msg.sender,
            "You don't own this NFT"
        );
        // approve the nft to be transferred by this contract
        nftInfos[nftAddress][nftId] = NftItemInfo({
            owner: msg.sender,
            price: price,
            currency: currency,
            deadline: deadline
        });
    }

    function buyNft(address nftAddress, uint256 nftId) public payable {
        NftItemInfo storage nftInfo = nftInfos[nftAddress][nftId];
        require(nftInfo.deadline > block.timestamp, "NFT listing is expired");

        // transfer the nft to the buyer
        IERC721(nftAddress).safeTransferFrom(nftInfo.owner, msg.sender, nftId);

        // determine the royalty amounts
        uint256 contractAmount = (nftInfo.price * marketPlaceFee) / 100;

        uint256 creatorRoyaltyAmount = ((nftInfo.price - contractAmount) *
            royaltyPercent[nftAddress]) / 100;

        uint256 sellerAmount = nftInfo.price -
            contractAmount -
            creatorRoyaltyAmount;

        // transfer the currency to the seller
        if (nftInfo.currency == address(0)) {
            require(
                msg.value >= nftInfo.price,
                "Please send the exact amount of ONE"
            );
            payable(nftInfo.owner).transfer(sellerAmount);
            payable(address(this)).transfer(contractAmount);
            if (royaltyPercent[nftAddress] > 0) {
                payable(Ownable(nftAddress).owner()).transfer(
                    creatorRoyaltyAmount
                );
            }
        } else {
            IERC20(nftInfo.currency).transferFrom(
                msg.sender,
                nftInfo.owner,
                sellerAmount
            );
            IERC20(nftInfo.currency).transferFrom(
                msg.sender,
                address(this),
                contractAmount
            );
            if (royaltyPercent[nftAddress] > 0) {
                IERC20(nftInfo.currency).transferFrom(
                    msg.sender,
                    Ownable(nftAddress).owner(),
                    creatorRoyaltyAmount
                );
            }
        }

        // delete the nft info
        delete nftInfos[nftAddress][nftId];
    }

    // set the royalty percent for a contract, contract owner can call this
    function setRoyaltyPercent(uint256 percent, address _collectionAddress)
        public
    {
        require(percent <= 100, "Royalty percent should be less than 100");
        require(
            Ownable(_collectionAddress).owner() == msg.sender,
            "You don't own this collection"
        );
        royaltyPercent[_collectionAddress] = percent;
    }

    function setContractFee(uint256 fee) public onlyOwner {
        require(fee <= 100, "Fee percent should be less than 100");
        marketPlaceFee = fee;
    }

    function withdraw(address _tokenAddress) public payable onlyOwner {
        if (_tokenAddress == address(0)) {
            payable(msg.sender).transfer(address(this).balance);
        } else {
            IERC20(_tokenAddress).transfer(
                msg.sender,
                IERC20(_tokenAddress).balanceOf(address(this))
            );
        }
    }

    receive() external payable {}
}
