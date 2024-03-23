package com.factoriaf5.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaf5.backend.services.ActivityService;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("api/activities")
public class ActivityController {
    
    @Autowired
    private ActivityService activityService;

    @GetMapping
    public List<ActivityResponse> getAllActivities() {
        return activityService.getAllActivities();
    }

}
