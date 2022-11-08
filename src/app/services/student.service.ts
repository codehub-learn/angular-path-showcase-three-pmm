import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, map, Observable, of} from "rxjs";
import {Teacher} from "../core/models/teacher";
import {Student} from "../core/models/student";
import {StudentDto} from "../core/dtos/StudentDto";
import {StudentMapper} from "../core/mappers/StudentMapper";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string = "assets/sampleData/student-data.json"

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<StudentDto[]>(this.baseUrl).pipe(
      map((studentDtoArray) => {
        let studentArray: Student[] = [];
        studentDtoArray.forEach(studentDto => studentArray.push(StudentMapper.studentDtoToStudent(studentDto)));
        return studentArray;
      })
    );
  }
}
