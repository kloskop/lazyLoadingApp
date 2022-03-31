import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lazyLoadingApp';

  constructor(private _router: Router) {}

  public goTo(link: string): void {
    this._router.navigateByUrl(link);
  }
}
