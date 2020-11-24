import { Escuela } from './escuela';

export class Facultad{
  constructor(
      public fac_codigo: number,
      public fac_nombre: string,
      public contador: number,
      public escuela: Array<Escuela>,
  ){}
}
