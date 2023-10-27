import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CardsComponent } from "./cards/cards.component";
import { AppRoutingModule } from "./app.routing.module";
import { DettaglioComponent } from "./dettaglio-drink/dettaglio.component";
import { ApiService } from "./_service/api.service";
import { DrinkService } from "./_service/drink.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [AppComponent, CardsComponent, DettaglioComponent],
    bootstrap: [AppComponent],
    /* serve per i servizi e es fare l'offline */ 
    providers: [ApiService, DrinkService]
})
export class AppModule {}
