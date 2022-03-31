import { HostListener, Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MobileGuard implements CanActivate {
  public innerWidth: number | undefined;

  @HostListener('window:resize', ['$event'])
  onResize(event: unknown): void {
    this.innerWidth = window.innerWidth;
  }

  canActivate(): boolean {
    if (window.innerWidth) {
      if (window.innerWidth >= environment.mobileResolution) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
}
