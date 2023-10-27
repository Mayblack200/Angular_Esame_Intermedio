/* per l'online */ 
import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: "root",
})
export class DrinkService {
    /* chiamiamo variabile api service di tipo apiservice che è all'interno dell'atro file per richamare le     funzione interne */
    constructor(private apiService: ApiService) {}
    
    getDettaglioDrink(id: string) {
        return this.apiService.searchById(id);
    }

    getElencoDrinks(letter: string) {
        return this.apiService.searchByF(letter);
    }
}