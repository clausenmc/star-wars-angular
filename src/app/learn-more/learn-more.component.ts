import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
 
@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      birth: ['', [Validators.required, birthdayValidator()]],
    });
  }
  ngOnInit() { }
  saveData(){
      console.log(this.myForm.value);
  }

}
export function birthdayValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value.split('-')
    var selected = new Date (value[0],value[1],value[2]);
    var now = new Date();
    let result = (now.getTime() - selected.getTime()) >= 250117630580;
    return  !result ? {dateCorrect:true} :null;
  }
}