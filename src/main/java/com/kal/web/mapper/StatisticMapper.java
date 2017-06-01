package com.kal.web.mapper;

import java.util.List;
import java.util.Map;

import com.kal.web.domain.MyReservationView;

public interface StatisticMapper {
	public List<MyReservationView> findStatisticView(Map<String,Object> paramMap);
}
