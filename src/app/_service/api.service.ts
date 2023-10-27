/* in caso serva l'offline */ 

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ObjectDrinks } from "../tipizzazioneDrink";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
    /* Creiamo variabile http di tipo httpClient che è all'interno giò di angular */
    /* come fosse pippo: stringa */
    constructor(private http: HttpClient) {}

    searchByF(firstLetter: string) {
        /* restituisce il link */
        return this.http.get<ObjectDrinks>(
            this.baseUrl +
                "search.php?f=" +
                firstLetter
        );
    }

    searchById(id: string) {
        return this.http.get<ObjectDrinks>(this.baseUrl + "lookup.php?i=" + id);
    }
}