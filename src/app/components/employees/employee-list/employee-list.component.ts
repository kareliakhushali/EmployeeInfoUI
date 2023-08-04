import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees : Employee[] = [];
  //this was used for displaying static data
// employees : Employee[] = [
//   {
//     id : '1',
//    name : 'khushali',
//    email: 'khushali@gmail.com',
//   phone: 9904246824,
//   salary: 40000,
//   department: 'HR'
//   },
//   {
//     id : '2',
//    name : 'khushi',
//    email: 'khushi@gmail.com',
//   phone: 9904246824,
//   salary: 60000,
//   department: 'Accounts'
//   },
//   {
//     id : '3',
//    name : 'Malav',
//    email: 'malav@gmail.com',
//   phone: 9904246824,
//   salary: 50000,
//   department: 'Manager'
//   },

// ];
constructor(private employeesService : EmployeesService){}
ngOnInit():void {
  this.employeesService.getAllEmployees()
  .subscribe({
    next :(employees) =>{
      this.employees = employees;
      console.log(employees);
    },
    error:(response) =>
    {
      console.log(response);
    }
  })
}
}
