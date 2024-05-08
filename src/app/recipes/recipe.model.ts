import { Ingredients } from "../shared/ingredients.model";

export class Recipe {
  public id:number
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients:Ingredients[]
  constructor(id:number,name: string, desc: string, imagePath: string,ingredients:Ingredients[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients=ingredients;
    this.id=id;
  }
}
