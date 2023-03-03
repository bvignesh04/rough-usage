import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BasicServiceService } from './service/basic-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userList:any;
  fileName= 'ExcelSheet.xlsx';
  constructor(private service:BasicServiceService){
     
  }

  ngOnInit(): void {
    this.userList = this.service.userList
  }
  exportexcel(){
     /* pass here the table id */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
     /* save to file */  
     XLSX.writeFile(wb, this.fileName);
  
  }
 


  
  // headers = ['Make','Model','Dealer']
  // formData:any= [{
  //   Make:'',
  //   Model:'',
  //   Dealer:''
  // }]

  // showTable(){
  //   console.log(this.formData)
  // }

  // TransferData1 = 10;
  // TransferData2= 100;


  // showTable:boolean = false;

  // Make = [
  //   {value:'Make 1'},
  //   {value:'Make 2'},
  //   {value:'Make 3'},
  //   {value:'Make 4'},
  // ];
  // Model = [
  //   {value:'Model 1'},
  //   {value:'Model 2'},
  //   {value:'Model 3'},
  //   {value:'Model 4'},

  // ];
  // ModelYear = [
  //   {value:'2018'},
  //   {value:'2019'},
  //   {value:'2020'},
  //   {value:'2021'},

  // ];

  // Dealer = [
  //   {value:'Dealer 1'},
  //   {value:'Dealer 2'},
  //   {value:'Dealer 3'},
  //   {value:'Dealer 4'},
  // ]

  // VehicleType =[
  //   {value:'Vehicle 1'},
  //   {value:'Vehicle 2'},
  //   {value:'Vehicle 3'},
  //   {value:'Vehicle 4'},
  // ]

  

  // selectedMake = '';
  // selectedModel = '';
  // selectedModelYear = '';
  // selectedDealer='';
  // selectedVehicleType='';


  // cars =[
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  //   {name:'xx',year:'2018',brand:'Ford',color:'White'},
  // ]

  // showReport(){
  // this.showTable! = true;
  // }

  // ngclass:string = 'completed'

  // ==========================================TDF=================================================

  // @ViewChild('myForm')
  // form!: NgForm;
  // onSubmit(form:NgForm){
  //   console.log('Submitted',form)
  // }

  // places = [
  //   {id:1, value:'Mumbai'},
  //   {id:2, value:'Bangalore'},
  //   {id:3, value:'Chennai'}
  // ]

  // setpatchvalue(){

    // ====SetValue====
    // this.form.setValue({
    //   nameAndEmails:{
    //     Name:'Vicky',
    //     email:'Vicky@123'
    //   },
    //   place:'Chennai'
    // })

    // ====Patch Value====

    // this.form.form.patchValue({
    //   nameAndEmails:{
    //         Name:'Vicky',
    //         email:'Vicky@123'
    //       },
    // })
  }



  // ========================RF and Formgroup/validator===================

  
  // reactiveForm!:FormGroup

  // ngOnInit(): void {
  //   this.reactiveForm = new FormGroup({
  //     nameAndEmail:new FormGroup({
  //       name : new FormControl(null,Validators.required),
  //       email : new FormControl(null,Validators.required),
  //     }),
  //     place : new FormControl(null),


      // ====================Form Array=============
      // skills:new FormArray([
      //   new FormControl (null,Validators.required),
        // new FormControl (null,Validators.required),
        // new FormControl (null,Validators.required),
        // new FormControl (null,Validators.required)
  //     ])

  //   })
  // }
  // Onsubmit(){
  //   console.log(this.reactiveForm)
  // }

  // addSkill(){
  //   this.reactiveForm.get('skills').push(new FormArray(null,Validators.required)) 
  // }
// }
