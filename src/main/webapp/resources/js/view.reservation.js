/*
========reservation-ui=========
@AUTHOR : Song SangHun
@CREATE DATE : 2017-05-16
@UPDATE DATE : 2017-05-16
@DESC :
===============================
*/


function reservationGnb(routeFrom,routeTo,reservationInfo){
	return '<ul class="kal-res-jh-reser-gnb">'+
	'<li class="kal-res-jh-reser-gnb-logoBlock"><a id="kal-reservation-logo" class="kal-res-jh-reser-gnb-logoBlock" href="javascript:void(0)"><img src="'+$.image()+'/reservation/koreanAirLogo.png" alt="" /></a></li>'+	
	'<li class="kal-res-jh-reser-gnb-calendarIconBlock"><img src="'+$.image()+'/reservation/calendar.png" alt="" /></li>'+
	'<li class="kal-res-jh-reser-gnb-scheduleBlock">'+
		'<span class="kal-res-jh-reser-gnb-placeInfo">'+routeFrom+'<img src="'+$.image()+'/reservation/roundTripIcon.png">'+routeTo+'</span>'+
		'<span class="kal-res-jh-reser-gnb-dateInfo">'+reservationInfo.scheStartDay+' - '+reservationInfo.scheEndDay+'</span>'+
		'<button id="reservation-back-btn" class="kal-res-jh-reser-gnb-backBtn">항공편 조회</button>'+
		'<div class="kal-res-jh-reser-gnb-fareSelect"><span>운임/항공편 선택</span></div>'+
		'<div class="kal-res-jh-reser-gnb-passengerInfo"><span>탑승객 정보</span></div>'+
		'<div class="kal-res-jh-reser-gnb-payInfo"><span>결제 정보</span></div>'+
		'<div class="kal-res-jh-reser-gnb-confirm"><span>확인</span></div>'+
	'</li>'+
	'</ul>';
}

function createReservationRoutePage(){
	return '<div>'+
	'<div class="res-routeSelect" style="width:600px; background-color:white;margin: 300px auto;">'+
	  '<h2 style="padding: 20px 0;border: 1px solid black;border-bottom: none;width: 598px;margin: 0 auto;background-color: white;"> 공항를 선택하여 주십시오.</h2>'+
	  '<table style="width:600px;height:300px;border-collapse: collapse;margin:auto">'+
	  	'<tr style="border: 1px solid black;">'+
	    '<td id="tableLeft" style="width: 100%;border: 1px solid black; background-color: #0180a3;">'+
	  	  '<ul class="res-airport-list">'+
	  	  '</ul>'+
	  	'</td>'+
	    '</tr>'+
	  	'</table>'+
	  	'</div>'+
	  	'</div>';
}

function createReservationCalendar(){
	return '<div class="cal-main">'+
	'<div class="cal-container-from">'+
	 '<h2 style="padding: 0 0 20px;">가는날</h2>'+
		'<div class="calendar-wrapper">'+
		'<div class="calendar-base">'+
			'<div class="calendar-header">'+
			'<div class="month-wrapper">'+
				'<div class="header-prev-month"><a class="calendar-moveBtn" href="javascript:void(0);"> < </a></div>'+
				'<div class="header-current-month">JUNE</div>'+
				'<div class="header-next-month"><a class="calendar-moveBtn" href="javascript:void(0);"> > </a></div>'+
			'</div>'+
			'<div class="year-wrapper">'+
				'<div class="header-prev-year"><a class="calendar-moveBtn" href="javascript:void(0);"> < </a></div>'+
				'<div class="header-current-year">2017</div>'+
				'<div class="header-next-year"><a class="calendar-moveBtn" href="javascript:void(0);"> > </a></div>'+
			'</div>'+
			'</div>'+
				'<div class="small-wrapper">'+
				'<div class="calendar">'                                                                                   +
					'<div class="column">'                                                                                 +
						'<div class="sunday column-item weekday">Su</div>'                                                 +
						'<div class="column-item prev-month">28</div>'                                                     +
						'<div class=" column-item"><a class="sunday from-day" href="javascript:void(0);">4</a></div>'      +
						'<div class=" column-item"><a class="sunday from-day" href="javascript:void(0);">11</a></div>'     +
						'<div class=" column-item"><a class="sunday from-day" href="javascript:void(0);">18</a></div>'     +
						'<div class=" column-item"><a class="sunday from-day" href="javascript:void(0);">25</a></div>'     +
					'</div>'                                                                                               +
					'<div class="column">'                                                                                 +
						'<div class="column-item weekday">Mo</div>'                                                        +
						'<div class="column-item prev-month">29</div>'                                                     +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">5</a></div>'              +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">12</a></div>'             +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">29</a></div>'             +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">26</a></div>'             +
					'</div>'                                                                                               +
					'<div class="column">'                                                                                 +
						'<div class="column-item weekday">Tu</div>'                                                        +
						'<div class="column-item prev-month">30</div>'                                                     +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">6</a></div>'              +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">13</a></div>'             +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">20</a></div>'             +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">27</a></div>'             +
					'</div>'                                                                                               +
					'<div class="column">'                                                                                 +
						'<div class="column-item weekday">We</div>'                                                        +
						'<div class="column-item prev-month">31</div>'                                                     +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">7</a></div>'              +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">14</a></div>'             +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">21</a></div>'             +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">28</a></div>'             +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Th</div>'                                                      +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">1</a></div>'            +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">8</a></div>'            +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">15</a></div>'           +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">22</a></div>'           +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">29</a></div>'           +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Fr</div>'                                                      +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">2</a></div>'            +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">9</a></div>'            +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">16</a></div>'           +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">23</a></div>'           +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">30</a></div>'           +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Sa</div>'                                                      +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">3</a></div>'            +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">10</a></div>'           +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">17</a></div>'           +
						'<div class="column-item"><a class="from-day" href="javascript:void(0);">24</a></div>'           +
						'<div class="column-item next-month">1</div>'                                                    +
					'</div>'                                                                                             +
				'</div>'                                                                                                 +
				'</div>'                                                                                                 +
	 '</div>'                                                                                                            +
	 '</div>'                                                                                                            +
	'</div>'                                                                                                             +
	'<div class="cal-container-to">'                                                                                     +
	'<h2 style="padding: 0 0 20px;">오는날</h2>'                                                                           +
		'<div class="calendar-wrapper">'                                                                                 +
		'<div class="calendar-base">'                                                                                    +
			'<div class="calendar-header">'                                                                              +
			'<div class="month-wrapper">'                                                                                +
				'<div class="header-prev-month"><a class="calendar-moveBtn" href="javascript:void(0);"> < </a></div>'                                +
				'<div class="header-current-month">JUNE</div>'                                                           +
				'<div class="header-next-month"><a class="calendar-moveBtn" href="javascript:void(0);"> > </a></div>'                                +
			'</div>'                                                                                                     +
			'<div class="year-wrapper">'                                                                                 +
				'<div class="header-prev-year"><a class="calendar-moveBtn" href="javascript:void(0);"> < </a></div>'                                 +
				'<div class="header-current-year">2017</div>'                                                            +
				'<div class="header-next-year"><a class="calendar-moveBtn" href="javascript:void(0);"> > </a></div>'                                 +
			'</div>'                                                                                                     +
			'</div>'                                                                                                     +
				'<div class="small-wrapper">'                                                                            +
				'<div class="calendar">'                                                                                 +
					'<div class="column">'                                                                               +
						'<div class="sunday column-item weekday">Su</div>'                                               +
						'<div class="column-item prev-month">28</div>'                                                   +
						'<div class=" column-item"><a class="sunday to-day" href="javascript:void(0);">4</a></div>'      +
						'<div class=" column-item"><a class="sunday to-day" href="javascript:void(0);">11</a></div>'     +
						'<div class=" column-item"><a class="sunday to-day" href="javascript:void(0);">18</a></div>'     +
						'<div class=" column-item"><a class="sunday to-day" href="javascript:void(0);">25</a></div>'     +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Mo</div>'                                                      +
						'<div class="column-item prev-month">29</div>'                                                   +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">5</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">12</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">29</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">26</a></div>'             +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Tu</div>'                                                      +
						'<div class="column-item prev-month">30</div>'                                                   +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">6</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">13</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">20</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">27</a></div>'             +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">We</div>'                                                      +
						'<div class="column-item prev-month">31</div>'                                                   +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">7</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">14</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">21</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">28</a></div>'             +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Th</div>'                                                      +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">1</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">8</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">15</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">22</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">29</a></div>'             +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Fr</div>'                                                      +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">2</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">9</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">16</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">23</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">30</a></div>'             +
					'</div>'                                                                                             +
					'<div class="column">'                                                                               +
						'<div class="column-item weekday">Sa</div>'                                                      +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">3</a></div>'              +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">10</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">17</a></div>'             +
						'<div class="column-item"><a class="to-day" href="javascript:void(0);">24</a></div>'             +
						'<div class="column-item next-month">1</div>'                                                    +
					'</div>'                                                                                             +
				'</div>'                                                                                                 +
				'</div>'                                                                                                 +
	 '</div>'                                                                                                            +
	 '</div>'                                                                                                            +
	'</div>'     +
	'<div class="res-select-day">'+
	  '<button class="res-select-day-btn">선택</button>'+
	'</div>'+
	'</div>';
}



function createReservationSeatPage(){
	return '<div class="kal-ssh-plane">'+
	'<img src="'+$.image()+'/reservation/plane/plane_base.png"/>'+
	'<div id="first_seat" class="kal-ssh-first-seat">'+
	'</div>'+
	'<div id="second_seat" class="kal-ssh-second-seat">'+
	'</div>'+
	'<div id="third_seat" class="kal-ssh-third-seat">'+
	'</div>'+
	'<div class="kal-ssh-select-seat">'+
	'<button class="selected-seat-btn">좌석 확인</button>'+
	'<span id="select_seat" class="selected-seat-text">좌석을 선택해주세요.</span>'+
	'</div>'+
	'<div class="kal-ssh-select-cancle">'+
	'<button class="cancle-seat-btn">취소</button>'+
	'</div>'+
	'</div>'
	;
}


function first_seat(row, col){
	var first_seat = $('#first_seat');
	var id = 0;
	var temp = ['a','b'];
	var seatTable = '';
	var tempArr = '';
	for(var i=0;i<2;i++){
		id=0;
		for(var j=0;j<4;j++){
			id++;
			tempArr += temp[i] + id + '/'; 
		}
	}
	first_seat.html(seatTable);
	
	var idArr = tempArr.split("/");
	$.each(idArr,function(i,j){
		if(idArr[i]===""){
			seatTable += '</br>';
		}else if(idArr[i]==="a4"){
			seatTable = '<span class="kal-ssh-first-span"></span><a id="'+idArr[i]+'" href="javascript:void(0);"><img src="'+$.image()+'/reservation/plane/1seat_normal.png"/></a><span class="kal-ssh-first-span"></span></br>'
			first_seat.append(seatTable);
			$('#'+idArr[i]).addClass('seat1');
		}else{
			seatTable = '<span class="kal-ssh-first-span"></span><a id="'+idArr[i]+'" href="javascript:void(0);"><img src="'+$.image()+'/reservation/plane/1seat_normal.png"/></a><span class="kal-ssh-first-span"></span>'
			first_seat.append(seatTable);
			$('#'+idArr[i]).addClass('seat1');
		}
	});
	
//		first_seat.html(seatTable);
	return first_seat;
}
function second_seat (row,col){
	var second_seat = $('#second_seat');
	var id = 0;
	var temp = ['c','d'];
	var seatTable = '';
	second_seat.html(seatTable);
	
	for(var i=0;i<row;i++){
		id=0;
		seatTable = '</br>';
		second_seat.append(seatTable);
		for(var j=0;j<col;j++){
			id++;
			if(j==1||j==4){
				seatTable = '<a id="'+temp[i]+''+ id +'" href="javascript:void(0);"><img src="'+$.image()+'/reservation/plane/2seat_normal.png"/></a><span class="kal-ssh-second-span"></span>'
				second_seat.append(seatTable);
				$('#'+temp[i]+''+ id).addClass('seat2');
			}else{
				seatTable = '<a id="'+temp[i]+''+ id +'" href="javascript:void(0);"><img src="'+$.image()+'/reservation/plane/2seat_normal.png"/></a>'
				second_seat.append(seatTable);
				$('#'+temp[i]+''+ id).addClass('seat2');
			}
		}
	}
	return second_seat;
}
function third_seat(row,col){
	var third_seat = $('#third_seat');
	var id = 0;
	var temp = ['e','f','g','h','i','j'];
	var seatTable = '';
	third_seat.html(seatTable);
	for(var i=0;i<row;i++){
		id=0;
		seatTable = '</br>'
		third_seat.append(seatTable);
		for(var j=0;j<col;j++){
			id++;
			if(j==2||j==5){
				seatTable = '<a id="'+temp[i]+''+ id +'" href="javascript:void(0);"><img src="'+$.image()+'/reservation/plane/3seat_normal.png"/></a><span class="kal-ssh-third-span"></span>'
				third_seat.append(seatTable);
				$('#'+temp[i]+''+ id).addClass('seat3');
			}else{
				seatTable = '<a id="'+temp[i]+''+ id +'" href="javascript:void(0);"><img src="'+$.image()+'/reservation/plane/3seat_normal.png"/></a>'
				third_seat.append(seatTable);
				$('#'+temp[i]+''+ id).addClass('seat3');
			}
		}
	}
	
	return third_seat;
}

function reservationFirstPage(){
	return '<div id="kal-res1-jh-res-wrapper">'+
	   '<div class="kal-res1-jh-subWrapper">'+
			'<div class="kal-res1-jh-bookingMainTitle">'+
				'<h1>항공권 예매</h1>'+
			'</div>'+
			'<ul class="kal-res1-jh-bookingSubTitle">'+
				'<li>'+
					'<p class="kal-res1-jh-bookingSubTitle-domestic">국내선 항공편</p>'+
				'</li>'+
				'<li>'+
					'<p class="kal-res1-jh-bookingSubTitle-international">국제선 항공편<span class="kal-res1-jh-checkIcon"></span></p>'+
				'</li>'+
			'</ul>'+
			'<div class="kal-res1-jh-bookingBox">'+
					'<div class="kal-res1-jh-commonResTitle">'+
						'<span class="kal-res1-jh-commonRes">일반 예매<span class="kal-res1-jh-checkBlue"></span></span>'+
						'<span class="kal-res1-jh-bonusRes">보너스 예매<span class="kal-res1-jh-checkWhite"></span></span>'+
					'</div>'+
					'<div class="kal-res1-jh-tripType">'+
					'</div>'+
					'<div class="kal-res1-jh-tripDetails">'+					
						'<input type="text" placeholder="출발지" class="kal-res1-jh-departureArea">'+
						'<input type="text" placeholder="목적지" class="kal-res1-jh-arrivalArea">'+
						'<input type="text" placeholder="가는날/오는날" class="kal-res1-jh-dateSelect">'+
					'</div>'+
					'<div>'+
						'<a id="res-departureArea-btn" class="kal-res1-jh-departureArea-btn"></a>'+
						'<a id="res-arrivalArea-btn" class="kal-res1-jh-arrivalArea-btn"></a>'+
						'<a id="res-dateSelect-btn" class="kal-res1-jh-dateSelect-btn"></a>'+
					'</div>'+
					'<div class="res-route-check-div">'+
					'<p class="res-route-check-text"></p>'+
					'</div>'+
					'<div class="kal-res1-jh-selectSeatWrapper">'+
						'<p>일등석, 프레스티지석, 일반석중에 원하는 좌석을 선택해주세요.</p>'+
						'<button id="kal-reservation-select-seatFrom" class="kal-res1-jh-selectSeat">가는날 선택</button>'+
						'<button id="kal-reservation-select-seatTo" class="kal-res1-jh-selectSeat">오는날 선택</button>'+
					'</div>'+
					'<div class="kal-res1-jh-submitWrapper">'+
						'<p>출발지, 목적지, 가는날/오는날, 좌석 선택은 필수 사항입니다.</p>'+
						'<button id="reservationGoPage2" class="kal-res1-jh-submit">항공편 조회</button>'+
					'</div>'+
			'</div>'+
	   '</div>'+
	'</div>';
}
function reservationSecondPage(reservationInfo,fromPrice,toPrice,totalPrice){
	return '<div id="kal-res2-jh-res-wrapper">'+
	   '<div class="kal-res2-jh-subWrapper">'+
			'<ul class="kal-res2-jh-mainTitle">'+
				'<li>'+
					'<p class="kal-res2-jh-mainTitle-text1">운임 기준</p>'+
				'</li>'+
				'<li>'+
					'<p class="kal-res2-jh-mainTitle-text2">스케줄 기준</p>'+
				'</li>'+
			'</ul>'+
			'<div class="kal-res1-jh-bookingBox">'+
				'<div class="kal-res2-jh-paragraph1">'+
					'<h2>항공편 정보</h2>'+
					'<p>항공편은 현재 예약 가능한 항공편 스케줄만 제공됩니다.</p>'+
					'<div class="kal-res2-jh-paragraph1-box">'+
						'<div class="kal-res2-jh-paragraph1-leftbox">'+
							'<div class="kal-res2-jh-paragraph1-leftbox-info"><span>'+reservationInfo.startRouteFrom+'</span> → <span>'+reservationInfo.startRouteTo+'</span></div>'+
							'<div class="kal-res2-jh-paragraph1-leftbox-subinfo">'+
								'<span class="kal-res2-jh-paragraph1-leftbox-subinfo-1">'+reservationInfo.scheStartDay+' ∥ </span>'+
								'<span class="kal-res2-jh-paragraph1-leftbox-subinfo-2">'+reservationInfo.scheStartTime+'  ∥ </span>'+
								'<span class="kal-res2-jh-paragraph1-leftbox-subinfo-3">직항편</span>'+
							'</div>'+
							'<div class="kal-res2-jh-paragraph1-leftbox-flightinfo">'+
								'KOREAN AIR ∥ Boeing 777 - 200 ER '+
							'</div>'+
						'</div>'+
						'<div class="kal-res2-jh-paragraph1-rightbox">'+
							'<div class="kal-res2-jh-paragraph1-rightbox-info"><span>'+reservationInfo.endRouteFrom+'</span> → <span>'+reservationInfo.endRouteTo+'</span></div>'+
							'<div class="kal-res2-jh-paragraph1-rightbox-subinfo">'+
								'<span class="kal-res2-jh-paragraph1-rightbox-subinfo-1">'+reservationInfo.scheEndDay+' ∥ </span>'+
								'<span class="kal-res2-jh-paragraph1-rightbox-subinfo-2">'+reservationInfo.scheEndTime+'  ∥ </span>'+
								'<span class="kal-res2-jh-paragraph1-rightbox-subinfo-3">직항편</span>'+
							'</div>'+
							'<div class="kal-res2-jh-paragraph1-leftbox-flightinfo">'+
								'KOREAN AIR ∥ Boeing 777 - 200 ER '+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="kal-res2-jh-paragraph2">'+
					'<h2>운임 정보</h2>'+
					'<p>예약 가능한 운임 목록입니다. 운임 규정을 확인해 주세요.</p>'+
					'<div class="kal-res2-jh-paragraph2-icon">'+
						'<span class="kal-res2-jh-paragraph2-icon-v">가능</span>'+
						'<span class="kal-res2-jh-paragraph2-icon-x">불가</span>'+
					'</div>'+
					'<table>'+
						'<tr class="firstcol">'+
							'<td>운임종류(1인)</td>'+
							'<td>출발 변경</td>'+
							'<td>도착 변경</td>'+
							'<td>환불</td>'+
							'<td>좌석 승급</td>'+
							'<td>마일리지 적립</td>'+
						'</tr>'+
						'<tr>'+
							'<td>'+fromPrice+' 원</td>'+
							'<td><img src="'+$.image()+'/reservation/reser2-x.png"/></td>'+
							'<td><img src="'+$.image()+'/reservation/reser2-x.png"/></td>'+
							'<td><img src="'+$.image()+'/reservation/reser2-v.png"/></td>'+
							'<td><img src="'+$.image()+'/reservation/reser2-x.png"/></td>'+
							'<td><img src="'+$.image()+'/reservation/reser2-x.png"/></td>'+
						'</tr>'+
					'</table>'+
				'</div>'+
			'</div>'+
			'<div class="kal-res2-jh-confirmbox">'+
				'<div class="kal-res2-jh-confirmbox-info">'+
					'<span>유의 사항</span>'+
				'</div>'+
				'<div class="kal-res2-jh-confirmbox-contents">'+
					'<p>무료수하물 허용량을 초과하는 경우 추가 요금이 발생할 수 있습니다.</p>'+
					'<p>예매 단계에서 제공되는 항공편과 운임은 조회 시점에 예약 가능한 항공편 스케줄과 운임만 제공됩니다.</p>'+
					'<p>항공편 스케줄 및 기종은 부득이한 사유로 예고없이 변경될 수 있습니다.</p>'+
				'</div>'+
			'</div>'+
			'<div>'+
				'<div class="kal-res2-jh-submitbox">'+
					'<div class="kal-res2-jh-submitbox-info">항공운임 등 총액</div>'+
						'<p class="kal-res2-jh-submitbox-price">'+totalPrice+'원</p>'+
						'<p class="kal-res2-jh-submitbox-text">세금 및 수수료까지 포함한 금액입니다.</p>'+
						'<button id="reservationGoPage3" class="kal-res2-jh-submit">예매 진행하기</button>'+
				'</div>'+
			'</div>'+
	   '</div>'+
	'</div>';
}
function reservationThirdPage(reservationInfo,userInfo,fromPrice,toPrice,totalPrice){
	return '<div class="kal-res3-jh-wrapper">'+
	'<div class="kal-res3-jh-subwrapper">'+
		'<div class="kal-res3-jh-toptext">'+
			'<h2>탑승객 정보</h2>'+
			'<p>예약 후 성명 변경은 <span>불가</span>합니다.<br/> 실제 탑승하실 분의 <span>회원가입시 여권에 기재된 영문 성명</span>이 불일치시 관리자에게 문의 바랍니다.</p>'+
		'</div>'+
		'<div class="kal-res3-jh-passengerinfo">'+
			'<div class="kal-res3-jh-passengerinfo-box1">'+
				'<span class="kal-res3-jh-passengerinfo-box1-aster">*</span><span class="kal-res3-jh-passengerinfo-box1-familynametext">성</span>'+
				'<div class="kal-res3-jh-passengerinfo-box1-1">'+
					'<input class="kal-res3-jh-familynameinput" readonly/><span class="kal-res3-jh-familyname-span">'+userInfo.familyName+'</span>'+
				'</div>'+
				'<span class="kal-res3-jh-passengerinfo-box1-aster">*</span><span class="kal-res3-jh-passengerinfo-box1-familynametext">이름</span>'+
				'<div class="kal-res3-jh-passengerinfo-box1-2">'+
					'<input class="kal-res3-jh-nameinput" readonly /><span class="kal-res3-jh-name-span">'+userInfo.firstName+'</span>'+
				'</div>'+
				'<span class="kal-res3-jh-passengerinfo-box1-familynametext">승객구분</span><span class="kal-res3-jh-passengerinfo-box1-gen">'+userInfo.userGen+'</span>'+
			'</div>'+
			'<div class="kal-res3-jh-middletext">'+
				'<h2>연락처 정보</h2>'+
				'<p>예약 후 휴대폰 변경은 <span>불가</span>합니다.<br/> 실제 탑승하실 분의 <span>회원가입시의 휴대폰 번호정보</span>가 불일치시 관리자에게 문의 바랍니다.</p>'+
			'</div>'+
			'<div class="kal-res3-jh-passengerinfo-box2">'+
				'<span class="kal-res3-jh-passengerinfo-box1-aster">*</span><span class="kal-res3-jh-passengerinfo-box2-phonenotext">연락처</span>'+
				'<input id="res-3phoneNo" class="kal-res3-jh-phonenoinput" type="text" placeholder="'+userInfo.phoneNo+'" />'+
				'<p class="res-phoneNo-check-text"></p>'+
				'<span class="kal-res3-jh-passengerinfo-box1-aster">*</span><span class="kal-res3-jh-passengerinfo-box2-emailtext">이메일</span>'+
				'<input id="res-3userEmail" class="kal-res3-jh-phonenoinput" type="text" placeholder="'+userInfo.userEmail+'" />'+
				'<p class="res-userEmail-check-text"></p>'+
			'</div>'+
			'<div class="kal-res3-jh-noticebox">'+
					'<span>유의 사항</span>'+
			'</div>'+
			'<div class="kal-res3-jh-noticecontents">'+
				'<p>마일리지 적립은 현재 웹에서는 제공하지 않습니다.</p>'+
				'<p>선택하신 여정에 따라 비자 및 기타 여행에 필요한 서류가 필요합니다.</p>'+
				'<p>항공편 스케줄 및 기종은 부득이한 사유로 예고없이 변경될 수 있습니다.</p>'+
			'</div>'+
		'</div>'+
		'<div class="kal-res3-jh-confirmbox">'+
			'<div class="kal-res3-jh-confirmbox-toptext">전체 예약 정보</div>'+
			'<div class="kal-res3-jh-confirmbox-box1">'+
				'<div class="kal-res3-jh-confirmbox-box1-text1"><span>'+reservationInfo.startRouteFrom+'</span> → <span>'+reservationInfo.startRouteTo+'</span></div>'+
				'<p>'+reservationInfo.scheStartDay+' ∥ '+reservationInfo.scheStartTime+'</p>'+
				'<div class="kal-res3-jh-confirmbox-box1-text2"><span>'+reservationInfo.endRouteFrom+'</span> → <span>'+reservationInfo.endRouteTo+'</span></div>'+
				'<p>'+reservationInfo.scheEndDay+' ∥  '+reservationInfo.scheEndTime+'</p>'+
				'<button class="kal-res3-jh-detailbtn">일정 상세보기</button>'+
			'</div>'+
			'<div class="kal-res3-jh-confirmbox-box2">'+
				'<div class="kal-res3-jh-confirmbox-box2-text1"><span>항공 운송료</span></div>'+
				'<p>운임 <span>'+fromPrice+' 원</span></p>'+
				'<p>유류할증료 <span>0 원</span></p>'+
				'<p class="kal-res3-jh-confirmbox-box2-text1-price">항공운임 총액 <span>'+totalPrice+' 원</span></p>'+
				'<p>세금 및 수수료를 포함한 금액입니다.</p>'+
				'<button id="reservationGoPage4" class="kal-res3-jh-reser3submit">예매 진행하기</button>'+
			'</div>'+
		'</div>'+
	'</div>'+
	'</div>';
}
function reservationFourthPage(reservationInfo,userInfo,fromPrice,toPrice,totalPrice){
	return '<div class="kal-res4-jh-wrapper">'+
	'<div class="kal-res4-jh-subwrapper">'+
		'<div class="kal-res4-jh-toptext">'+
			'<h2>결제</h2>'+
			'<p>결제 페이지입니다.<br/><span>실제 금액 결제 없이 </span>결제되는 페이지입니다.</p>'+
		'</div>'+
		'<div class="kal-res4-jh-noticebox-wrapper">'+
			'<div class="kal-res4-jh-textbox">'+
					'<span>운임규정</span>'+
			'</div>'+
			'<div class="kal-res4-jh-textbox-contents">'+
				'<p>최대 체류 기간 : 여행 개시일로부터 최대<span> 3개월</span></p>'+
				'<p>유효기간 연장 : <span>불가</span></p>'+
				'<p>출발편 변경 : <span>불가</span></p>'+
				'<p>스카이패스 마일리지 적립 : <span>불가</span></p>'+
				'<p>스카이패스 마일리지 업그레이드 : <span>불가</span></p>'+
				'<p>비동반 소아 서비스 : <span>불가</span></p>'+
				'<p>예약 부도 위약금 : <span>없음</span></p>'+
				'<div class="kal-res4-jh-checkbox">'+		
				'구매 항공권의 운임 규정과 운송약관을 꼭 확인하세요. <span> *</span><br/>'+
				'요금 또는 세금이 인상 될 경우, 그에 따른 차액을 지불함을 꼭 숙지하세요. <span> *</span>'+
				'</div>'+
			'</div>'+
			'<div class="kal-res4-jh-noticebox">'+
					'<span>유의 사항</span>'+
			'</div>'+
			'<div class="kal-res4-jh-noticecontents">'+
				'<p>마일리지 적립은 현재 웹에서는 제공하지 않습니다.</p>'+
				'<p>선택하신 여정에 따라 비자 및 기타 여행에 필요한 서류가 필요합니다.</p>'+
				'<p>항공편 스케줄 및 기종은 부득이한 사유로 예고없이 변경될 수 있습니다.</p>'+
			'</div>'+
		'</div>'+
		'<div class="kal-res3-jh-confirmbox">'+
			'<div class="kal-res3-jh-confirmbox-toptext">전체 예약 정보</div>'+
			'<div class="kal-res3-jh-confirmbox-box1">'+
				'<div class="kal-res3-jh-confirmbox-box1-text1"><span>'+reservationInfo.startRouteFrom+'</span> → <span>'+reservationInfo.startRouteTo+'</span></div>'+
				'<p>'+reservationInfo.scheStartDay+' ∥ '+reservationInfo.scheStartTime+'</p>'+
				'<div class="kal-res3-jh-confirmbox-box1-text2"><span>'+reservationInfo.endRouteFrom+'</span> → <span>'+reservationInfo.endRouteTo+'</span></div>'+
				'<p>'+reservationInfo.scheEndDay+' ∥  '+reservationInfo.scheEndTime+'</p>'+
				'<button class="kal-res3-jh-detailbtn">일정 상세보기</button>'+
			'</div>'+
			'<div class="kal-res3-jh-confirmbox-box2">'+
				'<div class="kal-res3-jh-confirmbox-box2-text1"><span>항공 운송료</span></div>'+
				'<p>운임 <span>'+fromPrice+' 원</span></p>'+
				'<p>유류할증료 <span>0 원</span></p>'+
				'<p class="kal-res3-jh-confirmbox-box2-text1-price">항공운임 총액 <span>'+totalPrice+' 원</span></p>'+
				'<p>세금 및 수수료를 포함한 금액입니다.</p>'+
				'<button id="reservationGoPage5" class="kal-res4-jh-submitbtn">예매 진행하기</button>'+
			'</div>'+
		'</div>'+
	'</div>'+
	'</div>';
}
function reservationFifthPage(reservationInfo,userInfo,seatClass){
	return '<div class="kal-res5-jh-wrapper">'+
	'<div class="kal-res5-jh-subwrapper">'+
		'<div class="kal-res5-jh-toptext">'+
			'<h2>e-티켓 확인증</h2>'+
			'<p>확인 페이지입니다.<br/><span>예약 결제된 정보 </span>가 표시되는 페이지입니다.</p>'+
		'</div>'+
		'<div class="kal-res5-jh-passengerinfotext">'+
			'<span>승객 정보</span>'+
		'</div>'+
		'<div class="kal-res5-jh-passengerinfocontents">'+
			'<p class="kal-res5-jh-passengerinfocontents-name">승객성명 / Passenger Name</p>'+
			'<p class="kal-res5-jh-passengerinfocontents-name-1">'+userInfo.familyName+'  '+userInfo.firstName+'</p>'+
			'<p class="kal-res5-jh-passengerinfocontents-gender">승객구분 / Passenger Sex</p>'+
			'<p class="kal-res5-jh-passengerinfocontents-gender-1">'+ userInfo.userGen +'</p><br/>'+
		'</div>'+
		'<div class="kal-res5-jh-flightinfotext">'+
			'<span>여정 정보</span>'+
		'</div>'+
		'<div class="kal-res5-jh-kal-res5-jh-flightinfocontents">'+
			'<p>Itinerary</p>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-flight">KOREAN AIR ∥ Boeing 777 - 200 ER </span>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-1">'+reservationInfo.startRouteFrom+'</span> → <span>'+reservationInfo.startRouteTo+' ∥ </span>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-2">'+reservationInfo.scheStartDay+' ∥ </span>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-3">'+reservationInfo.scheStartTime+' ∥ </span>'+
			'<span>직항편</span>'+
			'<p>Itinerary</p>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-flight">KOREAN AIR ∥ Boeing 777 - 200 ER </span>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-4">'+reservationInfo.endRouteFrom+'</span> → <span>'+reservationInfo.endRouteTo+' ∥ </span>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-5">'+reservationInfo.scheEndDay+' ∥ </span>'+
			'<span class="kal-res5-jh-kal-res5-jh-flightinfocontents-6">'+reservationInfo.scheEndTime+'  ∥ </span>'+
			'<span>직항편</span>'+
			'<button id="goMainPage" class="kal-res5-jh-submit">메인으로</button>'+
		'</div>'+
	'</div>'+
	'</div>';
}
