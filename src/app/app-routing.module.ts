// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

// Components
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
