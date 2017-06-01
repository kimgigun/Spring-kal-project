package com.kal.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kal.web.domain.MyReservationView;
import com.kal.web.service.StatisticService;


@RestController
public class StatisticController {
	private static final Logger logger = LoggerFactory.getLogger(SearchController.class);

	@Autowired StatisticService s;
	/*gigun*/
	@RequestMapping(value="/read/chart" , method=RequestMethod.POST, consumes="application/json" )
	public @ResponseBody Map<String,Object> staticView(@RequestBody Map<String,Object> map) throws Exception{
	Map<String,Object> view=new HashMap<>();
	System.out.println("리드뷰 들어옴!!!$%@#@$%#$");
	view.put("startDate",map.get("getStartDate"));
	view.put("endDate",map.get("getEndDate"));
	view.put("chartSelect",map.get("getChartSelect"));
	System.out.println("&&&&&&&&&&"+view);
	List<MyReservationView> list=s.statisticView(view);
	view.clear();
	view.put("list",list);
	logger.info("@@@@@@@@ 전달하는 data값 {}", view);
	
		return view;
	}
}
