package com.glerison.backofficemonkey.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glerison.backofficemonkey.domain.User;
import com.glerison.backofficemonkey.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public User insert(User user) {
		return repository.save(user);
	}
}
