import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BloodPoolsComponent } from "./views/blood-pools/blood-pools.component";
import { PlasmaFarmsComponent } from "./views/plasma-farms/plasma-farms.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "pools", component: BloodPoolsComponent},
  {path: "farms", component: PlasmaFarmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
