import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './sociaux/contact/contact.component';
import { AproposdenousComponent } from './sociaux/aproposdenous/aproposdenous.component';
import { CosmetiquesComponent } from './types/cosmetiques/cosmetiques.component';
import { CorpsComponent } from './types/corps/corps.component';
import { CheveuxComponent } from './types/cheveux/cheveux.component';
import { SanteComponent } from './types/sante/sante.component';
import { CardComponent } from './reutilisable/card/card.component';
import { CarddescriptifComponent } from './reutilisable/carddescriptif/carddescriptif.component';
import { NousComponent } from './reutilisable/nous/nous.component';
import { ParfumComponent } from './types/parfum/parfum.component';
import { PiedsComponent } from './types/pieds/pieds.component';
import { MainsComponent } from './types/mains/mains.component';
import { VisageComponent } from './types/visage/visage.component';
import { ModelpageComponent } from './reutilisable/modelpage/modelpage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AproposdenousComponent,
    CosmetiquesComponent,
    CorpsComponent,
    CheveuxComponent,
    SanteComponent,
    CardComponent,
    CarddescriptifComponent,
    NousComponent,
    ParfumComponent,
    PiedsComponent,
    MainsComponent,
    VisageComponent,
    ModelpageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
