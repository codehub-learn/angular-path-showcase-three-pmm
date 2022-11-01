import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, map, Observable, of} from "rxjs";
import {Teacher} from "../core/models/teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl: string = "assets/sampleData/teacher-data.json"

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
