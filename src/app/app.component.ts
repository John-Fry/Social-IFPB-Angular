import { Component } from '@angular/core';
import { Usuario } from '../shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titulo = 'Social IFPB';
  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }
  deletarUsuario(): void {
    const indiceUsuario = this.usuarios.indexOf(this.usuario);
    this.usuarios.splice(indiceUsuario, 1);
  }
  hidden = false;
  toggleBadgeVisibility(usuario: Usuario): boolean {
    this.hidden = !this.hidden;
    return this.hidden;
  }
}
