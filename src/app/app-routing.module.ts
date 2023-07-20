import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListGuardService } from './services/list-guard.service';
const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'description/:isbn', component: DescriptionComponent, canActivate: [ListGuardService] },
  { path: 'edit/:isbn', component: EditComponent, canActivate: [ListGuardService] },
  { path: 'add', component: AddComponent, canActivate: [ListGuardService] },
  { path: '**', redirectTo: '/list' ,pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
