var board=board || {};

board.access=(function(){
	var boardQna=function(){
	
	};
	return{
		boardQna : boardQna
	};
})();

board.component=(function(){
	var init=function(){
		$('#qna-wrapper').append(board.ui.subGnbAfterLogin());
		$('#qna-wrapper').append(board.ui.mainGnb());
		$('#qna-wrapper').append(board.ui.boardQna());
		$('#qna-wrapper').append(board.ui.mainFooter());
	};
	return {init:init}
})();
board.faq=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		faqlist();
		addfaq();
	};
	var faqlist=function(){
		$('#kal-all-ss-button').on('click',function(){
			alert('faq');
			//$('#kal-all-ss-button').hide();
			//$('#kal-faq-ss-container').empty();
			//$('#wrapper').css('height','500px');
			$('#kal-faq-ss-container').html(board.ui.boardFAQlist());
		});
	};
	var addfaq=function(){
		$('#kal-all-ss-add-button').on('click',function(){
			alert('질문 등록');
			/*var qnatype=$('#kal-faq-ss-wrapper').find(':select[id=category-select]:selected').val();
			$.ajax({
				url:$.context()+'/addFAQ',
				mehtod:'POST',
				data:JSON.stringify({
					qnatype : qnatype,
					qna : $('.kal-qna-ss-text-style').val()
				}),
				dataType: 'json',
				contentType: 'application/json',
				success:function(data){
						alert('질문이 등록되었습니다.');
				},
				error:function(xhr,status,msg){
				 alert('질문 등록 실패 이유'+msg);
				}
			});*/
			$('#kal-faqList-a').on('click',function(){
		
				$('#kal-faq-ss-answer').toggle('slow',function(){
					$('.kal-qna-ss-li').append(answer);
				});
			});
			
		});
	};
	return{
		init : init,
		onCreate : onCreate,
		faqlist : faqlist,
		addfaq : addfaq
	};
})();
