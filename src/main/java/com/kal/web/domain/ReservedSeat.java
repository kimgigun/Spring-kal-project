package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class ReservedSeat {
	private String resSeatSeq, seatCode, scheSeq, userId, resPrice,seatClass;

	public String getSeatClass() {
		return seatClass;
	}

	public void setSeatClass(String seatClass) {
		this.seatClass = seatClass;
	}

	public String getResSeatSeq() {
		return resSeatSeq;
	}

	public void setResSeatSeq(String resSeatSeq) {
		this.resSeatSeq = resSeatSeq;
	}

	public String getSeatCode() {
		return seatCode;
	}

	public void setSeatCode(String seatCode) {
		this.seatCode = seatCode;
	}

	public String getScheSeq() {
		return scheSeq;
	}

	public void setScheSeq(String scheSeq) {
		this.scheSeq = scheSeq;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getResPrice() {
		return resPrice;
	}

	public void setResPrice(String resPrice) {
		this.resPrice = resPrice;
	}

	@Override
	public String toString() {
		return "ReservedSeat [resSeatSeq=" + resSeatSeq + ", seatCode=" + seatCode + ", scheSeq=" + scheSeq
				+ ", userId=" + userId + ", resPrice=" + resPrice + ", seatClass=" + seatClass + "]";
	}

	
	
}
