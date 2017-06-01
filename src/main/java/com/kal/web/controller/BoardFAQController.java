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

import com.kal.web.domain.BoardFAQ;
import com.kal.web.service.BoardFAQService;

@RestController
public class BoardFAQController {
	private static final Logger logger = LoggerFactory.getLogger(BoardFAQController.class);
	@Autowired BoardFAQService service;
	@RequestMapping(value="/addFAQ",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<String, Object> addBoardFAQ(@RequestBody Map<String, Object>paramMap) throws Exception{
		logger.info("BoardFAQController-addBoardFAQ() {}","ENTER");
		Map<String, Object>map = new HashMap<>();
		String id=(String) paramMap.get("id");
		String qna=(String) paramMap.get("qna");
		String qnatype=(String) paramMap.get("qnatype");
		map.put("id", id);
		map.put("qna", qna);
		map.put("qnatype", qnatype);
		int count=service.addQna(map);
		logger.info("BoardFAQController-addBoardFAQ() {}","DB 갔다옴");
		map.clear();
		if(count == 1){
			map.put("result", "success");
		}else{
			map.put("result", "fail");
		}
		return map;
	}
	@RequestMapping(value="/findFAQ",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?, ?> findFAQ(@RequestBody Map<String, Object>paramMap)throws Exception{
		logger.info("BoardFAQController-findFAQ() {}","ENTER");
		String selectType = (String) paramMap.get("selectType");
		Map<String, Object> map = new HashMap<>();
		List<BoardFAQ> list = new ArrayList<>();
		String count = "";
		if(selectType.equals("전체")){
			list = service.getAllfaqs();
			count=String.valueOf(service.getallNumberOfFAQs());
		}else{
			map.put("selectType", selectType);
			list=service.getFAQs(map);
			count=String.valueOf(service.getNumberOfFAQs(map));
		}
		map.clear();
		logger.info("디비에서 가져온 값 {}",list);
		map.put("list", list);
		map.put("count", count);
		return map;
	}
	@RequestMapping("/listQNA")
	public @ResponseBody Map<?, ?> listQNAs()throws Exception{
		logger.info("BoardFAQController-listQNA() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		List<BoardFAQ> list = service.getAllfaqs();
		String count = String.valueOf(list.size());
		logger.info("디비에서 가져온 값 {}",list);
		map.clear();
		map.put("list", list);
		map.put("count",  count);
		return map;
	}
	
}