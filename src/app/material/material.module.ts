import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatBadgeModule, MatToolbarModule, MatIconModule, MatSidenav, MatSidenavModule, MatListModule, MatTabsModule} from '@angular/material';

const materialComponents=[
  MatButtonModule,
  MatBadgeModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule
];

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
