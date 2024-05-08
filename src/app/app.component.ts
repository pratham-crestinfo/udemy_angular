import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component"
import { RecipesComponent } from './recipes/recipes.component';
import {HeaderComponent} from "./header/header.component";
import { CommonModule } from '@angular/common';  
import { shoppinglistService } from './shopping-list/shopping-list.service';
import { DataSharingService } from './shared/datasharing.service';
import { HttpClientModule } from '@angular/common/http';
import { recipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ShoppingListComponent,RecipesComponent,HeaderComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers :[shoppinglistService,DataSharingService,recipeService,AuthService]
})
export class AppComponent {
  title = 'course_project';
  loadedFeature="recipe";
  onNavigate(feature:string)
  {
    this.loadedFeature=feature;
  }
}
