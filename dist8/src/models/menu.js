"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Menu = class Menu extends repository_1.Entity {
    getMenuId() {
        return this.menu_id;
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true
    }),
    __metadata("design:type", Number)
], Menu.prototype, "menu_id", void 0);
__decorate([
    repository_1.property({
        type: 'number'
    }),
    __metadata("design:type", Number)
], Menu.prototype, "product_id", void 0);
__decorate([
    repository_1.property({
        type: 'DateTime'
    }),
    __metadata("design:type", Date)
], Menu.prototype, "date_time", void 0);
__decorate([
    repository_1.property({
        type: 'number'
    }),
    __metadata("design:type", Number)
], Menu.prototype, "price", void 0);
__decorate([
    repository_1.property({
        type: 'binary'
    }),
    __metadata("design:type", Boolean)
], Menu.prototype, "availability", void 0);
Menu = __decorate([
    repository_1.model({
        name: 'menu'
    })
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map