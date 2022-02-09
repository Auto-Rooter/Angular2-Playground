import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionssRoutingModule } from './collectionss-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';


@NgModule({
  declarations: [CollectionHomeComponent],
  imports: [
    CommonModule,
    CollectionssRoutingModule
  ]
})
export class CollectionssModule { }
