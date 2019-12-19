package com.cognizant.medicareservice.service;

import java.util.List;

import com.cognizant.medicareservice.entities.Doctor;
import com.cognizant.medicareservice.entities.Patient;


public interface PatientService {
	public List<Patient> getAllPatients();
	public void modifyPatient(Patient patient);
	public void modifyPatientStatus(Integer id);
	public Patient getPatientById(int id);
}
