package com.kal.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.kal.web.domain.BoardReview;
@Repository
public interface BoardReviewMapper {
	public int addBoardReview(BoardReview boardreview) throws Exception;
	public int findNumberOfBoardReviews(BoardReview boardreview) throws Exception;
	public BoardReview findBoardReview(Map<String, BoardReview>map) throws Exception;
	public List<BoardReview> findBoardReviews(Map<String, BoardReview>map) throws Exception;
	public int updateBoardReview(Map<String, BoardReview>map) throws Exception;
	public int deleteBoardReview(Map<String, BoardReview>map) throws Exception;
}