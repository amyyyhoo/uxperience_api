import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from "loopback-datasource-juggler";
import { City } from "../models/city";
export declare class CityRepository extends DefaultCrudRepository<City, typeof City.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
