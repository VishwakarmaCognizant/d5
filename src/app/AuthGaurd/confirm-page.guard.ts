import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';

export interface canComponentLeave{

  canLeave:()=>boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmPageGuard implements CanDeactivate<RegistrationComponent> {
  canDeactivate(component: RegistrationComponent)
  {
if(!component.RegistrationForm.valid)
  {
    return window.confirm("Please click save button before leave this page");
  }
    
    return false;
  }
  
}
