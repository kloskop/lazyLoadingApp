import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-platform-detector',
  templateUrl: './platform-detector.component.html',
  styleUrls: ['./platform-detector.component.css']
})
export class PlatformDetectorComponent implements OnInit {

  constructor() { 
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
  }

  ngOnInit(): void {
    this.platformCheck();
    this.dimensionCheck();
    this.isOnline();
  }

  public platform: string | undefined;
  public dimensions: string | undefined;
  public onlineOrOffline: boolean | undefined;

  private internalConnectionChanged = new Subject<boolean>();

  private updateOnlineStatus() {
    this.internalConnectionChanged.next(window.navigator.onLine);
  }

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  private isOnline(): void {
    this.onlineOrOffline = !!window.navigator.onLine;
  }

  private platformCheck(): void {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  }) ? this.platform = 'Mobile' : this.platform = 'Desktop';
  }

  private dimensionCheck(): void {
    let platformBAsedOnDimensions: string;
    if (window.innerHeight < environment.mobileMaxHeight && window.innerWidth < environment.mobileMaxWidth){
      platformBAsedOnDimensions = 'Mobile'
    } else {
      platformBAsedOnDimensions = 'Desktop'
    }
    this.dimensions = window.innerWidth + " x " + window.innerHeight + ' (' + platformBAsedOnDimensions + ')';
  }

  private onlineCheck(): void {}


}
