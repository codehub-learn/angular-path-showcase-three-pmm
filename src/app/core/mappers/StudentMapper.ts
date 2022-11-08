import {StudentDto} from "../dtos/StudentDto";
import {Student} from "../models/student";

export class StudentMapper {
  public static studentDtoToStudent(studentDto: StudentDto): Student {
    let split = studentDto.name.split(" ");
    let firstName = split[0];
    let lastName = split[1];

    return {
      id: studentDto.id,
      registrationNumber: studentDto.registrationNumber,
      personalEmail: studentDto.personalEmail,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: studentDto.dateOfBirth,
      admissionYear: studentDto.admissionYear,
      gender: studentDto.gender,
      mobileNumber: studentDto.mobileNumber,
      programme: studentDto.programme,
      enrollments: studentDto.enrollments,
    }
  }
}
