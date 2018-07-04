import { DefaultCrudRepository } from "@loopback/repository";
import { inject } from "@loopback/core";
import { DataSource } from "loopback-datasource-juggler";
import { Category } from "../models/category";

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Category, datasource);
  }
}
