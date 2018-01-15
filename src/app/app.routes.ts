import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component'
import { AddeventComponent } from '../components/admin/addevent/addevent.component';
import { UserComponent } from '../components/admin/users/user.component'
import { EventsComponent } from '../components/guest/events/events.component';
import { GuestComponent } from '../components/guest/guest.component';
import { GeteventComponent } from '../components/guest/getevent/getevent.component';
import { ManageeventComponent } from '../components/admin/manageevent/manageevent.component';
import { MailboxComponent } from '../components/admin/mailbox/mailbox.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { authService } from '../services/auth.service'
import { UnauthorizeComponent } from '../components/admin/unauthorize/unauthorize.component';
import { ContactComponent } from '../components/guest/contact/contact.component'

const routes: Routes = [
    { path: '', redirectTo: '/user/listevents', pathMatch: 'full' },
    { path: 'user', redirectTo: '/user/listevents', pathMatch: 'full' },
    { path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'users', component: UserComponent, canActivate: [authService] },
            { path: 'addevent', component: AddeventComponent, canActivate: [authService] },
            { path: 'editevent/:eventId', component: AddeventComponent, canActivate: [authService] },
            { path: 'manageevent', component: ManageeventComponent, canActivate: [authService] },
            { path: 'mail', component: MailboxComponent, canActivate: [authService] },
            { path: 'reply/:to/:subject', component: MailboxComponent, canActivate: [authService] },
            { path: 'dashboard', component: DashboardComponent, canActivate: [authService] }
        ]
    },
    {
        path: 'user', component: GuestComponent,
        children: [
            { path: 'listevents', component: EventsComponent },
            { path: 'getevent/:eventId', component: GeteventComponent },
            { path: 'contact', component: ContactComponent }
        ]
    },
    { path: 'unauthorize', component: UnauthorizeComponent },
    { path: '**', component: UnauthorizeComponent }
]
export const appRouterModule = RouterModule.forRoot(routes);