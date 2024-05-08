import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { HttpClient } from "@angular/common/http";
import { recipeService } from "../recipes/recipe.service";
import { HttpClientModule } from '@angular/common/http';
@Injectable()
export class DataSharingService{
     constructor(private http:HttpClient, private recipeService:recipeService){}
     onSave()
     {
          const putData=this.recipeService.getRecipe();
          this.http.put("https://angular-course-project-aad84-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json",putData).subscribe(response=>{console.log(response)})
     }
     onFetch(){
          this.http.get<Recipe[]>("https://angular-course-project-aad84-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json").subscribe((responseData)=>{  
               this.recipeService.recipes=responseData;
               this.recipeService.fetchedRecipe.emit(responseData);
          })
     }
}