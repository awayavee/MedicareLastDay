package com.cognizant.medical.reporities;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.medical.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	Role findByRoleId(int id);
}
