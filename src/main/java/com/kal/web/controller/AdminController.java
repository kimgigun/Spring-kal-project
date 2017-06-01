package com.kal.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	  /*김기근*/
	   	
		
		@RequestMapping("/goAdmin")
		public String goAdmim(){
			logger.info("HomeController  user()  {}.", "enter");
			return "admin/adminHome";
			}
		@RequestMapping("/adminUser")
		public String adminUser(){
			logger.info("HomeController  user()  {}.", "enter");
			return "admin/adminUser";
			}
		@RequestMapping("/adminRes")
		public String adminReservation(){
			return "admin/adminReservation";
		}
		@RequestMapping("/adminSche")
		public String adminSchedule(){
			return "admin/adminSchedule";
		}
		@RequestMapping("/adminBoard")
		public String adminBoard(){
			return "admin/adminBoard";
		}
		@RequestMapping("/adminFlight")
		public String adminFlight(){
			return "admin/adminFlight";
		}
		@RequestMapping("/adminRoute")
		public String adminRoute(){
			return "admin/adminRoute";
		}
		@RequestMapping("/adminReservedSeat")
		public String adminReservedSeat(){
			return "admin/adminReservedSeat";
		}
		@RequestMapping("/adminStatCon")
		public String adminStat(){
			return "admin/adminStat";
		}
	
}
