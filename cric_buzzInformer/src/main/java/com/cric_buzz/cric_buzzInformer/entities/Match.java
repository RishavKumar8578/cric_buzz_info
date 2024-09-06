package com.cric_buzz.cric_buzzInformer.entities;

import jakarta.persistence.*;
import org.springframework.beans.factory.config.YamlProcessor;

import java.util.Date;

@Entity
@Table(name="cric_matches")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int matchId;
    private String teamHeading;

    private String matchNumberVenue;

    private String battingTeam;

    private String battingTeamScore;

    private String bowlTeam;

    private String bowlTeamScore;

    private String liveText;

    private String matchLink;

    private String textComplete;

    @Enumerated
    private MatchStatus status;

    private Date date=new Date();

    public Match(int matchId, String teamHeading, String matchNumberVenue, String battingTeam, String battingTeamScore, String bowlTeam, String bowlTeamScore, String liveText, String matchLink, String textComplete, MatchStatus status, Date date) {
        this.matchId = matchId;
        this.teamHeading = teamHeading;
        this.matchNumberVenue = matchNumberVenue;
        this.battingTeam = battingTeam;
        this.battingTeamScore = battingTeamScore;
        this.bowlTeam = bowlTeam;
        this.bowlTeamScore = bowlTeamScore;
        this.liveText = liveText;
        this.matchLink = matchLink;
        this.textComplete = textComplete;
        this.status = status;
        this.date = date;
    }

    public Match() {

    }

    //set the match status according to textCompleted

    public void setMatchStatus(){
        if (textComplete.isBlank()){
            this.status=MatchStatus.LIVE;
        }else {
            this.status=MatchStatus.COMPLETED;
        }
    }

    public void setMatchId(int matchId) {
        this.matchId = matchId;
    }

    public void setTeamHeading(String teamHeading) {
        this.teamHeading = teamHeading;
    }

    public void setMatchNumberVenue(String matchNumberVenue) {
        this.matchNumberVenue = matchNumberVenue;
    }

    public void setBattingTeam(String battingTeam) {
        this.battingTeam = battingTeam;
    }

    public void setBattingTeamScore(String battingTeamScore) {
        this.battingTeamScore = battingTeamScore;
    }

    public void setBowlTeam(String bowlTeam) {
        this.bowlTeam = bowlTeam;
    }

    public void setBowlTeamScore(String bowlTeamScore) {
        this.bowlTeamScore = bowlTeamScore;
    }

    public void setLiveText(String liveText) {
        this.liveText = liveText;
    }

    public void setMatchLink(String matchLink) {
        this.matchLink = matchLink;
    }

    public void setTextComplete(String textComplete) {
        this.textComplete = textComplete;
    }

    public void setStatus(MatchStatus status) {
        this.status = status;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getMatchId() {

        return matchId;
    }

    public String getTeamHeading() {
        return teamHeading;
    }

    public String getMatchNumberVenue() {
        return matchNumberVenue;
    }

    public String getBattingTeam() {
        return battingTeam;
    }

    public String getBattingTeamScore() {
        return battingTeamScore;
    }

    public String getBowlTeam() {
        return bowlTeam;
    }

    public String getBowlTeamScore() {
        return bowlTeamScore;
    }

    public String getLiveText() {
        return liveText;
    }

    public String getMatchLink() {
        return matchLink;
    }

    public String getTextComplete() {
        return textComplete;
    }

    public MatchStatus getStatus() {
        return status;
    }

    public Date getDate() {
        return date;
    }


}
