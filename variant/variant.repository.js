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
exports.VariantRepository = void 0;
const typeorm_1 = require("typeorm");
const variant_entity_1 = require("./variant.entity");
let VariantRepository = class VariantRepository extends typeorm_1.Repository {
    constructor() {
        super();
        this.repository = this.getRepository();
    }
    getRepository() {
        return (0, typeorm_1.getRepository)(variant_entity_1.Variant);
    }
};
VariantRepository = __decorate([
    (0, typeorm_1.EntityRepository)(variant_entity_1.Variant),
    __metadata("design:paramtypes", [])
], VariantRepository);
exports.VariantRepository = VariantRepository;
//# sourceMappingURL=variant.repository.js.map