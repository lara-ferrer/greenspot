export const businessRoutes = {
  restaurant: "restaurantes",
  cafe: "cafeterias",
  fashion: "moda-y-belleza",
  leisure: "ocio",
};

export const mapBusinessUrl = (category: string, url: string) => {
  return `${businessRoutes[category]}/${url}`;
};
