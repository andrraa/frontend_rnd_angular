import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(UserService);

  if (service.isLogin()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
