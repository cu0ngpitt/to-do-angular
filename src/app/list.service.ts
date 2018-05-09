import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  getLists = [
      
    ];

  listUpdate(list) {
    this.getLists = this.getLists.filter(x =>
      x.completed === false);
      console.log(this.getLists);
    }

  constructor() { }

}
