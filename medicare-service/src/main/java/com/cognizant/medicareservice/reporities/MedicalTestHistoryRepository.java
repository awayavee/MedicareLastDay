package com.cognizant.medicareservice.reporities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.medicareservice.entities.MedicalTestHistory;

@Repository
public interface MedicalTestHistoryRepository extends JpaRepository<MedicalTestHistory, Integer> { 

}
