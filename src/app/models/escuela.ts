import { Usuario } from './usuario';

export class Escuela{
  constructor(
      public fac_codigo: number,
      public esc_codigo: number,
      public esc_nombre: string,
      public contador: number,
      public usuario: Array<Usuario>,
  ){}
}
