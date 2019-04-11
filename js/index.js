

	function countDown(year,month,day,hour,minute,second){
			// var newday = document.getElementsByClassName('day')[0];
			var newHour = document.getElementsByClassName('hour')[0];
			var newSecond = document.getElementsByClassName('second')[0];
			var newMinute = document.getElementsByClassName('minute')[0];
			
			var now = new Date(); 
			var endDate = new Date(year, month-1, day,hour,minute,second); 
			var leftTime=endDate.getTime()-now.getTime(); 
			var leftsecond = parseInt(leftTime/1000); 

			var aday = Math.floor(leftsecond/(60*60*24)); 
			var hour = Math.floor((leftsecond-aday*24*60*60)/3600); 
			var minute = Math.floor((leftsecond-aday*24*60*60-hour*3600)/60); 
			var second = Math.floor(leftsecond-aday*24*60*60-hour*3600-minute*60); 

			// newday.innerHTML = aday<10 ? newday.innerHTML = "0"+ aday : newday.innerHTML = aday;
			
			newHour.innerHTML = hour<10 ? newHour.innerHTML = "0"+ hour : newHour.innerHTML = hour;
			newMinute.innerHTML = minute<10 ? newMinute.innerHTML = "0"+minute : newMinute.innerHTML = minute;
			newSecond.innerHTML = second<10 ? newSecond.innerHTML = "0"+second : newSecond.innerHTML=second;
		}
		setInterval('countDown(2019,1,10,10,0,0)', 1000); 