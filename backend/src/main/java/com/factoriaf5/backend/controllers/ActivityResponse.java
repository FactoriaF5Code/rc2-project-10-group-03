package com.factoriaf5.backend.controllers;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ActivityResponse {
    private String activityName;
    private String room;
    private String dayOfTheWeek;
    private String time; 
}
