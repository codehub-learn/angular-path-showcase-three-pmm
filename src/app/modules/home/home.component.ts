import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      console.log(students);
    });
  }

}
