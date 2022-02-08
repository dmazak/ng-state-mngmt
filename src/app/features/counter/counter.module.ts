import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CountUiComponent } from './components/count-ui/count-ui.component';
import { CounterComponent } from './counter.component';
import { featureName, reducers } from './state';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [CounterComponent, CountUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
  ],
})
export class CounterModule {}
