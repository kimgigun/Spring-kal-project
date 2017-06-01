<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBPdh68N4HLtlR2UFnE3FYVPnx7gIz3vyo"></script>
<link rel="stylesheet" href="${context}/resources/css/reset.css" />
<link rel="stylesheet" href="${context}/resources/css/kal.css" />
<title>대한항공 이벤트</title>
</head>
<body>
<section>
	<article id="publicArticle" style="width:100%">
		<tiles:insertAttribute name="container"/>
	</article>
	<footer>
		<tiles:insertAttribute name="footer"/>
	</footer>
</section>
</body>
<script>
$('.kal-event-beforeLogin-logo').on('click',function(){
	location.href='${context}/';
});
function initialize() {
    var mapLocation = new google.maps.LatLng('37.563053', '126.980802'); // 지도에서 가운데로 위치할 위도와 경도
    var markLocation = new google.maps.LatLng('37.563053', '126.980802'); // 마커가 위치할 위도와 경도
     
    var mapOptions = {
      center: mapLocation, // 지도에서 가운데로 위치할 위도와 경도(변수)
      zoom: 18, // 지도 zoom단계
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), // id: map-canvas, body에 있는 div태그의 id와 같아야 함
        mapOptions);
     
    var size_x = 60; // 마커로 사용할 이미지의 가로 크기
    var size_y = 60; // 마커로 사용할 이미지의 세로 크기
     
    // 마커로 사용할 이미지 주소
    var image = new google.maps.MarkerImage( 'http://www.larva.re.kr/home/img/boximage3.png',
                        new google.maps.Size(size_x, size_y),
                        '',
                        '',
                        new google.maps.Size(size_x, size_y));
     
    var marker;
    marker = new google.maps.Marker({
           position: markLocation, // 마커가 위치할 위도와 경도(변수)
           map: map,
           icon: image, // 마커로 사용할 이미지(변수)
           title: '대한항공 회원가입 이벤트' // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
    });
     
    var content = "이곳에서 경품을 받아가실수 있습니다"; // 말풍선 안에 들어갈 내용
     
    // 마커를 클릭했을 때의 이벤트. 말풍선~
    var infowindow = new google.maps.InfoWindow({ content: content});

    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map,marker);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
	
</script>
</html>