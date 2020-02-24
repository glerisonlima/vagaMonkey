package com.glerison.backofficemonkey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.glerison.backofficemonkey.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
