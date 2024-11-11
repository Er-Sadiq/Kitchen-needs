package com.kitchen_needs.business_handler.repository;

import com.kitchen_needs.business_handler.entity.Data;
import com.kitchen_needs.business_handler.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, ObjectId> {

    // Custom query to find a user by their username
    User findByUserName(String userName);
    List<Data> findDataByUserName(String userName);
}
