import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productsArray : Array<Iproducts> = []
  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productsArray = this._productService.getAllProducts()
  }

}
