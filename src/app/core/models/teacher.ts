import {Gender} from "./enums/gender";

export interface Teacher {
  id: number,
  fullName: string,
  personalEmail: string,
  gender: Gender,
  mobileNumber: string
}
