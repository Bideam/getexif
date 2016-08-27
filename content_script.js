	$('img').click(function(){

		EXIF.getData(this,function(){
				if (!EXIF.pretty(this)) {
					var datas=null
					chrome.runtime.sendMessage(datas);
					return;
				}
				var datas=EXIF.getAllTags(this);
				chrome.runtime.sendMessage(datas,function(res){
				});

			});




	});
