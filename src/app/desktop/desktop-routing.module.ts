import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desktop1Component } from './components/desktop1/desktop1.component';
import { Desktop2Component } from './components/desktop2/desktop2.component';
import { DesktopComponent } from './desktop.component';

const routes: Routes = [
  {
    path: '',
    component: DesktopComponent,
    children: [
      {
        path: 'component1',
        component: Desktop1Component
      },
      {
        path: 'component2',
        component: Desktop2Component
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopRoutingModule {}
