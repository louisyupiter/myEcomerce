import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElektronikComponent } from './elektronik/elektronik.component';
import { FashionComponent } from './fashion/fashion.component';
import { OtomotifComponent } from './otomotif/otomotif.component';
import { FoodsComponent } from './foods/foods.component';
import { KategoriRoutingModule } from './kategori-routing.module';
import { DetailProductComponent } from './elektronik/detail-product/detail-product.component';
// import { MenuKategoriComponent } from '../menu-kategori/menu-kategori.component';
import { KategoriComponent } from './kategori.component';

@NgModule({
  declarations: [
    ElektronikComponent,
    FashionComponent,
    OtomotifComponent,
    FoodsComponent,
    DetailProductComponent,
    KategoriComponent,
  ],
  imports: [
    CommonModule,
    KategoriRoutingModule,
  ]
})
export class KategoriModule { }
