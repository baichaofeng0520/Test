var a = ["#FFBBFF", "#FFAEB9", "#FF8C69", "#FF8247", "#FF34B3", "#FF00FF"];
var a1 = ["	#FFFFFF", "	#FFFAFA", "#FFF68F", "#FFC1C1", "#FFB90F", "#FFA54F"];
var a2 = ["	#EECFA1", "#EEB4B4", "#EEA9B8", "#EE9572", "#EE799F", "#EE6AA7"];
var c_img = [1, 2, 3, 4, 5, 6, 7, 8];
var b = 0;
var c = 0;
var d = 0
var t;
var Flg = 1;
var boo=0;
function timedCount() {
	document.getElementById('txt').value = c
	c = c + 1
	t = setTimeout("timedCount()", 1000)
}
//特效			
function iii() {
	document.getElementById("dad").style.borderColor = a[b];
	document.getElementById("dvd").style.borderColor = a1[b];
	document.getElementById("hr1").style.backgroundColor = a2[b];
	//document.getElementById("drd").style.borderColor = a2[b];
	document.getElementById("hh").style.color = a2[d];
	b++;
	d--;
	if(b == a.length) {
		b = 0;
	}
	if(d==-1){
    d=a.length;
    }
}

function settm() {
	c = setInterval(iii, 1000);
}

function initial() {
	for(var i = 1; i <= 8; i++) {
		document.getElementById("i" + i).src = "img/13.jpg"
	}
}
window.onload = function() {	
	settm();
	initial();
	document.getElementById("start").onclick = function() {
		boo=boo+1;
		//随机牌面
		c_img.sort(function() {
			return Math.random() > 0.5 ? 1 : -1;
		})
		console.log(c_img);
		for(var i = 1; i <= 8; i++) {
			document.getElementById("i" + i).src = "img/" + c_img[i - 1] + ".jpg";
		}
		//定时翻转牌面为初始状态
		var t = setTimeout("initial()", 3000);
		//计时 
		var r = setTimeout("timedCount()", 3200);		
	}
}
//结束游戏
function stop() {
	for(var i = 1; i <= 8; i++) {
		document.getElementById("i" + i).src = "img/pkp2.jpg";
	}
	clearInterval(c);
	clearTimeout(t);
}

//翻牌
function change(index) {	
	if(boo==1){
	console.log("位置：" + index + "牌面：" + c_img[index - 1]);
	if(c_img[index - 1] == Flg) {
		Flg++;
		var cc = document.getElementById("i" + index);
		cc.src = "img/" + c_img[index - 1] + ".jpg";
		if(Flg == 9) {
			Flg = 1;
			alert("游戏结束");
		}
	}else{
		console.log("牌面错误");
	}		
	}else if(boo==0){
		alert("请先开始游戏");
	}	
}