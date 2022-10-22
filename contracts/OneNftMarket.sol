// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract OneNftMarket {
    mapping(address => mapping(uint256 => NftItemInfo)) public nftInfos;

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
        IERC721(nftAddress).approve(address(this), nftId);
        nftInfos[nftAddress][nftId] = NftItemInfo({
            owner: msg.sender,
            price: price,
            currency: currency,
            deadline: deadline
        });
    }

    function buyNft(address nftAddress, uint256 nftId) public {
        NftItemInfo storage nftInfo = nftInfos[nftAddress][nftId];
        require(nftInfo.deadline > block.timestamp, "NFT listing is expired");
        // transfer the currency to the seller
        IERC20(nftInfo.currency).transferFrom(
            msg.sender,
            nftInfo.owner,
            nftInfo.price
        );
        // transfer the nft to the buyer
        IERC721(nftAddress).safeTransferFrom(
            nftInfo.owner,
            msg.sender,
            nftId
        );
        // delete the nft info
        delete nftInfos[nftAddress][nftId];
    }
}
