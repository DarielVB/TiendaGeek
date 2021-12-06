import {Entity, model, property, hasOne} from '@loopback/repository';
import {Proveedor} from './proveedor.model';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  Proveedor: string;

  @property({
    type: 'number',
    required: true,
  })
  PrecioCompra: number;

  @property({
    type: 'number',
    required: true,
  })
  PrecioVenta: number;

  @property({
    type: 'string',
  })
  pedidoId?: string;

  @hasOne(() => Proveedor)
  proveedor: Proveedor;

  @property({
    type: 'string',
  })
  proveedorId?: string;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
