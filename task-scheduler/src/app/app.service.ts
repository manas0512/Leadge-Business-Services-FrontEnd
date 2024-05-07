import { Injectable } from '@angular/core';

export class Appointment {
  title: any;
  startDate: any;
  endDate: any;
  dayLong?: boolean;
  recurrence?: string;
}

const appointments: Appointment[] = [
  {
    title: 'Battle of Panipat Strategy Meeting',
    startDate: new Date('2024-05-07T08:45:00.000Z'),
    endDate: new Date('2024-05-07T09:45:00.000Z'),
  },
  {
    title: 'Gandhis satyagraha planning',
    startDate: new Date('2024-05-08T08:00:00.000Z'),
    endDate: new Date('2024-05-08T10:30:00.000Z'),
  },
  {
    title: 'Indian Rebellion Testing',
    startDate: new Date('2024-05-11T09:00:00.000Z'),
    endDate: new Date('2024-05-11T10:00:00.000Z'),
    recurrence: 'FREQ=WEEKLY;INTERVAL=1;COUNT=2',
  },

  {
    title: 'Republic Day Celebrations',
    startDate: new Date('2024-05-09T09:30:00.000Z'),
    endDate: new Date('2024-05-09T19:00:00.000Z'),
  },
];

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getAppointments(): Appointment[] {
    return appointments;
  }
}
