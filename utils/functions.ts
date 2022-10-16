export const applyEllipsis = (text: string, limit: number) => {
  return text && text.length > limit ? `${text.substring(0, limit)}...` : text;
};
