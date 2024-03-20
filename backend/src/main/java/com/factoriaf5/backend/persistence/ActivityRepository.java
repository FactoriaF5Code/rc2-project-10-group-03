package com.factoriaf5.backend.persistence;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, UUID>{
    
}
