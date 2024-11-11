package com.kitchen_needs.business_handler.repository;

import com.kitchen_needs.business_handler.entity.Data;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface DataRepository extends MongoRepository<Data,String> {

}


