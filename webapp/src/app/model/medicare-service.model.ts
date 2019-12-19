import { Doctor } from './doctor.model';

export interface MedicareService
{
    id?:number;
    medicareService:string;
    serviceDescription:string;
    amount:number;
    doctor?:Doctor;
}