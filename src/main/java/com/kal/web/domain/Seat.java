package com.kal.web.domain;

import org.springframework.stereotype.Component;
import lombok.Data;

@Component @Data
public class Seat {
	private String seatCode,seatRow,seatCol;
}