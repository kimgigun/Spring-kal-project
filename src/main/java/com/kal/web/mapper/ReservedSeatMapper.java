package com.kal.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.kal.web.domain.MyReservationView;
import com.kal.web.domain.ReservedSeat;
import com.kal.web.domain.ScheduleView;
@Repository
public interface ReservedSeatMapper {
	public int addReservedSeat(Map<String,Object>map) throws Exception;
	public int tempAddRes(ReservedSeat r)throws Exception;
	public int findNumberOfReservedSeat(Map<String,Object>map) throws Exception;
	public int allNumberOfReservedSeat() throws Exception;
	public ReservedSeat findReservedSeat(Map<String,Object>map) throws Exception;
	public List<ReservedSeat> findReservedSeats(Map<String,Object> map) throws Exception;
	public int updateReservedSeat(Map<String,Object>map) throws Exception;
	public int deleteReservedSeat(Map<String,Object>map) throws Exception;
	public int existReservaedSeat(Map<String,Object>map) throws Exception;
	public int existReservaedUserSeat(Map<String,Object>map) throws Exception;
	public List<ScheduleView> getMyReservation(Map<String,Object>map) throws Exception;
	public List<MyReservationView> findReservedSeatView(Map<String,Object>map);
	public List<MyReservationView> findStatisticView(Map<String,Object> paramMap);

}