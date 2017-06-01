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

import com.kal.web.domain.Route;
import com.kal.web.domain.Schedule;
import com.kal.web.domain.ScheduleView;
import com.kal.web.service.IPutService;
import com.kal.web.service.ScheduleService;


@RestController
public class ScheduleController {
	private static final Logger logger = LoggerFactory.getLogger(ScheduleController.class);
	  /*김기근*/
    @Autowired ScheduleService service;
	
    @RequestMapping(value="/post/schedule", method=RequestMethod.POST , consumes="application/json")
 	public @ResponseBody Map<?,?> regitSchedule(@RequestBody Schedule s) throws Exception{ 
		
		Map<String,Object> map=new HashMap<>();
		map.put("route", s.getRouteSeq());
		map.put("arrTime", s.getScheArrivalTime());
		map.put("depTime", s.getScheDepartureTime());
		map.put("date", s.getScheDate());
		Map<?,?> regist=service.postSchedule(map);
		System.out.println("$$$$$$"+map);
		return regist;
		}
	
	@RequestMapping(value="/get/schedule",method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getScheduleView(@RequestBody ScheduleView v) throws Exception{
		Map<String,Object> map=new HashMap<>();
		map.put("date",v.getScheDate());
		map.put("routeFrom", v.getRouteFrom());
		map.put("routeTo", v.getRouteTo());
		@SuppressWarnings("unchecked")
		List<ScheduleView> view= (List<ScheduleView>) service.findView(map);
		map.clear();
		map.put("view", view);
		return map;
		};
		
		
	@RequestMapping(value="/put/schedule" ,method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putSchedule(@RequestBody Map<?,?> map ) throws Exception{
		Map<String,Object> update=new HashMap<>();
		update.put("scheNum",map.get("scheNum"));
		update.put("scheDate",map.get("scheDate"));
		update.put("departTime",map.get("scheReviseDeparTime"));
		update.put("arrtime",map.get("scheReviseArrTime"));
		Map<?,?> scheUpdate=service.putSchedule(update);
		return scheUpdate;
		}
	
	@RequestMapping(value="/del/schedule" , method=RequestMethod.POST, consumes="application/json" )
	public @ResponseBody Map<?,?> deleteSchedule(@RequestBody Map<?,?> map) throws Exception{
		Map<String,Object> delete=new HashMap<>();
		delete.put("scheNum", map.get("scheSeq"));
		Map<?,?> deleteResult = service.deleteSchedule(delete);
		return deleteResult;
	}
}