import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared-services/date.service';

@Component({
  selector: 'app-desktop1',
  templateUrl: './desktop1.component.html',
  styleUrls: ['./desktop1.component.css']
})
export class Desktop1Component implements OnInit {

  constructor(private _dateService: DateService) { }

  public date: string | undefined;

  ngOnInit(): void {
    this.date = this._dateService.getDate();
  }

}
