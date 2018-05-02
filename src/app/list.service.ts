import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  getLists = [
      {id: 0, name: 'test', completed: false},
      {id: 1, name: 'test2', completed: false}
    ];
  

  constructor() { }

}
