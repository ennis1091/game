$(function(t){function e(t,e){return window.getComputedStyle?getComputedStyle(t)[e]:t.currentStyle[e]}function i(){var t,i;parseFloat("400px");clearInterval(o.timer),o.timer=setInterval(function(){t=parseFloat(e(o,"top")),i=parseFloat(e(o,"left")),-3==(l-=1)&&(l=2,r=-r),o.style.top=t+l+"px",o.style.left=i+r+"px"},30)}var n=document.getElementById("ul2");$(".pic-1-u").on("touchstart",function(){$(this).attr("src","images/btn_1_down.png")}),$(".pic-1-u").on("touchend",function(){$(this).attr("src","images/btn_1_up.png")}),$(".word ul").html($(".word ul").html()+$(".word ul").html());setInterval(function(t){$(".word ul").css("top",parseInt($(".word ul").css("top"))-1+"px"),parseInt($(".word ul").css("top"))==-parseInt($(".word ul").height())/2&&$(".word ul").css("top","0")},30);var a=document.getElementById("gouz");$(".pic_val").each(function(t){$(this).click(function(t){$("#money").val($(this).attr("data-my"))})});var s=$(a).css("top");$(".pic-1-u").click(function(t){$(".zjceng").show(),clearInterval(l);var e=t.target;if("1"!==e.getAttribute("interval")){e.setAttribute("interval","1");var l=setInterval(function(t){if($(a).css("top",parseInt($(a).css("top"))+10+"px"),n.getBoundingClientRect().top-a.getBoundingClientRect().bottom<-parseInt($(".dwawa img").height())/2){clearInterval(l);var e=setInterval(function(t){$(a).css("top",parseInt($(a).css("top"))-10+"px"),$(".dwawa").css("visibility","visible"),$(".dwawa").css("top",parseInt($(".dwawa").css("top"))-10+"px"),parseInt($(a).css("top"))<=parseInt(s)&&(clearInterval(e),clearInterval(o.timer),$("#dwa").addClass("rotate"),timerdiao=setInterval(function(t){$(".dwawa").css("top",parseInt($(".dwawa").css("top"))+10+"px");var e=document.getElementById("dwa");if(n.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom<0){clearInterval(timerdiao),$(".dwawa").css("visibility","hidden");for(var i=document.querySelector("#start1"),a=document.querySelector("#target1"),s=document.querySelector("#start2"),o=document.querySelector("#target2"),l=document.querySelector("#start3"),r=document.querySelector("#target3"),c=document.querySelector("#start4"),u=document.querySelector("#target4"),d=document.querySelector("#start5"),p=document.querySelector("#target5"),w=document.querySelector("#start6"),m=document.querySelector("#target6"),v=[i,s,l,c,d,w,document.querySelector("#start7")],g=[a,o,r,u,p,m,document.querySelector("#target7")],f=funParabola(v[0],g[0],{speed:400,curvature:.002,complete:function(){v[0].style.visibility="hidden"}}),h=funParabola(v[1],g[1],{speed:100,curvature:.002,complete:function(){v[1].style.visibility="hidden"}}),y=funParabola(v[2],g[2],{speed:100,curvature:.002,complete:function(){v[2].style.visibility="hidden"}}),I=funParabola(v[3],g[3],{speed:300,curvature:.002,complete:function(){v[3].style.visibility="visible",$(".tanchuang").css("visibility","visible")}}),b=funParabola(v[4],g[4],{speed:100,curvature:.002,complete:function(){v[4].style.visibility="hidden"}}),q=funParabola(v[5],g[5],{speed:100,curvature:.002,complete:function(){v[5].style.visibility="hidden"}}),S=funParabola(v[6],g[6],{speed:400,curvature:.002,complete:function(){v[6].style.visibility="hidden"}}),B=0;B<v.length;B++)v[B].style.visibility="visible";f.position().move(),h.position().move(),y.position().move(),I.position().move(),b.position().move(),q.position().move(),S.position().move()}},20))},20);i()}},20)}}),$(".wawa ul").each(function(t){$(this).html($(this).html()+$(this).html())}),$(".wawa ul").css("width",2*parseInt($(".wawa ul").css("width"))+"px"),$(".wawa ul").eq(1).css("left",-parseInt($(".wawa ul").eq(1).css("width"))/2+"px"),$(".wawa ul").each(function(t){var e=setInterval(function(t){$(".wawa ul").eq(0).css("left",parseInt($(".wawa ul").eq(0).css("left"))-1+"px"),parseInt($(".wawa ul").eq(0).css("left"))==-parseInt($(".wawa ul").eq(0).css("width"))/2&&$(".wawa ul").eq(0).css("left","0"),n.getBoundingClientRect().top-a.getBoundingClientRect().bottom<10&&clearInterval(e)},30),i=setInterval(function(t){$(".wawa ul").eq(1).css("left",parseInt($(".wawa ul").eq(1).css("left"))+1+"px"),0==parseInt($(".wawa ul").eq(1).css("left"))&&$(".wawa ul").eq(1).css("left",-parseInt($(".wawa ul").eq(1).css("width"))/2+"px"),n.getBoundingClientRect().top-a.getBoundingClientRect().bottom<-parseInt($(".dwawa img").height())/2+10&&(clearInterval(i),$(".wawa .ul-2 li").each(function(t){$(this)[0].getBoundingClientRect().left<a.getBoundingClientRect().left+parseInt($(a).width())/2&&a.getBoundingClientRect().left+parseInt($(a).width())/2<=$(this)[0].getBoundingClientRect().right&&($(".diaowa").attr("src",$(this).find("img").eq(0).attr("src")),$(this).css("visibility","hidden"),$(this).find("img").eq(1).css("visibility","visible"))}))},30)});var o=document.getElementById("test"),l=3,r=5});