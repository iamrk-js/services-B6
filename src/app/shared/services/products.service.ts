import { Injectable } from '@angular/core';
import { ProductsStatus } from '../const/peoductsEnum';
import { Iproducts } from '../models/products';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // api call to get products data from database
  productArray: Array<Iproducts> = [
    {
      pname: "Samsung 31",
      pdetails: "Mobile 128 6",
      pstatus: ProductsStatus.Inprogress,
      id: 'qwerty3456wertyu'
    },
    {
      pname: "Samsung S32",
      pdetails: "Mobile 128 6",
      pstatus: ProductsStatus.Dispached,
      id: 'ghjkl5678rtyui'
    }
  ]
  constructor(private _snackBarService: SnackbarService) { }

  getAllProducts(): Array<Iproducts> {
    return this.productArray;
  }

  addProduct(prod: Iproducts): void {
    this.productArray.push(prod);
    this._snackBarService.onOpenSnackBar(`${prod.pname} is added successfully`)
  }

  updateStatus(prodObj: Iproducts, status: string) {
    this.productArray.forEach(prod => {
      if (prod.id === prodObj.id) {
        prod.pstatus = status
      }
      this._snackBarService.onOpenSnackBar(`The status of products ${prodObj.pname} is changed to ${status}`)
    })
  }
}
