/*
========reservation-service=========
@AUTHOR : Song SangHun
@CREATE DATE : 2017-05-16
@UPDATE DATE : 2017-05-16
@DESC :
===============================
*/
function resPrice (birth,routeSeq,seatClass){
	var temp = birth.split('-');
	var birthYear = Number(temp[0]);
	var thisYear = new Date();
	var year = Number(thisYear.getFullYear());
	var age = year - birthYear;
	var route = routeSeq;
	var price = 0;
	if(age>=20){
		switch (route) {
		case '1':
		case '3':
		case '7':
		case '9':
			if(seatClass==1){
				price = 900000;
			}else if(seatClass==2){
				price = 600000;
			}else{
				price = 400000;
			}
			break;
		case '2':
		case '4':
		case '5':
		case '6':
		case '8':
		case '10':
		case '11':
		case '12':
			if(seatClass==1){
				price = 2500000;
			}else if(seatClass==2){
				price = 2000000;
			}else{
				price = 2000000;
			}
			break;
		default:
			price = 'error';
			break;
		}
	}else if(14<age<20){
		switch (route) {
		case '1':
		case '3':
		case '7':
		case '9':
			if(seatClass==1){
				price = 800000;
			}else if(seatClass==2){
				price = 500000;
			}else{
				price = 300000;
			}
			break;
		case '2':
		case '4':
		case '5':
		case '6':
		case '8':
		case'10':
		case '11':
		case '12':
			if(seatClass==1){
				price = 2300000;
			}else if(seatClass==2){
				price = 2000000;
			}else{
				price = 1800000;
			}
			break;
		default:
			price = 'error';
			break;
		}
	}else{
		switch (route) {
		case '1':
		case '3':
		case '7':
		case '9':
			if(seatClass==1){
				price = 700000;
			}else if(seatClass==2){
				price = 400000;
			}else{
				price = 200000;
			}
			break;
		case '2':
		case '4':
		case '5':
		case '6':
		case '8':
		case '10':
		case '11':
		case '12':
			if(seatClass==1){
				price = 2100000;
			}else if(seatClass==2){
				price = 1800000;
			}else{
				price = 1500000;
			}
			break;
		default:
			price = 'error';
			break;
		}
	}
	return price;
}
function myReservationSeat(mySeatCode){
	var myReservationCodeId = mySeatCode.toLowerCase();
	var myReservedSeatAlias = myReservationCodeId.charAt(0);
	switch (myReservedSeatAlias) {
	case 'a':case 'b':
		$('#'+myReservationCodeId).find('img').attr('src',''+$.image()+'/reservation/plane/1my_reservedSeat.png');
		break;
	case 'c':case 'd':
		$('#'+myReservationCodeId).find('img').attr('src',''+$.image()+'/reservation/plane/2my_reservedSeat.png');
		break;
	default: 
		$('#'+myReservationCodeId).find('img').attr('src',''+$.image()+'/reservation/plane/3my_reservedSeat.png');
		break;
	}
}
function fristReservedSeat(seatList){
	$.each(seatList,function(i,j){
		var seatCode = j.seatCode.toLowerCase();
		$('#'+seatCode).find('img').attr('src',''+$.image()+'/reservation/plane/1seat_reservation.png');
		$('#'+seatCode).removeClass('seat1').addClass('reserved_seat');
	});
}

function secondReservedSeat(seatList){
	$.each(seatList,function(i,j){
		var seatCode = j.seatCode.toLowerCase();
		$('#'+seatCode).find('img').attr('src',''+$.image()+'/reservation/plane/2seat_reservation.png');
		$('#'+seatCode).removeClass('seat2').addClass('reserved_seat');
	});
}
function thirdReservedSeat(seatList){
	$.each(seatList,function(i,j){
		var seatCode = j.seatCode.toLowerCase();
		$('#'+seatCode).find('img').attr('src',''+$.image()+'/reservation/plane/3seat_reservation.png');
		$('#'+seatCode).removeClass('seat3').addClass('reserved_seat');
	});
}


function nullCheck(x){
	/*공백값 체크 정규식*/
	
		if(x.length == 0){
			return false;
		}
		return true;
	
}
/*
 * [영어 알파벳 a-z 와 영어 알파벳 A-Z 와 숫자 0-9]
 * 가운데 @ 꼭 포함되어야 함
 * [영어 알파벳 a-z 와 영어 알파벳 A-Z 와 숫자 0-9]
 * .이 포함되어야 함
 * [영어 알파벳 a-z 와 영어 알파벳  A-Z]
 */
function emailCheck(x){
	var validationCode = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/;
	if(x.length == 0){
		return false;
	}
	if(!x.match(validationCode)){
		return false;
	}
	return true;
}

/*
 * [01 숫자로 시작해야 하며 그다음에 오는 숫자는 6-9 사이]
 * 그 다음에 '-'가 와야함
 * [0-9 까지 숫자의 3글자 에서 4글자까지]
 * 그 다음에 '-'가 와야함
 * [0-9 까지 숫자의 4글자까지]
 */
function phoneNoCheck(x){
	var validationCode = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
	if(x.length == 0){
		return false;
	}
	if(!x.match(validationCode)){
		return false;
	}
	return true;
}


