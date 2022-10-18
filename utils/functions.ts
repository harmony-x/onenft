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
