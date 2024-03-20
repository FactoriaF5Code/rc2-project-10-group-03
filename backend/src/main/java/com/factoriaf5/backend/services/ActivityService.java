package com.factoriaf5.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaf5.backend.controllers.ActivityResponse;
import com.factoriaf5.backend.persistence.ActivityRepository;
import com.factoriaf5.backend.persistence.Activity;

@Service
public class ActivityService {
    
    @Autowired
    private ActivityRepository activityRepository;

    public List<ActivityResponse> getAllActivities() {
        List<ActivityResponse> activities = new ArrayList<ActivityResponse>();
        List<Activity> activitiesInDataBaseActivities = activityRepository.findAll();
        for (Activity activity : activitiesInDataBaseActivities) {
            activities.add(new ActivityResponse(activity.getActivityName(), activity.getRoom(), activity.getDayOfTheWeek(), activity.getTime()));
        }
        return activities;
    }
}
