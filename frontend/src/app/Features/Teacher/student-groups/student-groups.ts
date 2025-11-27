import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

export interface Student{
  id: number,
  name: string,
}

export interface Group{
  groupId: number,
  groupName: string,
  students: Student[]
}



@Component({
  selector: 'app-student-groups',
  imports: [MatIcon],
  templateUrl: './student-groups.html',
  styleUrl: './student-groups.css'
})
export class StudentGroups implements OnInit {
  showAddGroupModal: boolean = false;
  groups: Group[] = [];
ngOnInit(): void {
this.loadGroups();
}

loadGroups(): void{
  this.groups = [
    {
      groupId: 1,
      groupName: 'Group1',
      students: [
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
      ]
    },
    {
      groupId: 2,
      groupName: 'Group2',
      students: [
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
      ]
    },
    {
      groupId: 3,
      groupName: 'Group3',
      students: [
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
      ]
    },
    {
      groupId: 4,
      groupName: 'Group4',
      students: [
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
      ]
    },
    {
      groupId: 5,
      groupName: 'Group5',
      students: [
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
      ]
    },
    {
      groupId: 6,
      groupName: 'Group6',
      students: [
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
              {id: 1, name: 'Mahdi Haidary'},
      ]
    },
  ]
}

openAddGroupModal(): void {
  this.showAddGroupModal = true;
}

closeAddGroupModal(): void {
  this.showAddGroupModal = false;
}

}
