import { UsuarioService } from './../usuario/usuario.service';
import { Usuario } from '../usuario/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usuarios: Usuario[]

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
    })
  }

}
