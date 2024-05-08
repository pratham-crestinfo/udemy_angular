import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataSharingService } from '../shared/datasharing.service';
import { HttpClientModule } from '@angular/common/http';
import { recipeService } from '../recipes/recipe.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private datasharing:DataSharingService,private recipeService:recipeService){}
  onChange(s:string)
  {
    if(s=="save"){
          this.datasharing.onSave();
     }
    if(s=="fetch"){ 
      this.datasharing.onFetch();
     
    
    }
  }
}
