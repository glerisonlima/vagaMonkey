package com.glerison.monkey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.glerison.monkey.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByToken(String token);

}
