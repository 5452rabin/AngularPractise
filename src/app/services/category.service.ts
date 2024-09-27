import { Injectable } from '@angular/core';
import { Category } from '../shared/model/category';
import { HttpClient } from '@angular/common/http';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string="https://api.escuelajs.co/api/v1/categories";
  categoryList:Array<Category>=[];
  data:any;
  constructor(private httpclient:HttpClient) { }
  getcategory():any{
    this.httpclient.get(this.url).subscribe((res)=>{
      this.data=res;
      this.data.forEach((element)=>{
        const category:Category={
          id:element.id,
          name:element.name,
          image:element.image
        };
        this.categoryList.push(category);
      });
    });
    return this.categoryList;
  }
}
