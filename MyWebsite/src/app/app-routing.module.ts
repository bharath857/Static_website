import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectDetailsComponent } from './features/project-details/project-details.component';


const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'/home'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'projects', component:ProjectDetailsComponent},
    {path:'contact', component:ContactComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
