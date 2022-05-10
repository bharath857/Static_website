import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'/home'},
    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
