import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeModule } from '../home/home.module';
import { ReservationModule } from '../reservation/reservation.module';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeModule, ReservationModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
