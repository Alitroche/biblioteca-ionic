import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Autor } from 'src/app/interfaces/autor.interfas';
import { AutoresService } from 'src/app/servicios/autores.service';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.scss'],
})
export class FormularioLibroComponent implements OnInit {
  public listaAutores: Autor[] = [];

  public id: number | null = null;
  public titulo: string| null = null;
  public idautor: number | null = null;
  public paginas: number | null = null;

  public idValido: boolean = true;
  public tituloValido: boolean = true;
  public idautorValido: boolean = true;
  public paginasValido: boolean = true;


  constructor(
    private servicioAutores: AutoresService,
    private servicioToast: ToastController
  ) { }

  private cargarAutores(){
    this.servicioAutores.get().subscribe({
      next:(autores) => {
        this.listaAutores = autores;
      },
      error: (e) => {
        console.error('Error al cargar Autores', e);
        this.servicioToast.create({
          header: 'Error al Cargar Autores',
          message: e.error,
          color: 'danger'
        })
      }
    });
  }

  ngOnInit() {
    this.cargarAutores();
  }
  guardar(){
    this.validar();
  }
  private validar(): boolean{
    this.idValido = this.id !== null;
    this.tituloValido = this.titulo !== null && this.titulo.length > 0;
    this.idautorValido = this.idautor !== null;
    this.paginasValido = this.paginas !== null && this.paginas > 0;
    return this.idValido && this.tituloValido && this.idautorValido && this.paginasValido;

  }

}
