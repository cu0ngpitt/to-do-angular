import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];

  constructor(private list: ListService) {
    this.lists = list.getLists;
    console.log(this.list.getLists);
  }

  ngOnInit() {
  }

  isChecked(list) {
    if (list.completed === false) { list.completed = true; }
    else { list.completed = false; }
  }

  delList(list) {

      this.lists.splice(0, 1);

  }
//  addList(list) {
//    this.lists.push(list);
//    return this;
//}


}
