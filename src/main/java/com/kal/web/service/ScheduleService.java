package com.kal.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kal.web.domain.Route;
import com.kal.web.domain.Schedule;
import com.kal.web.domain.ScheduleView;
import com.kal.web.mapper.ScheduleMapper;

@Service
public class ScheduleService {
	private static final org.slf4j.Logger logger=LoggerFactory.getLogger(ScheduleService.class);
	
	@Autowired ScheduleMapper scheduleMapper;
	

	public List<?> findView(Map<String, Object> paramMap) throws Exception {
		IListService service=(hashMap)->scheduleMapper.findView(hashMap);
		@SuppressWarnings("unchecked")
		List<ScheduleView> list=(List<ScheduleView>) service.execute(paramMap);
		logger.info("@@@@@@@@@@ {} ",list.toString());
		return list;
	}
	
	public Map<?, ?> putSchedule(Map<String, Object> paramMap) throws Exception{
		Map<String,Object> putMap=new HashMap<>();
		IPutService service=(map)->scheduleMapper.updateSchedule((Map<String, Object>) map);
		putMap.put("result", service.execute(paramMap));
		return putMap;
	}
	
	public Map<String, Object> deleteSchedule(Map<String, Object> paramMap) throws Exception{
		Map<String,Object> map=new HashMap<>();
		IDeleteService service=new IDeleteService() {
			@Override
			public int execute(Map<String,Object> map) throws Exception {
				 return scheduleMapper.deleteSchedule((Map<String, Object>) paramMap);
			}
		};
		map.put("result",(service.execute(paramMap)==1)?"success":"fail");
		return map;
	}
	
	
	public Map<?,?> postSchedule(Map<String, Object> paramMap)throws Exception {
		logger.info("=====object는 무엇을 물고 왓는가=====  {}",paramMap);
		Map<String,Object> postMap=new HashMap<>();
		IPostService service=(map)->scheduleMapper.addSchedule(map);
		postMap.put("result", (service.execute(paramMap)==1)?"success":"fail");
		logger.info("==디비값  ==  {}",postMap.get("result"));
		return postMap;
	}


	public Schedule getSchedule(Map<String,Object>paramMap)throws Exception {
		IGetService service = (map) -> scheduleMapper.findSchedule(map);
		return (Schedule) service.execute(paramMap);
	}
	
	
	
	/* SSH 스케쥴 뷰  */
	public ScheduleView getScheduleSeq(Map<String,Object>paramMap)throws Exception {
		IGetService service = (map) -> scheduleMapper.findScheSeq(map);
		return (ScheduleView) service.execute(paramMap);
	}
}