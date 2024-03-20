package com.factoriaf5.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaf5.backend.controllers.MemberResponse;
import com.factoriaf5.backend.persistence.Member;
import com.factoriaf5.backend.persistence.MemberRepository;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public List<MemberResponse> getAllMembers() {
        List<MemberResponse> members = new ArrayList<MemberResponse>();
        List<Member> membersInDataBaseMembers = memberRepository.findAll();
        for (Member member : membersInDataBaseMembers) {
            members.add(new MemberResponse(member.getId(), member.getFirstName(), member.getLastName(), member.getEmail(), member.getPassword()));
        }
        return members;
    }
}
