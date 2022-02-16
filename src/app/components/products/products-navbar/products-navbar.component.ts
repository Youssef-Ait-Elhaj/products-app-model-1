import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionEvents} from '../../../state/product.state';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGetAllProduct() {
    this.productEventEmitter.emit({type: ProductActionEvents.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({type: ProductActionEvents.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts() {
    this.productEventEmitter.emit({type: ProductActionEvents.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    this.productEventEmitter.emit({type: ProductActionEvents.NEW_PRODUCT});
  }

  onSearch(value: any) {
    this.productEventEmitter.emit({type: ProductActionEvents.SEARCH_PRODUCTS, payload: value});
  }
}