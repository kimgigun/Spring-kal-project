package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class BoardFAQ {
	private String faqSeq,userId,faqReq,faqAnswer,faqReqType;

	public String getFaqSeq() {
		return faqSeq;
	}

	public void setFaqSeq(String faqSeq) {
		this.faqSeq = faqSeq;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFaqReq() {
		return faqReq;
	}

	public void setFaqReq(String faqReq) {
		this.faqReq = faqReq;
	}

	public String getFaqAnswer() {
		return faqAnswer;
	}

	public void setFaqAnswer(String faqAnswer) {
		this.faqAnswer = faqAnswer;
	}

	public String getFaqReqType() {
		return faqReqType;
	}

	public void setFaqReqType(String faqReqType) {
		this.faqReqType = faqReqType;
	}

	@Override
	public String toString() {
		return "BoardFAQ [faqSeq=" + faqSeq + ", userId=" + userId + ", faqReq=" + faqReq + ", faqAnswer=" + faqAnswer
				+ ", faqReqType=" + faqReqType + "]";
	}
}