import { Component, OnInit } from '@angular/core';
import { ProductsStatus } from 'src/app/shared/const/peoductsEnum';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private _utilityService: UtilityService,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }
  onProductAdd(name: HTMLInputElement, details: HTMLTextAreaElement) {
    if (name.value.length > 0 && details.value.length > 0) {
      let prod: Iproducts = {
        pname: name.value,
        pdetails: details.value,
        pstatus: ProductsStatus.Inprogress,
        id: this._utilityService.uuid()
      }
      name.value = '';
      details.value = '';
      this._productsService.addProduct(prod)
    }
    return false
  }
  
}
