import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

arr_data = [];

  info = new FormGroup({
    firstName: new FormControl('',Validators.minLength (3)),
    lastName: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
  })
  constructor() { }

  onSubmit(){
    // to take the values from the form you can select the property that have the formGroup and then just add .value
      /* var a = this.info.value;
      console.log(a);
      this.arr_data.push(a);
       */ 
      if(this.info.valid){
      var a = this.info.value;
      this.arr_data.push(a);
   }
    }
  ngOnInit(): void {
  }

}
