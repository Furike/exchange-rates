export const parseHash = (hash: string) => {
  const hashTerms = hash.split("&");
  const searchHash = hashTerms.find((t) => t.includes("search="));
  const searchTerm = searchHash?.split("=")[1];

  return searchTerm ?? "";
};
