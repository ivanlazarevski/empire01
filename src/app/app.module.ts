import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UnitComponent } from './components/unit/unit.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { AbilityComponent } from './components/ability/ability.component';
import { AbbreviationDirective } from './helpers/abbreviation.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { RoutingModule } from './helpers/routing-module/routing.module';
import { RulesComponent } from './components/rules/rules.component';
import { UnitLibraryComponent } from './components/unit-library/unit-library.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnitComponent,
    WeaponComponent,
    AbilityComponent,
    AbbreviationDirective,
    TooltipComponent,
    RulesComponent,
    UnitLibraryComponent,
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
