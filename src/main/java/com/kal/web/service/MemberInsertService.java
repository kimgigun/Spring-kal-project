/*package com.kal.web.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kal.web.domain.Member;
import com.kal.web.mapper.MemberMapper;

@Service
public class MemberInsertService {
	@Autowired MemberMapper memberMapper;

	
	public void memberInsert() throws Exception{
		IPostService service = (member)-> memberMapper.addMember(member);
		Member member = new Member();
		Map<String, Object>map = new HashMap<>();
		String userId = "longlife";
		String userPass = "1";
		String familyName = "hong";
		String firstName = "gildong";
		String korName = "홍길동";
		String phoneNo = "010-1111-000";
		String birthDate = "2000-01-01";
		String userGen = "M";
		String userEmail = "hong@test.com";
		String userAddr = "서울특별시 마포구 대흥동";
		String userPostNum = "12000";
		for(int i=0;i<10;i++){
			member.setUserId(userId+i);
			member.setUserPass(userPass);
			member.setFamilyName(familyName);
			member.setFirstName(firstName+i);
			member.setKorName(korName+i);
			member.setPhoneNo("010-1111-000"+i);
			member.setBirthDate(birthDate);
			member.setUserGen(userGen);
			member.setUserEmail("hong"+i+"@test.com");
			member.setUserAddr("서울특별시 마포구 대흥동"+i);
			member.setUserPostNum("1200"+i);
			map.put("member", member);
			service.execute(map);
			
		}
		for(int i=10;i<100;i++){
			member.setUserId(userId+i);
			member.setUserPass(userPass);
			member.setFamilyName(familyName);
			member.setFirstName(firstName+i);
			member.setKorName(korName+i);
			member.setPhoneNo("010-1111-00"+i);
			member.setBirthDate(birthDate);
			member.setUserGen(userGen);
			member.setUserEmail("hong"+i+"@test.com");
			member.setUserAddr("서울특별시 마포구 대흥동"+i);
			member.setUserPostNum("120"+i);
			map.clear();
			map.put("member", member);
			service.execute(map);
					
		}
		
	}
}

*/