import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { AppComponent } from '../app.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        PoTemplatesModule,
        PoPageLoginModule
    ],
    providers: [],
    bootstrap: [AppComponent] // componente CSS principal do projeto
})
export class AuthenticationModuleModule {}