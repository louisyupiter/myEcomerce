import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataProductService } from './services/data-product.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myImage : string = "assets/img/baju-fashion.jpg"
  title = 'myEcomerce';
  constructor(private productData : DataProductService, public router: Router)
  {
    this.productData.products()
  }

}
