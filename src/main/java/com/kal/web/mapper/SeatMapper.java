package com.kal.web.mapper;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;
import com.kal.web.domain.Seat;

@Repository
public interface SeatMapper {
	public int addSeat(Map<?,?> map)throws Exception;
	public int findNumberOfSeats() throws Exception;
	public Seat findSeat(Map<?,?> map) throws Exception;
	public List<Seat> findSeats(Map<?,?> map) throws Exception;
	public int deleteSeat(Map<?,?> map)throws Exception;
}