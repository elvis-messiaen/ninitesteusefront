import { Typescard } from 'src/app/Enum/typescard';
import { Category } from './../model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-verificationacces',
  templateUrl: './verificationacces.component.html',
  styleUrls: ['./verificationacces.component.scss'],
})
export class VerificationaccesComponent implements OnInit {
  category!: Category;
  id!: number;
  //@Input() id!: number;
  @Input() newTitle!: string;
  @Input() newTypescard!: Typescard;
  @Input() newDescription!: string;
  @Input() newPhoto!: string;

  public categories: Category[] = [];

  get f() {
    return this.form.controls;
  }

  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    typescard: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
    liens: new FormArray([]),
  });

  public get liens() {
    return this.form.get('liens') as FormArray;
  }

  public addPhoto() {
    this.liens.push(new FormControl(''));
  }

  public remove(index: number) {
    this.liens.removeAt(index);
  }

  public cardinfos() {}

  @Output() userModified: EventEmitter<Category> = new EventEmitter();
  @Output() actionCancelled: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.categoryService.getOne(this.id).subscribe({
      next: data => this.category = data,
      error: err => console.log(err),
      complete: () => console.log("recuperation de l'utilisateur") 
    })
    this.form.reset();
  }
  

  saveCategory(): void {
    let modifyCategory: Category = {
      id: this.id,
      title: this.newTitle,
      typescard: this.newTypescard,
      description: this.newDescription,
      photo: this.newDescription,
    };
    this.userModified.emit(modifyCategory);
  }
}
