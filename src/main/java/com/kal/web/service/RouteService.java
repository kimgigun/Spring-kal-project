package com.kal.web.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kal.web.domain.ReservedSeat;
import com.kal.web.domain.Route;
import com.kal.web.mapper.RouteMapper;
@Service
public class RouteService {
	@Autowired RouteMapper routeMapper;
	private static final Logger logger = LoggerFactory.getLogger(RouteService.class);
		@Transactional
		
		public Route getRoute(Map<String,Object>paramMap)throws Exception {
			IGetService service = (map) -> routeMapper.findRoute(map);
			return (Route) service.execute(paramMap);
		}
		/*기근 자동완성 루뜨*/
		@SuppressWarnings("unchecked")
		public List<Route> getRouteTo() throws Exception{
			IGetNoparamService service=()->routeMapper.findRouteTo();
			return (List<Route>) service.execute();
		}
		
		public List<Route> getRouteList() throws Exception{
			List<Route> list = new ArrayList<>();
			list = routeMapper.findRouteList();
			return list;
		}
		
		
		public int postRoute(Map<String,Object> paramMap) throws Exception{
			IPostService service=new IPostService() {
				@Override
				public int execute(Map<String,Object>map) throws Exception {
					return routeMapper.addRoute(paramMap);
				}
			};
			return service.execute((Map<String, Object>) paramMap);
			}
		
		
		@SuppressWarnings("unchecked")
		public List<Route> getRoutes(Map<?,?> hashMap) throws Exception{
			Map<String,Object> map=new HashMap<>();
			IGetService service=(paramMap)->routeMapper.findRoutes(paramMap);
			List<Route> list=(List<Route>) service.execute((Map<String, Object>) hashMap);
			return list;
			}
		
		public int putRoute(Map<String, Object> paramMap) throws Exception{
			Map<String,Object> map=new HashMap<>();
			IPutService service=(o)->routeMapper.updateRoute((Map<String, Object>) o);
			return (int) map.put("result", service.execute(paramMap));
		}
		
		public int deleteRoute(Map<String, Object> paramMap) throws Exception{
			IDeleteService service=new IDeleteService() {
				@Override
				public int execute(Map<String, Object> map) throws Exception {
					 return routeMapper.deleteRoute((Map<String, Object>) paramMap);
				}
			};
			return service.execute(paramMap);
		}
		
		
		
		
		
		
		
		
		
		
}
