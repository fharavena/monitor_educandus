import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public data = [
    {
      enlace: 'neveraccess',
      titulo: 'Usuarios que no han accedido al curso',
      descripcion:
        'Usuarios que no han accedido a sus clases correspondientes al periodo.',
    },
    {
      enlace: 'last30',
      titulo: 'Usuarios que no han accedido hace 30 dias',
      descripcion:
        'Usuarios que no han accedido a educandus hace 30 dias.',
    },
    {
      enlace: 'categoria',
      titulo: 'Listado de cursos',
      descripcion:
        'En construcción',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
