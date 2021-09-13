import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent} from './details/details.component';
const routes: Routes = [
  {
    path:'details',
    component: DetailsComponent
  },
  // {
  //   path:'details/:id',
  //   component:UserDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
