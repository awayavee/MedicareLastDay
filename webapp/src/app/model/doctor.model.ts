import { MedicareService } from './medicare-service.model';

export interface Doctor{

    id?:number;
    firstName:string;
    lastName:string;
    age:number;
    gender:string;
    dateOfBirth:Date;
    contactNo:number;
    altContactNo:number;
    email:string;
    password:string;
    address1:string;
    address2:string;
    city:string;
    state:string;
    zipCode:number;
    degree:string;
    speciality:string;
    workHours:string;
    hospitalName:string;
    status?:boolean;
    medicareServices:MedicareService
}