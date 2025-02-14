package com.TodoList.P_Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TodoList.P_Entity.C_Entity;

@Repository 
public interface C__Repository extends JpaRepository<C_Entity, Long> {

}
