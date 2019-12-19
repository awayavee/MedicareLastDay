package com.cognizant.medicareservice.service;

import java.util.List;

import com.cognizant.medicareservice.entities.User;

public interface UserService {
public List<User> getAllUsers();

public void modifyStatus(int id);

public List<User> getActiveUsers(boolean status);

}
