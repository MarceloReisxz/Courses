import { Usuario } from './../usuario/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  usuario: Usuario = {
    fname: '',
    lname: ''
  }

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
  }


  create(): void {
    this.usuarioService.create(this.usuario)
    this.router.navigate(['/sucess'])
  }
}
