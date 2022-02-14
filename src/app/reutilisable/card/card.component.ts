import { Category } from './../../model/category.model';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Typescard } from 'src/app/Enum/typescard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public categories: Category[] = [];
  public retour : boolean | undefined ;
  constructor(
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  public redirect() {
    this.categories.forEach((element) => {
      if (element.typescard == 'PARFUM') {
        
      }
    });
  }

  ngOnInit(): void {
    this.categoryService.getall().subscribe((data: Category[]) => {
      this.categories = data;  
        
    });
  }
}
