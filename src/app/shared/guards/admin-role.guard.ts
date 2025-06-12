import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { has } from 'lodash-es';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  
  const userRoles = userService.user$()?.roles;
  const hasPerimission = userRoles?.includes("ADMIN");
  console.log("ADMIN ROLE GUARD", userRoles, hasPerimission);

  if(userService.user$() && hasPerimission){
    return true;
  }
  
  return router.navigate(['login']);
};
