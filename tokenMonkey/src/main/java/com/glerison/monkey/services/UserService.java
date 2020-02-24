package com.glerison.monkey.services;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glerison.monkey.domain.User;
import com.glerison.monkey.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public User insert(User user) {
		user.setExpiration(new Date(System.currentTimeMillis() + 600000));
		System.out.println(new Date(System.currentTimeMillis()));
		System.out.println(new Date(System.currentTimeMillis() + 600000));
		UUID token = UUID.randomUUID();
		user.setToken(token.toString());
		return repository.save(user);
	}
	
	public User findByToken(String token) throws Exception {
		User obj = repository.findByToken(token);
		if(obj == null) {
			throw new Exception("Cadastro não encontrado");
		}
		return obj;
	}
	
	
}
