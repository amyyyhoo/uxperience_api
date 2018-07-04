import { DefaultCrudRepository } from "@loopback/repository";
import { inject } from "@loopback/core";
import { DataSource } from "loopback-datasource-juggler";
import { Location } from "../models/location";

export class LocationRepository extends DefaultCrudRepository<
  Location,
  typeof Location.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Location, datasource);
  }
}
