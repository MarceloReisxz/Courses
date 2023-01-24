import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './views/delete/delete.component';
import { HomeComponent } from './views/home/home.component';
import { SucessComponent } from './views/sucess/sucess.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "sucess",
    component: SucessComponent
  },
  {
    path: "exclusao",
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
