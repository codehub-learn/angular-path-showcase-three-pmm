import {Module} from "./module";

export interface Enrollment {
  id: number,
  module: Module,
  grade: number,
}
