package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;


 @Component @Data
public class BoardReview {
	private String revSeq,revRegDate, revTitle,revContent,revAttach,
				   gradeStaff, gradeEnvi, gradeClean;
}
