document.addEventListener('DOMContentLoaded', function () {
	var dataexifs=chrome.extension.getBackgroundPage().exData;
	$('#data-explan tbody').empty();
	showtable(dataexifs);

})
	


var nameasd=['ExifVersion','FlashPixVersion','ColorSpace','PixelXDimension','PixelYDimension','ComponentsConfiguration','CompressedBitsPerPixel','MakerNote',',UserComment',
	'RelatedSoundFile','DateTimeOriginal','DateTimeDigitized','SubsecTime','SubsecTimeOriginal','SubsecTimeDigitized','ExposureTime','FNumber','ExposureProgram','SpectralSensitivity',
	'ISOSpeedRatings','OECF','ShutterSpeedValue','ApertureValue','BrightnessValue','ExposureBiasValue','MaxApertureValue','SubjectDistance','MeteringMode','Lightsource','Flash','SubjectArea','FocalLength',
	'FlashEnergy','SpatialFrequencyResponse','FocalPlaneXResolution','FocalPlaneYResolution','FocalPlaneResolutionUnit','SubjectLocation','ExposureIndex','SensingMethod','FileSource',
	'SceneType','CFAPattern','CustomRendered','ExposureMode','WhiteBalance','DigitalZoomRation','FocalLengthIn35mmFilm','SceneCaptureType','GainControl','Contrast','Saturation','Sharpness',
	'DeviceSettingDescription','SubjectDistanceRange','ImageUniqueID','ImageWidth','ImageHeight','BitsPerSample','Compression','PhotometricInterpretation','Orientation','SamplesPerPixel',
	'PlanarConfiguration','YCbCrSubSampling','YCbCrPositioning','XResolution','YResolution','ResolutionUnit','StripOffsets','RowsPerStrip','StripByteCounts','JPEGInterchangeFormat',
	'JPEGInterchangeFormatLength','TransferFunction','WhitePoint','PrimaryChromaticities','YCbCrCoefficients','ReferenceBlackWhite','DateTime','ImageDescription','Make','Model','Software',
	'Artist','Copyright','GPSVersionID','GPSLatitudeRef','GPSLatitude','GPSLongitudeRef','GPSLongitude','GPSAltitudeRef','GPSAltitude','GPSTimeStamp','GPSSatellites','GPSStatus',
	'GPSMeasureMode','GPSDOP','GPSSpeedRef','GPSSpeed','GPSTrackRef','GPSTrack','GPSImgDirectionRef','GPSImgDirection','GPSMapDatum','GPSDestLatitudeRef','GPSDestLatitude','GPSDestLongitudeRef',
	'GPSDestLongitude',	'GPSDestBearingRef','GPSDestBearing','GPSDestDistanceRef','GPSDestDistance','GPSProcessingMethod','GPSAreaInformation','GPSDateStamp','GPSDifferential'];
var	value=['Exif 版本','FlashPix 版本','色域、色彩空间','图像的有效宽度','图像的有效高度','图像构造','压缩时每像素色彩位','制造商设置的信息','用户评论','关联的声音文件','创建时间',
	'数字化创建时间','日期时间（秒）','原始日期时间（秒）','原始日期时间数字化（秒）','曝光时间','光圈值','曝光程序','光谱灵敏度','感光度','光电转换功能','快门速度','镜头光圈',
	'亮度','曝光补偿','最大光圈','物距','测光方式','光源','闪光灯','主体区域','焦距','闪光灯强度','空间频率反应','焦距平面X轴解析度','焦距平面Y轴解析度','焦距平面解析度单位',
	'主体位置','曝光指数','图像传感器类型','源文件','场景类型（1 == 直接拍摄）','CFA 模式','自定义图像处理','曝光模式','白平衡（1 == 自动，2 == 手动)','数字变焦','35毫米胶片焦距',
	'场景拍摄类型','场景控制','对比度','饱和度','锐度','设备设定描述','主体距离范围','图像唯一ID','图像宽度','图像高度','比特采样率','压缩方法','像素合成','拍摄方向','像素数',
	'数据排列','色相抽样比率','色相配置','X方向分辨率','Y方向分辨率','分辨率单位','图像资料位置','每带行数','每压缩带比特数','JPEG SOI 偏移量','JPEG 比特数','转移功能','白点色度',
	'主要色度','颜色空间转换矩阵系数','黑白参照值','日期和时间','图像描述、来源','生产者','型号','软件','作者','版权信息','GPS 版本','南北纬','纬度','东西经','经度','海拔参照值',
	'海拔','GPS 时间戳','测量的卫星','接收器状态','测量模式','测量精度','速度单位','GPS 接收器速度','移动方位参照','移动方位','图像方位参照','图像方位','地理测量资料','目标纬度参照',
	'目标纬度','目标经度参照','目标经度','目标方位参照','目标方位','目标距离参照','目标距离','GPS 处理方法名','GPS 区功能变数名','GPS 日期','GPS 修正'];
var transexif={};
function showtable(datas){
	if (datas==null) {
		var tr='<tr>该图片没有EXIF信息</tr>';
		return $('#data-explan').html(tr);
	}
	$.each(datas,function(keys){
		for (var i = 0; i < nameasd.length; i++) {
			if(keys == nameasd[i]){
				transexif[value[i]]=datas[keys];
			}
		}
	})
	$.each(transexif,function(keys){
		var tr=$('<tr><td>'+keys+'</td><td>'+transexif[keys]+'</td></tr>');
		$('#data-explan tbody').append(tr);
	})
}