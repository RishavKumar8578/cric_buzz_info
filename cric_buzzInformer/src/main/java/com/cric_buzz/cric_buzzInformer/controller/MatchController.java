package com.cric_buzz.cric_buzzInformer.controller;

import com.cric_buzz.cric_buzzInformer.entities.Match;
import com.cric_buzz.cric_buzzInformer.service.MatchService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/match")
@CrossOrigin("*")
public class MatchController {

    private final MatchService matchService;


    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }
    @GetMapping("/live")
    public ResponseEntity<List<Match>> getLiveMatches(){

        return new ResponseEntity<>(this.matchService.getLiveMatches(), OK);
    }

    // get all matches
    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches(){
        return new ResponseEntity<>(this.matchService.getAllMatches(), HttpStatus.OK);
    }

    //get match from db
//    @GetMapping("/history")
//    public ResponseEntity<List<Match>> getMatchHistory(){
//        return new ResponseEntity<>(this.matchService.getMatchHistory(), HttpStatus.OK);
//    }

    //get point table
    @GetMapping("/point-table")
    public ResponseEntity<?> getPointTable(){
        return new ResponseEntity<>(this.matchService.getPointTable(),HttpStatus.OK);
    }
}
