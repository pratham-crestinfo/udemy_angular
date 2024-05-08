import { Component } from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component"
import { Ingredients } from '../shared/ingredients.model';
import { CommonModule, getLocaleEraNames } from '@angular/common';
import { shoppinglistService } from './shopping-list.service';
import { FormsModule,NgForm} from '@angular/forms';
@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent,CommonModule,FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  
})
export class ShoppingListComponent {
  editing:boolean=false;
  nameEdit:string='';
  amountEdit:number;
  index:number;
  constructor(private shoppinglistService : shoppinglistService){}
  Ings:Ingredients[]=this.shoppinglistService.Ings;
  onEditItem(index:number)
  { 
    // this.editing=true;
    // this.index=index;
    // this.nameEdit=this.shoppinglistService.Ings[index].name;
    // this.amountEdit=this.shoppinglistService.Ings[index].amount;
    // console.log(this.shoppinglistService.Ings[index])

    this.shoppinglistService.editer.emit(index);
  }
  editItem(editForm:NgForm){
   
    this.editing=false;
  }
  delete_item(){
    this.shoppinglistService.Ings.splice(this.index,1);
    this.editing=false;
  }
}
