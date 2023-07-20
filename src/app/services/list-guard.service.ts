import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListGuardService implements CanActivate {

  constructor(private storageService: StorageService,private router:Router) { }

  canActivate(activeRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    if (!this.storageService.list) {
      this.router.navigateByUrl('/list');
    }else{
      return true;
    }
  }
}
