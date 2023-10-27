import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardsComponent } from "./cards/cards.component";
import { DettaglioComponent } from "./dettaglio-drink/dettaglio.component";

const routes: Routes = [
    { path: "cards", component: CardsComponent },
    { path: "dettaglio/11000", component: DettaglioComponent },
    { path: "", redirectTo: "/cards", pathMatch: "full" }, // redirect to `first-component`
    // redirect to `first-component`

    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
