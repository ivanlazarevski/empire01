import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from 'src/app/components/rules/rules.component';
import { UnitLibraryComponent } from 'src/app/components/unit-library/unit-library.component';
import { WelcomePageComponent } from 'src/app/components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    title: 'Rules',
    component: RulesComponent,
    path: 'rules',
  },
  {
    title: 'Units',
    component: UnitLibraryComponent,
    path: 'units',
  },
  {
    title: 'Empire',
    component: WelcomePageComponent,
    path: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
