import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/product.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<AppDataState<Product[]>> |null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  onGetAllProduct() {
    this.products$ = this.productsService.getAllProducts()
      .pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onGetSelectedProducts() {
    this.products$ = this.productsService.getSelectedProducts()
      .pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onGetAvailableProducts() {
    this.products$ = this.productsService.getAvailableProducts()
      .pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSearch(formData: any) {
    this.products$ = this.productsService.searchProducts(formData.keyword)
      .pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSelect(p: Product) {
    this.productsService.selectProduct(p).subscribe(data => {
      p.selected = data.selected;
    });
  }

  onDelete(p: Product) {
    const v = confirm('Etes vous sur de vouloir supprimer le produit');
    if (v === true) {
      this.productsService.deleteProduct(p).subscribe(data => {
        this.onGetAllProduct();
      });
    }

  }

  onNewProduct() {
    this.router.navigateByUrl('/newProduct');
  }

  onEdit(p: Product) {
    this.router.navigateByUrl('/editProduct/' + p.id);
  }
}
