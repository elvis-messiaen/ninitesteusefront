import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'; 
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  @ViewChild('confirmation', { static: true })
  public el!: ElementRef<HTMLInputElement>;

  public form: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
    check: new FormControl(
      '',
      [Validators.required] /**this.passwordMatch.bind(this)*/
    ),
  });

  constructor() {}

  ngOnInit() {}

  public submit(): void {
    this.form.reset();
  }

  public passwordMatch(
    formControl: AbstractControl
  ): { [s: string]: true } | null {
    if (formControl.value !== this.el.nativeElement.value) {
      return { notMatching: true };
    } else {
      return null;
    }
  }
}

