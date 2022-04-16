import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { AddCategorieComponent } from './pages/categorie/add-categorie/add-categorie.component';
import { ListeCategorieComponent } from './pages/categorie/liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './pages/categorie/update-categorie/update-categorie.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { AddMarqueComponent } from './pages/marque/add-marque/add-marque.component';
import { ListMarqueComponent } from './pages/marque/list-marque/list-marque.component';
import { UpdateMarqueComponent } from './pages/marque/update-marque/update-marque.component';
import { PieceComponent } from './pages/piece/piece.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { ProduitGuard } from './produit.guard';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"produits",component:ProduitsComponent,canActivate:[ProduitGuard]},
  {path:"ajouter",component:AddProduitComponent,canActivate:[ProduitGuard]},
  {path:"ajouter-categorie",component:AddCategorieComponent},
  {path:"inscription",component:AddUserComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent,canActivate:[ProduitGuard]},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'utilisateurs', component: UtilisateursComponent},
  {path: 'pieces', component: PieceComponent},
 // {path: 'inscription2', component: InscriptionComponent},
  {path: 'categories', component: ListeCategorieComponent},
  {path: 'marques', component: ListMarqueComponent},
  {path: 'ajouter-marque', component: AddMarqueComponent},
  {path:"updateProduit/:id", component: UpdateProduitComponent,canActivate:[ProduitGuard]},
  {path:"updateMarque/:id", component:UpdateMarqueComponent },
  {path:"updateCategorie/:id", component:UpdateCategorieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
