import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'properties', pathMatch: 'full'},
	{path: 'properties', loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule)},

	{path: '**', redirectTo: 'properties', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
