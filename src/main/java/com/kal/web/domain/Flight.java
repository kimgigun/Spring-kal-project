package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Flight {
	private String flightSeq,flightName,flightType,seatCount;

}
