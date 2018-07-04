import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from "loopback-datasource-juggler";
import { Menu } from "../models/menu";
export declare class MenuRepository extends DefaultCrudRepository<Menu, typeof Menu.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
