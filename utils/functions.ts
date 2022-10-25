export const applyEllipsis = (text: string, limit: number) => {
  return text && text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export const splitArrToChunks = <T>(perChunk: number, inputArr: T[]) => {
  const result = inputArr.reduce<T[][]>((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return result;
};

export const truncateAddress = (address: string, long = false) => {
  if (!address) return "No Account";
  const match = address.match(
    long
      ? /^(0x[a-zA-Z0-9]{10})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
      : /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const generateRandom = (arrStr: string[]) =>
  Math.floor(Math.random() * (arrStr.length - 2));

export const generateSymbol = (str: string) => {
  const arrStr = str.split("");
  return `${arrStr[generateRandom(arrStr)]}${
    arrStr[generateRandom(arrStr)]
  }${generateRandom(arrStr)}${arrStr[generateRandom(arrStr)]}`;
};
