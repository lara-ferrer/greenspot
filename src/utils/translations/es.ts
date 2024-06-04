export const translateCategoriesToName = {
    restaurant: 'Restaurantes',
    cafe: 'Cafeterias',
    fashion: 'Moda y belleza'
};

export const translateCategoriesToLink = {
    restaurant: 'restaurantes',
    cafe: 'cafeterias',
    fashion: 'moda-y-belleza'
};

export const translateSubcategoriesToName = (subcategories: Array<string>) => {
    const translatedSubcategories = {
        flexitarian: 'Flexitariano',
        vegetarian: 'Vegetariano',
        vegan: 'Vegano'
    };

    return subcategories.map((subcategory) => translatedSubcategories[subcategory]);
}