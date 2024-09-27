import { Component, Input } from '@angular/core';
import { Category } from '../shared/model/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  categoryList:Array<Category>=[];
  constructor(private categoryService:CategoryService){}
  ngOnInit():void
  {

  this.loadcategory();
  }
  loadcategory():void{
    this.categoryList=this.categoryService.getcategory();
  }
 
}
