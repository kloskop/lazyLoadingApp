import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

function detectMob(): boolean {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

console.log(detectMob())

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
     detectMob() ? import('./mobile/mobile.module').then(m => m.MobileModule) : import('./desktop/desktop.module').then(m => m.DesktopModule) 

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
