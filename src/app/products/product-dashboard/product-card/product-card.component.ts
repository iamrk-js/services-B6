import { Component, Input, OnInit } from '@angular/core';
import { ProductsStatus } from 'src/app/shared/const/peoductsEnum';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') prodobj !: Iproducts;
  allProductStatus = ProductsStatus;
  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
  }
  onStatusChange( status : string){
    this._productService.updateStatus(this.prodobj, status)
  }
}
