package com.employee.project.service;

import com.employee.project.entity.Employee;
import com.employee.project.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    @Autowired
    EmployeeRepository repo;

    public Employee saveEmployee(Employee employee)
    {
        return repo.save(employee);
    }

    public List<Employee> getAllEmployee()
    {
        return repo.findAll();
    }

    public void deleteEmployee(Long id)
    {
        if(!repo.existsById(id))
        {
            throw new EntityNotFoundException("Employee with ID " + id + " not found...");
        }
        repo.deleteById(id);
    }

    public Employee getEmployeeById(Long id)
    {
        return repo.findById(id).orElse(null);
    }

    public Employee updateEmployee(Long id, Employee employee)
    {
        Optional<Employee> optionalEmployee = repo.findById(id);

        if(optionalEmployee.isPresent())
        {
            Employee existingEmployee = optionalEmployee.get();

            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setName(employee.getName());
            existingEmployee.setPhone(employee.getPhone());
            existingEmployee.setDepartment(employee.getDepartment());

            return repo.save(existingEmployee);
        }
        return null;
    }

}

