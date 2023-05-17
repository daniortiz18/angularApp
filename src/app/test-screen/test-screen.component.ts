import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { Observable, combineLatest, map } from 'rxjs';
@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.css']
})
export class TestScreenComponent implements OnInit{
  constructor( private testService: TestServiceService){

  }
  resp: any;
  joke1: any;
  joke2: any;
  form1 = new FormGroup({
    name: new FormControl('', Validators.maxLength(4)),
    phone: new FormControl('', [isNumber]),
    email: new FormControl('', Validators.email),
  });

  getData(){
    this.testService.getData().subscribe( response => {
      this.resp = response;
      //console.log(this.resp);
    })
    combineLatest({
      joke1: this.testService.getData(),
      joke2: this.testService.getData()
    }).pipe(map( response => {
      this.joke1 = response;
      console.log(this.joke1);
      return this.joke1;
    })).subscribe((data) => {
      this.joke2 = data;
    });
  }

  
ngOnInit() {
  
}  
  
}


function isNumber(control: AbstractControl): {[key: string]: any} | null  {
  if( control.value.length != 10 ) {
    return { 'invalid': true};
  } 
  return null;
}
