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
  lastId = 3;

  constructor(private list: ListService) {
    this.lists = list.getLists;
    console.log(this.list.getLists);
  }

  ngOnInit() {
  }

  addList(newItem) {
    let obj = {};
    obj["id"] = ++this.lastId;
    obj["name"] = newItem;
    obj["completed"] = false;
    this.lists.push(obj);    
  }

  isChecked(list) {
    if (list.completed === false) { list.completed = true; }
    else { list.completed = false; }
  }

  delList(list) {
    if (list.completed === true) {
      this.lists.splice(list.id, 1);
    }
  }
//  addList(list) {
//    this.lists.push(list);
//    return this;
//}


}
