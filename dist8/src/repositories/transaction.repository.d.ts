import { DefaultCrudRepository } from "@loopback/repository";
import { DataSource } from "loopback-datasource-juggler";
import { Transaction } from "../models/transaction";
export declare class TransactionRepository extends DefaultCrudRepository<Transaction, typeof Transaction.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
