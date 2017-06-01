package com.kal.web.controller;

import java.util.ArrayList;
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

import com.kal.web.domain.Member;
import com.kal.web.domain.MyReservationView;
import com.kal.web.domain.ReservedSeat;
import com.kal.web.domain.Route;
import com.kal.web.domain.Schedule;
import com.kal.web.domain.ScheduleView;
import com.kal.web.service.MemberService;
import com.kal.web.service.ReservedSeatService;
import com.kal.web.service.RouteService;
import com.kal.web.service.ScheduleService;

@RestController
public class ReservationController {
	private static final Logger logger = LoggerFactory.getLogger(ReservationController.class);
	@Autowired ReservedSeatService service;
	@Autowired RouteService routeService;
	@Autowired ScheduleService scheduleService;
	@Autowired MemberService memberService;
	
	@RequestMapping(value="/list/reservedSeat1",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> getReservedSeat1(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String scheSeq = (String) paramMap.get("scheSeq");
		String seatClass = (String) paramMap.get("seatClass");
		logger.info("=======scheSeq======== {}",scheSeq);
		logger.info("=======seatClass======== {}",seatClass);
		map.put("scheSeq", scheSeq);
		map.put("seatClass", seatClass);
		List<ReservedSeat> list  = service.getListReservedSeat(map);
		logger.info("=======List======== {}",list);
		map.clear();
		map.put("result", "success");
		map.put("list", list);
		map.put("count", list.size());
		return map;
	}
	@RequestMapping(value="/list/reservedSeat2",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> getReservedSeat2(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String scheSeq = (String) paramMap.get("scheSeq");
		String seatClass = (String) paramMap.get("seatClass");
		logger.info("=======scheSeq======== {}",scheSeq);
		logger.info("=======seatClass======== {}",seatClass);
		map.put("scheSeq", scheSeq);
		map.put("seatClass", seatClass);
		List<ReservedSeat> list  = service.getListReservedSeat(map);
		logger.info("=======List======== {}",list);
		map.clear();
		map.put("result", "success");
		map.put("list", list);
		map.put("count", list.size());
		return map;
	}
	@RequestMapping(value="/list/reservedSeat3",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> getReservedSeat3(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String scheSeq = (String) paramMap.get("scheSeq");
		String seatClass = (String) paramMap.get("seatClass");
		logger.info("=======scheSeq======== {}",scheSeq);
		logger.info("=======seatClass======== {}",seatClass);
		map.put("scheSeq", scheSeq);
		map.put("seatClass", seatClass);
		List<ReservedSeat> list  = service.getListReservedSeat(map);
		logger.info("=======List======== {}",list);
		map.clear();
		map.put("result", "success");
		map.put("list", list);
		map.put("count", list.size());
		return map;
	}
	@RequestMapping(value="/getRouteAndSche",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> getRouteAndScheSeq(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String routeFrom = (String) paramMap.get("routeFrom");
		String routeTo = (String) paramMap.get("routeTo");
		String scheDate = (String) paramMap.get("scheDate");
		String userId = (String) paramMap.get("userId");
		logger.info("routeFrom==========={}",routeFrom);
		logger.info("routeTo==========={}",routeTo);
		logger.info("scheDate==========={}",scheDate);
		map.put("routeFrom", routeFrom);
		map.put("routeTo", routeTo);
		map.put("scheDate", scheDate);
		ScheduleView scheduleView = new ScheduleView();
		logger.info("scheduleView==========={}",scheduleView);
		scheduleView = scheduleService.getScheduleSeq(map);
		logger.info("scheduleService.getScheduleSeq(map)==========={}",scheduleService.getScheduleSeq(map));
		map.clear();
		map.put("scheDepartureTime", scheduleView.getScheDepartureTime());
		map.put("scheArrivalTime", scheduleView.getScheArrivalTime());
		map.put("scheSeq", scheduleView.getScheSeq());
		logger.info("scheduleView.getScheSeq()========={}",scheduleView.getScheSeq());
		map.put("userId", userId);
		int result = service.existReservaedUserSeat(map);
		if(result == 0){
			map.put("result", "success");
			map.put("routeSeq", scheduleView.getRouteSeq());
		}else{
			map.put("result", "fail");
		}
		return map;
	}
	@RequestMapping(value="/getMemberInfo",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> getMemberInfo(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String userId = (String) paramMap.get("userId");
		logger.info("userId========={}",userId);
		map.put("userId", userId);
		Member member = memberService.memberInfo(map);
		logger.info("member========={}",member);
		map.clear();
		map.put("member", member);
		return map;
		}
	@RequestMapping(value="/postReservedSeat",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> postReservedSeat(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String seatCode = (String) paramMap.get("seatCode");
		String scheSeq = (String) paramMap.get("scheSeq");
		String userId = (String) paramMap.get("userId");
		String resPrice = (String) paramMap.get("resPrice");
		String seatClass = (String) paramMap.get("seatClass");
		logger.info("seatCode========={}",seatCode);
		logger.info("scheSeq========={}",scheSeq);
		logger.info("userId========={}",userId);
		logger.info("resPrice========={}",resPrice);
		logger.info("seatClass========={}",seatClass);
		map.put("seatCode", seatCode);
		map.put("scheSeq", scheSeq);
		map.put("userId", userId);
		map.put("resPrice", resPrice);
		map.put("seatClass", seatClass);
		
		int tempResult = service.existReservaedSeat(map);
		if(tempResult==0){
			int result = service.addReservedSeat(map);
			logger.info("result========={}",result);
			map.clear();
			if(result==0){
				map.put("result", "fail");
			}else{
				map.put("result", "success");
			}
		}else{
			map.put("reserved", "reservedSeat");
		}
		return map;
		}
	@RequestMapping(value="/res/getRouteList")
	private @ResponseBody Map<?,?> getRoute() throws Exception{
		Map<String, Object>map = new HashMap<>();
		List<Route> list = new ArrayList<>();
		list = routeService.getRouteList();
		map.put("list", list);
		return map;
	}
	@RequestMapping(value="/res/getMyReservation",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> getMyReservation(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		List<MyReservationView> list = new ArrayList<>();
		String userId = (String) paramMap.get("userId");
		logger.info("userId========={}",userId);
		map.put("userId", userId);
		list =  service.getMyReservation(map);
		map.put("list", list);
		return map;
	}
	@RequestMapping(value="/res/putMyReservation",
			method = RequestMethod.POST,
			consumes="application/json")
	private @ResponseBody Map<?,?> putMyReservation(@RequestBody Map<String,Object> paramMap) throws Exception{
		Map<String, Object>map = new HashMap<>();
		String resSeatSeq = (String) paramMap.get("resSeatSeq");
		String seatCode = (String) paramMap.get("seatCode");
		String seatClass = (String) paramMap.get("seatClass");
		logger.info("resSeatSeq========={}",resSeatSeq);
		logger.info("seatCode========={}",seatCode);
		logger.info("seatClass========={}",seatClass);
		map.put("resSeatSeq", resSeatSeq);
		map.put("seatCode", seatCode);
		map.put("seatClass", seatClass);
		int result = service.updateReservedSeat(map);
		map.clear();
		if(result==0){
			map.put("fail", "fail");
		}else{
			map.put("success", "success");
		}
		return map;
	}
	
	
	/*gigun*/
	@RequestMapping(value="/adminLogin",
			method=RequestMethod.POST,
			consumes="application/json")
		public @ResponseBody Map<?,?> adminLogin(@RequestBody Map<String,Object> paramMap) throws Exception {
		logger.info("어드민컨트럴로 들어옴-login() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		String code = (String) paramMap.get("code");
		String pass = (String) paramMap.get("pass");
		System.out.println("받아온code "+code);
		System.out.println("받아온pass "+pass);
		String permissionCode="1234";
		String permissionPass="1234";
		if(permissionCode.equals(code) && permissionPass.equals(pass)){
			map.put("result", "success");
		}else{
			map.put("result", "fail");
		}
		return map;
	}
	 /*gigun*/
	   @RequestMapping(value="/get/reservation", method=RequestMethod.POST,consumes="application/json")
	   public @ResponseBody Map<String,Object> getAdminReser(@RequestBody Map<String,Object> paramMap) throws Exception{
		   System.out.println("@@@@@@@@@@@@@@어플리케잉션 들어옴");
		   Map<String,Object> map=new HashMap<>();
		   map.put("reserDate", paramMap.get("reserDate"));
		   map.put("departure", paramMap.get("departure"));
		   map.put("destination", paramMap.get("destination"));
		   map.put("userId", paramMap.get("userId"));
		List<MyReservationView> list=(List<MyReservationView>) service.getAdminReser(map);
		   map.clear();
		   map.put("view", list);
		   System.out.println("######"+map);
		   return map;
	   }
	   
	   /*gigun*/
	   @RequestMapping(value="/del/resSeat", method=RequestMethod.POST,consumes="application/json")
	   public  @ResponseBody Map<String, Object> adminDelSeat(@RequestBody Map<String,Object> paramMap) throws Exception{
		   Map<String,Object> map=new HashMap<>();
		   map.put("resSeatSeq", paramMap.get("resSeatSeq"));
		   int result=service.delAdminReser(map);
		   map.clear();
		   if(result !=0){map.put("result","success");}else{map.put("result", "fail");}
		   return map;
	   }
	   
	   
	
}
