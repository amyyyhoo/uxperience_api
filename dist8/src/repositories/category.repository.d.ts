import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from "loopback-datasource-juggler";
import { Category } from "../models/category";
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
