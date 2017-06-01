var main = main || {};
main.context=(function(){
	var onCreate = function(context){
		$.getScript(context+'/resources/js/domain.session.js',function(){
			$.extend(new Session(context));
			setContentView();
		});
	};
	var setContentView = function(){
		main.member.onCreate();
		main.admin.onCreate();
	};
	return {onCreate : onCreate};
})();

/*
========main-member============
@AUTHOR : Hong jihoo
@CREATE DATE : 2017-05-17
@UPDATE DATE : 2017-05-19
@DESC :
===============================
*/

main.member=(function(){
   var memberService,memberView,reservationView,reservationService,
   loginedId,loginedKorName,loginedEngName,
   loginedEmail,loginedAddr,loginedPhoneNo,loginedPassPortNo;
   var afterLoginSubGnbOnclick=function(){
	   memberView=$.javascript()+'/view.member.js';
	   $.getScript(memberView);
	   $('#wrapper').append(subGnbAfterLogin());
	   $('.kal-after-login-sub-right-menu-mypage').on('click',function(){
		   $('#wrapper').empty();
		   mypageUserInfoPage();
	   });
	   $('.kal-after-login-sub-right-menu-logout').on('click',function(){
		   alert('로그아웃 됩니다.');
		   $('#wrapper').empty();
		   mainPageBeforeLogin();
		   main.admin.onCreate();
		   loginedId = $.removeCookie('loginedId');
		   loginedKorName = $.removeCookie('loginedKorName');
		   loginedEngName = $.removeCookie('loginedEngName');
		   loginedEmail = $.removeCookie('loginedEmail');
		   loginedAddr = $.removeCookie('loginedAddr');
		   loginedPhoneNo = $.removeCookie('loginedPhoneNo');
		   loginedPassPortNo = $.removeCookie('loginedPassPortNo');
	   });
	   $('.kal-after-login-sub-right-menu-myregist').on('click',function(){
		   mypageUserReservationPage();
	   });
   };
   var afterLoginMainGnbOnclick=function(){
	   memberView=$.javascript()+'/view.member.js';
	   $.getScript(memberView);
	   $('#wrapper').append(afterLoginMainGnb());
	   $('.after-login-kal-main-right-menu-reservation-btn').on('click',function(){
		   main.reservation.onCreate();
	   });
	   
	   $('.after-kal-service-btn-content-question').on('click',function(){
		   main.boardQna.addQna();
	   });
	   
	   $('.after-login-kal-service-btn-content-faq').on('click',function(){
		   main.boardQna.faq();
	   });
	   
	   $('.kal-main-logo').on('click',function(){
		   mainPageAfterLogin();
	   });
   };
   var mypageGnbOnclick=function(){
	   $('.kal-jh-mypage-subwrapper').append(memberGnb());
	   
	   $('.kal-jh-member-navi-memberinfobtn').on('click',function(){
		   alert('회원정보 보기 버튼 클릭');
		   $('#wrapper').empty();
		   mypageUserInfoPage();
	   });
	   $('.kal-jh-member-navi-membermodifybtn').on('click',function(){
		   alert('회원정보 수정 버튼 클릭');
		   mypageUserUpdatePage();
	   });
	   $('.kal-jh-member-navi-memberreservebtn').on('click',function(){
		   alert('나의예약 보기 버튼 클릭');
		   mypageUserReservationPage();
	   });
	   $('.kal-jh-member-navi-memberquitbtn').on('click',function(){
		   alert('회원정보 탈퇴 버튼 클릭');
		   mypageUserDeletePage();
	   });
	   $('.kal-jh-member-navi-memberreserveupdatebtn').on('click',function(){
		   alert('예약 변경 버튼 클릭');
		   mypageReserUpdatePage();
	   });
	   $('.kal-jh-member-navi-memberreservedeletebtn').on('click',function(){
		   alert('예약 취소 버튼 클릭');
		   mypageReserDeletePage();
	   });
   };
   var onCreate = function(){
	  memberService=$.javascript()+'/service.member.js';
	  memberView=$.javascript()+'/view.member.js';
	  reservationView = $.javascript()+'/view.reservation.js';
	  reservationService = $.javascript()+'/service.reservation.js';
	  setContentView();
   };
   var setContentView = function(){
	   $.when(
			   $.getScript(memberService),
			   $.getScript(memberView),
			   $.Deferred(function( deferred ){
	                 $( deferred.resolve );
	             })
	         ).done(function(){
	        	 mainPageBeforeLogin();
	         });
   };
   var mainPageBeforeLogin=function(){
	    $('#wrapper').empty();
	    $('#wrapper').append(subGnbBeforeLogin());
		$('#wrapper').append(beforeLoginMainGnb());
		$('#wrapper').append(mainBackground());
		window.setInterval(function(){
			var next = ($('.open').index()+1)%('.imgcount').length;
			$('.open').removeClass('open').fadeOut(1500);
			$('.imgcount').eq(next).addClass('open').fadeIn(1000);
		},2500);
		$('#wrapper').append(mainFooter());
		$('.kal-main-right-menu-reservation-btn').on('click',function(){
			alert('로그인이 필요한 기능입니다.');
		});
		$('.kal-service-btn-content-question').on('click',function(){
			alert('로그인이 필요한 기능입니다.');
		});
		$('.kal-service-btn-content-faq').on('click',function(){
			alert('로그인이 필요한 기능입니다.');
		});
		$('.kal-service-btn-content-review').on('click',function(){
			alert('로그인이 필요한 기능입니다.');   
		});
		$('.kal-before-login-sub-right-menu-regist').on('click',function(){
			alert('회원가입 버튼 클릭');
			goRegist();
		});
		goLogin();
		mainBackgroundEventBtnBeforeLogin();
   };
   var mainPageAfterLogin=function(){
	   
	    $('#wrapper').empty();
	    $('#wrapper').append(afterLoginSubGnbOnclick());
		$('#wrapper').append(afterLoginMainGnbOnclick());
		$('#wrapper').append(mainBackground());
		window.setInterval(function(){
			var next = ($('.open').index()+1)%('.imgcount').length;
			$('.open').removeClass('open').fadeOut(1500);
			$('.imgcount').eq(next).addClass('open').fadeIn(1000);
		},2500);
		$('#wrapper').append(mainFooter());
		$('.kal-main-event-wrapper').hide();
   };
   var mainBackgroundEventBtnBeforeLogin = function(){
	   $('.kal-event-text').on('click',function(){
		   alert('이벤트 버튼 클릭');
		   location.href=$.context()+"/eventBeforeLogin";
	   });
   };
   var mypageUserInfoPage = function(){
	   $('#wrapper').empty();
	   $('#wrapper').append(afterLoginSubGnbOnclick());
	   $('#wrapper').append(afterLoginMainGnbOnclick());
	   $('#wrapper').append(mypageHeader());
	   $('.kal-jh-mypage-subwrapper').append(mypageGnbOnclick);
	   $('.kal-jh-mypage-subwrapper').append(mypageUserInfo(loginedKorName,loginedEngName,
			   loginedEmail,loginedAddr,loginedPhoneNo,loginedPassPortNo));
	   $('#wrapper').append(mainFooter());
   };
   var mypageUserUpdatePage = function(){
	   $('#wrapper').empty();
	   $('#wrapper').append(afterLoginSubGnbOnclick());
	   $('#wrapper').append(afterLoginMainGnbOnclick());
	   $('#wrapper').append(mypageHeader());
	   $('.kal-jh-mypage-subwrapper').append(mypageGnbOnclick);
	   $('.kal-jh-mypage-subwrapper').append(mypageUserUpdate(loginedKorName,loginedEngName,loginedId));
	   $('#wrapper').append(mainFooter());
	   userUpdate();
   };
   var mypageUserDeletePage = function(){
	   $('#wrapper').empty();
	   $('#wrapper').append(afterLoginSubGnbOnclick());
	   $('#wrapper').append(afterLoginMainGnbOnclick());
	   $('#wrapper').append(mypageHeader());
	   $('.kal-jh-mypage-subwrapper').append(mypageGnbOnclick);
	   $('.kal-jh-mypage-subwrapper').append(mypageUserDelete());
	   $('#wrapper').append(mainFooter());
	   userDelete();
   };
   var mypageUserReservationPage = function(){
	   $.when( $.getScript(reservationService),
			   $.getScript(reservationView),
			   $.Deferred(function( deferred ){
	                 $( deferred.resolve ); })
	         ).done(function(){
	   $('#wrapper').empty();
	   $('#wrapper').append(afterLoginSubGnbOnclick());
	   $('#wrapper').append(afterLoginMainGnbOnclick());
	   $('#wrapper').append(mypageHeader());
	   $('.kal-jh-mypage-subwrapper').append(mypageGnbOnclick);
	   $('.kal-jh-mypage-subwrapper').append(mypageUserReservation(loginedKorName,loginedEngName));
			var userId = loginedId;
			$.ajax({
				url : $.context()+'/res/getMyReservation',
				method : 'POST',
				data : JSON.stringify({
					userId : userId
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					 $.each(data.list,function(i,item){
						   $('.kal-jh-mypage-userReservation-content-wrapper2').append('<div class="kal-jh-mypage-userReservation-txt2">'
								   														+ '<p>Itinerary</p>'
								   														+ '<span class="kal-jh-mypage-userReservation-sche-date1"><span class="kal-jh-mypage-userReservation-sche-date1-text">출발일</span>'+item.scheDate+'</span></br>'
								   														+ '<span class="kal-jh-mypage-userReservation-departure1"><span class="kal-jh-mypage-userReservation-departure1-text">출발편</span>'+item.routeFrom+'</span>'
								   														+ '<span class="kal-jh-mypage-userReservation-arrival1"><span class="kal-jh-mypage-userReservation-arrival1-text">도착편</span>'+item.routeTo+'</span></br>'
								   														+ '<span class="kal-jh-mypage-userReservation-departure-time1"><span class="kal-jh-mypage-userReservation-departure-time1-text">출발 시간</span>'+item.scheDepartureTime+'</span>'
								   														+ '<span class="kal-jh-mypage-userReservation-arrival-time1"><span class="kal-jh-mypage-userReservation-arrival-time1-text">도착 시간</span>'+item.scheArrivalTime+'</span>'
								   														+ '<span class="kal-jh-mypage-userReservation-arrival-time1"><span class="kal-jh-mypage-userReservation-arrival-time1-text">도착 시간</span>'+item.scheArrivalTime+'</span>'
								   														+ '<button id="my-reservationBtn'+i+'" class="kal-jh-mypage-userReservation-seatBtn">좌석보기</button>'
								   														+ '</div>');
						   $('#my-reservationBtn'+i+'').on('click',function(){
							    var scheSeq = item.scheSeq;
							    var mySeatCode = item.seatCode;
								var reservationSeatPage = createReservationSeatPage();
								$.magnificPopup.open({
									closeBtnInside:true,
									closeOnContentClick:false,
									alignTop: true,
									fixedBgPos:true,
									fixedContentPos:true,
									items:{src:
										reservationSeatPage
									},
									midClick:true,
									overflow: 'scroll',
									removalDelay:'0',
									type:'inline'});
								first_seat(2,4);
								second_seat(2,7);
								third_seat(6,9);
								var seatClassTemp = '1';
								$.ajax({
									url : $.context()+'/list/reservedSeat1',
									method : 'POST',
									data : JSON.stringify({
										 scheSeq : scheSeq,
										 seatClass : seatClassTemp 
									}),
									dataType : 'json',
									contentType : 'application/json',
									success : function(data){
										var seatList = data.list;
										fristReservedSeat(seatList);
										myReservationSeat(mySeatCode);
									},
									error : function(xhr, status,msg){
										alert('ERROR'+msg);
									}
								});
								var seatClassTemp = '2';
								$.ajax({
									url: $.context()+'/list/reservedSeat2',
									method: 'POST',
									data : JSON.stringify({
										 scheSeq : scheSeq,
										 seatClass : seatClassTemp 
									}),
									dataType : 'json',
									contentType : 'application/json',
									success : function(data){
										var seatList = data.list;
										secondReservedSeat(seatList);
										myReservationSeat(mySeatCode);
									},
									error : function(xhr, status,msg){
										alert('ERROR'+msg);
									}
								});
								var seatClassTemp = '3';
								$.ajax({
									url: $.context()+'/list/reservedSeat3',
									method: 'POST',
									data : JSON.stringify({
										 scheSeq : scheSeq,
										 seatClass : seatClassTemp 
									}),
									dataType : 'json',
									contentType : 'application/json',
									success : function(data){
										var seatList = data.list;
										thirdReservedSeat(seatList);
										myReservationSeat(mySeatCode);
									},
									error : function(xhr, status,msg){
										alert('ERROR'+msg);
									}
								});
								var select_seat = $('#select_seat');	
								select_seat.html(userId+'님께서 예약하신 좌석은 '+mySeatCode+' 입니다.');
								alert(userId+'님께서 예약하신 좌석은 '+mySeatCode+' 입니다.');
								$('.selected-seat-btn').on('click',function(){
									$.magnificPopup.close();
								});
								$('.cancle-seat-btn').on('click',function(){
									$.magnificPopup.close();
								});
						   });
					   });
				},
				error : function(xhr, status,msg){
					alert('error'+msg);
				}
			});
			$('#wrapper').append(mainFooter());
		});
   };
   var mypageReserUpdatePage = function(){
	   $.when( $.getScript(reservationService),
			   $.getScript(reservationView),
			   $.Deferred(function( deferred ){
	                 $( deferred.resolve ); })
	         ).done(function(){
	   $('#wrapper').empty();
	   $('#wrapper').append(afterLoginSubGnbOnclick());
	   $('#wrapper').append(afterLoginMainGnbOnclick());
	   $('#wrapper').append(mypageHeader());
	   $('.kal-jh-mypage-subwrapper').append(mypageGnbOnclick);
	   $('.kal-jh-mypage-subwrapper').append(mypageReservationUpdate(loginedKorName,loginedEngName));
	   var userId = loginedId;
	   	   $.ajax({
			url : $.context()+'/res/getMyReservation',
			method : 'POST',
			data : JSON.stringify({
				userId : userId
			}),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				 $.each(data.list,function(i,item){
					   $('.kal-jh-mypage-userReservation-content-wrapper2').append('<div class="kal-jh-mypage-userReservation-txt2">'
							   														+ '<p>Itinerary</p>'
							   														+ '<span class="kal-jh-mypage-userReservation-sche-date1"><span class="kal-jh-mypage-userReservation-sche-date1-text">출발일</span>'+item.scheDate+'</span></br>'
							   														+ '<span class="kal-jh-mypage-userReservation-departure1"><span class="kal-jh-mypage-userReservation-departure1-text">출발편</span>'+item.routeFrom+'</span>'
							   														+ '<span class="kal-jh-mypage-userReservation-arrival1"><span class="kal-jh-mypage-userReservation-arrival1-text">도착편</span>'+item.routeTo+'</span></br>'
							   														+ '<span class="kal-jh-mypage-userReservation-departure-time1"><span class="kal-jh-mypage-userReservation-departure-time1-text">출발 시간</span>'+item.scheDepartureTime+'</span>'
							   														+ '<span class="kal-jh-mypage-userReservation-arrival-time1"><span class="kal-jh-mypage-userReservation-arrival-time1-text">도착 시간</span>'+item.scheArrivalTime+'</span>'
							   														+ '<span class="kal-jh-mypage-userReservation-arrival-time1"><span class="kal-jh-mypage-userReservation-arrival-time1-text">도착 시간</span>'+item.scheArrivalTime+'</span>'
							   														+ '<button id="my-reservationBtn'+i+'" class="kal-jh-mypage-userReservation-seatBtn">좌석변경</button>'
							   														+ '</div>');
					   $('#my-reservationBtn'+i+'').on('click',function(){
						    var scheSeq = item.scheSeq;
						    var mySeatCode = item.seatCode;
						    var resSeatSeq = item.resSeatSeq;
							var reservationSeatPage = createReservationSeatPage();
							$.magnificPopup.open({
								closeBtnInside:true,
								closeOnContentClick:false,
								alignTop: true,
								fixedBgPos:true,
								fixedContentPos:true,
								items:{src:
									reservationSeatPage
								},
								midClick:true,
								overflow: 'scroll',
								removalDelay:'0',
								type:'inline'});
							first_seat(2,4);
							second_seat(2,7);
							third_seat(6,9);
							var seatClassTemp = '1';
							$.ajax({
								url : $.context()+'/list/reservedSeat1',
								method : 'POST',
								data : JSON.stringify({
									 scheSeq : scheSeq,
									 seatClass : seatClassTemp 
								}),
								dataType : 'json',
								contentType : 'application/json',
								success : function(data){
									var seatList = data.list;
									fristReservedSeat(seatList);
									myReservationSeat(mySeatCode);
									main.reservation.reserFirstSeatClick();
								},
								error : function(xhr, status,msg){
									alert('ERROR'+msg);
								}
							});
							var seatClassTemp = '2';
							$.ajax({
								url: $.context()+'/list/reservedSeat2',
								method: 'POST',
								data : JSON.stringify({
									 scheSeq : scheSeq,
									 seatClass : seatClassTemp 
								}),
								dataType : 'json',
								contentType : 'application/json',
								success : function(data){
									var seatList = data.list;
									secondReservedSeat(seatList);
									myReservationSeat(mySeatCode);
									main.reservation.reserSecondSeatClick();
								},
								error : function(xhr, status,msg){
									alert('ERROR'+msg);
								}
							});
							var seatClassTemp = '3';
							$.ajax({
								url: $.context()+'/list/reservedSeat3',
								method: 'POST',
								data : JSON.stringify({
									 scheSeq : scheSeq,
									 seatClass : seatClassTemp 
								}),
								dataType : 'json',
								contentType : 'application/json',
								success : function(data){
									var seatList = data.list;
									thirdReservedSeat(seatList);
									myReservationSeat(mySeatCode);
									main.reservation.reserThirdSeatClick();
								},
								error : function(xhr, status,msg){
									alert('ERROR'+msg);
								}
							});
							var seatCode = '';
							var seatClass = '';
							$('.selected-seat-btn').on('click',function(){
								if(select_seat.innerText === '좌석을 선택해주세요.'){
									alert('변경하실 좌석을 선택하시고 좌석확인버튼을 눌러주세요.');
								}else{
									var seatSelectTemp = select_seat.innerText;
									var seatSelectTempArr = select_seat.innerText.split(' ');
									seatCode = seatSelectTempArr[2];
									if(seatSelectTempArr[1]==='일등석'){
										seatClass = '1';
									}else if(seatSelectTempArr[1]==='프레스티지석'){
										seatClass = '2';
									}else{
										seatClass = '3';
									}
									$.ajax({
										url: $.context()+'/res/putMyReservation',
										method: 'POST',
										data : JSON.stringify({
											seatCode : seatCode,
											seatClass : seatClass,
											resSeatSeq : resSeatSeq
										}),
										dataType : 'json',
										contentType : 'application/json',
										success : function(data){
											if(data.success=='success'){
												alert('좌석변경 성공');
												$.magnificPopup.close();
												mypageReserUpdatePage();
											}else{
												alert('좌석변경 실패');
												$.magnificPopup.close();
											}
										},
										error : function(xhr, status,msg){
											alert('ERROR'+msg);
										}
									});
									
								}
							});
							$('.cancle-seat-btn').on('click',function(){
								$.magnificPopup.close();
							});
					   });
				   });
			},
			error : function(xhr, status,msg){
				alert('error'+msg);
			}
		});
	   	$('#wrapper').append(mainFooter());
     });
   };
   var mypageReserDeletePage = function(){
	   $('#wrapper').empty();
	   $('#wrapper').append(afterLoginSubGnbOnclick());
	   $('#wrapper').append(afterLoginMainGnbOnclick());
	   $('#wrapper').append(mypageHeader());
	   $('.kal-jh-mypage-subwrapper').append(mypageGnbOnclick);
	   $('.kal-jh-mypage-subwrapper').append(mypageReservationDelete(loginedKorName,loginedEngName));
	   var userId = loginedId;
	   $.ajax({
			url : $.context()+'/res/getMyReservation',
			method : 'POST',
			data : JSON.stringify({
				userId : userId
			}),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				 $.each(data.list,function(i,item){
					   $('.kal-jh-mypage-userReservation-content-wrapper2').append('<div class="kal-jh-mypage-userReservation-txt2">'
							   														+ '<p>Itinerary</p>'
							   														+ '<span class="kal-jh-mypage-userReservation-sche-date1"><span class="kal-jh-mypage-userReservation-sche-date1-text">출발일</span>'+item.scheDate+'</span></br>'
							   														+ '<span class="kal-jh-mypage-userReservation-departure1"><span class="kal-jh-mypage-userReservation-departure1-text">출발편</span>'+item.routeFrom+'</span>'
							   														+ '<span class="kal-jh-mypage-userReservation-arrival1"><span class="kal-jh-mypage-userReservation-arrival1-text">도착편</span>'+item.routeTo+'</span></br>'
							   														+ '<span class="kal-jh-mypage-userReservation-departure-time1"><span class="kal-jh-mypage-userReservation-departure-time1-text">출발 시간</span>'+item.scheDepartureTime+'</span>'
							   														+ '<span class="kal-jh-mypage-userReservation-arrival-time1"><span class="kal-jh-mypage-userReservation-arrival-time1-text">도착 시간</span>'+item.scheArrivalTime+'</span>'
							   														+ '<span class="kal-jh-mypage-userReservation-arrival-time1"><span class="kal-jh-mypage-userReservation-arrival-time1-text">도착 시간</span>'+item.scheArrivalTime+'</span>'
							   														+ '<button id="my-reservationBtn'+i+'" class="kal-jh-mypage-userReservation-seatBtn">예약취소</button>'
							   														+ '</div>');
					   $('#my-reservationBtn'+i+'').on('click',function(){
						    var resSeatSeq = item.resSeatSeq;
							var deleteSeatYesNo = $.magnificPopup.open({
						        items : {
						           src : '<div class="white-popup">'
						              +'<p id="emailAuthContent" class="kal-jh-auth-head-text">예약을 취소하시겟습니까 ?</p>'
						              +'<div class="kal-jh-auth-wrapper">'
						              +   '<button id="goBackYes" class="kal-jh-gobacksche-submit-btn" onSubmit="return check();">예</button>'
						              +   '<button id="goBackNo" class="kal-jh-gobacksche-submit-btn" onSubmit="return check();">아니오</button>'
						              +'</div>'
						              +'</div>',
						           type: 'inline'
						           },
						           fixedContentPos: true,  
						             fixedBgPos: true,  
						             overflowY: 'auto',  
						             closeBtnInside: true,  
						             preloader: false,
						             midClick: true,  
						             removalDelay: 300,  
						             closeOnBgClick: false
						     });
							$('#goBackYes').on('click',function(){
								  $.ajax({
										url : $.context()+'/del/resSeat',
										method : 'POST',
										data : JSON.stringify({
											resSeatSeq : resSeatSeq
										}),
										dataType : 'json',
										contentType : 'application/json',
										success : function(data){
											if(data.result == 'success'){
												$('#wrapper').empty();
												alert('예약취소 성공');
												mypageReserDeletePage();
												$.magnificPopup.close();
											}else{
												alert('예약취소 실패');
												$.magnificPopup.close();
											}
										},
										error : function(xhr, status,msg){
											alert('ERROR'+msg);
										}
								  });
							});
							$('#goBackNo').on('click',function(){
								$.magnificPopup.close();
							});
					   });
				   });
			},
			error : function(xhr, status,msg){
				alert('error'+msg);
			}
		});
	   $('#wrapper').append(mainFooter());
   };
   var userUpdate = function(){
	   
	   /*주소지 찾기 시작*/
	   $('.kal-jh-mypage-userUpdate-addr-btn').postcodifyPopUp();
	   /*주소지 찾기 끝*/
	   
	   $('.kal-jh-mypage-userUpdate-submitBtn').on('click',function(){
		   alert('회원 정보 수정 버튼 클릭');
		   var newPw = $('.kal-jh-mypage-userUpdate-pw').val();
		   var newEmail = $('.kal-jh-mypage-userUpdate-email').val();
		   var newPhoneNo = $('.kal-jh-mypage-userUpdate-phoneno').val();
		   var newAddr = $('.kal-jh-mypage-userUpdate-addr1').val();
		   var newAddrDetail = $('.kal-jh-mypage-userUpdate-addr2').val();
		   /*새 비밀번호 정규식*/
		   if(member.validation.nullCheck(newPw)==false){
			   $('.mypage-update-pw-check-text').html('<span style="color:red;">새 비밀번호를 입력해주세요.</span>');
		   }
		   if(member.validation.nullCheck(newPw)==true){
			   $('.mypage-update-pw-check-text').html('');
		   }
		   /*새 이메일 정규식*/
		   if(member.validation.emailCheck(newEmail)==false){
			   $('.mypage-update-email-check-text').html('<span style="color:red;">이메일 양식에 맞지 않거나 필수 입력값입니다.</span>');
		   }
		   if(member.validation.emailCheck(newEmail)==true){
			   $('.mypage-update-email-check-text').html('');
		   }
		   /*새 연락처 정규식*/
		   if(member.validation.phoneNoCheck(newPhoneNo)==false){
			   $('.mypage-update-phoneno-check-text').html('<span style="color:red;">연락처 양식에 맞지 않거나 필수 입력값입니다.</span>');
		   }
		   if(member.validation.phoneNoCheck(newPhoneNo)==true){
			   $('.mypage-update-phoneno-check-text').html('');
		   }
		   /*새 주소지 정규식*/
		   if(member.validation.nullCheck(newAddr)==false){
			   $('.mypage-update-addr-check-text').html('<span style="color:red;">새 주소지를 입력해주세요.</span>');
		   }
		   if(member.validation.nullCheck(newAddr)==true){
			   $('.mypage-update-addr-check-text').html('');
		   }
		   if(member.validation.nullCheck(newAddrDetail)==false){
			   $('.mypage-update-addr-check-text').html('<span style="color:red;">새 주소지를 입력해주세요.</span>');
		   }
		   if(member.validation.nullCheck(newAddrDetail)==true){
			   $('.mypage-update-addr-check-text').html('');
		   }
		   if(member.validation.nullCheck(newPw)==true &&
			  member.validation.emailCheck(newEmail)==true &&
			  member.validation.phoneNoCheck(newPhoneNo)==true &&
			  member.validation.nullCheck(newAddr)==true &&
			  member.validation.nullCheck(newAddrDetail)==true){
			  $.ajax({
				  url : $.context() + '/memberUpdate',
				  method : 'POST',
				  data : JSON.stringify({
					  id : loginedId,
					  newPw : newPw,
					  newEmail : newEmail,
					  newPhoneNo : newPhoneNo,
					  newAddr : newAddr,
					  newAddrDetail : newAddrDetail
				  }),
				  dataType : "json",
				  contentType : "application/json",
				  success : function(data){
					  if(data.result==='success'){
						  alert('회원 수정이 완료되었습니다.');
						  mainPageBeforeLogin();
					  }else{
						  alert('회원 수정에 실패하였습니다.');
					  }
				  },
				  error : function(xhr,status,msg){
					  alert('회원 수정에 실패하였습니다.');
				  }
			  });
		   }
	   });
   };
   var userDelete=function(){
	   $('.kal-jh-mypage-userDelete-submitBtn').on('click',function(){
		   var pw = $('.kal-jh-mypage-userDelete-pw').val();
		   alert('회원 탈퇴 버튼 클릭');
		   if(member.validation.nullCheck(pw)==false){
			  $('.mypage-delete-pw-check-text').html('<span style="color:red;">비밀번호를 입력해주세요.</span>'); 
		   }
		   if(member.validation.nullCheck(pw)==true){
			   $.ajax({
				   url : $.context() + '/userDelete',
				   method : 'POST',
				   data : JSON.stringify({
					   loginedId : loginedId,
					   pw : pw
				   }),
				   dataType : 'json',
				   contentType : 'application/json',
				   success : function(data){
					   if(data.result==='success'){
						   alert('회원탈퇴가 완료되었습니다.');
						   mainPageBeforeLogin();
					   }else{
						   alert('회원 탈퇴에 실패하였습니다.');
					   }
				   },
				   error : function (xhr,status,msg){
					   alert('회원 탈퇴에 실패하였습니다.');
				   }
			   });
		   }
	   });
   };
   var goRegist=function(){
	   var registIdFlag = false;
	   var emailAuthFlag = false;
	   var tempRandom;
	   /*본인 인증 시작*/
	   var emailAuthContent = function(){
		   $.magnificPopup.open({
				items : {
					src : '<div class="white-popup">'
						+'<p id="emailAuthContent" class="kal-jh-auth-head-text">인증 번호</p>'
						+'<div class="kal-jh-auth-wrapper">'
						+	'<input id="emailAuthNo" class="kal-jh-auth-input" placeholder="인증번호를 입력해주세요." type="text" name="authNo"></br>'
						+	'<button id="emailAuthBtn" class="kal-jh-auth-submit-btn" onSubmit="return check();">인증하기</button>'
						+'</div>'
						+'</div>',
					type: 'inline'
					},
					fixedContentPos: true,  
			        fixedBgPos: true,  
			        overflowY: 'auto',  
			        closeBtnInside: true,  
			        preloader: false,
			        midClick: true,  
			        removalDelay: 300,  
			        closeOnBgClick: false
			}); 
		   $('#emailAuthBtn').on('click',function(){
				var emailAuthNoText=$('#emailAuthNo').val();
				var emailText=$('.kal-jh-regist-inputBox-email').val();
				if(emailAuthNoText.length==0){
					alert('인증번호를 입력해주세요');
					
				}else{
					alert('인증을 거친 본인 인증 버튼 클릭');
					if(emailAuthNoText===tempRandom){
						alert('본인 인증에 성공하셨습니다.');
						emailAuthFlag = true;
						$.magnificPopup.close();
					}else{
						alert('본인 인증에 실패하셨습니다.');
					}
				}
			});
	   };
	   
	   /*본인 인증 끝*/
	   
			$('#wrapper').empty();
			$('#wrapper').append(regist());
			$('.kal-regist-main-logo').on('click',function(){
				alert('메인페이지로 이동');
				mainPageBeforeLogin();
			});
			/*아이디 중복 확인*/
			$('.kal-jh-regist-area1-idcheckBtn').on('click',function(){
				alert('중복 확인 버튼 클릭');
				var userid=$('.kal-jh-regist-inputBox-id').val();
				$.ajax({
					url : $.context() + '/idOverlapCheck',
					method : 'POST',
					data : JSON.stringify({
						id : $('.kal-jh-regist-inputBox-id').val()
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.result==='success'){
							$('.id-check-text').html('중복된 아이디가 존재합니다.');
							registIdFlag = false;
						}else{
							$('.id-check-text').html('<span style="color:green;">사용하실수 있는 아이디입니다.</span>');
							registIdFlag = true;
						}
					},
					error : function(xhr,status,msg){
						alert('회원가입 실패 이유 : '+msg);
					}
				});
			});
			/*아이디 중복 확인 끝*/
			
			/*이메일 본인 인증*/
			$('.kal-jh-regist-inputBox-email-btn').on('click',function(){
				alert('본인인증 버튼 클릭');
				
				var emailText=$('.kal-jh-regist-inputBox-email').val();
				if(member.validation.emailCheck(emailText)==false){
					alert('이메일 양식을 확인해주시기 바랍니다.');
				}

				if(member.validation.emailCheck(emailText)==true){
					alert('본인 확인 페이지로 넘어갑니다.');
					$.ajax({
						url : $.context() + '/emailAuth',
						method : "POST",
						data : emailText,
						dataType : "json",
						contentType : "application/json",
						success : function(data){
							tempRandom = data.randomNo;
						},
						error : function(){
						}
					});
					emailAuthContent();
				}
			});
			/*이메일 본인 인증 끝*/
			
			/*주소지 찾기 시작*/
			$('.kal-jh-regist-inputBox-addr-btn').postcodifyPopUp();
			/*주소지 찾기 끝*/
			
			$('.kal-jh-regist-submit').on('click',function(){
				alert('회원가입 완료 버튼 클릭');
				var id = $('.kal-jh-regist-inputBox-id').val();
				var pw = $('.kal-jh-regist-inputBox-pw').val();
				var korName = $('.kal-jh-regist-inputBox-korname').val();
				var familyName = $('.kal-jh-regist-inputBox-familyname').val();
				var firstName = $('.kal-jh-regist-inputBox-firstname').val();
				var phoneNo = $('.kal-jh-regist-inputBox-phoneno').val();
				var birth = $('.kal-jh-regist-inputBox-birth').val();
				var passportNo = $('.kal-jh-regist-inputBox-passportno').val();
				var email = $('.kal-jh-regist-inputBox-email').val();
				var addr = $('.kal-jh-regist-inputBox-addr1').val();
				var addrDetail = $('.kal-jh-regist-inputBox-addr2').val();
				var gender = $('input[name=gender]:checked').val();
				/*아이디 정규식*/
				if(member.validation.nullCheck(id)==false){
					$('.id-check-text').html('<span style="color:red;">아이디는 필수 입력값입니다.</span>');
				}
				if(member.validation.nullCheck(id)==true){
					$('.id-check-text').html('');
				}
				/*비밀번호 정규식*/
				if(member.validation.nullCheck(pw)==false){
					$('.pw-check-text').html('<span style="color:red;">비밀번호는 필수 입력값입니다.</span>');
				}
				if(member.validation.nullCheck(pw)==true){
					$('.pw-check-text').html('');
				}
				/*korname 정규식*/
				if(member.validation.korNameCheck(korName)==false){
					$('.korname-check-text').html('<span style="color:red;">한글이름 양식에 맞지 않거나 필수 입력값입니다.</span>');
				}
				if(member.validation.korNameCheck(korName)==true){
					$('.korname-check-text').html('');
				}
				/*firstname 정규식*/
				if(member.validation.engNameCheck(familyName)==false){
					$('.familyname-check-text').html('<span style="color:red;">영어이름 양식에 맞지 않거나 필수 입력값입니다.</span>');
				}
				if(member.validation.engNameCheck(familyName)==true){
					$('.familyname-check-text').html('');
				}
				/*firstname 정규식*/
				if(member.validation.engNameCheck(firstName)==false){
					$('.firstname-check-text').html('<span style="color:red;">영어이름 양식에 맞지 않거나 필수 입력값입니다.</span>');
				}
				if(member.validation.engNameCheck(firstName)==true){
					$('.firstname-check-text').html('');
				}
				/*연락처 정규식*/
				if(member.validation.phoneNoCheck(phoneNo)==false){
					$('.phoneno-check-text').html('<span style="color:red;">연락처 양식에 맞지 않거나 필수 입력값입니다.</span>');
				}
				if(member.validation.phoneNoCheck(phoneNo)==true){
					$('.phoneno-check-text').html('');
				}
				/*생년월일 정규식*/
				if(member.validation.nullCheck(birth)==false){
					$('.birth-check-text').html('<span style="color:red;">생년월일은 필수 입력값입니다.</span>');
				}
				if(member.validation.nullCheck(birth)==true){
					$('.birth-check-text').html('');
				}
				/*여권번호 정규식*/
				if(member.validation.postNoCheck(passportNo)==false){
					$('.passportno-check-text').html('<span style="color:red;">여권번호는 필수 입력값입니다.</span>');
				}
				if(member.validation.postNoCheck(passportNo)==true){
					$('.passportno-check-text').html('');
				}
				/*이메일 정규식*/
				if(member.validation.emailCheck(email)==false){
					$('.email-check-text').html('<span style="color:red;">이메일 양식에 맞지 않거나 필수 입력값입니다.</span>');
				}
				if(member.validation.emailCheck(email)==true){
					$('.email-check-text').html('');
				}
				/*주소 정규식*/
				if(member.validation.nullCheck(addr)==false){
					$('.addr-check-text').html('<span style="color:red;">주소 양식에 맞지 않거나 필수 입력값입니다.</span>');
				}
				if(member.validation.nullCheck(addr)==true){
					$('.addr-check-text').html('');
				}
				if(member.validation.nullCheck(addrDetail)==false){
					$('.addr-check-text').html('<span style="color:red;">주소 양식에 맞지 않거나 필수 입력값입니다.</span>');
				}
				if(member.validation.nullCheck(addrDetail)==true){
					$('.addr-check-text').html('');
				}
				/*본인 인증 정규식*/
				if(emailAuthFlag==false){
					$('.emailAuth-check-text').html('<span style="color:red;">본인인증을 해주세요.</span>');
				}
				if(emailAuthFlag==true){
					$('.emailAuth-check-text').html('');
				}
				if(member.validation.nullCheck(id)==true &&
				   member.validation.nullCheck(pw)==true &&
				   member.validation.korNameCheck(korName)==true &&
				   member.validation.engNameCheck(familyName)==true &&
				   member.validation.engNameCheck(firstName)==true &&
				   member.validation.phoneNoCheck(phoneNo)==true &&
				   member.validation.nullCheck(birth)==true &&
				   member.validation.postNoCheck(passportNo)==true &&
				   member.validation.emailCheck(email)==true &&
				   member.validation.nullCheck(addr)==true &&
				   member.validation.nullCheck(addrDetail)==true &&
				   registIdFlag ==true &&
				   emailAuthFlag ==true){
					$.ajax({
						url : $.context() + '/memberRegist',
						method : "POST",
						data : JSON.stringify({
							id : id,
							pw : pw,
							korName : korName,
							familyName : familyName,
							firstName : firstName,
							phoneNo : phoneNo,
							birth : birth,
							passportNo : passportNo,
							email : email,
							addr : addr,
							addrDetail : addrDetail,
							gender : gender
						}),
						dataType : "json",
						contentType : "application/json",
						success : function(data){
							if(data.result==='success'){
								alert('회원가입 완료');
								$('#wrapper').empty();
								mainPageBeforeLogin();
							}else{
								alert('회원가입 실패');
							}
						},
						error : function(xhr,status,msg){
							alert('회원가입 실패');
						}
					});
				}
			});
	};
	var goLogin = function(){
		   $('.kal-before-login-sub-right-menu-login').on('click',function(){
			   alert('로그인진입');
				$('#wrapper').empty();
				$('#wrapper').append(login());
				$('.kal-gg-mainlogo').on('click',function(){
					alert('메인페이지로 이동');
					mainPageBeforeLogin();
				});
				var authId = $.cookie('authId');
				if(authId != undefined){
					$('#userid').val(authId);
					$('#remember').prop("checked",true);
				}
			$('.kal-gg-registbtn').on('click',function(){
				alert('회원가입 버튼 클릭');
				goRegist();
			});
			$('#login-submit-btn').on('click',function(){
					alert('로그인버튼 클릭');
					if($.trim($('#userid').val()) == ""){
						alert('아이디를 입력해 주세요.');
						return;
					}else{
						if($('#remember').prop('checked')){
							$.cookie('authId',$('#username').val());
						}else{
							$.removeCookie('authId');
						}
						/*e.preventDefault();*/
						$.ajax({
							url : $.context() + '/login',
							method : "POST",
							data : JSON.stringify({
								id : $('#userid').val(),
								pw : $('#userpw').val()
							}),
							dataType : "json",
							contentType : "application/json",
							success : function(data){
								if(data.result==='success'){
									alert('환영합니다 '+data.korName+' 님');
									$.cookie('loginedId',data.id);
									$.cookie('loginedKorName',data.korName);
									$.cookie('loginedEngName',data.firstName + ' ' + data.familyName);
									$.cookie('loginedEmail',data.email);
									$.cookie('loginedAddr',data.addr);
									$.cookie('loginedPhoneNo',data.phoneNo);
									$.cookie('loginedPassPortNo',data.passPortNo);
									loginedId = $.cookie('loginedId');
								    loginedKorName = $.cookie('loginedKorName');
								    loginedEngName = $.cookie('loginedEngName');
								    loginedEmail = $.cookie('loginedEmail');
								    loginedAddr = $.cookie('loginedAddr');
								    loginedPhoneNo = $.cookie('loginedPhoneNo');
							  	    loginedPassPortNo = $.cookie('loginedPassPortNo');
									$('#wrapper').empty();
									mainPageAfterLogin();
								}if(data.result==='fail'){
									alert('입력하신 ID가 존재하지 않습니다.');
								}
							},
							error: function(xhr,status,msg){
								alert('입력하신 ID가 존재하지 않습니다.');
							}
						});
					}
				});
			});
	   };
   return {
      onCreate : onCreate,
      afterLoginSubGnbOnclick : afterLoginSubGnbOnclick,
      afterLoginMainGnbOnclick : afterLoginMainGnbOnclick,
      mainPageAfterLogin : mainPageAfterLogin
   };
})();

main.admin=(function(){
	
	var adminService,adminView,reservationService,reservationView;
	var onCreate=function(){
		adminView=$.javascript()+'/view.admin.js';
		adminService=$.javascript()+'/service.admin.js';
		reservationView = $.javascript()+'/view.reservation.js';
		reservationService = $.javascript()+'/service.reservation.js';
		setContentView();
	};
		
	var setContentView=function(){
		$.when(
				$.getScript(reservationService),
				$.getScript(reservationView),
				$.getScript(adminView),
				$.getScript(adminService),
				$.Deferred(function(deferred){
					$(deferred.resolve);
				})
				).done(function(){
			$('#admin').on('click',function(){
				var popupForm=createPopupForm();
				$.magnificPopup.open({
					closeBtnInside:true,
					closeOnContentClick:false,
					alignTop: true,
					fixedBgPos:true,
					fixedContentPos:false,
					items:{src:popupForm},
					midClick:true,
					overflowY:'auto',
					removalDelay:'0',
					type:'inline'
				}); 
				
				$('#adminLogin').on('click',function(){
					$.ajax({
						url : $.context()+'/adminLogin',
						method : "POST",
						data : JSON.stringify({
						    code:$('#code').val(),
							pass:$('#pass').val()		
						}),
						dataType : 'json',
						contentType:'application/json',
						success:function(data){
							if(data.result==='success'){
							$('.mfp-close').trigger('click');
				
							$('#wrapper').empty();
							/*--Nav--*/
							$('#wrapper').append(adminNav());
							/*--Gnb--*/
							$('#wrapper').append(adminGnb());
							/*--GotoAdminMain--*/
							$('#kal-gg-gnb-gotoAdmin').on("click",function(){
								adminSchedule();
							});
							$('#kal-gg-gnb-gotomain').on("click",function(){
								location.href=$.context()+'/'
							});
							$('#kal-gg-gnb-logout').on("click",function(){
								location.href=$.context()+'/'
							});
							/*===getRoute===*/
							var routeFrom=[];
							var routeAuto={
									getRoute:function(){
										$.getJSON($.context()+'/get/routeFrom',function(data){
											$.each(data.list,function(i,item){
												routeFrom[i]=item.routeFrom;
											});
										});
									}
							}
							/*===GoogleChart===*/
							var googleChartD=function(){
								$('#admin-wrapper').empty();
								$('#admin-wrapper').append(googleChart());
								g$("#datepicker1").datepicker({
						            dateFormat: 'yy-mm-dd',
						            onSelect: function(selected) {
						            	g$("#datepicker2").datepicker("option","minDate", selected)
						            	}
						        });
								g$("#datepicker2").datepicker({
						            dateFormat: 'yy-mm-dd',
						            onSelect: function(selected) {
						            	g$("#datepicker1").datepicker("option","maxDate", selected)
						            	}
						         
						        });
								$('#kal-gg-chart-search').on('click',function(){
									$('#kal-gg-chart-wrapper').empty();
									var getStartDate=$('#datepicker1').val();
									var getEndDate=$('#datepicker2').val();
									var getChartSelect=$('.kal-gg-selectbox option:selected').val();
									var json={getStartDate:getStartDate,getEndDate:getEndDate,getChartSelect:getChartSelect};
									
									if(getEndDate!=''&&getStartDate!=''){
										
										$.ajax({
											url:$.context() + '/read/chart',  //$.context() 안먹음
											method:'POST',
											data:JSON.stringify(json),
											dataType:'json',
											contentType:'application/json',
											success:function(data){
												var reserCon='',ageCon='',saleCon='',sexCon='', sumPrice=0,sumMale=0,sumFemale=0,sumMalePrice=0,sumFemalePrice=0;
												var age=0,teens=0,twenties=0,thirties=0,forties=0,fifties=0,sixties=0;
												var teensPrice=0,twentiesPrice=0,thirtiesPrice=0,fortiesPrice=0,fiftiesPrice=0,sixtiesPrice=0;
												var routeSpan='';
												var route1=0,route2=0,route3=0,route4=0,route5=0,route6=0,route7=0,route8=0,route9=0,route10=0,route11=0,route12=0;
												var d=new Date();
												
												
												var ageApi=function(teensPrice,twentiesPrice,thirtiesPrice,fortiesPrice,fiftiesPrice,sixtiesPrice){
													$.getScript('https://www.gstatic.com/charts/loader.js',function(){
														
														google.charts.load('current', {'packages':['corechart']});
														google.charts.setOnLoadCallback(drawChart);
															function drawChart() {
																
																var data = google.visualization.arrayToDataTable([
																	['Task', 'Hours per Day'],
																	         
																	['10 대', teensPrice],
																	['20 대',twentiesPrice],
																	['30 대', thirtiesPrice],
																	['40 대', fortiesPrice],
																	['50 대', fiftiesPrice],
																	['60 대이상', sixtiesPrice]
																	]);
														        
																var options = {
																	title: '연령별 분포도',
																	width : 800, // 가로 px
																	height : 600, // 세로 px
														            };
																
																var chart = new google.visualization.PieChart(document.getElementById('piechart'));
																	chart.draw(data, options);
															}
													});
												}
												
												var sexApi=function(sumMale,sumFemale){
													$.getScript('https://www.gstatic.com/charts/loader.js',function(){
														
														google.charts.load('current', {'packages':['corechart']});
														google.charts.setOnLoadCallback(drawChart);
															function drawChart() {
																
																var data = google.visualization.arrayToDataTable([
																	['Task', 'Hours per Day'],
																	['남', sumMale],
																	['여',sumFemale]
																	]);
																var options = {
																	title: '성별 분포도',
																	width : 850, // 가로 px
																	height : 600, // 세로 px
														            };
																
																var chart = new google.visualization.PieChart(document.getElementById('piechart'));
																	chart.draw(data, options);
															}
													});
												}
												
												var saleApi=function(route1,route2,route3,route4,route5,route6){
													$.getScript('https://www.gstatic.com/charts/loader.js',function(){
														google.charts.load('current', {'packages':['corechart']});
														google.charts.setOnLoadCallback(drawChart);
														function drawChart() {
											     var data = google.visualization.arrayToDataTable([
														['sale', "매출"], // 항목 정의
														['인천~도쿄', route1], // 항목 정의
														['인천~뉴욕', route2], // 항목, 값 (값은 숫자로 입력하면 그래프로 생성됨)
														['도쿄~한국', route3],
														['도쿄~미국', route4],
														['뉴욕~인천', route5],
														['뉴욕~도쿄', route6]
														]);
												        var options = {
														title : '나라별 매출', // 제목
														width : 850, // 가로 px
														height : 600, // 세로 px
														bar : {
															groupWidth : '20%' // 그래프 너비 설정 %
														},
														legend : {
															position : 'none' // 항목 표시 여부 (현재 설정은 안함)
														}
												        };

														var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
														chart.draw(data, options);
														}
													});
												}
												
												$.each(data.list,function(i,item){
													
													if(item.sexCon != ''){
														if(item.sexCon="M"){
															sumMale+=1;
															sumMalePrice+=parseInt(item.resPrice);
															}else{
																sumFemale+=1;
																sumFemalePrice+=parseInt(item.resPrice);
																}
													}
													
													
													if(item.birthDate != ''){
														age = d.getFullYear()-item.birthDate.split('-')[0]+1;
														
														if(age<20){
															teens+=1;
															teensPrice+=parseInt(item.resPrice);
														}else if(age<30){
															twenties+=1;
															twentiesPrice+=parseInt(item.resPrice);
														}else if(age<40){
															forties+=1;
															fortiesPrice+=parseInt(item.resPrice);
														}else if(age<50){
															fifties+=1;
															fiftiesPrice+=parseInt(item.resPrice);
														}else if(age<60){
															sixties+=1;
															sixtiesPrice+=parseInt(item.resPrice);
														}
														
														/*switch(age/10){
														case 1:
															teens+=1;
															teensPrice+=item.resPrice;
															alert("ddd"+teens);
														break;
														case 2:
															twenties+=1;
														twentiesPrice+=item.resPrice;
														break;
														case 3:
															thirties+=1;
														thirtiesPrice+=item.resPrice;
														break;
														case 4:
															forties+=1;
														fortiesPrice+=item.resPrice;
														break;
														case 5:
															fifties+=1;
														fiftiesPrice+=item.resPrice;
														break;
														case 6:
															sixties+=1;
														sixtiesPrice+=item.resPrice;
														}*/
													}
														switch(item.routeSeq){
														case "1": route1 += parseInt(item.resPrice); break;
														case "2": route2 += parseInt(item.resPrice); break;
														case "3": route3 += parseInt(item.resPrice); break;
														case "4": route4 += parseInt(item.resPrice); break;
														case "5": route5 += parseInt(item.resPrice); break;
														case "6": route6 += parseInt(item.resPrice); break;
														case "7": route1 += parseInt(item.resPrice); break;
														case "8": route2 += parseInt(item.resPrice); break;
														case "9": route3 += parseInt(item.resPrice); break;
														case "10": route4 += parseInt(item.resPrice); break;
														case "11": route5 += parseInt(item.resPrice); break;
														case "12": route6 += parseInt(item.resPrice); break;
														}
														
													sumPrice+=parseInt(item.resPrice);
													
												});
												ageCon='<div class="kal-gg-cahrt-ageResult">'
													+'	    <div class="kal-gg-cahrt-ResultText">'
													+'	       연령 별 매출'
													+'	    </div>'
													+'       <div class="kal-gg-cahrt-ResultText-left">'
													+'	       <span>10대:'+teens+' 명 </span></br>'  
													+'         <span>20대:'+twenties+' 명 </span></br>'
													+'	       <span>30대:'+thirties+' 명 </span></br>'
													+'	       <span>40대:'+forties+' 명 </span></br>'
													+'	       <span>50대:'+fifties+' 명 </span></br>'
													+'	       <span>60대:'+sixties+' 명 </span></br>'
													+'       </div>'
													+'       <div class="kal-gg-cahrt-ResultText-right">'
													+'	       <span>총 금액: '+teensPrice +' WON</span></br>'
													+'	       <span>총 금액: '+twentiesPrice +' WON</span></br>'
													+'	       <span>총 금액: '+thirtiesPrice +' WON</span></br>'
													+'	       <span>총 금액: '+fortiesPrice +' WON</span></br>'
													+'	       <span>총 금액: '+fifties +' WON</span></br>'
													+'	       <span>총 금액: '+sixtiesPrice +' WON</span></br>'
													+'       </div>'
													+'     <div class="kal-gg-chart-empty"></div>'
													+'	</div>'
													+'       <div id="piechart" class="kal-gg-stat-chart"></div>';
										
												saleCon='<div class="kal-gg-cahrt-saleResult">'
													+'	    <div class="kal-gg-cahrt-ResultText">'
													+'	       총 매출'
													+'	    </div>'
													+'	    <span>총 매출:'+sumPrice+' won</span> '  
													+'    </div>';
												
												sexCon='<div class="kal-gg-cahrt-sexResult">'
													+'	    <div class="kal-gg-cahrt-ResultText">'
													+'	        성 별 매출'
													+'	    </div>'
													+'         <div class="kal-gg-cahrt-ResultText-left">'
													+'            <span>남:'+sumMale+'명 </span></br>'
													+'            <span>여:'+sumFemale+'명 </span>'
													+'		   </div>'
													+'		   <div class="kal-gg-cahrt-ResultText-right">'
													+'            <span>금액:'+sumMalePrice +' WON</span></br>'
													+'            <span>금액:'+sumFemalePrice +' WON</span>'
													+'		   </div>'
													+'       <div class="kal-gg-chart-empty"></div>'
													+'    </div>'
												    +'    <div id="piechart" class="kal-gg-stat-chart">'
												    +'    </div>'
												
												reserCon='<div class="kal-gg-cahrt-reserResult">'
													+'	    <div class="kal-gg-cahrt-ResultText">'
													+'	        행선지 별 매출'
													+'	    </div>'
													+'      <div class="kal-gg-cahrt-ResultText-routeLeft">'
													+'        <span>FROM:서울/인천(ICN), 대한민국</span><span>TO:도쿄/하네다(HND), 일본</span></br>'
													+'        <span>FROM:서울/인천(ICN), 대한민국</span><span>TO:뉴욕(JFK), NY, 미국 - 존 F. 케네디</span></br>'
													+'        <span>FROM:도쿄/하네다(HND), 일본</span><span>TO:서울/인천(ICN), 대한민국</span></br>'
													+'        <span>FROM:도쿄/하네다(HND), 일본</span><span>TO:뉴욕(JFK), NY, 미국 - 존 F. 케네디</span></br>'
													+'        <span>FROM:뉴욕(JFK), NY, 미국 - 존 F. 케네디</span><span>TO:서울/인천(ICN), 대한민국</span></br>'
													+'        <span>FROM:뉴욕(JFK), NY, 미국 - 존 F. 케네디</span><span>TO:도쿄/하네다(HND), 일본</span></br>'
													+'    	</div>'
													+'		<div class="kal-gg-cahrt-ResultText-routeRight">'
													+'        <span>'+route1+' WON</span></br>'
													+'        <span>'+route2+' WON</span></br>'
													+'        <span>'+route3+' WON</span></br>'
													+'        <span>'+route4+' WON</span></br>'
													+'        <span>'+route5+' WON</span></br>'
													+'        <span>'+route6+' WON</span></br>'
													+'    	</div>'
													+'      <div class="kal-gg-chart-empty"></div>'
												    +'		</div>'
													+'      <div id="chart_div" class="kal-gg-stat-chart">';
												
												
												switch(getChartSelect){
												
												case "sche_date":
													if(data.list==''){
														$('#kal-gg-chart-wrapper').append('<div>해당 값이 없습니다.</div>');
													}else{$('#kal-gg-chart-wrapper').append(saleCon);}
													break;
												case "user_gen": 
													if(data.list==''){
														$('#kal-gg-chart-wrapper').append('<div>해당 값이 없습니다.</div>');
													}else{
														$('#kal-gg-chart-wrapper').append(sexCon);
														sexApi(sumMale,sumFemale);
													}
													break;
												case "birth_date": 
													if(data.list==''){
														$('#kal-gg-chart-wrapper').append('<div>해당 값이 없습니다.</div>');
													}else{
														$('#kal-gg-chart-wrapper').append(ageCon);
														ageApi(teens,twenties,thirties,forties,fifties,sixties);
													}
													break;
												case "route_from,route_to":
													if(data.list==''){
														$('#kal-gg-chart-wrapper').append('<div>해당 값이 없습니다.</div>');
													}else{
														$('#kal-gg-chart-wrapper').append(reserCon);
														saleApi(route1,route2,route3,route4,route5,route6);
													}
													break;
												}
												
											},
												
											error:function(xhr,status,msg){alert('데이터 받기 실패'+msg);}
										});
										
									}else{alert('날짜를 을 입력 하세요.');}
								});
							};

							/*=======Route container=======*/
							var adminRoute=function(){
								$('#admin-wrapper').empty();
								$('#admin-wrapper').append(routeCon());
								
								/*=======Route autocomplete=======*/
								routeAuto.getRoute();
								g$('#RouteDepartureInput').autocomplete({
									source:routeFrom
								});
								g$('#RouteArrInput').autocomplete({
									source:routeFrom
								});
								g$('#routeDepartSerch').autocomplete({
									source:routeFrom
								});
								g$('#routeDesSerch').autocomplete({
									source:routeFrom
								});
								
								
								/*--createRoute--*/
								$('.kal-gg-route-con-createBtn').on('click',function(){
									alert('route 클릭');
									var flightNo=$('.kal-gg-route-con-select option:selected').val();
									var routeDepart=$('#RouteDepartureInput').val();
									var routeArr=$('#RouteArrInput').val();
									var json={
											flightSeq:flightNo,routeFrom:routeDepart,routeTo:routeArr};
									
									if(flightNo!=''&&routeDepart!=''&&routeArr!=''){
										$.ajax({
											url:$.context()+'/post/route',
											method:'post',
											data:JSON.stringify(json),
											dataType:'json',
											contentType:'application/json',
											success:function(data){
												alert('스케줄이 등록되었습니다.')
											},
											error:function(xhr,status,msg){alert('스캐줄 등록을 실패 했습니다.'+msg);}
										});
										
									}else{alert("입력값을 전부 입력해 주세요.");}
									
								});
								
								/*--getRoutes--*/
								$('.kal-gg-route-searchBtn').on('click',function(){
									var flightNo=$('#routeFlightSerch').val();
									var routeDepart=$('#routeDepartSerch').val();
									var routeArr=$('#routeDesSerch').val();
									
									var json={
											flightSeq:flightNo,
											routeFrom:routeDepart,
											routeTo:routeArr
											};
									
									$.ajax({  
										url:$.context()+'/get/routes',
										method:'post',
										data:JSON.stringify(json),
										dataType:'json',
										contentType:'application/json;charset=UTF-8',
										success:function(data){
											$('#routeListWrapper').empty();
											var routeTable,routeTh,routeRevise='';
											var routeTd='';
											var reviseRouteView={};
											var deleteRoutedata={};
											var nothing='<p>해당하는 값이 없습니다.</p>'
											routeTable='<table class="kal-gg-route-con-table2">';
											routeTh='<tr >'
												+	'<th>ROUTE NO</th>'
												+	'<th>FLIGHT NO</th>'
												+	'<th>DEPARTURE</th>'
												+	'<th>DESTINATION</th>'
												+	'</tr>';
											routeTable+=routeTh;
											
											$.each(data.list,function(i,item){
												deleteRoutedata['routeDelBtn-'+i]=item.routeSeq;
												
												reviseRouteView['routeUpdateBtn-'+i]='<tr>'
																			   +   '<td>'+' '+item.routeSeq+' '+'</td>'
																			   +   '<td>'+item.flightSeq+'</td>'
																			   +   '<td>'+item.routeFrom+'</td>'
																			   +   '<td>'+item.routeTo+'</td>'
																			   +'</tr>';
												
												routeTd+='<tr>'
												    +'<td>'+item.routeSeq+'</td>'
													+'<td>'+item.flightSeq+'</td>'
													+'<td>'+item.routeFrom+'</td>'
													+'<td>'+item.routeTo+'</td>'
												+'</tr>';
												
												routeRevise+='<div class="kal-gg-route-con-btn-add">'
											    +'<button class="kal-gg-route-con-btn2" id="routeDelBtn-'+i+'">delete</button>'
											    +'<button class="kal-gg-route-con-btn2" id="routeUpdateBtn-'+i+'">update</button>'
											    +'</div>' 
											});
											routeTable+=routeTd;
											routeTable+='</table>';
											$('#routeUpdateTable').empty();
											$('#routeUpdateWrapper').empty();
											$('#routeListWrapper').empty();
											if(data.list==''){
												$('#routeListWrapper').append(nothing);
												}else{
													$('#routeListWrapper').append(routeTable);
												}
											$('#routeBtnWrapper').empty();
											$('#routeBtnWrapper').append(routeRevise);

											
											for(var i=0;i<Object.keys(reviseRouteView).length;i++){
												
												/*--updateRoute--*/
												$('#routeUpdateBtn-'+i).on('click',function(){
													
													$('#routeUpdateWrapper').append(routeConUpdate());
													
													routeAuto.getRoute();
													g$('#gg-route-departure').autocomplete({
														source:routeFrom
													});
													g$('#gg-route-destination').autocomplete({
														source:routeFrom
													});
													var updateTabelTd=reviseRouteView[$(this).attr('id')];
													createRouteTd(updateTabelTd);
												});
												
												/*--delRoute--*/
												$('#routeDelBtn-'+i).on('click',function(){
													var deleteRoute=deleteRoutedata[$(this).attr('id')];
													alert('삭제할 데이터값'+deleteRoute);
													delRoute(deleteRoute);
												})
											}
											
											var delRoute=function(delRoute){
												$.ajax({
													url:$.context()+'/del/route',
													method:'post',
													data:JSON.stringify({'routeSeq':delRoute}),
													dataType:'json',
													contentType:'application/json',
													success:function(data){alert('삭제완료')},
													error:function(xhr,status,msg){alert('삭제실패이유'+msg)}
												})
											}
											
											var createRouteTd=function(Td){
												var updateTabel,updateTabelTh='';
												updateTabel='<table class="kal-gg-route-con-table">';
												updateTabelTh=  '<tr>'
												+				    '<th>ROUTE SEQ</th>'
												+				    '<th>FLIGHT NO</th>'
												+					'<th>DEPARTURE</th>'
												+					'<th>DESTINATION</th>'
												+				'</tr>';
												updateTabel+=updateTabelTh;
												updateTabel+=Td;
												updateTabel+='<tr>'
												+               '<td colspan="2">항공기 갱신은 FLIGHT 페이지에서 가능합니다.</td>'
											    +				'<td><input type="text" id="gg-route-departure"/></td>'
											    +				'<td><input type="text" id="gg-route-destination"/></td>'
											    +			 '</tr>';
												updateTabel+='</table>';
												$('#routeUpdateTable').empty();
												$('#routeUpdateTable').append(updateTabel);
												routeAuto.getRoute();
			                                    g$('#gg-route-departure').autocomplete({
			                                       source:routeFrom
			                                    });
			                                    g$('#gg-route-destination').autocomplete({
			                                       source:routeFrom
			                                    });
												$('#routeUpdateConfirm').on('click',function(){
													
													var json={routeSeq:Td.split(' ')[1],
															routeReviseDeparTime:$('#gg-route-departure').val(),
															routeReviseArrTime:$('#gg-route-destination').val()};
													$.ajax({
														url:$.context()+'/put/route',
														method:'post',
														data:JSON.stringify(json),
														dataType:'json',
														contentType:'application/json',
														success:function(data){alert('업데이트완료')},
														error:function(xhr,status,msg){alert('업데이트 실패'+msg);}
													})
												});
											}
											
											
										
										},
										error:function(xhr,status,msg){alert('스케줄확인실패'+msg)}
									});
								});
								
								
							}
							
							/*=======Reservation Container=======*/
							var adminReservation=function(){
								
								$('#admin-wrapper').empty();
								$('#admin-wrapper').append(reserCon());
								g$('#kal-gg-reser-date').datepicker({
									dateFormat: 'yy-mm-dd'
								});
								
								/*--Reservation autoComplete--*/
								routeAuto.getRoute();
								g$('#kal-gg-reser-departure').autocomplete({
									source:routeFrom
								});
								g$('#kal-gg-reser-destination').autocomplete({
									source:routeFrom
								});
								
								/*--Reservation search--*/
								$('#kal-gg-reser-createBtn').on('click',function(){
								
								var reserDate=$('#kal-gg-reser-date').val();
								var departure=$('#kal-gg-reser-departure').val();
								var destination=$('#kal-gg-reser-destination').val();
								var userId=$('#kal-gg-reser-userId').val();
								
								var json={reserDate:reserDate,departure:departure,destination:destination,userId:userId}
								
								$.ajax({
									url:$.context()+'/get/reservation',
									method:'POST',
									data:JSON.stringify(json),
									dataType:'json',
									contentType:'application/json',
									success:function(data){
										
										var table='<table class="kal-gg-reser-con-table2">';
										var th='<tr >'
										+	'<th>SEAT CODE</th>'	
										+	'<th>USER ID</th>'
										+	'<th>SCHEDULE DATE</th>'	
										+	'<th>DEPARTURE</th>'
										+	'<th>DESTINATION</th>'
										+	'<th>DEPARTURE TIME</th>'
										+	'<th>DESTINATION TIME</th>'
										+	'</tr>';
										table+=th;
										
										var nothing='<p>해당 값이 없습니다.</p>'
										
										var td='';
										var revise='';
										var reviseView={};
										var deletedata={};
										
										$.each(data.view,function(i,item){
											
											deletedata['adminReserDelBtn-'+i]=item.resSeatSeq;
											
											reviseView['adminReserUpBtn-'+i]='<tr>'
																			    +'<td>'+item.seatCode+'</td>'
																				+'<td>'+item.userId+'</td>'
																				+'<td>'+item.scheDate+'</td>'
																				+'<td>'+item.routeFrom+'</td>'
																				+'<td>'+item.routeTo+'</td>'
																				+'<td>'+item.scheArrivalTime+'</td>'
																				+'<td>'+item.scheDepartureTime+'</td>'
																		   +'</tr>';
											td+='<tr>'
												    +'<td>'+item.seatCode+'</td>'
													+'<td>'+item.userId+'</td>'
													+'<td>'+item.scheDate+'</td>'
													+'<td>'+item.routeFrom+'</td>'
													+'<td>'+item.routeTo+'</td>'
													+'<td>'+item.scheArrivalTime+'</td>'
													+'<td>'+item.scheDepartureTime+'</td>'
										       +'</tr>';
										     
										    revise+='<div class="kal-gg-reser-con-btn-add">'
										    +'<button class="kal-gg-reser-con-btn" id="adminReserDelBtn-'+i+'">delete</button>'
											+'<button class="kal-gg-reser-con-btn" id="adminReserUpBtn-'+i+'">update</button>'
											+'</div>'; 
										
										});
										
										table+=td;
										table+='</table>';
										
										$('#reserListWrapper').empty();
										if(data.view==''){
											$('#reserListWrapper').append(nothing);
											}else{
												$('#reserListWrapper').append(table);
												}
										$('#reserUpdateDeleteBtnWrapper').empty();
										$('#reserUpdateDeleteBtnWrapper').append(revise);
										
										$.each(data.view,function(i,j){
											$('#adminReserUpBtn-'+i).on('click',function(){
												var scheSeq = j.scheSeq;
											    var mySeatCode = j.seatCode;
											    var resSeatSeq = j.resSeatSeq;
												var reservationSeatPage = createReservationSeatPage();
												$.magnificPopup.open({
													closeBtnInside:true,
													closeOnContentClick:false,
													alignTop: true,
													fixedBgPos:true,
													fixedContentPos:true,
													items:{src:
														reservationSeatPage
													},
													midClick:true,
													overflow: 'scroll',
													removalDelay:'0',
													type:'inline'});
												first_seat(2,4);
												second_seat(2,7);
												third_seat(6,9);
												var seatClassTemp = '1';
												$.ajax({
													url : $.context()+'/list/reservedSeat1',
													method : 'POST',
													data : JSON.stringify({
														 scheSeq : scheSeq,
														 seatClass : seatClassTemp 
													}),
													dataType : 'json',
													contentType : 'application/json',
													success : function(data){
														var seatList = data.list;
														fristReservedSeat(seatList);
														myReservationSeat(mySeatCode);
														main.reservation.reserFirstSeatClick();
													},
													error : function(xhr, status,msg){
														alert('ERROR'+msg);
													}
												});
												var seatClassTemp = '2';
												$.ajax({
													url: $.context()+'/list/reservedSeat2',
													method: 'POST',
													data : JSON.stringify({
														 scheSeq : scheSeq,
														 seatClass : seatClassTemp 
													}),
													dataType : 'json',
													contentType : 'application/json',
													success : function(data){
														var seatList = data.list;
														secondReservedSeat(seatList);
														myReservationSeat(mySeatCode);
														main.reservation.reserSecondSeatClick();
													},
													error : function(xhr, status,msg){
														alert('ERROR'+msg);
													}
												});
												var seatClassTemp = '3';
												$.ajax({
													url: $.context()+'/list/reservedSeat3',
													method: 'POST',
													data : JSON.stringify({
														 scheSeq : scheSeq,
														 seatClass : seatClassTemp 
													}),
													dataType : 'json',
													contentType : 'application/json',
													success : function(data){
														var seatList = data.list;
														thirdReservedSeat(seatList);
														myReservationSeat(mySeatCode);
														main.reservation.reserThirdSeatClick();
													},
													error : function(xhr, status,msg){
														alert('ERROR'+msg);
													}
												});
												var seatCode = '';
												var seatClass = '';
												$('.selected-seat-btn').on('click',function(){
													if(select_seat.innerText === '좌석을 선택해주세요.'){
														alert('변경하실 좌석을 선택하시고 좌석확인버튼을 눌러주세요.');
													}else{
														var seatSelectTemp = select_seat.innerText;
														var seatSelectTempArr = select_seat.innerText.split(' ');
														seatCode = seatSelectTempArr[2];
														if(seatSelectTempArr[1]==='일등석'){
															seatClass = '1';
														}else if(seatSelectTempArr[1]==='프레스티지석'){
															seatClass = '2';
														}else{
															seatClass = '3';
														}
														$.ajax({
															url: $.context()+'/res/putMyReservation',
															method: 'POST',
															data : JSON.stringify({
																seatCode : seatCode,
																seatClass : seatClass,
																resSeatSeq : resSeatSeq
															}),
															dataType : 'json',
															contentType : 'application/json',
															success : function(data){
																if(data.success=='success'){
																	alert('좌석변경 성공');
																	$.magnificPopup.close();
																	adminReservation();
																}else{
																	alert('좌석변경 실패');
																	$.magnificPopup.close();
																}
															},
															error : function(xhr, status,msg){
																alert('ERROR'+msg);
															}
														});
													}
												});
												$('.cancle-seat-btn').on('click',function(){
													$.magnificPopup.close();
												});
											});    
											
										});
										
										for(var i=0;i<Object.keys(reviseView).length;i++){
											/*--UpdateReservation--*/
											
											/*--DelReservation--*/
											
											var delReservation=function(delReser){
												$.ajax({
													url:$.context()+'/del/resSeat',
													method:'post',
													data:JSON.stringify({'resSeatSeq':delReser}),
													dataType:'json',
													contentType:'application/json',
													success:function(data){alert('삭제되었습니다.')},
													error:function(xhr,status,msg){alert('삭제실패이유'+msg)}
												})
											}
											
											
											$('#adminReserDelBtn-'+i).on('click',function(){
												var delReser=deletedata[$(this).attr('id')];
												delReservation(delReser);
												
											})
										}
										
									},
									error:function(xhr,status,msg){alert("확인실패"+msg);}
								});
								});
								
							}
							/*=======Schedule Container=======*/
							var adminSchedule=function(){
								/*--mainContainer--*/
								$('#admin-wrapper').empty();
								$('#admin-wrapper').append(scheCon());
								routeAuto.getRoute();
								g$('#gg-departure').autocomplete({
									source:routeFrom
								});
								
								g$('#gg-destination').autocomplete({
									source:routeFrom
								});
								g$('#kal-gg-sch-date').datepicker({
						            dateFormat: 'yy-mm-dd'
						        });
								g$('#gg-searchDate').datepicker({
						            dateFormat: 'yy-mm-dd'
						        });
								/*--createSchedule--*/
								
								$('#kal-gg-sche-createBtn').on('click',function(){
									
									var scheRoute=$('#kal-gg-sch-createSelect option:selected').val();
									var scheDeparTime=$('#kal-gg-sch-departureTime').val();
									var scheArrTime=$('#kal-gg-sch-destinationTime').val();
									var scheDate = $('#kal-gg-sch-date').val();
									
									if(admin.validation.dateCheck(scheDate)==false){
										$('.kal-gg-sche-table-text').html('<span style="color:red;">올바른 날짜를입력 해 주세요.</span>')
									}
									if(admin.validation.dateCheck(scheDate)==true){
										$('.kal-gg-sche-table-text').html('')
									}
									if(admin.validation.timeCheck(scheDeparTime)==false){
										$('.kal-gg-sche-table-text').html('<span style="color:red;">올바른 시간을 입력해 주세요.</span>')
									}
									if(admin.validation.timeCheck(scheDeparTime)==true){
										$('.kal-gg-sche-table-text').html('')
									}
									if(admin.validation.timeCheck(scheArrTime)==false){
										$('.kal-gg-sche-table-text').html('<span style="color:red;">올바른 시간을 입력해 주세요.</span>')
									}
									if(admin.validation.timeCheck(scheArrTime)==true){
										$('.kal-gg-sche-table-text').html('')
									}
									
									var json={
											routeSeq:scheRoute,scheDate:scheDate,scheDepartureTime:scheDeparTime,scheArrivalTime:scheArrTime
											};
									
										if(admin.validation.timeCheck(scheDeparTime) == true &&
												admin.validation.dateCheck(scheDate) == true&&
												admin.validation.timeCheck(scheArrTime) == true){
											
											$.ajax({
												url:$.context()+'/post/schedule',
												method:'post',
												data:JSON.stringify(json),
												dataType:'json',
												contentType:'application/json',
												success:function(data){
													alert('스케줄이 등록되었습니다.')
												},
												error:function(xhr,status,msg){alert('스캐줄 등록을 실패 했습니다.'+msg);}
											});
											}else{alert("생성실패")}
									
								});
								
								/*--getSchedules--*/
								$('#kal-gg-serchBtn').on('click',function(){
									
									
									$('#updateWrapper').empty();
									var _date=$('#gg-searchDate').val(); 
									var _departure=$('#gg-departure').val();
									var _destination=$('#gg-destination').val();
									
									var json={
											scheDate:_date,
											routeFrom:_departure,
											routeTo:_destination
											};
									
									$.ajax({  
										url:$.context()+'/get/schedule',
										method:'post',
										data:JSON.stringify(json),
										dataType:'json',
										contentType:'application/json',
										success:function(data){
											
											var table='<table class="kal-gg-sche-con-table2">';
											var th='<tr >'
											+	'<th>SCHEDULE NO</th>'	
											+	'<th>DEPARTURE</th>'
											+	'<th>DESTINATION</th>'
											+	'<th>DATE</th>'
											+	'<th>DEPARTURE TIME</th>'
											+	'<th>DESTINATION TIME</th>'
											+	'</tr>';
											table+=th;
											
											var nothing='<p>해당 값이 없습니다.</p>'
											
											var td='';
											var revise='';
											var reviseView={};
											var deletedata={};
											$.each(data.view,function(i,item){
												deletedata['adminScheDelBtn-'+i]=item.scheSeq;
												
												reviseView['adminScheUpBtn-'+i]='<tr>'
																				    +'<td>'+" "+item.scheSeq+" "+'</td>'
																					+'<td>'+item.routeFrom+'</td>'
																					+'<td>'+item.routeTo+'</td>'
																					+'<td>'+item.scheDate+'</td>'
																					+'<td>'+item.scheDepartureTime+'</td>'
																					+'<td>'+item.scheArrivalTime+'</td>'
																			   +'</tr>';
												td+='<tr>'
													    +'<td>'+item.scheSeq+'</td>'
														+'<td>'+item.routeFrom+'</td>'
														+'<td>'+item.routeTo+'</td>'
														+'<td>'+item.scheDate+'</td>'
														+'<td>'+item.scheDepartureTime+'</td>'
														+'<td>'+item.scheArrivalTime+'</td>'
													+'</tr>';
												
											     
											    revise+='<div class="kal-gg-sche-con-btn-add">'
											    +'<button class="kal-gg-sche-con-btn" id="adminScheDelBtn-'+i+'">delete</button>'
												+'<button class="kal-gg-sche-con-btn" id="adminScheUpBtn-'+i+'">update</button>'
												+'</div>'; 
											    
											});
											
											table+=td;
											table+='</table>';
											$('#scheListWrapper').empty();
											if(data.view==''){
												$('#scheListWrapper').append(nothing);
												}else{
													$('#scheListWrapper').append(table);
													}
											$('#scheUpdateDeleteBtnWrapper').empty();
											$('#scheUpdateDeleteBtnWrapper').append(revise);
											
											for(var i=0;i<Object.keys(reviseView).length;i++){
												/*--UpdateSchedule--*/
												$('#adminScheUpBtn-'+i).on('click',function(){
													$('#updateWrapper').empty();
													$('#updateWrapper').append(scheUpdateCon());
													
													var updateTabelTd=reviseView[$(this).attr('id')];
													createTd(updateTabelTd);
												});
												/*--DelSchedule--*/
												$('#adminScheDelBtn-'+i).on('click',function(){
													var delSche=deletedata[$(this).attr('id')];
													alert('삭제할 데이터값'+delSche);
													delSchedule(delSche);
												})
											}
											
											var createTd=function(Td){
												var updateTabel,updateTabelTh='';
												updateTabel='<table class="kal-gg-sche-con-table">';
												updateTabelTh='<tr>'
															+	'<th>SCHEDULE NO</th>'	
															+	'<th>DEPARTURE</th>'
															+	'<th>DESTINATION</th>'
															+	'<th>DATE</th>'
															+	'<th>DEPARTURE TIME</th>'
															+	'<th>DESTINATION TIME</th>'
															+ '</tr>';
												updateTabel+=updateTabelTh;
												updateTabel+=Td;
												updateTabel+='<tr>'
												+               '<td colspan="3">출발지와 도착지는 Route 페이지에서 갱신 가능합니다.</td>'
												+               '<td><input type="text" id="gg-sche-reviseDate"/></td>'
											    +				'<td><input type="text" id="gg-sche-reviseDeparTime"/></td>'
											    +				'<td><input type="text" id="gg-sche-reviseArrTime"/></td>'
											    +				'</tr>';
												updateTabel+='</table>';
												$('#scheUpdateTable').empty();
												$('#scheUpdateTable').append(updateTabel);
												g$('#gg-sche-reviseDate').datepicker({
										            dateFormat: 'yy-mm-dd'
										        });
												$('#scheUpdateConfirm').on('click',function(){
													
													var json={scheNum:Td.split(' ')[1],
															scheDate:$('#gg-sche-reviseDate').val(),
															scheReviseDeparTime:$('#gg-sche-reviseDeparTime').val(),
															scheReviseArrTime:$('#gg-sche-reviseArrTime').val()};
													
													$.ajax({
														url:$.context()+'/put/schedule',
														method:'post',
														data:JSON.stringify(json),
														dataType:'json',
														contentType:'application/json',
														success:function(data){alert('업데이트완료')},
														error:function(xhr,status,msg){alert('업데이트 실패'+msg);}
													})
												});
											};
											
											var delSchedule=function(delSche){
												$.ajax({
													url:$.context()+'/del/schedule',
													method:'post',
													data:JSON.stringify({'scheSeq':delSche}),
													dataType:'json',
													contentType:'application/json',
													success:function(data){alert('삭제완료')},
													error:function(xhr,status,msg){alert('삭제실패이유'+msg)}
												})
											}
										},
										error:function(xhr,status,msg){alert('스케줄확인실패'+msg)}
									});
								});
						}
							/*--mainContainer--*/
							adminSchedule();
							
							
							/*--mouseCursor--*/
							$('#navUser').mouseenter(function(){
								$('#navUser').attr('src',$.context()+'/resources/img/admin/nav/user2.jpg');
							});
							$('#navUser').mouseleave(function(){
								$('#navUser').attr('src',$.context()+'/resources/img/admin/nav/user1.jpg');
							});
							$('#navRes').mouseenter(function(){
								$('#navRes').attr('src',$.context()+'/resources/img/admin/nav/res2.jpg');
							});
							$('#navRes').mouseleave(function(){
								$('#navRes').attr('src',$.context()+'/resources/img/admin/nav/res1.jpg');
							});
							$('#navSche').mouseenter(function(){
								$('#navSche').attr('src',$.context()+'/resources/img/admin/nav/sche2.jpg');
							});
							$('#navSche').mouseleave(function(){
								$('#navSche').attr('src',$.context()+'/resources/img/admin/nav/sche1.jpg');
							});
							$('#navBoard').mouseenter(function(){
								$('#navBoard').attr('src',$.context()+'/resources/img/admin/nav/board2.jpg');
							});
							$('#navBoard').mouseleave(function(){
								$('#navBoard').attr('src',$.context()+'/resources/img/admin/nav/board1.jpg');
							});
							$('#navFlight').mouseenter(function(){
								$('#navFlight').attr('src',$.context()+'/resources/img/admin/nav/flight2.jpg');
							});
							$('#navFlight').mouseleave(function(){
								$('#navFlight').attr('src',$.context()+'/resources/img/admin/nav/flight1.jpg');
							});
							$('#navRoute').mouseenter(function(){
								$('#navRoute').attr('src',$.context()+'/resources/img/admin/nav/route2.jpg');
							});
							$('#navRoute').mouseleave(function(){
								$('#navRoute').attr('src',$.context()+'/resources/img/admin/nav/route1.jpg');
							});
							$('#navStat').mouseenter(function(){
								$('#navStat').attr('src',$.context()+'/resources/img/admin/nav/stat2.jpg');
							});
							$('#navStat').mouseleave(function(){
								$('#navStat').attr('src',$.context()+'/resources/img/admin/nav/stat1.jpg');
							});
							
							
						    /*--btnMouseClick--*/
							$("#kal-gg-nav-stat").on('click',function(){
								$(".kal-gg-nav-drop").is(":visible");
								 $(".kal-gg-nav-drop").slideToggle("slow");
						    });
							
							
							$('#kal-gg-nav-drop-con').on('click',function(){
								alert('구현되지 않는 기능입니다.');
							}); 
							$('#kal-gg-nav-drop-user').on('click',function(){
								alert('구현되지 않는 기능입니다.');
							}); 
							$('#kal-gg-nav-drop-res').on('click',function(){
								alert('구현되지 않는 기능입니다.');
							}); 
							$('#kal-gg-nav-drop-searching').on('click',function(){
								alert('구현되지 않는 기능입니다.');
							}); 
							$('#kal-gg-nav-drop-sales').on('click',function(){
								googleChartD();
								
							}); 
							$('#kal-gg-nav-user').on('click',function(){
								alert('구현되지 않는 기능입니다.');
							});
							$('#kal-gg-nav-res').on('click',function(){
								adminReservation();
							});
							$('#kal-gg-nav-sche').on('click',function(){
								adminSchedule();
							});
							
							$('#kal-gg-nav-board').on('click',function(){
								alert('구현되지 않는 기능입니다.');
							});
							$('#kal-gg-nav-flight').on('click',function(){
								$('#admin-wrapper').empty();
								$('#admin-wrapper').append(flightCon());
								
							});
							$('#kal-gg-nav-route').on('click',function(){
								adminRoute();
							});
							
						}else{alert('로그인 실패')}},
						error:function(xhr,status,msg){
							alert('로그인실패'+msg)
						}
						
					});
				});
			return false;
			});
		});
		
	};
	return {onCreate:onCreate}  
})();

/*
========main-reservation============
@AUTHOR : Song sang hun
@CREATE DATE : 2017-05-10
@UPDATE DATE : 2017-05-19
@DESC :
===============================
*/

main.reservation = (function(){
	
	var reservationService,reservationView,memberView;
	var loginedId,wrapper;
	var onCreate = function(){
		reservationView = $.javascript()+'/view.reservation.js';
		wrapper = $('#wrapper');
		reservationService = $.javascript()+'/service.reservation.js';
		memberView =  $.javascript()+'/view.member.js';
		loginedId = $.cookie('loginedId');
		setContentView();
	};
	
	var setContentView = function(){
		
		$.ajax({ 
			url: $.context()+'/getMemberInfo',
			method: 'POST',
			data : JSON.stringify({
				userId : loginedId 
			}),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				var info = {
						familyName : data.member.familyName,
						firstName : data.member.firstName,
						korName : data.member.korName,
						phoneNo : data.member.phoneNo,
						birthDate : data.member.birthDate,
						userGen : data.member.userGen,
						userEmail : data.member.userEmail,
						userId : data.member.userId
				};
				reservationFirstPageInit(info);
			},
			error : function(xhr, status,msg){
				alert('ERROR'+msg);
			}
		});
	};
	var reservationFirstPageInit = function(info){
		$.getScript(memberView,function(){
			wrapper.empty();
			main.member.afterLoginSubGnbOnclick();
			/*wrapper.append(main.member.afterLoginSubGnbOnclick());*/
			main.member.afterLoginMainGnbOnclick();
			/*wrapper.append(main.member.afterLoginMainGnbOnclick());*/
			reservationPage(info);
			$('#kal-logo').on('click',function(){
				alert('메인페이지로 이동');
				wrapper.empty();
				main.member.mainPageAfterLogin();
			});
		});
	};
	
	var reservationPage = function(info){
		var fromSeatClass = false;
		var fromSelectSeat = false;
		var fromScheSeq = false;
		var toSeatClass = false;
		var toSelectSeat = false;
		var toScheSeq = false;
		var startRouteFrom = false;
		var startRouteTo = false;
		var endRouteFrom = false;
		var endRouteTo = false;
		var scheStartDay = false;
		var scheEndDay = false;
		var scheStartTime = false;
		var scheEndTime = false;
		var route = false;
		var fromRoute = false;
		var toRoute = false;
		var userInfo = {
				familyName : info.familyName,
				firstName : info.firstName,
				korName : info.korName,
				phoneNo : info.phoneNo,
				birthDate : info.birthDate,
				userGen : info.userGen,
				userEmail : info.userEmail
		};
		$.when(
			    $.getScript( reservationView ),
			    $.getScript(reservationService ),
			    $.Deferred(function( deferred ){
			        $( deferred.resolve );
			    })
			).done(function(){
				wrapper.append(reservationFirstPage()); 
				var autoRouteFrom=[];
				var routeAuto={
						getRoute:function(){
							$.getJSON($.context()+'/get/routeFrom',function(data){
								$.each(data.list,function(i,item){
									autoRouteFrom[i]=item.routeFrom;
								});
							});
						}
				};
				routeAuto.getRoute();
				g$('.kal-res1-jh-departureArea').autocomplete({
					source:autoRouteFrom
				});
				g$('.kal-res1-jh-arrivalArea').autocomplete({
					source:autoRouteFrom
				});
				
				$('#res-departureArea-btn').on('click',function(){
					var reservationRoutePage = createReservationRoutePage();
					$.magnificPopup.open({
						closeBtnInside:true,
						closeOnContentClick:false,
						alignTop: true,
						fixedBgPos:true,
						fixedContentPos:true,
						items:{src:
							reservationRoutePage,
						},
						midClick:true,
						overflowY: 'auto',
						removalDelay:'0',
						type:'inline'});
				 	$.getJSON($.context()+'/res/getRouteList',function(data){
				 		$('.res-airport-list').empty();
				 		$.each(data.list,function(i,j){
				 			$('.res-airport-list').append('<il class="res-nation-list-il"><a class="res-nation-list-il-a" href="javascript:void(0);">'+j.routeFrom+'</a></il>');
				 		});
				 		$('.res-nation-list-il-a').on('click',function(){
				 			startRouteFrom = this.innerText;
				 			endRouteTo = startRouteFrom;
				 			$('.kal-res1-jh-departureArea').attr('placeholder',startRouteFrom);
							$.magnificPopup.close();
				 		});
				 	});
				});
					
				$('#res-arrivalArea-btn').on('click',function(){
					var reservationRoutePage = createReservationRoutePage();
					$.magnificPopup.open({
						closeBtnInside:true,
						closeOnContentClick:false,
						alignTop: true,
						fixedBgPos:true,
						fixedContentPos:true,
						items:{src:
							reservationRoutePage,
						},
						midClick:true,
						overflowY: 'auto',
						removalDelay:'0',
						type:'inline'});
					$.getJSON($.context()+'/res/getRouteList',function(data){
				 		$('.res-airport-list').empty();
				 		$.each(data.list,function(i,j){
				 			$('.res-airport-list').append('<il class="res-nation-list-il"><a class="res-nation-list-il-a" href="javascript:void(0);">'+j.routeFrom+'</a></il>');
				 		});
				 		$('.res-nation-list-il-a').on('click',function(){
				 			startRouteTo = this.innerText;
				 			endRouteFrom = startRouteTo;
				 			$('.kal-res1-jh-arrivalArea').attr('placeholder',startRouteTo);
							$.magnificPopup.close();
				 		});
				 	});
				});
				var checkDay = 0;
				$('#res-dateSelect-btn').on('click',function(){
					if(startRouteFrom == '' && startRouteTo == ''){
						alert('출발지와 도착지를 먼저 입력해주세요.');
					}else{
						var reservationCalendar = createReservationCalendar();
						$.magnificPopup.open({
							closeBtnInside:true,
							closeOnContentClick:false,
							alignTop: true,
							fixedBgPos:true,
							fixedContentPos:true,
							items:{src:
								reservationCalendar,
							},
							midClick:true,
							overflowY: 'auto',
							removalDelay:'0',
							type:'inline'});
						$('calendar-moveBtn').on('click',function(){
							alert('스케쥴이 등록되어있지 않습니다.');
						});
						$('.from-day').on('click',function(){
							$('.from-day').removeClass('res-click-start-day');
							$(this).addClass('res-click-start-day');
							checkDay = this.innerText;
							if(this.innerText < 10){
								scheStartDay = '2017-06-0'+this.innerText;
							}else{
								scheStartDay = '2017-06-'+this.innerText;
							}
							$.ajax({
								url: $.context()+'/getRouteAndSche',
								method: 'POST',
								data : JSON.stringify({
									routeFrom : startRouteFrom,
									routeTo : startRouteTo,
									scheDate : scheStartDay,
									userId : loginedId
								}),
								dataType : 'json',
								contentType : 'application/json',
								success : function(data){
									if(data.result === 'success'){
										alert('가는 좌석예약 가능');
										fromScheSeq = data.scheSeq;
										fromRoute = data.routeSeq;
										scheStartTime = data.scheDepartureTime;
										scheEndTime = data.scheArrivalTime;
										reservationSeatFromBtn(fromScheSeq);
									}else{
										alert('선택하신 날짜에 이미 예약이 되어있습니다.');
									}
								},
								error : function(xhr, status,msg){
									alert('ERROR'+msg);
								}
							});
							
						});
						$('.to-day').on('click',function(){
							if(this.innerText == checkDay){
								alert('오는날 선택은 가는날 이후로 선택해주세요.');
							}else{
								if(Number(this.innerText) < Number(checkDay)){
									alert('오는날 선택은 가는날 이후로 선택해주세요.');
								}else{
									$('.to-day').removeClass('res-click-end-day');
									$(this).addClass('res-click-end-day');
									if(this.innerText < 10){
										scheEndDay = '2017-06-0'+this.innerText;	
									}else{
										scheEndDay = '2017-06-'+this.innerText;	
									}
									$('.kal-res1-jh-dateSelect').attr('placeholder',scheStartDay + '/' + scheEndDay);
									$.ajax({
										url: $.context()+'/getRouteAndSche',
										method: 'POST',
										data : JSON.stringify({
											routeFrom : endRouteFrom,
											routeTo : endRouteTo,
											scheDate : scheEndDay,
											userId : loginedId 
										}),
										dataType : 'json',
										contentType : 'application/json',
										success : function(data){
											if(data.result === 'success'){
												alert('오는 좌석예약 가능');
												toScheSeq = data.scheSeq;
												toRoute = data.routeSeq;
												reservationSeatToBtn(toScheSeq);
											}else{
												alert('선택하신 날짜에 이미 예약이 되어있습니다.');
											}
										},
										error : function(xhr, status,msg){
											alert('ERROR'+msg);
										}
									});
								}
							}
						});
						$('.res-select-day-btn').on('click',function(){
							$.magnificPopup.close();
						});
					}
				});
				
				$('#reservationGoPage2').on('click',function(){
					var reservationInfo = {
							startRouteFrom : startRouteFrom,
							startRouteTo : startRouteTo,
							endRouteFrom : endRouteFrom,
							endRouteTo : endRouteTo,
							scheStartDay : scheStartDay,
							scheStartTime : scheStartTime,
							scheEndDay : scheEndDay,
							scheEndTime : scheEndTime
					};
					
					var seatInfo = {
							fromSeatClass : fromSeatClass,
							fromSelectSeat : fromSelectSeat,
							fromScheSeq : fromScheSeq,
							toSeatClass : toSeatClass,
							toSelectSeat : toSelectSeat,
							toScheSeq : toScheSeq
					};
					
					if(nullCheck(startRouteFrom)==true){
						$('.res-route-check-text').html('');
					}
					if(nullCheck(startRouteTo)==true){
						$('.res-route-check-text').html('');
					}
					if(nullCheck(scheStartDay)==true){
						$('.res-route-check-text').html('');
					}
					if(nullCheck(scheEndDay)==true){
						$('.res-route-check-text').html('');
					}
					if(nullCheck(startRouteFrom)==false){
						$('.res-route-check-text').html('<span style="color:red;">필수값이 입력되지 않았습니다.</span>');
					}
					if(nullCheck(startRouteTo)==false){
						$('.res-route-check-text').html('<span style="color:red;">필수값이 입력되지 않았습니다.</span>');
					}
					if(nullCheck(scheStartDay)==false){
						$('.res-route-check-text').html('<span style="color:red;">필수값이 입력되지 않았습니다.</span>');
					}
					if(nullCheck(scheEndDay)==false){
						$('.res-route-check-text').html('<span style="color:red;">필수값이 입력되지 않았습니다.</span>');
					}
					if(nullCheck(startRouteFrom)==true && nullCheck(startRouteTo)==true && 
							nullCheck(scheStartDay)==true && nullCheck(scheEndDay)==true
					){
						if(startRouteFrom === startRouteTo){
							$('.res-route-check-text').html('<span style="color:red;">출발지와 목적지가 같습니다.</span>');
						}else{
							if(fromSeatClass != false && fromSelectSeat != false &&	fromScheSeq != false
									&& toSeatClass != false && toSelectSeat != false &&	toScheSeq != false
							){
								reservationSecondPageInit(reservationInfo,fromRoute,toRoute,userInfo,seatInfo,info);
							}else{
								$('.res-route-check-text').html('<span style="color:red;">필수값이 입력되지 않았습니다.</span>');
							}
						}
					}
				});
		    });	
		var reservationSeatFromBtn = function(fromScheSeq){
			$.getScript(reservationService);
			$('#kal-reservation-select-seatFrom').on('click',function(){
				var paramScheSeq = fromScheSeq;
				var reservationSeatPage = createReservationSeatPage();
				$.magnificPopup.open({
					closeBtnInside:true,
					closeOnContentClick:false,
					alignTop: true,
					fixedBgPos:true,
					fixedContentPos:true,
					items:{src:
						reservationSeatPage
					},
					midClick:true,
					overflow: 'scroll',
					removalDelay:'0',
					type:'inline'});
				first_seat(2,4);
				second_seat(2,7);
				third_seat(6,9);
				var seatClassTemp = '1';
				$.ajax({
					url : $.context()+'/list/reservedSeat1',
					method : 'POST',
					data : JSON.stringify({
						 scheSeq : paramScheSeq,
						 seatClass : seatClassTemp 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						var seatList = data.list;
						fristReservedSeat(seatList);
						reserFirstSeatClick();
					},
					error : function(xhr, status,msg){
						alert('ERROR'+msg);
					}
				});
				var seatClassTemp = '2';
				$.ajax({
					url: $.context()+'/list/reservedSeat2',
					method: 'POST',
					data : JSON.stringify({
						 scheSeq : paramScheSeq,
						 seatClass : seatClassTemp 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						var seatList = data.list;
						secondReservedSeat(seatList);
						reserSecondSeatClick();
					},
					error : function(xhr, status,msg){
						alert('ERROR'+msg);
					}
				});
				var seatClassTemp = '3';
				$.ajax({
					url: $.context()+'/list/reservedSeat3',
					method: 'POST',
					data : JSON.stringify({
						 scheSeq : paramScheSeq,
						 seatClass : seatClassTemp 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						var seatList = data.list;
						thirdReservedSeat(seatList);
						$('.reserved_seat').on('click', function(){
							alert('이미 예약된 좌석입니다.다른 좌석을 선택해주세요.');
						});
						reserThirdSeatClick();
					},
					error : function(xhr, status,msg){
						alert('ERROR'+msg);
					}
					
				});
				
				$('.selected-seat-btn').on('click',function(){
					if(select_seat.innerText === '좌석을 선택해주세요.'){
						alert('좌석을 선택하시고 좌석확인버튼을 눌러주세요.');
					}else{
						var seatSelectTemp = select_seat.innerText;
						var seatSelectTempArr = select_seat.innerText.split(' ');
						fromSelectSeat = seatSelectTempArr[2];
						alert(seatSelectTemp);
						if(seatSelectTempArr[1]==='일등석'){
							fromSeatClass = '1';
						}else if(seatSelectTempArr[1]==='프레스티지석'){
							fromSeatClass = '2';
						}else{
							fromSeatClass = '3';
						}
						$.magnificPopup.close();
					}
				});
				$('.cancle-seat-btn').on('click',function(){
					$.magnificPopup.close();
				});
			});
		};
		var reservationSeatToBtn = function(toScheSeq){
			$.getScript(reservationService);
			$('#kal-reservation-select-seatTo').on('click',function(){
				var paramScheSeq = toScheSeq;
				var reservationSeatPage = createReservationSeatPage();
				$.magnificPopup.open({
					closeBtnInside:true,
					closeOnContentClick:false,
					alignTop: true,
					fixedBgPos:true,
					fixedContentPos:true,
					items:{src:
						reservationSeatPage
					},
					midClick:true,
					overflow: 'scroll',
					removalDelay:'0',
					type:'inline'});
				first_seat(2,4);
				second_seat(2,7);
				third_seat(6,9);
				var seatClassTemp = '1';
				$.ajax({
					url : $.context()+'/list/reservedSeat1',
					method : 'POST',
					data : JSON.stringify({
						 scheSeq : paramScheSeq,
						 seatClass : seatClassTemp 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						var seatList = data.list;
						fristReservedSeat(seatList);
						reserFirstSeatClick();
					},
					error : function(xhr, status,msg){
						alert('ERROR'+msg);
					}
				});
				var seatClassTemp = '2';
				$.ajax({
					url: $.context()+'/list/reservedSeat2',
					method: 'POST',
					data : JSON.stringify({
						 scheSeq : paramScheSeq,
						 seatClass : seatClassTemp 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						var seatList = data.list;
						secondReservedSeat(seatList);
						reserSecondSeatClick();
					},
					error : function(xhr, status,msg){
						alert('ERROR'+msg);
					}
				});
				var seatClassTemp = '3';
				$.ajax({
					url: $.context()+'/list/reservedSeat3',
					method: 'POST',
					data : JSON.stringify({
						 scheSeq : paramScheSeq,
						 seatClass : seatClassTemp 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						var seatList = data.list;
						thirdReservedSeat(seatList);
						$('.reserved_seat').on('click', function(){
							alert('이미 예약된 좌석입니다.다른 좌석을 선택해주세요.');
						});
						reserThirdSeatClick();
					},
					error : function(xhr, status,msg){
						alert('ERROR'+msg);
					}
					
				});
				
				$('.selected-seat-btn').on('click',function(){
					if(select_seat.innerText === '좌석을 선택해주세요.'){
						alert('좌석을 선택하시고 좌석확인버튼을 눌러주세요.');
					}else{
						var seatSelectTemp = select_seat.innerText;
						var seatSelectTempArr = select_seat.innerText.split(' ');
						toSelectSeat = seatSelectTempArr[2];
						alert(seatSelectTemp);
						if(seatSelectTempArr[1]==='일등석'){
							toSeatClass = '1';
						}else if(seatSelectTempArr[1]==='프레스티지석'){
							toSeatClass = '2';
						}else{
							toSeatClass = '3';
						}
						$.magnificPopup.close();
					}
				});
				$('.cancle-seat-btn').on('click',function(){
					$.magnificPopup.close();
				});
			});
		};
	};
	var reserFirstSeatClick = function(){
			$('.seat1').on('click',function(){
			var classSeat = $('a[class^=seat]');
			var select_seat = $('#select_seat');	
			if(this.children[0].getAttribute('src') === ''+$.image()+'/reservation/plane/1seat_normal.png'){
				var chk = true;
				for(var i = 0; i < classSeat.length; i++){
					if(classSeat.eq(i).hasClass('chkSeat')){
						alert("이미 선택 된 자석이 있습니다.");
						chk = false;
						break;
					}
				}
				if(chk){
					$(this).addClass("chkSeat");
					$(this).find('img').attr('src',''+$.image()+'/reservation/plane/1seat_selected.png');
					var select_seat1 = $(this).attr('id').toUpperCase();
					select_seat.html('좌석: 일등석 '+select_seat1+' 입니다.');
				}
			}else{
				$(this).removeClass('chkSeat');
				$(this).find('img').attr('src',''+$.image()+'/reservation/plane/1seat_normal.png');
				select_seat.html('좌석을 선택해주세요.');
			}
		});
	};
	var reserSecondSeatClick = function(){
			$('.seat2').on('click',function(){
			var classSeat = $('a[class^=seat]');
			var select_seat = $('#select_seat');
			if($(this).find('img').attr('src') === ''+$.image()+'/reservation/plane/2seat_normal.png'){
				var chk = true;
				for(var i = 0; i < classSeat.length; i++){
					if(classSeat.eq(i).hasClass('chkSeat')){
						alert("이미 선택 된 자석이 있습니다.");
						chk = false;
						break;
					}
				}
				if(chk){
					$(this).addClass("chkSeat");
					$(this).find('img').attr('src',''+$.image()+'/reservation/plane/2seat_selected.png');	
					var select_seat2 = $(this).attr('id').toUpperCase();
					select_seat.html('좌석: 프레스티지석 '+select_seat2+' 입니다.');
				}	
			}else{
				$(this).removeClass('chkSeat');
				$(this).find('img').attr('src',''+$.image()+'/reservation/plane/2seat_normal.png');
				select_seat.html('좌석을 선택해주세요.');
			}
		}); 
	};
	
	var reserThirdSeatClick = function(){
			$('.seat3').on('click',function(){
			var classSeat = $('a[class^=seat]');
	//		$("a").toggleClass("select_seat"); a 태그 전체에 적용되서 안됨.
			var select_seat = $('#select_seat');
			if($(this).find('img').attr('src') === ''+$.image()+'/reservation/plane/3seat_normal.png'){
				var chk = true;
				for(var i = 0; i < classSeat.length; i++){
					if(classSeat.eq(i).hasClass('chkSeat')){
						alert("이미 선택 된 자석이 있습니다.");
						chk = false;
						break;
					}
				}
				if(chk){
					$(this).addClass("chkSeat");
					$(this).find('img').attr('src',''+$.image()+'/reservation/plane/3seat_selected.png');
					var select_seat3 = $(this).attr('id').toUpperCase();
					select_seat.html('좌석: 일반석 '+select_seat3+' 입니다.');
				}
			}else{
				$(this).removeClass('chkSeat');
				$(this).find('img').attr('src',''+$.image()+'/reservation/plane/3seat_normal.png');
				select_seat.html('좌석을 선택해주세요.');
			}
		});
	};
	
	
	var reservationSecondPageInit = function(reservationInfo,fromRoute,toRoute,userInfo,seatInfo,info){
		$.when(
			    $.getScript( reservationView ),
			    $.getScript(reservationService ),
			    $.Deferred(function( deferred ){
			        $( deferred.resolve );
			    })
			    ).done(function(){
			var fromSeatClass = seatInfo.fromSeatClass;
			var toSeatClass = seatInfo.toSeatClass;
			var fromRouteSeq = fromRoute;
			var toRouteSeq = toRoute;
			var brith = userInfo.birthDate;
			var fromPrice = resPrice(brith,fromRouteSeq,fromSeatClass);
			var toPrice = resPrice(brith,toRouteSeq,toSeatClass);
			var totalPrice = fromPrice + toPrice;
			reservationGnbInit(reservationInfo,info);
			wrapper.append(reservationSecondPage(reservationInfo,fromPrice,toPrice,totalPrice));
			$('#reservationGoPage3').on('click',function(){
				reservationThirdPageInit(reservationInfo,userInfo,seatInfo,fromPrice,toPrice,info,totalPrice);
			});
		});
	};
	
	var reservationThirdPageInit = function(reservationInfo,userInfo,seatInfo,fromPrice,toPrice,info,totalPrice){
		$.when(
			    $.getScript( reservationView ),
			    $.getScript(reservationService ),
			    $.Deferred(function( deferred ){
			        $( deferred.resolve );
			    })
			    ).done(function(){
					reservationGnbInit(reservationInfo,info);
					wrapper.append(reservationThirdPage(reservationInfo,userInfo,fromPrice,toPrice,totalPrice));
					
					$('#reservationGoPage4').on('click',function(){
						var phoneNo = $('#res-3phoneNo').val();
						var email = $('#res-3userEmail').val();
						/*연락처 정규식*/
						if(phoneNoCheck(phoneNo)==false){
							$('.res-phoneNo-check-text').html('<span style="color:red;">연락처 양식에 맞지 않거나 필수 입력값입니다.</span>');
						}
						if(phoneNoCheck(phoneNo)==true){
							$('.res-phoneNo-check-text').html('');
						}
						/*이메일 정규식*/
						if(emailCheck(email)==false){
							$('.res-userEmail-check-text').html('<span style="color:red;">이메일 양식에 맞지 않거나 필수 입력값입니다.</span>');
						}
						if(emailCheck(email)==true){
							$('.res-userEmail-check-text').html('');
						}
						if(phoneNoCheck(phoneNo)==true &&
								emailCheck(email)==true){
								  $.ajax({
									  url : $.context() + '/updatePhoneAndEmail',
									  method : 'POST',
									  data : JSON.stringify({
										  id : loginedId,
										  phoneNo : phoneNo,
										  email : email
									  }),
									  dataType : "json",
									  contentType : "application/json",
									  success : function(data){
										  if(data.result==='success'){
											  alert('연락처가 변경되었습니다.');
											  reservationFourthPageInit(reservationInfo,userInfo,seatInfo,fromPrice,toPrice,info,totalPrice);
										  }else{
											  alert('연락처가 변경되었습니다.');
										  }
									  },
									  error : function(xhr,status,msg){
										  alert('회원 수정에 실패하였습니다.');
									  }
								  });
							   }
					});
			    });
	};
	var reservationFourthPageInit = function(reservationInfo,userInfo,seatInfo,fromPrice,toPrice,info,totalPrice){
		$.getScript(reservationView);
			reservationGnbInit(reservationInfo,info);
			wrapper.append(reservationFourthPage(reservationInfo,userInfo,fromPrice,toPrice,totalPrice));
			$('#reservationGoPage5').on('click',function(){
				var seatCode = seatInfo.fromSelectSeat;
				var scheSeq = seatInfo.fromScheSeq;
				var userId = info.userId;
				var resPrice = String(fromPrice);
				var seatClass = seatInfo.fromSeatClass;
				$.ajax({
					url : $.context()+'/postReservedSeat',
					method : 'POST',
					data : JSON.stringify({
						seatCode : seatCode,
						scheSeq : scheSeq,
						userId : userId,
						resPrice : resPrice,
						seatClass : seatClass 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.reserved === 'reservedSeat'){
							alert('가는날에 선택하신 좌석은 이미 예약된 좌석입니다.');
							reservationFirstPageInit(info);
						}else if(data.result === 'fail'){
							alert('예약에 실패하였습니다.');
							alert('예약 첫페이지로 돌아갑니다.');
							reservationFirstPageInit(info);
						}else{
							alert('가는날 예약이 완료되었습니다.');
						}
					},
					error : function(xhr, status,msg){
						alert('error'+msg);
					}
				});
				seatCode = seatInfo.toSelectSeat;
				scheSeq = seatInfo.toScheSeq;
				userId = info.userId;
				resPrice = String(toPrice);
				seatClass = seatInfo.toSeatClass;
				$.ajax({
					url : $.context()+'/postReservedSeat',
					method : 'POST',
					data : JSON.stringify({
						seatCode : seatCode,
						scheSeq : scheSeq,
						userId : userId,
						resPrice : resPrice,
						seatClass : seatClass 
					}),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.reserved === 'reservedSeat'){
							alert('오는날에 선택하신 좌석은 이미 예약된 좌석입니다.');
							reservationFirstPageInit(info);
						}else if(data.result === 'fail'){
							alert('예약에 실패하였습니다.');
							alert('예약 첫페이지로 돌아갑니다.');
							reservationFirstPageInit(info);
						}else{
							alert('오는날 예약이 완료되었습니다.');
							reservationFifthPageInit(reservationInfo,userInfo,seatClass,info);
						}
					},
					error : function(xhr, status,msg){
						alert('error'+msg);
					}
				});
			});
	};
	var reservationFifthPageInit = function(reservationInfo,userInfo,info){
		$.getScript(reservationView);
			reservationGnbInit(reservationInfo,info);
			wrapper.append(reservationFifthPage(reservationInfo,userInfo));
			$('#goMainPage').on('click',function(){
				wrapper.empty();
				main.member.mainPageAfterLogin();
			});
	};
	var reservationGnbInit = function(reservationInfo,info){
		$.getScript(reservationView);
		var routeFromArrTemp = reservationInfo.startRouteFrom.split('(');
		var routeFromArr = routeFromArrTemp[1].split(')');
		var routeFrom = routeFromArr[0];
		var routeToArrTemp = reservationInfo.startRouteTo.split('(');
		var routeToArr = routeToArrTemp[1].split(')');
		var routeTo = routeToArr[0];
			wrapper.empty();
			wrapper.append(reservationGnb(routeFrom,routeTo,reservationInfo));
			$('#kal-reservation-logo').on('click',function(){
				wrapper.empty();
				main.member.mainPageAfterLogin();
			});
			$('#reservation-back-btn').on('click',function(){
				wrapper.empty();
				var goBackScheBtn = $.magnificPopup.open({
			        items : {
			           src : '<div class="white-popup">'
			              +'<p id="emailAuthContent" class="kal-jh-auth-head-text">스케줄 선택 페이지로 돌아가시겠습니까 ?</p>'
			              +'<div class="kal-jh-auth-wrapper">'
			              +   '<button id="goBackYes" class="kal-jh-gobacksche-submit-btn" onSubmit="return check();">예</button>'
			              +   '<button id="goBackNo" class="kal-jh-gobacksche-submit-btn" onSubmit="return check();">아니오</button>'
			              +'</div>'
			              +'</div>',
			           type: 'inline'
			           },
			           fixedContentPos: true,  
			             fixedBgPos: true,  
			             overflowY: 'auto',  
			             closeBtnInside: true,  
			             preloader: false,
			             midClick: true,  
			             removalDelay: 300,  
			             closeOnBgClick: false
			     });
				$('#goBackYes').on('click',function(){
					alert('스케쥴 선택 페이지로 돌아갑니다.');
					$.magnificPopup.close();
					main.reservation.onCreate();
				});
				$('#goBackNo').on('click',function(){
					$.magnificPopup.close();
				});
			});
			
	};
	return{
		onCreate:onCreate,
		reserFirstSeatClick:reserFirstSeatClick,
		reserSecondSeatClick:reserSecondSeatClick,
		reserThirdSeatClick:reserThirdSeatClick
		};
})();
main.boardQna=(function(){
	   
	var faq = function(){
        var boardView=$.javascript()+'/view.board.js';
        var memberView=$.javascript()+'/view.member.js';
        var loginedId = $.cookie('loginedId');
        var image=$.image();
        $.when(
                $.getScript(boardView),
                $.getScript(memberView),
                $.Deferred(function(deferred){
                    $(deferred.resolve);
                })
                ).done(function(){
        $('#wrapper').empty();
        main.member.afterLoginSubGnbOnclick();
        main.member.afterLoginMainGnbOnclick();
        $('#wrapper').append(boardFAQlist());
            $('#kal-faq-ss-answer').hide();
            $('#kal-faq-ss-answer1').hide();
            $('#kal-faq-ss-answer2').hide();
            $('#kal-faq-ss-answer3').hide();
            $('#kal-faq-ss-answer4').hide();
            $('#kal-faqList-a').on('click',function(){
                $('#kal-faq-ss-answer').slideToggle('slow');
            });
            $('#kal-faqList-a1').on('click',function(){
                $('#kal-faq-ss-answer1').slideToggle('slow');
            });
            $('#kal-faqList-a2').on('click',function(){
                $('#kal-faq-ss-answer2').slideToggle('slow');
            });
            $('#kal-faqList-a3').on('click',function(){
                $('#kal-faq-ss-answer3').slideToggle('slow');
            });
            $('#kal-faqList-a4').on('click',function(){
                $('#kal-faq-ss-answer4').slideToggle('slow');
            });
            $('#wrapper').append(mainFooter());
        });
    };
return{
    faq : faq
    };
})();