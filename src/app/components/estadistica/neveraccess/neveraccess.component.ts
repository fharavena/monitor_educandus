import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/models/facultad';
import { Usuario } from 'src/app/models/usuario';
import { Escuela } from 'src/app/models/escuela';
import { NeveraccessService } from 'src/app/services/neveraccess.service';

@Component({
  selector: 'app-neveraccess',
  templateUrl: './neveraccess.component.html',
  styleUrls: ['./neveraccess.component.css'],
})
export class NeveraccessComponent implements OnInit {
  public usuarios: Array<Usuario> = [];
  public facultades: Array<Facultad> = [];
  public escuelas: Escuela[] | undefined;
  public show: boolean = false;

  constructor(private _neveraccessService: NeveraccessService) {}

  ngOnInit(): void {
    this.get_usuarios();
  }

  get_usuarios() {
    this._neveraccessService.get_usuarios().subscribe((response) => {
      this.usuarios = response.data;

      response.data.forEach((element: any) => {
        if (this.facultades.length == 0) {
          this.facultades.push({
            fac_codigo: element.fac_codigo,
            fac_nombre: element.fac_nombre,
            contador: 1,
            escuela: [
              {
                fac_codigo: element.fac_codigo,
                esc_codigo: element.esc_codigo,
                esc_nombre: element.esc_nombre,
                contador: 1,
                usuario: [
                  {
                    username: element.username,
                    firstname: element.firstname,
                    lastname: element.lastname,
                    cod_pra: element.cod_pra,
                    nom_pra: element.nom_pra,
                  },
                ],
              },
            ],
          });
        } else {
          //esta la facultad?
          var posFacu = this.buscar_facultad(
            this.facultades,
            element.fac_codigo
          );
          if (posFacu != -1) {
            //si: agregar 1 al contador facultad
            this.facultades[posFacu]['contador']++;
            //esta la escuela?
            var posEscu = this.buscar_escuela(
              this.facultades,
              element.fac_codigo,
              element.esc_codigo
            );
            if (posEscu != -1) {
              //si: agregar 1 al contador escuela, agregar usuario a escuela
              this.facultades[posFacu]['escuela'][posEscu]['contador']++;
              this.facultades[posFacu]['escuela'][posEscu]['usuario'].push({
                username: element.username,
                firstname: element.firstname,
                lastname: element.lastname,
                cod_pra: element.cod_pra,
                nom_pra: element.nom_pra,
              });
            } else {
              //no: agregar escuela,agregar usuario, setear contador 1
              this.facultades[posFacu]['escuela'].push({
                fac_codigo: element.fac_codigo,
                esc_codigo: element.esc_codigo,
                esc_nombre: element.esc_nombre,
                contador: 1,
                usuario: [
                  {
                    username: element.username,
                    firstname: element.firstname,
                    lastname: element.lastname,
                    cod_pra: element.cod_pra,
                    nom_pra: element.nom_pra,
                  },
                ],
              });
            }
          } else {
            //no: agregar facultad set contador 1, agregar escuela setear contador 1, agregar usuario
            this.facultades.push({
              fac_codigo: element.fac_codigo,
              fac_nombre: element.fac_nombre,
              contador: 1,
              escuela: [
                {
                  fac_codigo: element.fac_codigo,
                  esc_codigo: element.esc_codigo,
                  esc_nombre: element.esc_nombre,
                  contador: 1,
                  usuario: [
                    {
                      username: element.username,
                      firstname: element.firstname,
                      lastname: element.lastname,
                      cod_pra: element.cod_pra,
                      nom_pra: element.nom_pra,
                    },
                  ],
                },
              ],
            });
          }
        }
      });
      this.show = true;
    });
  }

  buscar_escuela(
    facultades: Array<Facultad>,
    facultad: number,
    escuela: number
  ) {
    var posfac = this.buscar_facultad(facultades, facultad);
    var escuelas: Array<Escuela> = facultades[posfac]['escuela'];
    for (let index = 0; index < escuelas.length; index++) {
      if (escuelas[index]['esc_codigo'] == escuela) {
        return index;
      }
    }
    return -1;
  }

  buscar_facultad(facultades: Array<Facultad>, facultad: number) {
    for (let index = 0; index < facultades.length; index++) {
      if (facultades[index]['fac_codigo'] == facultad) {
        return index;
      }
    }
    return -1;
  }
}
