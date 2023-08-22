import { Component, OnInit } from '@angular/core';
import { ProductsStatus } from './shared/const/peoductsEnum';
import { Iproducts } from './shared/models/products';
import { ProductsService } from './shared/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'services';
  allProductStatus = ProductsStatus;
  productsArray: Array<Iproducts> = []

  constructor(private _productsService : ProductsService){

  }

  ngOnInit(): void {
    this.productsArray = this._productsService.productArray;
  }

  onProductAdd(pname: HTMLInputElement, pdetails: HTMLInputElement) {
    let obj : Iproducts = {
      pname : pname.value,
      pdetails : pdetails.value,
      pstatus : ProductsStatus.Inprogress,
      id : this.uuid()
    }
    this._productsService.addProduct(obj)
  }

  onStatusChange(pId : string, status : string){
    
  }
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
