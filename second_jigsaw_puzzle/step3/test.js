// ����Ӧ����ô���ǣ�������һ���Ź������Ǿ��൱�ڱ������ǲ����ģ��������ھŹ����ϵĿ顣��������һ����ͼ�������嶯��
// ��Դ�����У�������һ������ d ,����Ŵ�����Ǹ��ӣ����е�ֵ������λ�����ϵ����ӡ����� d[1] = 1 �������ʱ�򣬵�һ��
// �����ϵ������� 1����Ȼ d[1] = 2 Ҳ�ǿ��Եġ��ڶ���ʱ�����ȼ��������ǵ�����������Ŀǰλ���ĸ������ϣ�Ȼ����
// ���ǿ�����ʲô�����ƶ���������ƶ��ķ����϶������ӵĻ�����û���ƶ��������һ�������ƶ��Ļ���������ƶ���

var d = new Array(0,1,2,3,4,5,6,7,8,0);
// ��Ϊ������±���㿪ʼ��Ϊ�˷��㣬�Ͳ��� d[0] ���Ԫ���ˡ� ���һ��Ԫ��Ϊ d[9]=0 ��������û�����ӡ�

var place_go_array = new Array(0,[2,4],[1,3,5],[2,6],[1,5,7],[2,4,6,8],[3,5,9],[4,8],[5,7,9],[6,8]);
// ͬ������������ã� �����±�����˵�ǰ���ڵĸ�λ�ã� ���������Ԫ�ش����˿��ܿ���ȥ��λ�á�

var place_px_array = new Array(0,
								["0px","0px"],["150px","0px"],["300px","0px"],
								["0px","150px"],["150px","150px"],["300px","150px"],
								["0px","300px"],["150px","300px"],["300px","300px"]);
// ������ÿ�����ӵ�����λ��
							
var pause = true;
// ��ͣ��Ϸ��־

var time_counter = 0;
// ������

var time_setting;
// ��������

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
		// ��ȡ���������������������ڵ�λ�ã������� place �С�

		place_go = whereGo(place);
		// place_go Ψһ�����˿���ȥ��λ�ã������ֿ��ܣ�һ���� 0 �������ƶ���һ���� 1-9 �������ȥ�ĸ�λ�á�

		if (place_go != 0)
		{
			place_px = place_px_array[place_go];
			// place_px ��Ϊ����ȥ�ĸ������λ�á�
			document.getElementById("d"+id).style.left = place_px[0];
			document.getElementById("d"+id).style.top = place_px[1];
			// �����������������ƶ���Ӧ������

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


// whereGo ����������ʱ place, ������������Ŀǰ���ڵĸ��λ��
// ���Ϊ ����ȥ�ĸ��λ�á���Ϊ���ʱ��˵��û�ط���ȥ�����ƶ���
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

// �����û�������Ϸ
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

// ��ʱ��
function timeCounter()
{
	time_counter++;
	var minter = parseInt(time_counter/60);
	var seconds = time_counter%60;
	document.getElementById("time").innerHTML=minter + " m" + " " + seconds + " s";  

}


// ��ͣ�����õĺ�����������ͣ��Ϸ
function pauseGame()
{
	pause = true;
	clearInterval(time_setting)
}


// ��ʼ��ť���õĺ�������ʼ��Ϸ
function startGame()
{
	if (pause)
	{
		pause = false;
		// ����Ϊ��ͣ״̬
		time_setting = setInterval("timeCounter()", 1000);
		// ÿ 1 �����һ�� timeCounter() ����

	}
}


// ��ʼ��������Ų����ӵ�λ�á� ����ʮ��ѭ����ÿ��ѭ���õ������������1-9����Ȼ��Ի� d �����������������Ӧ��ֵ��
// ���ݵô���µ� d �������Ų��������ӵ�λ�á�
function initial()
{
	time_counter = 0;
	startGame()
	// ����ʱ����㿪ʼ,Ĭ��Ϊ��ʼ��״̬

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

//��ʼ��������ҳ����ص�ʱ��������ú��������¿�ʼ
window.onload=function()
{
    initial();
}

// �򻯰�ť���ô˺�����Ŀ���Ǽ򻯹��̣��ۿ����Ľ���� ���Խ���ɾ����ͬʱ�轫 HTML �ĵ��е� �򻯰�ťɾ������
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