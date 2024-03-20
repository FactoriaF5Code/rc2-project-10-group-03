package com.factoriaf5.backend.persistence;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="activities")
public class Activity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private UUID id;
    private String activityName;
    private String room;
    private String dayOfTheWeek;
    private String time;
}
