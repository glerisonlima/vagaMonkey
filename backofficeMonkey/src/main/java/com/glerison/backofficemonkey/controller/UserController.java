package com.glerison.backofficemonkey.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glerison.backofficemonkey.domain.User;
import com.glerison.backofficemonkey.services.UserService;



@RestController
@RequestMapping(value = "/cadastrar")
public class UserController {
	
	@Autowired
	private UserService service;

	@PostMapping(value = "/usuario")
	public ResponseEntity<User> insert(@RequestBody User user){
		user = service.insert(user);
		return ResponseEntity.ok(user);
	}
}
