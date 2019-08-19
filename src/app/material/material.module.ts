import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const materialComponents=[];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
  ],
  exports : [
    materialComponents
  ]
})
export class MaterialModule { }
