export class Categoria {
  constructor(
    public id: number,
    public name: string,
    public parent: number,
    public coursecount: number,
    public path: string,
    public categorias: Array<Categoria>,
  ) {}
}
