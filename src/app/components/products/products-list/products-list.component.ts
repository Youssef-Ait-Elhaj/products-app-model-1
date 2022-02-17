import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionEvents} from '../../../state/product.state';
import {Product} from '../../../models/product.model';
import {EventDrivenService} from '../../../state/event.driven.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products$: Observable<AppDataState<Product[]>> |null = null;
  // @Output() productsEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit() {
  }

  // onSelect(p: Product) {
  //   // this.productsEventEmitter.emit({type: ProductActionEvents.SELECT_PRODUCT, payload: p});
  // }
  //
  // onDelete(p: Product) {
  //   this.productsEventEmitter.emit({type: ProductActionEvents.DELETE_PRODUCT, payload: p});
  // }
  //
  // onEdit(p: Product) {
  //   this.productsEventEmitter.emit({type: ProductActionEvents.EDIT_PRODUCT, payload: p});
  // }

  // onActionEvent($event: ActionEvent) {
  //   this.productsEventEmitter.emit($event);
  // }
}
