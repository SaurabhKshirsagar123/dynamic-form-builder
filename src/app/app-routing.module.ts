import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'form-view', pathMatch: 'full' },
  { path: 'form-view', component: DynamicFormComponent },
  { path: '**', redirectTo: 'form-view' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
