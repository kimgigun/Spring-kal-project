<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
<style type="text/css">

.kal-hy-mypage-container {
   border: 2px solid #b53939;
   width:90%;
   margin:0 auto;
   hegith:auto;
}
.kal-hy-mypage-container-title{
margin:20px;
font-size: 30px;
}


.kal-hy-mypage-container-postion{
position: relative;
left:20px;
}
.kal-hy-mypage-container4 {
   border: 2px solid #9823ce;
   height: 400px;
   width: 100%;
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
.kal-hy-userInfo-subTitle{
display:inline-block;
margin-top:10px;
font-size: 2;
}
.kal-hy-userInfo-div{
padding:10px;
background-color: #e8e4dc
}

.kal-hy-userInfo-detail{
padding:10px;
position: relative;
left:30px; 
top: 35px;
}
.kal-hy-userInfo-input-text{

width: 508px;
height: 29px;
}
.kal-hy-userInfo-star{
color: orange;
}

.kal-hy-userInfo-birthBox-position{
position: relative;
left: 0px;
}
.kal-hy-userInfo-birthBox{
width: 150px; 
height: 29px;
}
.kal-hy-userInfo-loginBox{
position: relative;
top: 100px;
}
.kal-hy-userInfo-loginBox-font{
padding:10px;
background-color: #e8e4dc;
}
.kal-hy-userinfo-register-btn{
position:relative;
left:18%;
top:50px;
background-color: #0180a3;
padding:10px 20px;
color:white;
border:none;
cursor:pointer;
font-size:18px;
border-radius: 4px;
box-shadow:0 1px 2px 1px rgba(0,0,0,0.2);

}

.kal-hy-mypage-user-empty{
height:200px;
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

</style>
</head>
<body>
<jsp:include page="/WEB-INF/views/common/sub-gnb-before-login.jsp" flush="false"/>
<jsp:include page="/WEB-INF/views/common/main-gnb.jsp" flush="false"/>	

<div class="kal-hy-mypage-container">
	<div class="kal-hy-mypage-container-title">
 	 <h1>마이페이지</h1>
    </div>
		<span><font color="orange">*</font><font>영문이름은 여권상의 이름과 동일하게 입력하여 주시기 바랍니다.</font></span>

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
      <div >
         <h2 class="kal-hy-userInfo-txt1">회원정보 보기</h2><br />
         <div style="position:relative;left: 30px; ">
          <span class="kal-hy-userInfo-txt2">홍길동 </span><br />
          <span class="kal-hy-userInfo-txt2">HONG/GIL DONG</span>
         </div>


<div><p class="kal-hy-userInfo-div">고객 정보</p></div>
<div class="kal-hy-userInfo-detail">
<span><font class="kal-hy-userInfo-subTitle">한글 성<font class="kal-hy-userInfo-star">*</font></font></span><br />
<span><input class="kal-hy-userInfo-input-text" type="text" /></span><br />
<span><font class="kal-hy-userInfo-subTitle">한글 이름<font class="kal-hy-userInfo-star">*</font></font></span><br />
<input class="kal-hy-userInfo-input-text" type="text" /><br />
<span><font class="kal-hy-userInfo-subTitle">영문 성<font class="kal-hy-userInfo-star">*</font></font></span><br />
<input class="kal-hy-userInfo-input-text"  type="text" /><br />
<span><font class="kal-hy-userInfo-subTitle">영문 이름<font class="kal-hy-userInfo-star">*</font></font></span><br />
<input class="kal-hy-userInfo-input-text"  type="text" /><br />
<span><font class="kal-hy-userInfo-subTitle">생년월일<font class="kal-hy-userInfo-star">*</font></font></span><br />
<span class="kal-hy-userInfo-birthBox-position"><input class="kal-hy-userInfo-birthBox"  type="text" placeholder="년" /></span>
<span class="kal-hy-userInfo-birthBox-position"><input class="kal-hy-userInfo-birthBox"  type="text" placeholder="월" /></span>
<span class="kal-hy-userInfo-birthBox-position"><input class="kal-hy-userInfo-birthBox"  type="text" placeholder="일" /></span><br />
<span><font class="kal-hy-userInfo-subTitle">성별<font style="color: orange">*</font></font></span><br />
<span><input type="radio" name="gen" value="M" checked="checked"/>남</span>
<span><input type="radio" name="gen" value="F"/>여</span><br />
<span><font class="kal-hy-userInfo-subTitle">전화번호</font><font color="orange">*</font></span><br />
<input class="kal-hy-userInfo-input-text" type="text" /><br />
<span><font class="kal-hy-userInfo-subTitle">주소</font><font color="orange">*</font></span><br />
<input class="kal-hy-userInfo-input-text" type="text" /><br />
</div>
<div class="kal-hy-userInfo-loginBox"><p class="kal-hy-userInfo-loginBox-font">로그인 정보</p></div>
<div class="kal-hy-userInfo-loginBox">
<span><button class="kal-hy-userinfo-register-btn">회원가입</button></span>
</div>
<div class="kal-hy-mypage-user-empty">
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