package com.kitchen_needs.business_handler.controller;

import com.kitchen_needs.business_handler.entity.User;
import com.kitchen_needs.business_handler.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    MyService myService;

    @PostMapping
    public String createUser(@RequestBody User user){
        myService.saveUser(user);
        return "User Created"+user.getUserName();
    }

    @GetMapping
    public ResponseEntity<?> getAllUser() {
        List<User> allUsers = myService.getAllUser();

        if (allUsers != null && !allUsers.isEmpty()) {
            return new ResponseEntity<>(allUsers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No User Found", HttpStatus.OK);
        }
    }

    @GetMapping("/usernames")
    public ResponseEntity<?> getAllUseNames() {
     List<String> usernames= myService.getAllUserNames();
        if (usernames != null && !usernames.isEmpty()) {
            return new ResponseEntity<>(usernames, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No Usernames Were Found", HttpStatus.OK);
        }
    }


    @PostMapping("/{username}/{password}")
    public Boolean loginHandler(@PathVariable String username, @PathVariable String password) {
        User user = myService.findByUsername(username);

        return user != null && user.getUserName().equals(username) && user.getPassword().equals(password);

    }


}
