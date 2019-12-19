package com.cognizant.medicareservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.medicareservice.entities.MedicalTestHistory;
import com.cognizant.medicareservice.reporities.MedicalTestHistoryRepository;

@Service
public class MedicalTestHistoryService {
@Autowired
MedicalTestHistoryRepository medicalTestHistoryRepository;
	public List<MedicalTestHistory> getAll() {
		
		return medicalTestHistoryRepository.findAll();
	}

}
