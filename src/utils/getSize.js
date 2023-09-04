export const getSize = (mode) => {
  switch (mode) {
    case "easy":
      return 5;
    case "medium":
      return 9;
    case "hard":
      return 11;
    default:
      return null;
  }
};
