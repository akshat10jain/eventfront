import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component'
import { AddeventComponent } from '../components/admin/addevent/addevent.component';
import { UserComponent } from '../components/admin/users/user.component'
import { EventsComponent } from '../components/guest/events/events.component';
import { GuestComponent } from '../components/guest/guest.component';
import { GeteventComponent } from '../components/guest/getevent/getevent.component';
import { ManageeventComponent } from '../components/admin/manageevent/manageevent.component';
import { MailboxComponent } from '../components/admin/mailbox/mailbox.component';
const routes: Routes = [
    { path: 'admin', redirectTo: '/admin/manageevent', pathMatch: 'full' },
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'users', component: UserComponent },
            { path: 'addevent', component: AddeventComponent },
            { path: 'editevent/:id', component: AddeventComponent },
            { path: 'manageevent', component: ManageeventComponent },
            { path: 'mail', component: MailboxComponent }
        ]
    },
    {
        path: 'user', component: GuestComponent,
        children: [
            { path: 'listevents', component: EventsComponent },
            { path: 'getevent/:eventId', component: GeteventComponent },
        ]
    }
]
export const appRouterModule = RouterModule.forRoot(routes);