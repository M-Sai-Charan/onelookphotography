import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OlpRoutingModule } from './olp-routing-module';
import { OlpMenu } from './olp-menu/olp-menu';


@NgModule({
  declarations: [
    OlpMenu
  ],
  imports: [
    CommonModule,
    OlpRoutingModule
  ]
})
export class OlpModule { }
