package com.cric_buzz.cric_buzzInformer.repositories;

import com.cric_buzz.cric_buzzInformer.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface MatchRepo extends JpaRepository<Match,Integer> {

    //match ko fetch karna chahta hu
    //provide jar de--->teamHeading

    Optional<Match> findByTeamHeading(String teamHeading);
}
