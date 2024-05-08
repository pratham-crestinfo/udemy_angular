import { Ingredients } from "../shared/ingredients.model";
import { EventEmitter, Injectable } from "@angular/core";
@Injectable()
export class shoppinglistService{

     Ings:Ingredients[]=[
          new Ingredients("Apple",10),
          new Ingredients("Tomatoes",15)];
     
     editer=new EventEmitter<any>();
}