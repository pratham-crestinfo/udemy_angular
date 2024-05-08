import { Ingredients } from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";
import { EventEmitter,Injectable,Output } from "@angular/core";

@Injectable()
export class recipeService{
     recipes: Recipe[] = [
          new Recipe(
            1,
            'Gulab Jamun  1',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente sequi, magni ipsum voluptate, non beatae laboriosam nisi recusandae dolor molestias itaque animi et temporibus? Sunt ad porro sint iure.',
            'https://rb.gy/xfkwu3',[new Ingredients("gulab",1),new Ingredients("ja",1),new Ingredients("moon",20)]
          ),
          new Recipe(
            2,
            'Gulab Jamun 2',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente sequi, magni ipsum voluptate, non beatae laboriosam nisi recusandae dolor molestias itaque animi et temporibus? Sunt ad porro sint iure.',
            'https://rb.gy/xfkwu3',[new Ingredients("gulab",2),new Ingredients("ja",1),new Ingredients("moon",20)]
          ),
          new Recipe(
            3,
            'Gulab Jamun 3',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente sequi, magni ipsum voluptate, non beatae laboriosam nisi recusandae dolor molestias itaque animi et temporibus? Sunt ad porro sint iure.',
            'https://rb.gy/xfkwu3',[new Ingredients("gulab",3),new Ingredients("ja",1),new Ingredients("moon",20)]
          ),];
     onDisplayrecipe:Recipe;
     @Output() selectedRecipe = new EventEmitter<Recipe>();
     @Output() fetchedRecipe = new EventEmitter<Recipe[]>();
     getRecipe()
     {
     return this.recipes;
     }
     setRecipe(recipe:Recipe){
          console.log("hello",recipe);
     }
     recipe_apo(id:number){
      return this.recipes[id-1];
     }
}