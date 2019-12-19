package com.cognizant.medicareservice.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.medicareservice.entities.Appoinment;
import com.cognizant.medicareservice.entities.Doctor;
@Repository
public interface AppointmentRepository extends JpaRepository<Appoinment, Integer> {
	List<Appoinment> findByDoctorId(int idr);
}
