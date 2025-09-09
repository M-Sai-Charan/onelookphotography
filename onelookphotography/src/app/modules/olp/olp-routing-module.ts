import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlpMenu } from './olp-menu/olp-menu';

const routes: Routes = [
  { path: '', component: OlpMenu },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OlpRoutingModule { }
