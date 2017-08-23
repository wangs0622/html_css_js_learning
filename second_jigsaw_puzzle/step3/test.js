// 觉得应该这么考虑，我们有一个九宫格，他们就相当于背景，是不动的，动的是在九宫格上的块。就像下棋一样，图不动，棋动。
// 在源代码中，定义了一个数组 d ,其序号代表的是格子，其中的值代表了位于其上的棋子。例如 d[1] = 1 代表这个时候，第一个
// 格子上的棋子是 1。当然 d[1] = 2 也是可以的。在动的时候，首先检查的是我们点击的这个棋子目前位于哪个格子上，然后检测
// 我们可以往什么方向移动，如果可移动的方向上都有棋子的话，则没法移动，如果有一处可以移动的话，则进行移动。

var d = new Array(0,1,2,3,4,5,6,7,8,0);
// 因为数组的下标从零开始，为了方便，就不用 d[0] 这个元素了。 最后一个元素为 d[9]=0 代表这里没有棋子。

var place_go_array = new Array(0,[2,4],[1,3,5],[2,6],[1,5,7],[2,4,6,8],[3,5,9],[4,8],[5,7,9],[6,8]);
// 同理，第零个数不用， 索引下标代表了当前所在的格位置， 里面包含的元素代表了可能可以去格位置。

var place_px_array = new Array(0,
								["0px","0px"],["150px","0px"],["300px","0px"],
								["0px","150px"],["150px","150px"],["300px","150px"],
								["0px","300px"],["150px","300px"],["300px","300px"]);
// 代表了每个格子的像素位置
							
var pause = true;
// 暂停游戏标志

var time_counter = 0;
// 计数器

var time_setting;
// 计数设置

function move(id)
{
	if (!pause)
	{
		var place = new Number;
		for (i = 1; i < 10 ; i++)
		{
			if (d[i] == id)
			{
				place = i;
				break;
			}
		}
		// 获取我们所点击的这个棋子所在的位置，保存在 place 中。

		place_go = whereGo(place);
		// place_go 唯一代表了可以去的位置，有两种可能，一种是 0 代表不能移动，一种是 1-9 代表可以去的格位置。

		if (place_go != 0)
		{
			place_px = place_px_array[place_go];
			// place_px 即为可以去的格的像素位置。
			document.getElementById("d"+id).style.left = place_px[0];
			document.getElementById("d"+id).style.top = place_px[1];
			// 这两句语句的作用是移动相应的棋子

			d[place] = 0;
			d[place_go] = id;
		}
		if (testWork())
		{
			document.getElementById("last").style.left = "300px";
			document.getElementById("last").style.top = "300px";
			pauseGame();
			alert('congratulation');
		}
	}
}


// whereGo 函数的输入时 place, 代表点击的棋子目前所在的格的位置
// 输出为 可以去的格的位置。当为零的时候，说明没地方可去。则不移动。
function whereGo(place)
{
	place_can_go = place_go_array[place];
	for (i in place_can_go)
	{
		if (d[place_can_go[i]] == 0)
		{
			return place_can_go[i];
		}
	}
	return 0;
}

// 检测有没有完成游戏
function testWork()
{
	var i;
	for (i = 0; i < d.length; i++)
	{
		if (d[i] != i)
		{
			break;
		}
	}
	if (i == 9)
	{
		return true;
	}
	else
		return false;
}

// 计时器
function timeCounter()
{
	time_counter++;
	var minter = parseInt(time_counter/60);
	var seconds = time_counter%60;
	document.getElementById("time").innerHTML=minter + " m" + " " + seconds + " s";  

}


// 暂停键调用的函数，用于暂停游戏
function pauseGame()
{
	pause = true;
	clearInterval(time_setting)
}


// 开始按钮调用的函数，开始游戏
function startGame()
{
	if (pause)
	{
		pause = false;
		// 设置为暂停状态
		time_setting = setInterval("timeCounter()", 1000);
		// 每 1 秒调用一次 timeCounter() 函数

	}
}


// 初始化，随机排布棋子的位置。 运行十次循环，每个循环得到两个随机数（1-9），然后对换 d 中这两个随机数所对应的值。
// 根据得打的新的 d 来重新排布各个棋子的位置。
function initial()
{
	time_counter = 0;
	startGame()
	// 设置时间从零开始,默认为开始的状态

	var temp = new Number;
	for (i = 1; i < 10; i++ )
	{
		number1 = 1 + Math.random()*9;
		number1 = Math.floor(number1);
		number2 = 1 + Math.random()*9;
		number2 = Math.floor(number2);


		temp = d[number1];
		d[number1] = d[number2];
		d[number2] = temp;
	}

	for (i = 1 ; i < d.length ; i++ )
	{
		if (d[i] != 0)
		{
			document.getElementById("d"+d[i]).style.left = place_px_array[i][0];
			document.getElementById("d"+d[i]).style.top = place_px_array[i][1];
		}
		
	}
	document.getElementById("last").style.left = "450px";
	document.getElementById("last").style.top = "300px";

}

//初始化函数，页面加载的时候调用重置函数，重新开始
window.onload=function()
{
    initial();
}

// 简化按钮调用此函数，目的是简化过程，观看最后的结果。 可以将其删除，同时需将 HTML 文档中的 简化按钮删除掉。
function simple()
{
	d = new Array(0,1,2,3,4,5,6,7,0,8);
	for (i = 1 ; i < d.length ; i++ )
		{
			if (d[i] != 0)
			{
				document.getElementById("d"+d[i]).style.left = place_px_array[i][0];
				document.getElementById("d"+d[i]).style.top = place_px_array[i][1];
			}
		
		}

}