import { Component,Input,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { shoppinglistService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute,Params, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit
{
  constructor(private recipeService:recipeService,private shoppinglistservice:shoppinglistService,private route:ActivatedRoute,private router:Router){}
  recipe:Recipe;
  paramsSubscription:Subscription;
 
  // temp:any=this.recipeService.selectedRecipe.subscribe((displayrecipe:Recipe)=>{this.recipe=displayrecipe});

  to_shopping_list(value:string){
      if(value==="shopping"){
        this.recipe.ingredients.forEach(element => {
          this.shoppinglistservice.Ings.push(element);
        });
        alert("added");
      }
      else if(value=="edit")
        {
          this.router.navigate(['edit'],{relativeTo:this.route})
        }
  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.recipe=this.recipeService.recipe_apo(Number(params["id"]))})
  }
}




