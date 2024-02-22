import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Categore } from 'src/app/interfaces/categore';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent implements OnInit{

  allCategories:Categore[]=[];
  categoreOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin:10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  constructor(private _categoriesService:CategoriesService){}

ngOnInit(): void {
this.getAllCategories()
}

getAllCategories(){

  this._categoriesService.getAllCategories().subscribe({

    next:(res)=>{

      console.log(res);
      this.allCategories=res.data
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
