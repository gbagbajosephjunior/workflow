import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { StatusComponent } from './status/status.component';
import { FoodComponent } from './food/food.component';
import { ActionsComponent } from './actions/actions.component';
import { ErrorComponent } from './error/error.component';
import { CardFormComponent } from './card-form/card-form.component';
import { EditformComponent } from './editform/editform.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: 'actions', pathMatch: 'full' },
  { path: 'actions', component: ActionsComponent },
  { path: 'settings', component: SettingsComponent }, 
  { path: 'history', component: HistoryComponent },
  { path: 'status', component: StatusComponent }, 
  { path: 'food', component: FoodComponent },
  {
    path: 'card',
    component: CardFormComponent,
    children: [
      { path: '', component: EditformComponent },
      { path: 'edit', component: EditformComponent },
      { path: 'statistics', component: StatisticsComponent }
    ]
  },
  { path: '**', component: ErrorComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
