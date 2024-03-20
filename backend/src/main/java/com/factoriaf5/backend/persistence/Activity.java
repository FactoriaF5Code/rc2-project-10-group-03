package com.factoriaf5.backend.persistence;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Activity {
    private UUID id;
    private String activityName;
    private String room;
    private String dayOfTheWeek;
    private String time;
}
