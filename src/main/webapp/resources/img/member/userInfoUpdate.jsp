<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<link rel="stylesheet" href="${context}/resources/css/reset.css"/>
<title>Mypage user update</title>
<style>


.kal-hy-mypage-container-title{
margin:20px;
font-size: 30px;
}

.kal-hy-mypage-container {
   border: 2px solid #b53939;
   width:90%;
   margin:0 auto;
   
}
.kal-hy-mypage-container-title4 {
   position: relative;
   border: 2px solid #9823ce;
   height: 50%;
   width: 100%;
}

.hr {
   display: block;
   margin-left: auto;
   margin-right: auto;
   border-width: 2px;
}


.kal-hy-mypage-navibar-ul{
	width:100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #2980a0;
    border-radius: 3px;
}

.kal-hy-mypage-navibar-li {
    float: left;
}

.kal-hy-mypage-navibar-li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.kal-hy-mypage-navibar-li a:hover {
	color:black;
    background-color: #eaf0f2;
}
.kal-hy-mypage-subnavibar-div{
padding: 15px;
border: 1px solid;
border-color:#c7cacc;
border-radius: 3px;
}
.kal-hy-mypage-subnavibar-a{
text-decoration: none;
margin: 15px;
}

.kal-hy-mypage-subnavibar-a:active{
color:#186686;
}
.kal-hy-userUpdate-txt1{
position:relative;
left:30px;
margin-top: 20px;
font-family: 맑은고딕;
font-size: 20px;
}
.kal-hy-mypage-userUpdte-text2{
margin-left:5%;
width:45%;
margin-top: 20px;
font-family: 맑은고딕;
font-size: 15px;
float:left;
}

.kal-hy-mypage-userUpdte-text3{
width:40%;
margin-top: 20px;
font-family: 맑은고딕;
font-size: 15px;
float:right;
}
.kal-hy-userUpdate-kor-name{
/* position:relative;
left:30px; */

font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
}
.kal-hy-userUpdate-name{
padding-top:10px;
font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
display: inline-block;
}
.kal-hy-userUpdate-birth{
/* position:relative;
left:40%; */

font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
}
.kal-hy-userUpdate-birthdate{
display:inline-block;
padding-top:10px;
font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
}
.kal-hy-userUpdate-email{

margin-top:15px;
font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
display: inline-block;
}

.kal-hy-userUpdate-inputEmail{

 width: 400px;
 height: 25px;
}
.kal-hy-userUpdate-postAddr{
margin-top:15px;
display: inline-block;
font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
}
.kal-hy-userInfoUpdate-updateBtn{

}
.kal-hy-userUpdate-inputPostAddr{

width: 200px;
 height:25px ;
}
.kal-hy-userUpdate-phone{
margin-top:15px;
font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
display: inline-block;
}
.kal-hy-userUpdate-inputPhone{

 width: 400px;
 height: 25px;
}
.kal-hy-userUpdate-addr{
margin-top:15px;
font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
display: inline-block;
}
.kal-hy-userUpdate-inputAddr1{

 width: 500px;
 height: 25px;
 width: 400px;
 height: 25px;
}
.kal-hy-userUpdate-inputAddr2{
margin-top:10px;
 width:500px;
 height: 25px;
 width: 400px;
 height: 25px;
 display: inline-block;
}
.kal-hy-userUpdate-modifyBar{

padding: 15px 700px;
background-color: #e2ddb1
}

.kal-hy-userUpdate-hr{
width:100%;
}

.kal-hy-userUpdate-star{
color:orange;
}



.kal-hy-userUpdate-searchBtn{
border-radius: 6px;
width:80px;
height:25px;
color: white;
background-color:#0180a3;
font-family: 맑은고딕 
}
.kal-hy-userUpdate-confirmBtn{

background-color:#0180a3;
color:white;
font-size:16px;
border-radius:3px;
cursor:pointer;
padding:8px 30px;
display:inline-block;
margin:10% 1%;
box-shadow:0 1px 2px 1px rgba(0,0,0,0.2);
border:1px solid #0180a3; 
right:20px;
position: relative;
left: 37%;
font-family: 맑은고딕;
}
.kal-hy-userUpdate-cancleBtn{
background-color:#0180a3;
color:white;
font-size: 16px;
border-radius: 3px;
cursor:pointer;
display:inline-block;

padding:8px 65px;
box-shadow:0 1px 2px 1px rgba(0,0,0,0.2);
border:1px solid #0180a3; 
font-family: 맑은고딕;
position: relative;
left: 37%;

}
</style>
</head>
<body>
<jsp:include page="/WEB-INF/views/common/sub-gnb-before-login.jsp" flush="false"/>
<jsp:include page="/WEB-INF/views/common/main-gnb.jsp" flush="false"/>	

   <div class="kal-hy-mypage-container">
	   <div class="kal-hy-mypage-container-title">
	  	 <h1>마이페이지</h1>
	   </div>
         <div>
         <ul class="kal-hy-mypage-navibar-ul">
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">나의 마일리지</a></li>
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">마일리지 사용</a></li>
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">가족마일리지 합산</a></li>
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">가족마일리지 합산</a></li>
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">위시리스트</a></li>
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">나의쿠폰</a></li>
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">회원정보</a></li>
            <li role="presentation" class="kal-hy-mypage-navibar-li a"><a href="#">가족마일리지 합산</a></li>
         </ul>
      </div>
      <div class="kal-hy-mypage-subnavibar-div">
      <a id="mypageUserInfo" class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원정보 보기</a>
      <a id="mypageUserUpdate" class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원정보 수정</a>
      <a id="mypageUserChangePass" class="kal-hy-mypage-subnavibar-a" href="#">▶ 비밀번호 변경</a>
      <a id="userReservation"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 나의예약</a>
      <a id="userDeleteAccount"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원탈퇴</a>
      <a id="grade"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 평점</a>
      <a id="review"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 리뷰</a>
      <a id="userRegist"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원가입</a>
      </div>
         <div class="kal-hy-mypage-container-title4">
         <div>
         <h2 class="kal-hy-userUpdate-txt1">회원정보 수정</h2><br />
         </div>
      <div>
	      <span style="position: relative;top: 8%;left: 30px;margin-bottom:8%;font-family: 맑은고딕;font-size: 15px;">
	      영문이름은 여권상의 이름과 동일하게 입력하여 주시기 바랍니다.</span>
      </div>
      
      <div class="kal-hy-mypage-userUpdte-text2">
          <span class="kal-hy-userUpdate-kor-name">홍길동 </span><br/>
          <span class="kal-hy-userUpdate-name" >HONG/GIL DONG</span><br />
      </div>
      <div class="kal-hy-mypage-userUpdte-text3">
     	 <span class="kal-hy-userUpdate-birth">생년월일</span><br />
         <span class="kal-hy-userUpdate-birthdate" >1990-01-01</span><br />
      </div>
      <hr class="kal-hy-userUpdate-hr"/>
      <div style="float:left; width:40%; margin-left:10% ;" >
	      <span class="kal-hy-userUpdate-email">이메일 주소<span class="kal-hy-userUpdate-star">*</span></span><br />
	      <input class="kal-hy-userUpdate-inputEmail" type="text" placeholder="이메일" /><br />
	      <span class="kal-hy-userUpdate-phone">전화번호<span class="kal-hy-userUpdate-star">*</span></span><br />
	      <input class="kal-hy-userUpdate-inputPhone" type="text" placeholder="전화번호" />
      </div>
      <div style="float:right; width:40%; margin-left:10%">
          <span class="kal-hy-userUpdate-postAddr" >우편번호<span class="kal-hy-userUpdate-star">*</span></span><br />
	      <input class="kal-hy-userUpdate-searchBtn" type="button" value="검색"/>
	      <input class="kal-hy-userUpdate-inputPostAddr" type="text" placeholder="우편주소" /><br />
	      <span class="kal-hy-userUpdate-addr" >주소 <span class="kal-hy-userUpdate-star">*</span></span> <br />
          <input class="kal-hy-userUpdate-inputAddr1" type="text" placeholder="주소" /><br />
  		  <input class="kal-hy-userUpdate-inputAddr2" type="text" placeholder="주소" /><br />
      </div>
     
   	  <div> 
	   	   <span><input class="kal-hy-userUpdate-confirmBtn" type="button" value="회원정보 수정"/>
	   	   <input class="kal-hy-userUpdate-cancleBtn" type="button" value="취소" /></span> 
   	  </div>
   </div>
      </div>  
   <jsp:include page="/WEB-INF/views/common/footer.jsp" flush="false"/>  
</body>
<script>
$(function(){
	$('#mypageUserInfo').on('click',function(){
		   alert('회원정보');
		   location.href="${context}/mypageUserInfo";
	   });
	   $('#mypageUserUpdate').on('click',function(){
		   alert('회원정보 수정 ');
		   location.href="${context}/mypageUserUpdate";
	   });
	   $('#mypageUserChangePass').on('click',function(){
		   alert('회원 비밀번호 변경 ');
		   location.href="${context}/userChangePass";
	   });
	   $('#userReservation').on('click',function(){
		   alert('나의 예약');
		   location.href="${context}/userReservation";
	   });
	   
	   $('#userDeleteAccount').on('click',function(){
		   alert('회원 탈퇴');
		   location.href="${context}/userDeleteAccount";
	   });
	   
	   $('#grade').on('click',function(){
		   alert('나의 예약');
		   location.href="${context}/grade";
	   });
	   $('#review').on('click',function(){
		   alert('리뷰');
		   location.href="${context}/review";
	   });
	   $('#userRegist').on('click',function(){
		   alert('회원가입');
		   location.href="${context}/userRegist";
	   });
});
</script>
</html>