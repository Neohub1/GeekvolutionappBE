import { Entity } from '@loopback/repository';
export declare class Pedido extends Entity {
    id?: string;
    id_producto: string;
    cantidad: number;
    total: number;
    estado: number;
    personaId: string;
    productoId?: string;
    constructor(data?: Partial<Pedido>);
}
export interface PedidoRelations {
}
export declare type PedidoWithRelations = Pedido & PedidoRelations;
