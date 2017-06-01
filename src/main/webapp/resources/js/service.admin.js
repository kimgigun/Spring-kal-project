var admin=admin || {}

admin.validation={

		timeCheck : function(x){
			var timeRegExp = /^(0[1-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
			
			if(x.length == 0){
				return false;
			}
			if(!x.match(timeRegExp)){
				return false;
			}
			return true;
		},

		dateCheck : function(x){
			var dayRegExp = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
			if(x.length == 0){
				return false;
			}
			if(!x.match(dayRegExp)){
				return false;
			}
			return true;
		}
}