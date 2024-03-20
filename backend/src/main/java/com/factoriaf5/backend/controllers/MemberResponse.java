package com.factoriaf5.backend.controllers;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MemberResponse {
    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
