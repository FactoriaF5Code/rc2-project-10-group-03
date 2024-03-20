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
public class Member {
    private UUID id;
    private String first_name;
    private String last_name;
    private String email;
    private String password;
}
