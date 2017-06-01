<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!doctype html>
<head>
<meta charset="UTF-8" />
<script
   src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://d1p7wdleee1q2z.cloudfront.net/post/search.min.js"></script>
<link rel="stylesheet" href="/web/resources/css/reset.css">
<title>마이페이지 비밀번호변경-대한항공</title>
<style>

.kal-hy-mypage-container-title{
margin:20px;
font-size: 30px;
}

.kal-hy-mypage-container {
   border: 2px solid #b53939;
   width:90%;
   height:600px;
   margin:0 auto;
}
.kal-hy-changepass-container-txt1{
position: relative;
top: 15px;
font-size:20px;
font-family: 맑은고딕;
font-weight: 350;
}
.kal-hy-changepass-container-txt2{
position: relative;
top: 35px;
font-size:13px;
font-family: 맑은고딕;
}

.kal-hy-changepass-txt-star{
color: orange;
}
.kal-hy-changepass-txt3{
position: relative;
top: 50px;
font-size: 11px;
font-family: 맑은고딕;
}
.kal-hy-changepass-txt4{
position: relative;
top: 60px;
font-size: 11px;
font-family: 맑은고딕
}

.kal-hy-changepass-txt5{
position: relative;
top: 70px;
font-size: 11px;
font-family: 맑은고딕;
}

.kal-hy-changepass-input1{
position: relative;
top: 55px; 
width: 400px;
height: 28px;
}
.kal-hy-changepass-input2{
position: relative;
top: 65px;
 width: 400px;
height: 28px;
}
.kal-hy-chnagepass-input3{
position: relative;
top: 75px;
width: 400px;
height: 28px;
}

.kal-hy-changepass-canclebtn{
position: relative;
left:200px;
top: 95px;
width: 70px;
height: 30px;
color: white;
background-color:#70706a;
font-family: 맑은고딕 ;
border-radius: 3px;
}
.kal-hy-changepass-canclebtn2{
position: relative;
left:220px;
top: 95px;
width: 150px;
height: 30px;
color: white;
background-color: #337a93;
font-family: 맑은고딕;
border-radius: 3px;
}

.container2 {
   position: relative;
   border: 2px solid #9823ce;
   height: 50px;
   width: 100%;
}

.container3 {
   border: 2px solid #9823ce;
   margin-top: 0;
   height: 30px;
   width: 100%;
   height: 30px;
}

.container4 {
   border: 2px solid #9823ce;
   height: 400px;
   width: 100%;
}

.hr {
   display: block;
   margin-left: auto;
   margin-right: auto;
   border-width: 2px;
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
.kal-hy-changepass-txt1{
position:relative;
left:30px;
top:20px;
font-size: 20px;
}
.kal-hy-changepass-txt2{
position: relative;
left:30px;
top: 30px;
font-size: 16px;
}
.kal-hy-changepass-txt3{
position: relative;
top: 25px;
font-size: 15px;
}
.kal-hy-changepass-txt4{
position: relative;
top: 35px;
}
.kal-hy-changepass-txt5{
position: relative;
top: 45px;
font-size: 15px;
}
.kal-hy-changepass-input1{
position: relative;
top: 30px;
}
.kal-hy-changepass-input2{
 position: relative;
 top: 40px;
}
.kal-hy-changepass-input3{
position: relative;
top: 50px;
}
.kal-hy-changepass-box{
margin-top:10px;
position: relative;
left:30px;
top:20px; 
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
      <a class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원정보 보기</a>
      <a id="mypageUserUpdate" class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원정보 수정</a>
      <a id="mypageUserChangePass" class="kal-hy-mypage-subnavibar-a" href="#">▶ 비밀번호 변경</a>
      <a id="userReservation"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 나의예약</a>
      <a id="userDeleteAccount"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원탈퇴</a>
      <a id="grade"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 평점</a>
      <a id="review"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 리뷰</a>
      <a id="userRegist"  class="kal-hy-mypage-subnavibar-a" href="#">▶ 회원가입</a>
      </div>
  
      <div>
        <span class="kal-hy-changepass-txt1">비밀번호 변경</span>
      </div>
	<div>
        <span class="kal-hy-changepass-txt2">새로 사용할 비밀번호를 입력하여 주십시오.</span>
	</div>
<div class="kal-hy-changepass-box">
	<span class="kal-hy-changepass-txt3">현재 비밀번호<font class="kal-hy-changepass-txt-star">*</font></span>
	<br />
	<input class="kal-hy-changepass-input1" type="text" placeholder="현재 비밀번호"/>
	<br />
	<span class="kal-hy-changepass-conatianer-txt4" >새로운 비밀번호 <font class="kal-hy-changepass-txt-star">*</font></span>
	<br />
	<input class="kal-hy-changepass-input2" type="text" placeholder="새로운 비밀번호"/>
	<br />
	<span class="kal-hy-changepass-txt5" >새 비밀번호 확인 <font class="kal-hy-changepass-txt-star">*</font></span>
	<br />
	<input class="kal-hy-changepass-input3" type="text" placeholder="새 비밀번호 확인"/>
	<br />
</div>

	
	<input class="kal-hy-changepass-canclebtn" type="button" value="취소"/>
	<input class="kal-hy-changepass-canclebtn2" type="button" value="비밀번호 변경"/>
   </div>
<jsp:include page="/WEB-INF/views/common/footer.jsp" flush="false"/>  
</body>
<script>
$(function(){
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