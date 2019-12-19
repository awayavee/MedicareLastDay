package com.cognizant.medicareservice.service;

import java.util.List;

import javax.validation.Valid;

import com.cognizant.medicareservice.entities.Appoinment;
import com.cognizant.medicareservice.entities.Doctor;

public interface AppointmentService {

public	void add(@Valid Appoinment appointment);

public List<Appoinment> getAll(int id);

public void modifyStatus(int id);

}
