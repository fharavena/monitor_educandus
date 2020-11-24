import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NeveraccessService } from 'src/app/services/neveraccess.service';

@Component({
  selector: 'app-neveraccessdetail',
  templateUrl: './neveraccessdetail.component.html',
  styleUrls: ['./neveraccessdetail.component.css'],
})
export class NeveraccessdetailComponent implements OnInit {
  public rut:string = "";
  public nombre:string = "";
  public ultimo_acceso:string = "";
  public fac_nombre:string = "";
  public esc_nombre:string = "";
  public nom_pra:string = "";
  public es_primero = true;
  detalles: any;

  constructor(
    private _neveraccessService: NeveraccessService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.rut = params['rut'];
    });
    this.get_detalle();
  }

  get_inicio(valor:string) {
    if (valor === 'Semestral') {
      return '2020-09-07';
    } else if (valor === 'Anual') {
      return '2020-04-20';
    } else if (valor === 'Trimestal') {
      return '2020-10-14';
    } else {
      return 'valor desconocido';
    }
  }

  get_detalle() {
    this._neveraccessService
      .get_usuario_detalle(this.rut)
      .subscribe((response) => {
        this.detalles = response;
        //console.log(this.detalles);
        for (let index = 0; index < response.length; index++) {
          if(index == 0){
            this.rut = response[index].alu_rut_n;
            this.nombre = response[index].firstname+" "+response[index].lastname;
            this.ultimo_acceso = response[index].ultimo_acceso;
            this.fac_nombre = response[index].fac_nombre;
            this.esc_nombre = response[index].esc_nombre;
            this.nom_pra = response[index].nom_pra;
          }
        }



      });
  }
}
