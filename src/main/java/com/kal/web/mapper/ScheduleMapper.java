package com.kal.web.mapper;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;
import com.kal.web.domain.Schedule;
import com.kal.web.domain.ScheduleView;

@Repository
public interface ScheduleMapper {
	public int addSchedule(Map<String,Object>map) throws Exception;
	public int findNumberOfSchedules() throws Exception;
	public Schedule findSchedule(Map<String,Object>map) throws Exception;
	public List<Schedule> findSchedules(Map<String,Object>map) throws Exception;
	public List<ScheduleView> findView(Map<String,Object> paramMap)throws Exception;
	public int updateSchedule(Map<String,Object>map) throws Exception;
	public int deleteSchedule(Map<String,Object>map) throws Exception;
	/* SSH Reservation*/
	public ScheduleView findScheSeq(Map<String,Object>map) throws Exception;
	
	
}