import { Doctor } from './doctor.model';
import { User } from './user.model';
import { MedicareService } from './medicare-service.model';

export interface Appointment
{
    id ?:number;
    patientFirstName:string;
    patientLastName:string;
    bookingDate:Date;
    appointmentDate:Date;
    status?:boolean;
    medicareServices:MedicareService;
    doctor:Doctor;
    user:User;


}