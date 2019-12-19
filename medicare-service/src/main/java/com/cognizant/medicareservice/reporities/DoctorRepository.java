package com.cognizant.medicareservice.reporities;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.medicareservice.entities.Doctor;
import com.cognizant.medicareservice.entities.MedicareServices;
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
List<Doctor> findByMedicareServices(MedicareServices ms);
}
