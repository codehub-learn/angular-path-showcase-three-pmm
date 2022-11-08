import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {Teacher} from "../../core/models/teacher";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  dataSource: Teacher[] = [];
  displayedColumns: string[] = ['id', 'fullName', 'personalEmail', 'gender', 'mobileNumber'];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.dataSource = teachers;
    });
  }

}
