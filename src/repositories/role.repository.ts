import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from "loopback-datasource-juggler";
import { inject } from "@loopback/core";
import { Role } from "../models/role";

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Role, datasource);
  }
}
