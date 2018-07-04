import { Entity } from "@loopback/repository";
export declare class User extends Entity {
    user_id: number;
    email: string;
    name: string;
    password: string;
    phone: string;
    photo_url: string;
    getUserId(): number;
}
