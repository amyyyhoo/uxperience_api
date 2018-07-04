import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from "loopback-datasource-juggler";
import { Location } from "../models/location";
export declare class LocationRepository extends DefaultCrudRepository<Location, typeof Location.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
