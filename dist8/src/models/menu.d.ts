import { Entity } from "@loopback/repository";
export declare class Menu extends Entity {
    menu_id: number;
    product_id: number;
    date_time: Date;
    price: number;
    availability: boolean;
    getMenuId(): number;
}
