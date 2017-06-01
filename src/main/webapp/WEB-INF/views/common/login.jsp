<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<link rel="stylesheet" href="${context}/resources/css/reset.css" />
<link rel="stylesheet" href="${context}/resources/css/kal.css" />
<title>Login</title>
</head>
<body>
   <div class="kal-gg-loginbox">
         <div class="kal-gg-loginbox-img">
            <a class="kal-gg-mainlogo" href="javascript:void(0)"><img src="/web/resources/img/reservation/koreanAirLogo.png" alt=""></a>
         </div>
         <div class="kal-gg-loginbox-big-box">
            <input class=kal-gg-loginbox-box-id type="text" placeholder="아이디">
            <input class=kal-gg-loginbox-box-pass type="text" placeholder="비밀번호" />
            <div class="kal-gg-loginbox-middle-text">
            	<input class="remember-id" type="checkbox"></input>아이디 저장 
	            <div class="kal-gg-click-text-area">
	            	<a href="javascript:void(0)">아이디 찾기</a><span> | </span><a href="">비밀번호 찾기</a><span> | </span><a class="kal-gg-registbtn" href="javascript:void(0)">회원가입</a>
	            </div>
            </div>
            <button class="kal-gg-loginbox-login-btn" >로그인</button>
         </div>
         <div class="kal-gg-loginbox-under" >
             <span>이용약관</span> |
             <span>개인정보처리방침</span> |
             <span>청소년보호정책</span> |
             <span>고객센터</span>
         </div>
   </div>
</body>
<script>
$('.kal-gg-mainlogo').on('click',function(){
	location.href="${context}/";
});
$('.kal-gg-registbtn').on('click',function(){
	location.href="${context}/regist";
});
</script>
</html>