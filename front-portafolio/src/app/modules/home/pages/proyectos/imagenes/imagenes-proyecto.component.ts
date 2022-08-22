import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/core/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imagenes-proyecto',
  templateUrl: './imagenes-proyecto.component.html',
  styleUrls: ['./imagenes-proyecto.component.css']
})
export class ImagenesProyectoComponent implements OnInit {

  idProyecto: number = 0;
  proyecto! : Proyecto;
  responsiveOptions: any[];

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute : ActivatedRoute
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }

  ngOnInit(): void {
    this.idProyecto = this.activatedRoute.snapshot.params.id;
    this.obtenerProyecto();
  }

  obtenerProyecto(): void {
    this.proyectoService.detalleProyecto(this.idProyecto).subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

}
