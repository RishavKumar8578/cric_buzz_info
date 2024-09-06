package com.cric_buzz.cric_buzzInformer.service;

import com.cric_buzz.cric_buzzInformer.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {

    // get all matches

    List<Match> getAllMatches();

    //get live matches
    List<Match> getLiveMatches();

    //get match history from db
//    List<Match> getMatchHistory();

    //get point table
    List<List<String>> getPointTable();
}
