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
import com.kal.web.service.RouteService;

@RestController
public class RouteController {
	private static final Logger logger = LoggerFactory.getLogger(RouteController.class);
	@Autowired RouteService service;
	@Autowired Route route;
	@RequestMapping(value="/res/route",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> getRoute(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String routeFrom = (String) paramMap.get("scheSeq");
		String routeTo = (String) paramMap.get("seatClass");
		map.put("routeFrom", routeFrom);
		map.put("routeTo", routeTo);
		Route route = new Route();
		route = service.getRoute(map);
		map.clear();
		map.put("result", "success");
		map.put("route", route);
		return map;
	}
	
	
	/*gigun*/
	@RequestMapping(value="/post/route" , method=RequestMethod.POST , consumes="application/json")
	public @ResponseBody Map<?,?> postRoute(@RequestBody Route r) throws Exception{
		Map<String,Object> map=new HashMap<>();
		map.put("flightSeq",r.getFlightSeq());
		map.put("routeFrom",r.getRouteFrom());
		map.put("routeTo",r.getRouteTo());
		int result=service.postRoute(map);
		if(result==1){map.put("result", "success");}else{map.put("result", "fail");}
		return map;
		}
	/*gigun*/
	@RequestMapping(value="/get/routes" , method=RequestMethod.POST , consumes="application/json;charset=UTF-8")
	public @ResponseBody Map<?,?> getRoutes(@RequestBody Route r) throws Exception{
		Map<String,Object> map=new HashMap<>();
		map.put("flightSeq",r.getFlightSeq());
		map.put("routeFrom",r.getRouteFrom());
		map.put("routeTo",r.getRouteTo());
		List<Route> list=service.getRoutes(map);
		map.clear();
		map.put("list", list);
 		return map;
 		}
	/*gigun*/
	@RequestMapping(value="/put/route" ,method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putRoute(@RequestBody Map<String,Object> map ) throws Exception{
		Map<String,Object> update=new HashMap<>();
		
		update.put("routeSeq",map.get("routeSeq"));
		update.put("deparTime",map.get("routeReviseDeparTime"));
		update.put("arrTime",map.get("routeReviseArrTime"));
		int result=service.putRoute(update);
		map.clear();
		if(result==1){map.put("result", "success");}else{map.put("result", "fail");}
		return map;
		}
	/*gigun*/
	@RequestMapping(value="/del/route" , method=RequestMethod.POST, consumes="application/json" )
	public @ResponseBody Map<?,?> deleteRoute(@RequestBody Map<String,Object> map) throws Exception{
		Map<String,Object> delete=new HashMap<>();
		delete.put("routeSeq", map.get("routeSeq"));
		int result = service.deleteRoute(delete);
		map.clear();
		if(result==1){map.put("sucess", "fail");}else{map.put("success", "fail");}
		return map;
	}
	/*gigun*/
	@RequestMapping(value="/get/routeFrom", method=RequestMethod.GET)
	public @ResponseBody Map<?,?> getRouteTo() throws Exception{
		System.out.println("루트받으러 들어옴");
		List<Route> list=service.getRouteTo();
		Map<String,Object> map=new HashMap<String, Object>();
		map.put("list", list);
		return map;
	}
	
}
