import { DefaultCrudRepository } from "@loopback/repository";
import { inject } from "@loopback/core";
import { DataSource } from "loopback-datasource-juggler";
import { City } from "../models/city";

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(City, datasource);
  }
}
