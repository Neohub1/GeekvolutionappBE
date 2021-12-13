import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ConexiongvsdbDataSource } from '../datasources';
import { Pedido, PedidoRelations, Persona } from '../models';
import { PersonaRepository } from './persona.repository';
export declare class PedidoRepository extends DefaultCrudRepository<Pedido, typeof Pedido.prototype.id, PedidoRelations> {
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    readonly persona: BelongsToAccessor<Persona, typeof Pedido.prototype.id>;
    constructor(dataSource: ConexiongvsdbDataSource, personaRepositoryGetter: Getter<PersonaRepository>);
}
