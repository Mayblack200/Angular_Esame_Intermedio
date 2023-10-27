import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrinkService } from '../_service/drink.service';
import { Drink } from '../tipizzazioneDrink';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  /* qua definisce che la tipizzazione la facciamo noi  */
  drink!: Drink ;
  
  constructor(private drinkService: DrinkService) {}

    /* Hook del ciclo di vita, chiamato dopo l'inizializzazione del componente */
    ngOnInit(): void {
        /* Effettua una richiesta HTTP GET */
        this.drinkService.getDettaglioDrink("11000")
            .subscribe((response) => {
                /* Assegna la risposta alla proprietà fatture */
                console.log(response);
                this.drink = response.drinks[0];
            });
          }
        }
