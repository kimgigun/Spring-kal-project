package com.kal.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kal.web.domain.MyReservationView;
import com.kal.web.mapper.ReservedSeatMapper;


@Service	
public class StatisticService {
	private static final Logger logger=LoggerFactory.getLogger(StatisticService.class);
	
	@Autowired ReservedSeatMapper mapper;
	
	public List<MyReservationView> statisticView(Map<String,Object> hashMap) throws Exception{
		IListService service=(paramMap)->mapper.findStatisticView(paramMap);
		@SuppressWarnings("unchecked")
		List<MyReservationView> list= (List<MyReservationView>) service.execute(hashMap);
		return list;
	}
}
