import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  public show = false;
  private temp;
  public categorias = [];

  constructor(private _cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtener_categorias_nivel1();
  }

  obtener_categorias_nivel1() {
    this._cursoService.get_categorias_nivel1().subscribe((response) => {
      this.temp = response;

      this.temp.sort((a, b) => (a['parent'] > b['parent'] ? 1 : -1));

      this.temp.forEach((element) => {
        if (element.visible == 1) {
          if (element.parent == 0) {
            this.categorias.push({
              id: element.id,
              name: element.name,
              //parent: element.parent,
              coursecount: element.coursecount,
              //path: element.path,
              //categorias: [],
            });
          }
        }
      });
      this.show = true;
    });
  }

  obtener_curso(categoria_id) {

    var ahora = Math.floor(new Date().getTime() / 1000.0);

    this._cursoService
      .get_cursos_por_categoria(categoria_id)
      .subscribe((response) => {
        this.temp = response['courses'];
        console.log("response");
        this.temp.forEach((element) => {
          if (element['enddate']>ahora) {
            //console.log(element);
          }
        });

        // this.temp = response;
        // this.temp.sort((a, b) => (a['parent'] > b['parent']) ? 1 : -1);

        // this.temp.forEach((element) => {
        //   if (element.visible == 1) {
        //     if (element.parent == 0) {
        //       this.categorias.push({
        //         id: element.id,
        //         name: element.name,
        //         parent: element.parent,
        //         coursecount: element.coursecount,
        //         path: element.path,
        //         categorias: [],
        //       });
        //     }
        //   }
        // });
        // this.show = true;
      });
  }
}
