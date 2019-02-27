$(function(){
	// 头部
	/* 添加高亮*/
	$(".navLink").hover(function(){
		$(this).addClass("linkColor").siblings().removeClass("linkColor");
		},function(){
	$(this).removeClass("linkColor");
	});

	// 主体开始
	// 图片广告
	var $Img=$(".pictureSmall img");
	var len=$Img.length;
	var index=0;
	var adTimer=null;
	$Img.css("opacity","0.7");

	/* 实现轮播的主要函数*/
	function showImg(index){
		var $oLun=$(".pictureAdver");
		var $Imglist=$(".pictureSmall img");
		$(".pictureScroll").find("p").eq(index).stop(true,true).fadeIn()
						   .siblings().fadeOut();
		$Imglist.css("opacity","1").eq(index).css("opacity","0.7");
		};

	/*点击小图片显示对应的大图片*/
	$Img.click(function(){
		index=$Img.index(this);
		showImg(index);
	});

	/*滑入停止动画，滑出开始动画*/
	$(".picture").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer=setInterval(function(){
		showImg(index);
		index++;
		if(index==len){
			index=0;
			}
		},2000)
	}).trigger("mouseleave");

	/*显示下一张图片*/
	$("#next").click(function(){
		index++;
		if(index==len){
			index=0;
		}
		showImg(index);
	});

	/*显示上一张图片*/
	$("#prev").click(function(){
		index--;
		if(index==-1){
			index=len-1;
		}
		showImg(index);
	});

	// 热门文章
	$(".hotArticleInfo").hover(function(){
		var index=$(".hotArticleInfo").index(this);
		var $readArticle=$('.readArticle:eq('+index+')');
		$readArticle.css("display","inline-block");
	},function(){
		var index=$(".hotArticleInfo").index(this);
		var $readArticle=$('.readArticle:eq('+index+')');
	    $readArticle.css("display","none");
	});

	/*鼠标移在上面显示对应的文本*/
	$(".dist").hover(function(){
		var index=$(".dist").index(this);
		$(this).attr("title",$('.linkFont_01:eq('+index+')').text());
	},function(){
	    $(this).attr("title"," ");
	})
		
	//  更多文章
	/*鼠标移在上面显示对应的文本*/
	$(".moreArticle a").hover(function(){
		$(this).attr("title",$(this).text());
	},function(){
		$(this).attr("title"," ");
	});

	// 文章排名
	/*选项卡功能*/
	var $aLi=$(".tab_menu li")	;
		$aLi.mouseover(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var index=$aLi.index(this);
		$(".tab_box>ul").eq(index).show().siblings().hide();
	})
		$(".tab_box>ul").eq(0).show();

	// 侧栏
	// 导航栏
	/*字体添加高亮*/
	$(".menuWrap li").hover(function(){
	$(this).css("color","white").siblings().css("color","#ccc");
	},function(){
		$(this).css("color","#ccc");
	});

	/*移入第一行时对应内容出来*/
	$(".menuWrap>li:eq(0)").hover(function(){
		$(".menuList_01").slideDown("normal");
	},function(){
		$(".menuList_01").hide();
	});

	/*移入第二行时对应内容出来*/
	$(".menuWrap>li:eq(1)").hover(function(){
		$(".menuList_02").slideDown("normal");
	},function(){
		$(".menuList_02").hide();
	});

	// 尾部
	// 我们的团队
	/*鼠标移在图片上透明度为1*/
	$(".teamImg img").hover(function(){
		$(this).css("opacity","1").siblings().css("opacity","0.5");
		},function(){
			$(this).css("opacity","0.5");
		});
	
	// 微信
	$(".weChat>span:eq(1)").hover(function(){
		$(this).css("color","white");
		},function(){
			$(this).css("color","#8a8a8a");
		});

	// 分享到
	/*分享的移入移出*/
	$(".share").hover(function(){
		$(this).stop(true,true);
		$(this).animate({left:"0px"},1000);
	},function(){
		$(this).stop(true,true);
		$(this).animate({left:"-222px"},1000);
	});

	/*分享的位置*/
    var shareTop=($(window).height()-$('.share').height())/2;
    $(".share").css("top",shareTop);

    /* 分享更多的定位*/
    function topLeft(){
    	var scrollTop=$(document).scrollTop();
		var scrollLeft=$(document).scrollLeft();
		var clientWidth=$(window).width();
		var clientHeight=$(window).height();
		var offsetWidth=$('.shareMore').width();
		var offsetHeight=$('.shareMore').height();
		var top=(clientHeight-offsetHeight)/2+scrollTop;
		var left=(clientWidth-offsetWidth)/2+scrollLeft;
		$('.shareMore').css("top",top);
		$('.shareMore').css("left",left);
    }

    /*点击更多时 分享更多出来*/
	$(".more").click(function(){
		$(".shareMore").css("display","block");
		topLeft();
	});
    
	/*窗口的滚动事件 分享更多的定位*/
	$(window).scroll(function(){
		topLeft();
		$('#apply').css("position","relative");
	 	$('#apply').css("top",0);
		$('#apply').css("left",0);
		var offsetLeft=$('#apply').offset().left;
		while($(document).scrollTop()>=$('#apply').offset().top){
		$('#apply').css("position","fixed");
		$('#apply').css("top",0);
		$('#apply').css("left",offsetLeft);
		break;
	}	
	});

	/*窗口的大小发生变化时 分享更多的定位*/
	$(window).resize(function(){
		topLeft();
	});

	/*点击删除 分享更多隐藏*/
	$(".close").click(function(){
		$(".shareMore").css("display","none");
	});

	/*返回顶部*/
	$(".goTop").click(function(){
		$(document).scrollTop(0);
	});
})