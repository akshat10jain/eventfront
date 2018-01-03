import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRouterModule } from './app.routes';
import { MenuModule, MenuItem, DataTable } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { SidebarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HomeComponent } from '../components/admin/home.component'
import { BrowserAnimationBuilder } from '@angular/platform-browser/animations/src/animation_builder';
import { userService } from '../services/user.service'
import { HttpClientModule } from "@angular/common/http";
import { Ng2PaginationModule } from 'ng2-pagination';
import {ButtonModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    appRouterModule,
    BrowserModule,
    MenuModule,
    DataTableModule,
    SharedModule,
    SidebarModule,
    HttpClientModule,
    Ng2PaginationModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    userService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
