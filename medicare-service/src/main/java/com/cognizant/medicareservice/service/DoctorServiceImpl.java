package com.cognizant.medicareservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.medicareservice.entities.Doctor;
import com.cognizant.medicareservice.entities.MedicareServices;
import com.cognizant.medicareservice.entities.User;
import com.cognizant.medicareservice.reporities.DoctorRepository;
import com.cognizant.medicareservice.reporities.MedicareServicesRepository;
import com.cognizant.medicareservice.reporities.UserRepository;

@Service
public class DoctorServiceImpl implements DoctorService {
	@Autowired
	DoctorRepository doctorRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	MedicareServicesRepository medicareRepository;

	@Transactional
	public List<Doctor> getAllDoctors() {
		return doctorRepository.findAll();
	}

	@Transactional
	public void modifyDoctor(Doctor doctor) {
		doctorRepository.save(doctor);
	}

	@Transactional
	public void modifyDoctorStatus(Integer id) {
		Doctor doctor = doctorRepository.findById(id).get();
		User user = userRepository.findByDoctor(doctor);
		doctor=user.getDoctor();
//		doctor.setStatus(!user.isStatus());
		user.setDoctor(doctor);
		user.setStatus(!user.isStatus());
		userRepository.save(user);
	}

//	@Transactional
//	public List<Doctor> getAllDoctorsByMedicareService(String medicareService) {
//		doctorRepository.findDoctorByMedicareService()
//		return doctors;
//
//	}

	@Transactional
	public Doctor getDoctorById(int id) {
		
		return doctorRepository.findById(id).get();
	}

	@Override
	public List<Doctor> getAllDoctorsByMedicareService(String medicareService) {
		// TODO Auto-generated method stub
		return null;
	}

}
