import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appointment, AppService } from './app.service';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxSchedulerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppService],
})
export class AppComponent {
  title = 'TaskSchedularProj';
  appointments: Appointment[];
  currentDate: Date = new Date(2024, 4, 7);

  constructor(public service: AppService) {
    this.appointments = service.getAppointments();
  }
}
