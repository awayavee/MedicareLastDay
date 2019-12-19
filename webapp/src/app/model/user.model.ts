import { Doctor } from './doctor.model';
import { Admin } from './admin.model';
import { Patient } from './patient.model';
import { Agent } from './agent.model';

export interface User{
    userId?:number;
    username:string;
    password:string;
    admin?:Admin;
    doctor?:Doctor;
    patient?:Patient;
    agent?:Agent;   
    status?:boolean;
}