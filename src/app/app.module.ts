import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRouterModule } from './app.routes';
import { MenuModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { SidebarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { SidebarComponent } from '../components/admin/sidebar/sidebar.component';
import { UserComponent } from '../components/admin/users/user.component'
import { BrowserAnimationBuilder } from '@angular/platform-browser/animations/src/animation_builder';
import { userService } from '../services/user.service';
import { eventService } from '../services/event.service'
import { HttpClientModule } from "@angular/common/http";
import { Ng2PaginationModule } from 'ng2-pagination';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonModule } from 'primeng/primeng';
import { AdminComponent } from '../components/admin/admin.component'
import { AddeventComponent } from '../components/admin/addevent/addevent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { EventsComponent } from '../components/guest/events/events.component';
import { GuestComponent } from '../components/guest/guest.component';
import { HeaderComponent } from '../components/guest/header/header.component';
import { GeteventComponent } from '../components/guest/getevent/getevent.component';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    SidebarComponent,
    UserComponent,
    AddeventComponent,
    AdminComponent,
    EventsComponent,
    GuestComponent,
    HeaderComponent,
    GeteventComponent
  ],
  imports: [
    appRouterModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MenuModule,
    DataTableModule,
    SharedModule,
    SidebarModule,
    HttpClientModule,
    Ng2PaginationModule,
    ButtonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [
    userService,
    eventService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
