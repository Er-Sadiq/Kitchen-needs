package com.kitchen_needs.business_handler.service;

import com.kitchen_needs.business_handler.entity.Data;
import com.kitchen_needs.business_handler.entity.User;
import com.kitchen_needs.business_handler.repository.DataRepository;
import com.kitchen_needs.business_handler.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MyService {

    @Autowired
    private DataRepository dataRepository;

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User findByUsername(String un) {
        return userRepository.findByUserName(un);
    }

    public List<Data> findDataByUserName(String un) {
        return userRepository.findDataByUserName(un);
    }

    @Transactional
    public void saveDataByUser(Data data, String username) {
        User user = userRepository.findByUserName(username);
        if (user == null) {
            throw new IllegalArgumentException("User with username " + username + " not found");
        }

        // Check if data already has an ID, indicating it's likely saved
        if (data.getId() != null && dataRepository.existsById(data.getId())) {
            throw new IllegalArgumentException("Data with id " + data.getId() + " already exists");
        }

        Data savedData = dataRepository.save(data); // Save only if new
        user.getRefList().add(savedData);
        userRepository.save(user);
    }


    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public List<String> getAllUserNames() {
        // Using Java Streams for concise username extraction
        List<User> users = userRepository.findAll();
        List<String> usernames = new ArrayList<>();
        users.forEach(user -> usernames.add(user.getUserName()));
        return usernames;
    }

    public List<Data> getAllDataByUserName(String username) {
        // Find user by username
        User user = userRepository.findByUserName(username);

        // Return data associated with the user or an empty list if user doesn't exist
        return Optional.ofNullable(user)
                .map(User::getRefList)
                .orElseGet(ArrayList::new); // Return empty list if user is not found
    }
}
