import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {TeachersComponent} from "./modules/teachers/teachers.component";
import {ArchiveComponent} from "./modules/archive/archive.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'teachers', component: TeachersComponent},
  {path: 'archive', component: ArchiveComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
