import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from 'src/app/components/rules/rules.component';
import { UnitLibraryComponent } from 'src/app/components/unit-library/unit-library.component';

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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
