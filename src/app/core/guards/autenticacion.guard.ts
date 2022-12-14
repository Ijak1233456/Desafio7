import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(
    private sesion: SesionService,
    private router: Router
  ){ }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return this.sesion.obtenerUsuarios().pipe(
      //   map((usuarios: Usuario[]) => {

      //     usuarios.filter((usuario: Usuario) => {
      //       if(usuario.usuario == this.sesion.getCredenciales().){
      //         return true;
      //       }else{
      //         this.router.navigate(['autenticacion/login']);
      //         return false;
      //       }
      //     })
          
      //   })
      // );

      return true;
  }
  
}
