var time=0;
//���涨ʱʱ��
var pause=true;
//�����Ƿ���ͣ��־��true��ʾ��ͣ
var set_timer;
//���ö�ʱ����
var d=new Array(10);
//�����DIV��ǰװ��СDIV�ı��
var d_direct=new Array(
        [0],//Ϊ���߼����򵥣���һ��Ԫ�����ǲ��ã����Ǵ��±�1��ʼʹ��
        [2,4],//��DIV���Ϊ1��DIV����ȥ��λ�ã������һ�����ȥ2,4��λ��
        [1,3,5],
        [2,6],
        [1,5,7],
        [2,4,6,8],
        [3,5,9],
        [4,8],
        [5,7,9],
        [6,8]
    );
//�����DIV��ŵĿ��ƶ�λ�ñ��
var d_posXY=new Array(
        [0],//ͬ�������ǲ�ʹ�õ�һ��Ԫ��
        [0,0],//��һ����ʾleft,�ڶ�����ʾtop�������һ���λ��Ϊlet:0px,top:0px
        [150,0],
        [300,0],
        [0,150],
        [150,150],
        [300,150],
        [0,300],
        [150,300],
        [300,300]
    );
//��DIV��ŵ�λ��
d[1]=1;d[2]=2;d[3]=3;d[4]=4;d[5]=5;d[6]=6;d[7]=7;d[8]=8;d[9]=0;
//Ĭ�ϰ���˳���źã���DIV�ھſ�û�У�����Ϊ0��������0��ʾ�հ׿�

function move(id){
    //�ƶ�������ǰ�������ѽ�����
    var i=1;
    for(i=1; i<10; ++i){
        if( d[i] == id )
            break;
    }
    //���forѭ�����ҳ�СDIV�ڴ�DIV�е�λ��
    var target_d=0;
    //����СDIV����ȥ�ı�ţ�0��ʾ�����ƶ�
    target_d=whereCanTo(i);
    //�����ҳ�СDIV����ȥ��λ�ã��������0����ʾ�����ƶ�����������ƶ����򷵻ؿ���ȥ��λ�ñ��
    if( target_d != 0){
        d[i]=0;
        //�ѵ�ǰ�Ĵ�DIV�������Ϊ0����Ϊ��ǰСDIV�Ѿ������ˣ����Ե�ǰ��DIV��û��װСDIV��
        d[target_d]=id;
        //��Ŀ���DIV����Ϊ�������СDIV�ı��
        document.getElementById("d"+id).style.left=d_posXY[target_d][0]+"px";
        document.getElementById("d"+id).style.top=d_posXY[target_d][1]+"px";
        //������ñ������СDIV��λ�ã������Ƶ�Ŀ���DIV��λ��
    }
    //���target_d��Ϊ0�����ʾ�����ƶ�����target_d����СDIVҪȥ�Ĵ�DIV��λ�ñ��
    var finish_flag=true;
    //������Ϸ�Ƿ���ɱ�־��true��ʾ���
    for(var k=1; k<9; ++k){
        if( d[k] != k){
            finish_flag=false;
            break;
            //�����DIV����ı�ź�������ı�Ų�ͬ�����ʾ������ȫ������˳���ŵģ���ô����Ϊfalse������ѭ�������治�����ж��ˣ���ΪֻҪһ����������û�����Ϸ
        }
    }
    //��1��ʼ����ÿ����DIV����ı�ű���һ�£��ж��Ƿ����
    if(finish_flag==true){
        if(!pause)
            start();
        alert("congratulation");
    }
    //���Ϊtrue�����ʾ��Ϸ��ɣ������ǰû����ͣ���������ͣ��ʽ�����ҵ�����ʾ�������Ϸ��
    //start()��������ǿ�ʼ����ͣһ��ĺ����������ͣ�����ú�Ὺʼ�������ʼ������ú����ͣ
}

function whereCanTo(cur_div){
    //�ж��Ƿ���ƶ������������Ǵ�DIV�ı�ţ�����СDIV�ı�ţ���ΪСDIV��Ÿ�����ȥ��û��ϵ��СDIV�ǻᶯ��
    var j=0;
    var move_flag=false;
    for(j=0; j<d_direct[cur_div].length; ++j){
        //�����п���ȥ��λ��ѭ������һ��
        if( d[ d_direct[cur_div][j] ] == 0 ){
            move_flag=true;
            break;
        }
        //���Ŀ���ֵΪ0��˵��Ŀ��λ��û��װСDIV��������ƶ�������ѭ��
    }
    if(move_flag == true){
        return d_direct[cur_div][j];
    }else{
        return 0;
    }
    //�����ƶ����򷵻�Ŀ��λ�õı�ţ����򷵻�0����ʾ�����ƶ�
}

//��ʱ������ÿһ��ִ��һ��
function timer(){
    time+=1;//һ���Ӽ�һ����λ����
    var min=parseInt(time/60);//����ת��Ϊ���ӣ�һ����60�룬ȡ�̾��Ƿ���
    var sec=time%60;//ȡ�������
    document.getElementById("timer").innerHTML=min+"��"+sec+"��";//Ȼ���ʱ�������ʾ����
}

//��ʼ��ͣ����
function start(){
    if(pause){
        document.getElementById("start").innerHTML="��ͣ";//�Ѱ�ť��������Ϊ��ͣ
        pause=false;//��ͣ��ʾ����Ϊfalse
        set_timer=setInterval(timer,1000);//������ʱ
        //�����ǰ����ͣ����ʼ
    }else{
        document.getElementById("start").innerHTML="��ʼ";
        pause=true;
        clearInterval(set_timer);
    }
}

//���ú���
function reset(){
    time=0;//��ʱ������Ϊ0
    random_d();//�ѷ���������Һ���
    if(pause)//�����ͣ����ʼ��ʱ
        start();
}

//������ҷ��麯�������ǵ�˼·�Ǵӵھſ鿪ʼ���������һ������Ȼ����������Ե�һ��
function random_d(){
    for(var i=9; i>1; --i){
        var to=parseInt(Math.random()*(i-1)+1);//�������������ΧΪ1��i�����ܳ�����Χ����Ϊû���id��DIV
        if(d[i]!=0){
            document.getElementById("d"+d[i]).style.left=d_posXY[to][0]+"px";
            document.getElementById("d"+d[i]).style.top=d_posXY[to][1]+"px";
        }
        //�ѵ�ǰ��DIVλ������Ϊ���������DIV��λ��
        if(d[to]!=0){
            document.getElementById("d"+d[to]).style.left=d_posXY[i][0]+"px";
            document.getElementById("d"+d[to]).style.top=d_posXY[i][1]+"px";
        }
        //�����������DIV��λ������Ϊ��ǰ��DIV��λ��
        var tem=d[to];
        d[to]=d[i];
        d[i]=tem;
        //Ȼ�������������DIV����ı�ŶԵ�һ��
    }
}

//��ʼ��������ҳ����ص�ʱ��������ú��������¿�ʼ
window.onload=function(){
    reset();
}