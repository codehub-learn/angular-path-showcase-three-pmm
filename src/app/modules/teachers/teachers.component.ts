import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(value => {
      console.log(value);
    });
  }

}
