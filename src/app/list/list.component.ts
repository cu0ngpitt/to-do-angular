import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];

  @Input() input;
  
  @Output() update = new EventEmitter();

  constructor(private list: ListService) {
    this.lists = list.getLists;
    console.log(this.list.getLists);
  }

  ngOnInit() {
  }

  addList(newItem) {
    let obj = {name: newItem, completed: false};
    if (newItem !== '')
      this.lists.push(obj);
    console.log(this.lists);
    this.input = "";
  }

  isChecked(list) {
    list.completed === false
      ? list.completed = true
      : list.completed = false;
  }

  delList(list) {
      this.list.listUpdate(list);
      console.log(list);
    }

}
