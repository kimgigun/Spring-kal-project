package com.kal.web.mapper;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

import com.kal.web.domain.Route;
@Repository
public interface RouteMapper {
	public int addRoute(Map<String,Object>map) throws Exception;
	public int findNumberOfRoutes() throws Exception;
	public List<Route> findRouteTo();
	public Route findRoute(Map<String,Object>map) throws Exception;
	public List<Route> findRoutes(Map<String,Object>map) throws Exception;
	public List<Route> findRouteList() throws Exception;
	public int updateRoute(Map<String,Object>map) throws Exception;
	public int deleteRoute(Map<String,Object>map) throws Exception;
}