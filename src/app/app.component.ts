/* app.component.ts */
import { Component } from '@angular/core';
import { HeaderComponent } from './shared/ui/header/header.component';
import { RecipeService } from './recipe-management/data/recipe.service';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'recipes';

    /*Teste para ver o retorno das receitas*/ 
    constructor(private recipeService: RecipeService) {
        this.recipeService.get().subscribe((data) => {
            console.log(data);
        });
    
    }
  }