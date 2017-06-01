package com.kal.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.kal.web.domain.BoardFAQ;

@Repository
public interface BoardFAQMapper {
	public int addBoardFAQ(Map<String,Object> paramMap) throws Exception;
	public int allNumberOfBoardFAQs()throws Exception;
	public int findNumberOfBoardFAQs(Map<String,Object> paramMap)throws Exception;
	public List<BoardFAQ> findBoardFAQs(Map<String,Object> paramMap)throws Exception;
	public List<BoardFAQ> allFindBoardFAQs()throws Exception;
	public void updateBoardFAQ(BoardFAQ boardfaq)throws Exception;
	public void deleteBoardFAQ(Map<String,Object> paramMap)throws Exception;
	
}