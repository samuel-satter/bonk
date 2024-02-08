package com.example.benk.service;

import org.springframework.stereotype.Service;

import com.example.benk.dto.ResponseDTO;
import com.example.benk.dto.UserRequestDTO;

@Service
public interface UserService {
    ResponseDTO createAccount(UserRequestDTO userRequestDTO);
    boolean checkIfUserIsAdmin(long id);
}
