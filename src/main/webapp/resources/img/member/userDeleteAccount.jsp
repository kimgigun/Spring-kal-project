<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<script
   src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://d1p7wdleee1q2z.cloudfront.net/post/search.min.js"></script>
<link rel="stylesheet" href="${context}/resources/css/reset.css">
<title>MY PAGE modify</title>
<head>
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
.kal-hy-userInfo-txt1{
position:relative;
left:30px;
margin-top: 20px;
font-family: 맑은고딕;
font-size: 20px;
}
.kal-hy-userInfo-txt2{
font-size: 15px;
font-family: 맑은고딕;
font-weight: 20px;
}
.kal-hy-userInfo-txt3{
position: relative;
left:30px;
font-family: 맑은고딕;
font-size: 15px;
font-weight:bold;
}
.kal-hy-userInfo-txt4{
position: relative;
left:30px; 
font-family: 맑은고딕;
font-size: 15px; 
margin: 15px;
}
.kal-hy-userInfo-txt5{
position: relative;
left:620px;
font-family: 맑은고딕;
font-size: 15px;
font-weight:bold;
}
.kal-hy-userInfo-txt6{
position: relative;
left:635px;
font-family: 맑은고딕;
font-size: 15px;
}
.kal-hy-userInfo-txt7{
position:relative;
left: 30px;
font-family: 맑은고딕;
font-size: 15px;
font-weight:bold;
}
.kal-hy-userInfo-txt8{
position: relative;
left: 50px;
font-family: 맑은고딕;
font-size: 15px;
}
strong{
font-weight: bold;
}
.kal-hy-mypage-user-withdraw-con{

width:90%;
margin:0 auto;
}

.kal-hy-mypage-user-withdraw1{
margin-top:6%;
height:auto;
}

.kal-hy-mypage-user-withdraw1 p{
padding-top:10px;
height:auto;
}


.kal-hy-mypage-user-withdraw1 h1{
font-size: 23px;
}

.kal-hy-mypage-user-withdraw2 {
margin-top:30px;
height: 40px;
}
 

.kal-hy-mypage-user-withdraw2 input{
margin:10px 10px 0 0;
font-size:10px;
display:inline-block;
font-family:맑은 고딕;
font-size:17px;
padding-left:10px;
width:286px;
height:34px;
text-align: left;
}
 
.kal-hy-mypage-user-withdraw2 input.button {
color:#186686;
width:300px;
height:100%;
border:1px solid #186686;
background:none;
background-image:url(/web/resources/img/member/select.png);
background-repeat:no-repeat;
background-position:right center;
}

.kal-hy-mypage-user-withdraw2 input.button:hover {

color:white;
height:100%;
border:1px solid #186686;
/* background:none; */
background-color:#186686;
background-image:none;
background-repeat:no-repeat;
background-position:right center;
transition:0.5s;
}
.kal-hy-mypage-user-withdraw1-sentence{
padding:20px 0;
}
.kal-hy-mypage-user-empty{
height:200px;
}


</style>
</head>
<body>
<jsp:include page="/WEB-INF/views/common/sub-gnb-before-login.jsp" flush="false"/>
<jsp:include page="/WEB-INF/views/common/main-gnb.jsp" flush="false"/>	
<div class="kal-hy-mypage-container">
	<div>
		<h1 class="kal-hy-mypage-container-title">마이페이지</h1>
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
		      <a id=""  class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원탈퇴</a>
		      <a id="grade"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 평점</a>
	      </div>

   <div class="kal-hy-mypage-user-withdraw-con">
	   <div class="kal-hy-mypage-user-withdraw1">
		   	<h1>회원 탈퇴</h1>
		   	<div class="kal-hy-mypage-user-withdraw1-sentence">
			   	<p><strong>그동안 저희 대한항공 사이트를 이용하여 주셔서 감사합니다.</strong></p>
			   	<p>사람을 향합니다. Excellence in Flight, Korean Air.</p>
		   	</div>
	   </div>
	   	
	   <div class="kal-hy-mypage-user-withdraw2">
	   <span>비밀번호 입력</span><br />
	   	<input type="password" placeholder="비밀번호"/>
	  	<input type="button" class="button" value="인터넷 회원탈퇴"/>
	   </div>
	   
   </div>
	<div class="kal-hy-mypage-user-empty">
	</div>

</div>
</body>
<jsp:include page="/WEB-INF/views/common/footer.jsp" flush="false"/>
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