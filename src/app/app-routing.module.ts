import { VerificationaccesComponent } from './verificationacces/verificationacces.component';
import { FormulaireadminComponent } from './component/formulaireadmin/formulaireadmin.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { ModelpageComponent } from './reutilisable/modelpage/modelpage.component';
import { HomeComponent } from './component/home/home.component';
import { CheveuxComponent } from './types/cheveux/cheveux.component';
import { AppComponent } from './app.component';
import { VisageComponent } from './types/visage/visage.component';
import { SanteComponent } from './types/sante/sante.component';
import { PiedsComponent } from './types/pieds/pieds.component';
import { MainsComponent } from './types/mains/mains.component';
import { CosmetiquesComponent } from './types/cosmetiques/cosmetiques.component';
import { CorpsComponent } from './types/corps/corps.component';
import { ParfumComponent } from './types/parfum/parfum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './sociaux/contact/contact.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parfum', component: ParfumComponent },
  { path: 'corps', component: CorpsComponent },
  { path: 'cosmetiques', component: CosmetiquesComponent },
  { path: 'mains', component: MainsComponent },
  { path: 'pieds', component: PiedsComponent },
  { path: 'sante', component: SanteComponent },
  { path: 'visage', component: VisageComponent },
  { path: 'cheveux', component: CheveuxComponent },
  { path: 'page', component: ModelpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'admincarte', component: FormulaireadminComponent },
  { path: 'admincarte/:id', component: VerificationaccesComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
