export enum CategoryMethods {
    GetCategories,
    GetCategoryByName
}

export type GetCategoryQueryParams = {
    categoryName?: string;
}

export const getCategoryQuery = (query: CategoryMethods, { categoryName }: GetCategoryQueryParams) => {
    if (query === CategoryMethods.GetCategories) {
        return "*[_type == 'category']"
    }

    if (query === CategoryMethods.GetCategoryByName) {
        return `*[_type == 'category' && name == '${categoryName}']`
    }
}