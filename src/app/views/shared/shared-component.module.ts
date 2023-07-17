import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, NavBarComponent],
  exports: [HeaderComponent, NavBarComponent],
})
export class SharedComponentModule {}
