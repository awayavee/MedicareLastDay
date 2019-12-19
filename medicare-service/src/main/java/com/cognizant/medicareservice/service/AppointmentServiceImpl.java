package com.cognizant.medicareservice.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.medicareservice.entities.Appoinment;
import com.cognizant.medicareservice.entities.Doctor;
@Service
public class AppointmentServiceImpl implements AppointmentService {
@Autowired
private AppointmentRepository appointmentRepository;
	@Transactional
	public void add(@Valid Appoinment appointment) {
	appointmentRepository.save(appointment);
		
	}
	@Transactional
	public List<Appoinment> getAll(int id) {
		return appointmentRepository.findByDoctorId(id);
		
	}
	@Transactional
	public void modifyStatus(int id) {
		Appoinment appointment=appointmentRepository.findById(id).get();
		System.out.println("Appointment "+appointment);
		appointment.setStatus(!appointment.isStatus());
		appointmentRepository.save(appointment);
		
	}

}
