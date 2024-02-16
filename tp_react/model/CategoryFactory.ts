import { Category } from "./Category";

// This is the factory class that creates Category
export class CategoryFactory {

    // This method creates an array of Category objects from a return JSON API.
    public static createCategory(jsonArray: []) {
        let categories: Category[] = [];
        for (let i = 0; i < jsonArray.length; i++) {
            let category = new Category(jsonArray[i]["name"], jsonArray[i]["number"])
            categories.push(category);
        }
        return categories;

        //return jsonArray.map((category) => new Category(category["name"], category["number"]));
    }
}