import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared-services/date.service';

@Component({
  selector: 'app-mobile2',
  templateUrl: './mobile2.component.html',
  styleUrls: ['./mobile2.component.css']
})
export class Mobile2Component implements OnInit {

  constructor(private _dateService: DateService) { }

  public date: string | undefined;

  ngOnInit(): void {
    this.date = this._dateService.getDate();
  }

}
