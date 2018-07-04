import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from "loopback-datasource-juggler";
import { inject } from "@loopback/core";
import { Transaction } from "../models/transaction";

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Transaction, datasource);
  }
}
