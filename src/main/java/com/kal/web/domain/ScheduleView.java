package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class ScheduleView {
	
	private String scheSeq,scheDepartureTime,scheArrivalTime,scheDate,routeSeq,
	routeFrom,routeTo,flightSeq,flightName,flightType,seatCount;

	public String getScheSeq() {
		return scheSeq;
	}

	public void setScheSeq(String scheSeq) {
		this.scheSeq = scheSeq;
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

	public String getRouteSeq() {
		return routeSeq;
	}

	public void setRouteSeq(String routeSeq) {
		this.routeSeq = routeSeq;
	}

	public String getRouteFrom() {
		return routeFrom;
	}

	public void setRouteFrom(String routeFrom) {
		this.routeFrom = routeFrom;
	}

	public String getRouteTo() {
		return routeTo;
	}

	public void setRouteTo(String routeTo) {
		this.routeTo = routeTo;
	}

	public String getFlightSeq() {
		return flightSeq;
	}

	public void setFlightSeq(String flightSeq) {
		this.flightSeq = flightSeq;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightType() {
		return flightType;
	}

	public void setFlightType(String flightType) {
		this.flightType = flightType;
	}

	public String getSeatCount() {
		return seatCount;
	}

	public void setSeatCount(String seatCount) {
		this.seatCount = seatCount;
	}

	@Override
	public String toString() {
		return "ScheduleView [scheSeq=" + scheSeq + ", scheDepartureTime=" + scheDepartureTime + ", scheArrivalTime="
				+ scheArrivalTime + ", scheDate=" + scheDate + ", routeSeq=" + routeSeq + ", routeFrom=" + routeFrom
				+ ", routeTo=" + routeTo + ", flightSeq=" + flightSeq + ", flightName=" + flightName + ", flightType="
				+ flightType + ", seatCount=" + seatCount + "]";
	}
	
	


}