import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  passengerArray =[];
  // passengerInstance !: PassengerService;
  constructor(private _passengerInstance : PassengerService) { }

  ngOnInit(): void {
    // this.passengerInstance = new PassengerService();
    // console.log(this.passengerInstance.passengerArray)
    // console.log(this._passengerInstance.passengerArray);
    console.log(this._passengerInstance.getAllPAssengers());
  }

}
