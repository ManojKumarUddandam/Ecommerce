import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  name!: any;
  myOrders: any;
  constructor(private auth:AuthService)
  {
  }
  logout()
  {
    this.auth.logout()
  }
}