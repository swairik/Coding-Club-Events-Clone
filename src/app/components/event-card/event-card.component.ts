import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import * as getSymbolFromCurrency from 'currency-symbol-map';
import { Event } from 'src/app/models';
import { RegistrationStatus } from 'src/app/enums/registration-status.enum';
import { EventSubCategory } from 'src/app/enums';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() eventDetails!: Event;

  registrationStatus = RegistrationStatus;
  eventSubCategory = EventSubCategory;

  constructor() {}

  ngOnInit(): void {}

  getDate = (unixSeconds: number) => {
    return new Date(unixSeconds * 1000);
  };

  getFormattedFees = (currency: string, amount: number) => {
    if (amount === 0) return 'Free';
    return `${getSymbolFromCurrency(currency)} ${amount}`;
  };
}
