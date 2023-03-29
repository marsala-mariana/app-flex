import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoberturaComponent } from './components/cobertura/cobertura.component';

const routes: Routes = [
  { path: 'areadecobertura', component: CoberturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
