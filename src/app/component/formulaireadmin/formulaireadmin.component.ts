import { Category } from './../../model/category.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-formulaireadmin',
  templateUrl: './formulaireadmin.component.html',
  styleUrls: ['./formulaireadmin.component.scss'],
})
export class FormulaireadminComponent implements OnInit {
  public categories: Category[] = [];
  public selectedCategory?: Category;
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

  constructor(
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

  public submit() {
    this.categoryService.create(this.form.value).subscribe();
    this.form.reset();
    console.log(this.http);
  }

}
