package com.kal.web.service;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kal.web.domain.ReservedSeat;
import com.kal.web.mapper.ReservedSeatMapper;

@Service
public class ReservedSeatInsertService {
	@Autowired ReservedSeatMapper reservedSeatMapper;
	public void ReservedSeatInsert() throws Exception{
		
		String seatCode = "E";
		String scheSeq = "1";
		String userId = "longlife";
		String resPrice = "400000";
		String seatClass = "3";
		ReservedSeat reservedSeat = new ReservedSeat();
		Map<String, Object>map = new HashMap<>();
		
		for(int i=1;i<5;i++){
			reservedSeat.setSeatCode(seatCode+i);
			reservedSeat.setScheSeq(scheSeq);
			reservedSeat.setUserId(userId+i);
			reservedSeat.setResPrice(resPrice);
			reservedSeat.setSeatClass(seatClass);
			reservedSeatMapper.tempAddRes(reservedSeat);
		}
		
		seatCode = "F";
		scheSeq = "1";
		userId = "longlife1";
		resPrice = "400000";
		seatClass = "3";
		for(int i=5;i<9;i++){
			reservedSeat.setSeatCode(seatCode+i);
			reservedSeat.setScheSeq(scheSeq);
			reservedSeat.setUserId(userId+i);
			reservedSeat.setResPrice(resPrice);
			reservedSeat.setSeatClass(seatClass);
			reservedSeatMapper.tempAddRes(reservedSeat);
		}
		
		seatCode = "G";
		scheSeq = "1";
		userId = "longlife2";
		resPrice = "400000";
		seatClass = "3";
		for(int i=2;i<7;i++){
			reservedSeat.setSeatCode(seatCode+i);
			reservedSeat.setScheSeq(scheSeq);
			reservedSeat.setUserId(userId+i);
			reservedSeat.setResPrice(resPrice);
			reservedSeat.setSeatClass(seatClass);
			reservedSeatMapper.tempAddRes(reservedSeat);
		}
		seatCode = "H";
		scheSeq = "1";
		userId = "longlife3";
		resPrice = "400000";
		seatClass = "3";
		for(int i=4;i<9;i++){
			reservedSeat.setSeatCode(seatCode+i);
			reservedSeat.setScheSeq(scheSeq);
			reservedSeat.setUserId(userId+i);
			reservedSeat.setResPrice(resPrice);
			reservedSeat.setSeatClass(seatClass);
			reservedSeatMapper.tempAddRes(reservedSeat);
		}
		seatCode = "I";
		scheSeq = "1";
		userId = "longlife4";
		resPrice = "400000";
		seatClass = "3";
		for(int i=1;i<7;i++){
			reservedSeat.setSeatCode(seatCode+i);
			reservedSeat.setScheSeq(scheSeq);
			reservedSeat.setUserId(userId+i);
			reservedSeat.setResPrice(resPrice);
			reservedSeat.setSeatClass(seatClass);
			reservedSeatMapper.tempAddRes(reservedSeat);
		}
		seatCode = "J";
		scheSeq = "1";
		userId = "longlife5";
		resPrice = "400000";
		seatClass = "3";
		for(int i=1;i<4;i++){
			reservedSeat.setSeatCode(seatCode+i);
			reservedSeat.setScheSeq(scheSeq);
			reservedSeat.setUserId(userId+i);
			reservedSeat.setResPrice(resPrice);
			reservedSeat.setSeatClass(seatClass);
			reservedSeatMapper.tempAddRes(reservedSeat);
		}
		seatClass = "1";
		seatCode = "A3";
		scheSeq = "1";
		userId = "ahri";
		resPrice = "400000";
		reservedSeat.setSeatCode(seatCode);
		reservedSeat.setScheSeq(scheSeq);
		reservedSeat.setUserId(userId);
		reservedSeat.setResPrice(resPrice);
		reservedSeat.setSeatClass(seatClass);
		reservedSeatMapper.tempAddRes(reservedSeat);
		
		
		seatClass = "2";
		seatCode = "D4";
		scheSeq = "1";
		userId = "jax";
		resPrice = "400000";
		reservedSeat.setSeatCode(seatCode);
		reservedSeat.setScheSeq(scheSeq);
		reservedSeat.setUserId(userId);
		reservedSeat.setResPrice(resPrice);
		reservedSeat.setSeatClass(seatClass);
		reservedSeatMapper.tempAddRes(reservedSeat);
	}
}
