import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { FeatureSectionComponent } from './home/feature-section/feature-section.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
  path: '',
    component: ReportsComponent
  },
  {
    path: 'properties',
    component: FeatureSectionComponent
  },
  {
    path: 'report',
    component: ReportsComponent
  },
  {
    path: 'shop',
    component: MainComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
