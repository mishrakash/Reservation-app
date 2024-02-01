import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ReservationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AppModule {}
