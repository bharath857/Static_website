import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './features/social-icons/social-icons.component';
import { MaterialModule } from './shared/material/material.module';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    SocialIconsComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
