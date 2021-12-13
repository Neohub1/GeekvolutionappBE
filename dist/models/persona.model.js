"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const pedido_model_1 = require("./pedido.model");
let Persona = class Persona extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "celular", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Persona.prototype, "clave", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => pedido_model_1.Pedido),
    (0, tslib_1.__metadata)("design:type", Array)
], Persona.prototype, "pedidos", void 0);
Persona = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Persona);
exports.Persona = Persona;
//# sourceMappingURL=persona.model.js.map