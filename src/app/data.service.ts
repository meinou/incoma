import { Injectable } from '@angular/core';
import { ItemModel } from './item';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: ItemModel[] = [
    { id: 1, name: 'item1', type: 'a'},
    { id: 2, name: 'item2', type: 'b'},
    { id: 3, name: 'item3', type: 'c'},
    { id: 4, name: 'item4', type: 'a'},
    { id: 5, name: 'item5', type: 'b'},
    { id: 6, name: 'item6', type: 'c'},
    { id: 7, name: 'item7', type: 'a'},
    { id: 8, name: 'item8', type: 'b'},
    { id: 9, name: 'item9', type: 'c'},
    { id: 10, name: 'item10', type: 'a'},
  ];
  constructor() { }

  getItems() {
    return of(this.items);
  }
}
