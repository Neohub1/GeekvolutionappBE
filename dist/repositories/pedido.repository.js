"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PedidoRepository = class PedidoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, personaRepositoryGetter) {
        super(models_1.Pedido, dataSource);
        this.personaRepositoryGetter = personaRepositoryGetter;
        this.persona = this.createBelongsToAccessorFor('persona', personaRepositoryGetter);
        this.registerInclusionResolver('persona', this.persona.inclusionResolver);
    }
};
PedidoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.conexiongvsdb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('PersonaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.ConexiongvsdbDataSource, Function])
], PedidoRepository);
exports.PedidoRepository = PedidoRepository;
//# sourceMappingURL=pedido.repository.js.map