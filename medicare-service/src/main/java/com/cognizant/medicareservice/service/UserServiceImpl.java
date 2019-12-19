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
	@Override
	public List<User> getAllUsers() {
		
	return 	userRepository.findAll();
	}
	@Override
	public void modifyStatus(int id) {
	User user=userRepository.findByUserId(id);
	user.setStatus(!user.isStatus());
	userRepository.save(user);
		
	}
@Transactional
	public List<User> getActiveUsers(boolean status) {
		
		List<User>users=userRepository.findByStatus(status);
		List<User>patients=new ArrayList<User>();
		for(User usr:users)
		{
			if(usr.getPatient()!=null)
				patients.add(usr);
		}
		return patients;
}

}
