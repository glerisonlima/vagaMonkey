package com.glerison.monkey.controller;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.glerison.monkey.domain.User;
import com.glerison.monkey.services.UserService;

@RestController
@RequestMapping(value = "/registrar")
public class RegisterUserController {
	
	@Autowired
	private UserService service;

	@PostMapping(value = "/usuario")
	public ResponseEntity<User> insert(@RequestBody User user){
		user = service.insert(user);
		return ResponseEntity.ok(user);
	}
	
	@GetMapping(value = "/{token}")
	public ResponseEntity<User> buscarPorToken(@PathVariable String token) throws Exception{
		User obj = service.findByToken(token);
		return ResponseEntity.ok().body(obj);
	}
}
