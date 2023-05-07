import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
// import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    {
        // Se estiver no login, navegue para LoginComponent
      path: 'login',
      component: LoginComponent
    }/*,
    {
      // Se estiver no sign-up, navegue para SignUpComponent
      path: 'sign-up',
      component: SignUpComponent
    }*/
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AuthenticationModuleRoutingModule { }