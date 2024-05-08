import { Component, Output,EventEmitter} from '@angular/core';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { Recipe } from '../recipe.model';
import { recipeService } from "../recipe.service";
import { CommonModule, getLocaleEraNames } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipesItemComponent, CommonModule,RouterModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent {
  constructor(private recipeService:recipeService){
    this.recipeService.fetchedRecipe.subscribe((data)=>{this.recipes=data})
  }
  // recipes: Recipe[]=this.recipeService.getRecipe();
recipes:Recipe[];
  selected(recipe: Recipe) {
   this.recipeService.setRecipe(recipe);
   this.recipeService.selectedRecipe.emit(recipe);
  }
}
