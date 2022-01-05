// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages.routing';

// Components
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
