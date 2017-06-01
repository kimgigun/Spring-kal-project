package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Schedule {
private String scheSeq,routeSeq,scheDepartureTime,scheArrivalTime,scheDate;

public String getScheSeq() {
	return scheSeq;
}

public void setScheSeq(String scheSeq) {
	this.scheSeq = scheSeq;
}

public String getRouteSeq() {
	return routeSeq;
}

public void setRouteSeq(String routeSeq) {
	this.routeSeq = routeSeq;
}

public String getScheDepartureTime() {
	return scheDepartureTime;
}

public void setScheDepartureTime(String scheDepartureTime) {
	this.scheDepartureTime = scheDepartureTime;
}

public String getScheArrivalTime() {
	return scheArrivalTime;
}

public void setScheArrivalTime(String scheArrivalTime) {
	this.scheArrivalTime = scheArrivalTime;
}

public String getScheDate() {
	return scheDate;
}

public void setScheDate(String scheDate) {
	this.scheDate = scheDate;
}

@Override
public String toString() {
	return "Schedule [scheSeq=" + scheSeq + ", routeSeq=" + routeSeq + ", scheDepartureTime=" + scheDepartureTime
			+ ", scheArrivalTime=" + scheArrivalTime + ", scheDate=" + scheDate + "]";
}

}
