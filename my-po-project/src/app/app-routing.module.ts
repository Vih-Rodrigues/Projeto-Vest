import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalPageComponent } from './PrincipalPage/PrincipalPage.component';

const routes: Routes = [
  {
    // Se estiver no raiz, navegue para a página principal
    path: '',
    component: PrincipalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }