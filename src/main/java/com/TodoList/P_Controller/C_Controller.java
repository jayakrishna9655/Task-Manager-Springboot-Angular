package com.TodoList.P_Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TodoList.P_Entity.C_Entity;
import com.TodoList.P_Repository.C__Repository;

@RestController
@CrossOrigin
@RequestMapping("/api/create")
public class C_Controller {

    @Autowired
    private C__Repository controllerRepository;

    @GetMapping("/hello")
    public String helloWorld() {
        return "helloworld";  // Corrected the string to "helloworld"
    }

    @PostMapping
    public C_Entity create(@RequestBody C_Entity controlEntity) {
        System.out.println("Received Request: " + controlEntity);
        return controllerRepository.save(controlEntity);
    }

    @GetMapping  // Provide a path for fetching entities
    public List<C_Entity> getAllC_Entities() {
        return controllerRepository.findAll();  // Use the injected repository, not the class
    }
    
    @PutMapping("/{id}")
    public C_Entity update(@PathVariable Long id , @RequestBody C_Entity controlEntity ) {
    	controlEntity.setId(id);
    	return controllerRepository.save(controlEntity);
    	
    }
    
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
    	controllerRepository.deleteById(id);
    }
    
    
    
}

	
	
	
	
	
	
	
	
	
	
	
	
	 

