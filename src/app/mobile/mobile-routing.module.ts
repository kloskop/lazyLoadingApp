import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mobile1Component } from './components/mobile1/mobile1.component';
import { Mobile2Component } from './components/mobile2/mobile2.component';
import { MobileComponent } from './mobile.component';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent,
    children: [
      {
        path: 'component1',
        component: Mobile1Component
      },
      {
        path: 'component2',
        component: Mobile2Component
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileRoutingModule {}
