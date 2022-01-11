import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'; 
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  public form : FormGroup = new FormGroup ({
    nom: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[Validators.email,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
    check: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  },
  { validators: this.checkpassword() }
  )

  constructor() { }

  ngOnInit(){
  }

  public checkpassword (): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      return control.get('password')!.value != control.get('check')!.value
        ? { noMatch: true }
        : null;
    };
  }

  public submit():void {
    console.log(this.form.controls);
    console.log(this.form.valid);
    console.log(this.form.value);
    //this.form.reset();
  }

}
