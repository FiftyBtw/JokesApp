import { Category } from "./Category";

// This is the factory class that creates Category
export class CategoryFactory {

    // This method creates an array of Category objects from a return JSON API.
    public static createCategory(jsonArray: []) {
        let categories: Category[] = [];
        for (let item of jsonArray) {
            let category = new Category(item["name"], item["number"]);
            categories.push(category);
        }
        return categories;
    }
}