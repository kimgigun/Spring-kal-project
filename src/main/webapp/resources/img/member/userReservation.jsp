<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<link rel="stylesheet" href="${context}/resources/css/reset.css" />
<title>나의예약 - 대한항공</title>
<style>


.kal-hy-mypage-container-title{
margin:20px;
font-size: 30px;
}

.kal-hy-mypage-container {
   border: 2px solid #b53939;
   width:90%;
   margin:0 auto;
   hegith:auto;
}
.kal-hy-mypage-subwrapper{
   width:960px;
   margin:10% auto;
   height:600px;
}
.bookingMainTitle{
   width:960px;
   height:80px;
}
.bookingMainTitle>h1{
   width:960px;
   height:30px;
   font-size:35px;
   margin-top:50px;
   font-weight:bold;
}
.kal-hy-mypage-bookingSubTitle{
margin-top:30px;
   width:960px;
   height:64px;
   border-bottom:7px solid #0180a3;
}
.kal-hy-mypage-bookingSubTitle>li>p{
   width:480px;
   height:50px;
   float:left;
   text-align:center;
   font-size:26px;
   cursor:pointer;
   height:50px;
   border-top-left-radius:3px;
   border-top-right-radius:3px;
   letter-spacing:-0.5px;
   font-weight:normal;
   padding-top:18px;
}

.checkIcon{
   background-image:url(${context}/resources/img/reservation/checkIcon.png);
   display:inline-block;
   background-repeat:no-repeat;
   width:30px;
   height:18px;
   position:relative;
   right:190px;
}
.bookingBox{
   width:100%;
   height:500px;
   border:1px solid #0180a3;
}
.commonResTitle{
   margin-top:60px;
   width:960px;
   height:45px;
   text-align:center;
   font-size:26px;
   letter-spacing:-0.5px;
}
.checkBlue{
   width:50px;
   height:50px;
   display:inline-block;
   background-repeat:no-repeat;
   padding-right:150px;
   font-weight:bold;
   background-image:url(${context}/resources/img/reservation/checkBlue.png);
   position:relative;
   top:23px;
   right:160px;
}
.checkWhite{
   width:50px;
   height:50px;
   display:inline-block;
   background-repeat:no-repeat;
   background-image:url(${context}/resources/img/reservation/checkWhite.png);
   position:relative;
   top:23px;
   right:185px;
}
.commonRes{
   font-weight:bold;
   cursor:pointer;
}
.bonusRes{
   color:#666;
   cursor:pointer;
}
.tripType{
   width:900px;
   margin:70px auto 30px;
   text-align:left;
}
.tripType>img{
   padding-right:15px;
}
.tripType>span{
   padding-right:25px;
}
.tripDetails{
   width:930px;
   margin:0 auto;
}
.tripDetails>input{
   width:300px;
   height:50px;
}
.selectSeatWrapper{
   width:959px;
   height:120px;
   border-top:1px solid #0180a3;
   border-bottom:1px solid #0180a3;
   margin:35px auto;
   text-align:center;
}
#selectSeat{
   background-color:#0180a3;
   color:white;
   font-size:18px;
   margin-top:40px;
   border-radius:3px;
   cursor:pointer;
   padding:7px 26px;
   display:inline-block;
   box-shadow:0 1px 2px 1px rgba(0,0,0,0.2);
   border:1px solid #0180a3;
}
.submitWrapper{
   text-align:center;
   margin-top:75px;
}
.submitWrapper>p{
   font-size:15px;
   color:red;   
}
#submit{
background-color:#0180a3;
color:white;
font-size:18px;
margin-top:30px;
border-radius:3px;
cursor:pointer;
padding:7px 26px;
display:inline-block;
box-shadow:0 1px 2px 1px rgba(0,0,0,0.2);
border:1px solid #0180a3;
}

.kal-hy-mypage-navibar-ul{

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
.kal-hy-mypage-subwrapper-title{
font-size: 27px;
padding:3px;
display: inline-block;
}

.kal-hy-mypage-subwrapper-text{
font-size: 13px;
padding:3px;
display: inline-block;
}
.kal-hy-mypage-subwrapper-texbox{
margin:25px;
}
.kal-hy-mypage-reservation-menu{
background-color:#186686;
color:white;
text-align:center;
margin:0 auto;
width:90%;	
height:30px;

}
.kal-hy-mypage-reservation-menu ul{
font-size:0;
display:inline-block;
margin:0;
padding:0;
}
.kal-hy-mypage-reservation-menu ul li{
font-size:15px;
display:inline-block;
padding:8px 50px;
}
.kal-hy-mypage-noneActive{
   color:rgb(102,102,102);
   background-color:rgb(223,233,233);
   box-shadow:rgb(187, 187, 187)-2px -1px 2px 0px inset;
}
.kal-hy-mypage-active{
   color:white;
   background-color:rgb(1,128,163);
}


</style>
</head>
<body>
<jsp:include page="/WEB-INF/views/common/sub-gnb-before-login.jsp" flush="false"/>
<jsp:include page="/WEB-INF/views/common/main-gnb.jsp" flush="false"/>
<div class="kal-hy-mypage-container">
	<div class="kal-hy-mypage-container-title">
	  	 <h2>마이페이지</h2>
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
	   <div class="kal-hy-mypage-subwrapper">
	   <p class="kal-hy-mypage-subwrapper-title">나의 예약</p><br />
	   <span class="kal-hy-mypage-subwrapper-text"> 홈페이지에서 로그인 후 구매한 예약/항공권 및 로그인한 회원의 스카이패스 번호가 반영된 예약/항공권 목록을 보여 드립니다. </span>
	   <span class="kal-hy-mypage-subwrapper-text">고객님의 예약 및 항공권 구매 기록은 시스템 사정으로 간혹 다소 지연되어 나타나는 경우가 있으니 잠시후에 확인하여 주시면 감사하겠습니다. </span>
	      <div class="bookingMainTitle">
		      <div>
			      <ul class="kal-hy-mypage-bookingSubTitle">
			         <li >
			            <p class="kal-hy-mypage-active">예약 조회<span class="checkIcon"></span></p>
			         </li>
			         <li >
			            <p class="kal-hy-mypage-noneActive">항공권 조회</p>
			         </li>
			      </ul>
				  <div class="bookingBox">
					  <div class="kal-hy-mypage-subwrapper-texbox">
				        <span class="kal-hy-mypage-subwrapper-text">º 예약목록에서는 남은 여정 중 첫 구간만 표시해 드리며, 상태 정보는 단순 참고용이므로 정확한 예약 정보 확인을 위하여 반드시 예약번호를 클릭하여 </span>
				        <span class="kal-hy-mypage-subwrapper-text"> 조회하시기 바랍니다. 각 항목명을 클릭하여 정렬하실 수 있습니다.</span>
				       </div>
				      <div class="kal-hy-mypage-reservation-menu">
					      <ul>
					      <li><span>예약번호</span></li>
					      <li><span>이름</span></li>
					      <li><span>출발</span></li>
					      <li><span>도착</span></li>
					      <li><span>좌석</span></li>
					      <li><span>상태</span></li>
						   </ul>
				      </div>
				     
				      
			      </div>
		      </div>
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