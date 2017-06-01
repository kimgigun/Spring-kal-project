<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<link rel="stylesheet" href="${context}/resources/css/reset.css" />
<link rel="stylesheet" href="${context}/resources/css/kal.css" />

</head>
<body>
	<div class="kal-after-login-sub-gnb">
         <div class="kal-after-login-sub-left-menu">
         	<button class="kal-after-login-sub-left-menu-region-select-btn">국가/언어<img src="${context}/resources/img/main/btn-regionSelect.png"/></button>
         	<span class="kal-after-login-sub-left-menu-text1"><img src="${context}/resources/img/main/korea-flag.gif">대한민국   ｜</span>
         	<span class="kal-after-login-sub-left-menu-text2">한국어</span>
         	<a class="kal-after-login-sub-left-menu-text3" href="#">English</a>
         </div>
         <div class="kal-after-login-sub-right-menu">
            <a class="kal-after-login-sub-right-menu-logout" href="#">로그아웃   ｜</a>
            <a class="kal-after-login-sub-right-menu-mypage" href="">마이페이지    ｜</a>
            <a class="kal-after-login-sub-right-menu-myregist" href="">나의 예약    ｜</a>
            <input class="kal-after-login-sub-right-menu-search" type="text" placeholder="검색"/>
            <a class="kal-after-login-sub-right-menu-search-icon" href="#"><img src="${context}/resources/img/main/icon-search.png"/></a>
         </div>
      </div>
</body>
</html>