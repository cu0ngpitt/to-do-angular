import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[] = [];

  constructor(private list:ListService) { }

  ngOnInit() {
  }

  addList(list) {
    this.lists.push(list);
    return this;
}


}
