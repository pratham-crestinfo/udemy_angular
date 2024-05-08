import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import {
  ReactiveFormsModule,
  FormsModule,
  NgForm,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Ingredients } from '../../shared/ingredients.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;
  Ingri_copy: Ingredients[];
  detailsform: FormGroup;
  display=false;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private recipeService: recipeService
  ) {}
  @ViewChild("ing_form") ing_form:NgForm;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });

    this.recipe = this.recipeService.recipe_apo(this.id);
    // this.recipeCopy = Object.assign([], this.recipe);
    this.Ingri_copy=this.recipe.ingredients.map(x => Object.assign([], x));

    this.detailsform = new FormGroup({
      recipe_name: new FormControl(this.recipe.name),
      recipe_description: new FormControl(this.recipe.description),
      recipe_imgPath: new FormControl(this.recipe.imagePath),
    });
  }


  onDelete(i:number)
  {
    this.Ingri_copy.splice(i,1);
    this.detailsform
    console.log(this.recipeService.getRecipe())
  }
  add_ing(){
    this.display = (!this.display);
  }
  onAdd()
  {
    this.Ingri_copy.push(new Ingredients(this.ing_form.value.ing_name,this.ing_form.value.ing_amount));
    this.display=false;
  }
  onSave(){
    this.recipe.name=this.detailsform.value.recipe_name;
    this.recipe.description=this.detailsform.value.recipe_description;
    this.recipe.imagePath=this.detailsform.value.recipe_imgPath;
    this.recipe.ingredients = this.Ingri_copy;
    this.recipeService.recipes[(this.id)-1]=this.recipe;
    console.log(this.recipeService.recipes[(this.id)-1])
    this.router.navigate(["recipes",this.id])
  }
  onCancel()
  {
    this.router.navigate(["recipes",this.id])
  }
}
