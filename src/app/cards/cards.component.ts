import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrinkService } from '../_service/drink.service';
import { Drink } from '../tipizzazioneDrink';

@Component({
    selector: "app-card",
    templateUrl: "./cards.component.html",
})
export class CardsComponent implements OnInit {
    drinks: Drink[] = [];
    /* crea drinkservice con il tipo drinkservice il quale richiama le funzioi all'interno */ 
    constructor(private drinkService: DrinkService) {}

    /* Hook del ciclo di vita, chiamato dopo l'inizializzazione del componente */
    ngOnInit(): void {
        /* Effettua una richiesta HTTP GET e che disogna cercare attraveros la lettera "a"  */
        this.drinkService.getElencoDrinks("a").subscribe((response) => {
                console.log(response);
                this.drinks = response.drinks;
            });
    }
}
