package com.kal.web.mapper;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

import com.kal.web.domain.Flight;
@Repository
public interface FlightMapper {
	public int addFlight(Flight flight) throws Exception;
	public int findNumberOfFlights() throws Exception;
	public Flight findFlight(Map<?,?>map) throws Exception;
	public List<Flight> findFlights(Map<?,?>map) throws Exception; 
	public int updateFlight(Map<?,?>map) throws Exception;
	public int deleteFlight(Map<?,?>map) throws Exception;
}