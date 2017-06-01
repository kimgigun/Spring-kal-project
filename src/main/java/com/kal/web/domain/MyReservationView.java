package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class MyReservationView {
   private String scheSeq,
               scheDepartureTime,
               scheArrivalTime,
               scheDate,
               routeSeq,
               routeFrom,
               routeTo,
               userId,
               userPass,
               familyName,
               firstName,
               korName,
               phoneNo,
               birthDate,
               userGen,
               userEmail,
               userAddr,
               userPostNum,
               resSeatSeq,
               seatCode,
               resPrice;

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

public String getUserId() {
	return userId;
}

public void setUserId(String userId) {
	this.userId = userId;
}

public String getUserPass() {
	return userPass;
}

public void setUserPass(String userPass) {
	this.userPass = userPass;
}

public String getFamilyName() {
	return familyName;
}

public void setFamilyName(String familyName) {
	this.familyName = familyName;
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getKorName() {
	return korName;
}

public void setKorName(String korName) {
	this.korName = korName;
}

public String getPhoneNo() {
	return phoneNo;
}

public void setPhoneNo(String phoneNo) {
	this.phoneNo = phoneNo;
}

public String getBirthDate() {
	return birthDate;
}

public void setBirthDate(String birthDate) {
	this.birthDate = birthDate;
}

public String getUserGen() {
	return userGen;
}

public void setUserGen(String userGen) {
	this.userGen = userGen;
}

public String getUserEmail() {
	return userEmail;
}

public void setUserEmail(String userEmail) {
	this.userEmail = userEmail;
}

public String getUserAddr() {
	return userAddr;
}

public void setUserAddr(String userAddr) {
	this.userAddr = userAddr;
}

public String getUserPostNum() {
	return userPostNum;
}

public void setUserPostNum(String userPostNum) {
	this.userPostNum = userPostNum;
}

public String getResSeatSeq() {
	return resSeatSeq;
}

public void setResSeatSeq(String resSeatSeq) {
	this.resSeatSeq = resSeatSeq;
}

public String getResPrice() {
	return resPrice;
}

public void setResPrice(String resPrice) {
	this.resPrice = resPrice;
}

@Override
public String toString() {
	return "MyReservationView [scheSeq=" + scheSeq + ", scheDepartureTime=" + scheDepartureTime + ", scheArrivalTime="
			+ scheArrivalTime + ", scheDate=" + scheDate + ", routeSeq=" + routeSeq + ", routeFrom=" + routeFrom
			+ ", routeTo=" + routeTo + ", userId=" + userId + ", userPass=" + userPass + ", familyName=" + familyName
			+ ", firstName=" + firstName + ", korName=" + korName + ", phoneNo=" + phoneNo + ", birthDate=" + birthDate
			+ ", userGen=" + userGen + ", userEmail=" + userEmail + ", userAddr=" + userAddr + ", userPostNum="
			+ userPostNum + ", resSeatSeq=" + resSeatSeq + ", resPrice=" + resPrice + "]";
}
}