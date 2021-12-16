import { Component, OnInit } from '@angular/core';
import { DataProduct } from 'src/app/services/data-product.interface';
import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-elektronik',
  templateUrl: './elektronik.component.html',
  styleUrls: ['./elektronik.component.scss'],
})
export class ElektronikComponent implements OnInit {
  products: DataProduct[] = [];
  constructor(private dataProductService: DataProductService) {}

  showProducts() {
    this.dataProductService.getProducts().subscribe((res: any) => {  
      this.products = res.data;
    });
  }

  ngOnInit(): void {
    this.showProducts();
  }
}
