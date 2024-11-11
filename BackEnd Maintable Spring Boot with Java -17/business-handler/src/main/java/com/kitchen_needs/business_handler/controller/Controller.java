package com.kitchen_needs.business_handler.controller;

import com.kitchen_needs.business_handler.entity.Data;
import com.kitchen_needs.business_handler.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class Controller {

    private final MyService myService;

    @Autowired
    public Controller(MyService myService) {
        this.myService = myService;
    }

    @GetMapping
    public String getHealth() {
        return "Server Is Up";
    }

    @PostMapping("/{username}")
    public ResponseEntity<String> createDataForUser(@RequestBody Data data, @PathVariable String username) {
        try {
            myService.saveDataByUser(data, username);
        } catch (Exception e) {
            return new ResponseEntity<>("Error saving the data: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("The data was saved for username "+username, HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getAllDataByUserName(@PathVariable String username) {
        List<Data> data = myService.getAllDataByUserName(username);
        if (!data.isEmpty()) {
            return new ResponseEntity<>(data, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User Not Found"+username, HttpStatus.NOT_FOUND);
        }
    }
}
