import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { ConexiongvsdbDataSource } from '../datasources';
import { Producto, ProductoRelations, Pedido } from '../models';
import { PedidoRepository } from './pedido.repository';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.id, ProductoRelations> {
    protected pedidoRepositoryGetter: Getter<PedidoRepository>;
    readonly pedido: HasOneRepositoryFactory<Pedido, typeof Producto.prototype.id>;
    constructor(dataSource: ConexiongvsdbDataSource, pedidoRepositoryGetter: Getter<PedidoRepository>);
}
