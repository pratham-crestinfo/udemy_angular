import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { shoppinglistService } from '../shopping-list.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  placeholder_amount:number;
  placeholder_name:string;
  index:number;
  @ViewChild("f") form:NgForm
  constructor(private shoppinglistService: shoppinglistService) {
    this.shoppinglistService.editer.subscribe((data:any)=>{
      this.index=data;
      
      // this.placeholder_name=
      // this.placeholder_amount=this.shoppinglistService.Ings[data].amount
      this.form.setValue({
        name:this.shoppinglistService.Ings[data].name,
        amount:this.shoppinglistService.Ings[data].amount
      })
    })
  }

  onAddItem(f: NgForm) {
    console.log("added")
    const Ing = new Ingredients(f.value.name, f.value.amount);
    this.shoppinglistService.Ings.push(Ing);
    console.log(this.shoppinglistService.Ings);
    f.reset();
  }
  onEdit(f:NgForm)
  {
    this.shoppinglistService.Ings[this.index].name=f.value.name
    this.shoppinglistService.Ings[this.index].amount=f.value.amount
    console.log("edit",this.shoppinglistService.Ings);
     f.reset();
  }
  onDelete(f:NgForm)
  {
    this.shoppinglistService.Ings.splice(this.index,1);
    console.log("delete",this.shoppinglistService.Ings);
    f.reset();
  }
}
