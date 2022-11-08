import {Gender} from "./enums/gender";
import {Programme} from "./programme";
import {Enrollment} from "./enrollment";

export interface Student {
  id: number,
  registrationNumber: string,
  personalEmail: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  admissionYear: number,
  gender: Gender,
  mobileNumber: string
  programme: Programme
  enrollments: Enrollment[];
}
