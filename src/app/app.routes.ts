import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/admin/home.component'

const routes: Routes = [
    { path: 'admin', component: HomeComponent },
]
export const appRouterModule = RouterModule.forRoot(routes);