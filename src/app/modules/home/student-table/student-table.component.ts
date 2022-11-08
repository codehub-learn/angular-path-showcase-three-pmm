import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Teacher} from "../../../core/models/teacher";
import {Student} from "../../../core/models/student";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

export interface ColumnsToDisplay {
  header: string;
  attribute: string;
}

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  dataSource!: MatTableDataSource<Student>;

  displayedColumns: ColumnsToDisplay[] = [
    {
      header: "Registration Number",
      attribute: "registrationNumber"
    },
    {
      header: "Firstname",
      attribute: "firstName"
    },
    {
      header: "Lastname",
      attribute: "lastName"
    },
    {
      header: "Admission Year",
      attribute: "admissionYear"
    },
    {
      header: "Programme",
      attribute: "programme"
    }
  ];
  columnsToDisplayWithAttributes: string[] = [];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentService: StudentService) {
    this.getColumnsToDisplayWithAttributes();
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      this.dataSource = new MatTableDataSource<Student>(students);
      this.dataSource.filterPredicate = (student: Student, filter: string) => {
        return JSON.stringify(student).trim().toLowerCase().includes(filter);
      }
      this.dataSource.sort = this.sort;
    });
  }

  private getColumnsToDisplayWithAttributes() {
    this.displayedColumns.forEach(value => {
      this.columnsToDisplayWithAttributes.push(value.attribute);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
