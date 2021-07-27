import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValueComponent } from './value/value.component';
import { UpdateComponent } from './update/update.component';
import { MainComponent} from './main/main.component';
 
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'create', component: ValueComponent},
  {path: 'update', component: UpdateComponent}

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }