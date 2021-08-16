import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgApexchartsModule } from "ng-apexcharts";

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
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { PresentationSectionComponent } from './components/presentation-section/presentation-section.component';
import { FloatingImageComponent } from "./components/core/floating-image/floating-image.component";
import { BannerCardsSectionComponent } from "./components/banner-cards-section/banner-cards-section.component";
import { BannerCardComponent } from "./components/core/banner-card/banner-card.component";
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { BloodPoolsComponent } from './views/blood-pools/blood-pools.component';
import { BannerComponent } from './components/core/banner/banner.component';
import { PoolComponent } from './components/core/pool/pool.component';
import { PlasmaFarmsComponent } from './views/plasma-farms/plasma-farms.component';
import { StakeBannerComponent } from './components/stake-banner/stake-banner.component';

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
    PriceChartComponent,
    BannerSectionComponent,
    BannerCardsSectionComponent,
    BannerCardComponent,
    FloatingImageComponent,
    PresentationSectionComponent,
    HeaderSectionComponent,
    BloodPoolsComponent,
    BannerComponent,
    PoolComponent,
    PlasmaFarmsComponent,
    StakeBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgApexchartsModule,
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
