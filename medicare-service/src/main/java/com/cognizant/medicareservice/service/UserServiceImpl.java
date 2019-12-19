package com.cognizant.medicareservice.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.medicareservice.entities.User;
import com.cognizant.medicareservice.reporities.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;

	@Transactional
	public List<User> getAllUsers() {

		return userRepository.findAll();
	}

	@Transactional
	public void modifyStatus(int id) {
		User user = userRepository.findByUserId(id);
		user.setStatus(!user.isStatus());
		userRepository.save(user);

	}

	@Transactional
	public List<User> getActivePatients(boolean status) {

		List<User> users = userRepository.findByStatus(status);
		List<User> patients = new ArrayList<User>();
		for (User usr : users) {
			if (usr.getPatient() != null)
				patients.add(usr);
		}
		return patients;
	}

	@Transactional
	public List<User> getActiveDoctors(boolean status) {
		List<User> users = userRepository.findByStatus(status);
		List<User> doctors = new ArrayList<User>();
		for (User usr : users) {
			if (usr.getDoctor() != null)
				doctors.add(usr);
		}
		return doctors;

	}

	@Transactional
	public List<User> getActiveAgents(boolean status) {
		List<User> users = userRepository.findByStatus(status);
		List<User> agents = new ArrayList<User>();
		for (User usr : users) {
			if (usr.getAgent() != null)
				agents.add(usr);
		}
		return agents;
	}

}
