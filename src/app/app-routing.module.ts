import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", 
    redirectTo: 'auth',
    pathMatch : 'full'
  },
  {
    path: "auth",
    loadChildren: () => import ('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: "",
    loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
