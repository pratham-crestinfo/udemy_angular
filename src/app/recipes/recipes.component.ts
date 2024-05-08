import { Component } from '@angular/core';
import {RecipesListComponent} from "./recipes-list/recipes-list.component"
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component"
import { Recipe } from './recipe.model';
import { CommonModule, getLocaleEraNames } from '@angular/common';
import { recipeService } from './recipe.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipesListComponent,RecipeDetailComponent,CommonModule,RouterModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  // providers:[recipeService]
})
export class RecipesComponent {
  
  constructor(private recipeService:recipeService){}
  selectedRecipe:Recipe= this.recipeService.onDisplayrecipe;
  // handlerfunction(recipe:Recipe)
  // {
  //   this.recipeService.onDisplayrecipe=recipe;
  // }
}
