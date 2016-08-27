	$('img').click(function(){

		EXIF.getData(this,function(){
				if (!EXIF.pretty(this)) {
					var datas=null
					chrome.runtime.sendMessage(datas);
					return;
				}
				var datas=EXIF.getAllTags(this);
				console.log(datas.Make);
				chrome.runtime.sendMessage(datas,function(res){
					alert(res);
				});

			});




	});
