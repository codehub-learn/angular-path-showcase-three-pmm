import {Gender} from "../models/enums/gender";
import {Programme} from "../models/programme";
import {Enrollment} from "../models/enrollment";

export interface StudentDto {
  id: number,
  registrationNumber: string,
  personalEmail: string,
  name: string,
  dateOfBirth: Date,
  admissionYear: number,
  gender: Gender,
  mobileNumber: string
  programme: Programme
  enrollments: Enrollment[];
}
