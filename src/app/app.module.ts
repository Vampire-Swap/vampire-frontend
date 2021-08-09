import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { TextComponent } from "./components/core/text-component/text-component.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InternalLinkComponent } from './components/core/internal-link/internal-link.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import { APOLLO_OPTIONS } from "apollo-angular";
import { PriceChartComponent } from './components/price-chart/price-chart.component';

const uri = 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap06'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextComponent,
    NavbarComponent,
    InternalLinkComponent,
    PriceChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
