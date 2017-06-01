package com.kal.web.controller;

import java.util.Locale;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.kal.web.composite.Complex;
import com.kal.web.service.ReservedSeatInsertService;
@SessionAttributes("context")
@Controller
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	/*@Autowired ReservedSeatInsertService service;*/
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Model model, HttpSession session) throws Exception {
		logger.info("HomeController - index() {}","Enter");
		session.setAttribute("context",Complex.ContextFactory.create());
		/*service.ReservedSeatInsert();*/
		return "index";
	}
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Locale locale, Model model,HttpSession session) {
		logger.info("HomeController - login() {}","Enter");
		return "common/login";
	}
	@RequestMapping(value = "/regist", method = RequestMethod.GET)
	public String regist(Locale locale, Model model,HttpSession session) {
		logger.info("HomeController - regist() {}","Enter");
		return "common/regist";
	}
	@RequestMapping("/reservation")
	public String reservation(Model model) throws Exception{
		logger.info("ReservationController - reservation() {}","Enter");
		model.addAttribute("context",Complex.ContextFactory.create());
		/*service.memberInsert();*/
		/*service.ReservedSeatInsert();*/
		return "reservation";
	}
	@RequestMapping(value = "/eventBeforeLogin", method = RequestMethod.GET)
	public String goEventBeforeLogin() {
		logger.info("HomeController - goEventBeforeLogin() {}","Enter");
		return "public:common/eventBeforeLogin";
	}
}