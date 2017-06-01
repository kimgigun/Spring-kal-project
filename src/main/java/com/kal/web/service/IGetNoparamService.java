package com.kal.web.service;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface
public interface IGetNoparamService {
	public Object execute() throws Exception;
}