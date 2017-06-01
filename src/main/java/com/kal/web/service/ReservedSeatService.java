package com.kal.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kal.web.domain.MyReservationView;
import com.kal.web.domain.ReservedSeat;
import com.kal.web.domain.Schedule;
import com.kal.web.domain.ScheduleView;
import com.kal.web.mapper.ReservedSeatMapper;
import com.kal.web.mapper.ScheduleMapper;

@Service
public class ReservedSeatService {
@Autowired ReservedSeatMapper reservedSeatMapper;
private static final Logger logger = LoggerFactory.getLogger(ReservedSeatService.class);
	@Transactional
	
	public int addReservedSeat(Map<String,Object>paramMap)throws Exception {
		IPostService service = (map) -> reservedSeatMapper.addReservedSeat(map);
		return service.execute(paramMap);
	}
	
	public ReservedSeat getReservedSeat(Map<String,Object>paramMap)throws Exception {
		IGetService service = (map) -> reservedSeatMapper.findReservedSeat(map);
		return (ReservedSeat) service.execute(paramMap);
	}
	public List<ReservedSeat> getListReservedSeat(Map<String,Object>paramMap)throws Exception {
		IListService service = (map) -> reservedSeatMapper.findReservedSeats(map);
		@SuppressWarnings("unchecked")
		List<ReservedSeat> list = (List<ReservedSeat>) service.execute(paramMap);
		logger.info("===== service.execute() list =====   {} ",service.execute(paramMap));
		return list;
	}
	public int updateReservedSeat(Map<String,Object>paramMap)throws Exception {
		IPutService service = (map) -> reservedSeatMapper.updateReservedSeat(map);
		return service.execute(paramMap);
	}
	public int  deleteReservedSeat(Map<String,Object>paramMap)throws Exception {
		IDeleteService service = (map) -> reservedSeatMapper.deleteReservedSeat(map);
		return service.execute(paramMap);
	}
	public int findNumberOfReservedSeat(Map<String,Object>paramMap)throws Exception {
		IGetService service = (map) -> reservedSeatMapper.findNumberOfReservedSeat(map);
		return (int) service.execute(paramMap);
	}
	public int allNumberOfReservedSeat()throws Exception {
		return reservedSeatMapper.allNumberOfReservedSeat();
	}
	public int existReservaedSeat(Map<String,Object>paramMap)throws Exception{
		return reservedSeatMapper.existReservaedSeat(paramMap);
	}
	public int existReservaedUserSeat(Map<String,Object>paramMap)throws Exception{
		return reservedSeatMapper.existReservaedUserSeat(paramMap);
	}
	@SuppressWarnings("unchecked")
	public List<MyReservationView> getMyReservation(Map<String,Object>paramMap)throws Exception {
		IListService service = (map) -> reservedSeatMapper.getMyReservation(map);
		return (List<MyReservationView>) service.execute(paramMap);
	}
	
	
	/*기근*/
  	@SuppressWarnings("unchecked")
	public List<MyReservationView> getAdminReser(Map<String,Object> paramMap) throws Exception{
		IGetService service=(map)->reservedSeatMapper.findReservedSeatView(map);
		return (List<MyReservationView>) service.execute(paramMap);
	}
  	/*기근*/
  	public int delAdminReser(Map<String,Object> paramMap) throws Exception{
  		IDeleteService  service=(map)->reservedSeatMapper.deleteReservedSeat(map);
		return service.execute(paramMap);
	}
}
