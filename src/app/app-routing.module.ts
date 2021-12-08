import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KategoriComponent } from './kategori/kategori.component';

const routes: Routes = [
  {
    path: '',
    component: KategoriComponent,
  },
  {
    path: 'kategori',
    loadChildren: () =>
      import('./kategori/kategori.module').then((mod) => mod.KategoriModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
