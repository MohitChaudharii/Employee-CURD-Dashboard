package com.employee.project.controller;

import com.employee.project.entity.Employee;
import com.employee.project.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    EmployeeService service;

    @PostMapping("/save")
    public Employee postEmployee(@RequestBody Employee employee)
    {
        System.out.println(employee);
        return service.saveEmployee(employee);
    }

    @GetMapping("/getall")
    public List<Employee> getAllEmployee()
    {
        return service.getAllEmployee();
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id)
    {
        try {
          service.deleteEmployee(id);
          return new ResponseEntity<>("Employee with Id " + id + " successfully deleted...", HttpStatus.OK);
        } catch (EntityNotFoundException e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id)
    {
        Employee employee = service.getEmployeeById(id);

        if(employee == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(employee);
    }

    @PatchMapping("update/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody Employee employee)
    {
        Employee updatedEmployee = service.updateEmployee(id, employee);

        if(updatedEmployee == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.ok(updatedEmployee);
    }
}
