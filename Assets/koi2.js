// 1/31 22:53
// ama 252454  sum 777b2fe650d093b0e65e8ac95ea8cbb8 iMac
// select * from `koif` where id='2C214B3D-64B3-5484-AB39-579FEA0FEEB7'
//import UnityAds;
import Prime31;


var lastMousePosition : Vector3;
var koi : Transform;

var cube1 : Transform;
var cube2 : Transform;
var cube3 : Transform;
var cube4 : Transform;

var pl2 : Transform;
var ball : Transform;
var marine : Transform;

var glass : Transform;

var hit : RaycastHit;
var matchObject : GameObject;
var adm : GameObject;

var ar : Texture;
var ar2 : Texture;
var ar3 : Texture;
var ar4 : Texture;
var arr : Texture;
var arl : Texture;
var tar : Texture;
var tfd : Texture;
var tsh : Texture;
var c1 : Texture;
var c2 : Texture;
var c3 : Texture;
var c4 : Texture;
var bu : Texture;
var yes : Texture;
var can : Texture;
var tnk : Texture;
var b1 : Texture;
var b2 : Texture;
var b3 : Texture;
var b4 : Texture;
var b5 : Texture;
var b6 : Texture;
var b7 : Texture;
var b8 : Texture;
var b9 : Texture;
var b10 : Texture;
var b11 : Texture;
var b12 : Texture;
var b13 : Texture;
var b14 : Texture;
var b15 : Texture;

var tex : Texture;
var txp : Texture;
var spl : Texture;
var maki : Texture;
var makia : Texture;
var makib : Texture;
var hlp : Texture;
var fbi : Texture;
var twi : Texture;
var hrt : Texture;
var vid : Texture;
var que : Texture;
var fba : Texture;

var itx : Texture[];

var se1 : AudioSource;
var se2 : AudioSource;
var se3 : AudioSource;

var skin : GUISkin;
var skin2 : GUISkin;
var Text : GUIText;

var lv : int;
var xp : int;
var gp : int;
var pp : int;
var cl : int;

var pn : int;
var pmax : int;
var r2 : int;
var fmax : int;
var tc : int;
var tby : int;
var tbe : int;
var tbs : int;

var fi : int;
var ob : int;
var mv : int;
var mn : int;
var mn2 : int;
var idc : int;
var my : int;
var vx : int;
var vy : int;
var dn : int;
var mt : float;
var by : float;
var gy : float;
var ty : int;
var v : int;
var fs : int;
var fe : int;
var deb : int;
var wl : int;
var jp : int;
var pay : int;
var paid : int;
var iy : int;
var ini : int;
var gm : int;
var fb : int;
var fbd : int;
var tw : int;
var twd : int;
var vok : int;

var tm : float;
var lt : float;
var ltm : float;
var btm : float;

var clock : int;
var cha : int;
var cb2 : int;
var fin : int;
var rel : int;
var ama : int;
var got : int;
var slot : int;
var cn : int;
var tab : int;
var rnd : int;
var gf : int;
var sw : int;
var sh : int;
var now : int;
var last : int;
var day : int;
var ho : int;

var ex : float;
var ey : float;
var ev : float;

var f : int[];
var fv : int[];
var fa : int[];
var ag : int[];
var fl : int[];
var sp : float[];
var x : float[];
var y : float[];
var sx : float[];
var sy : float[];
var pmx : int[];
var cb : int[];
var gtm : int[];
var z : int[];

var uid : String;
var s : String;
var la : String;
var gst : String;
var err : String;
var ver : String;
var fri : String;
var nam : String;
var cnt : String;
var inp : String;
var fbid : String;
var fbna : String;

var par1 : ParticleSystem;

var keyboard : TouchScreenKeyboard;

var mika : Font;
var mika2 : Font;

var query : boolean = false;
var isServiceReady : boolean;

var fid = new Array("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
var fbn = new Array("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
var inv = new Array("","","","","","","","","","","","","","","","","","","");
var gid = new Array("","","","","","","","","","","","","","","","","","","");

static var fnam = new Array(
"","白","緋鯉","烏鯉","紅白","大正三色","昭和三色","浅黄","白写り","黄写り","緋写り",
"べっ甲","黄べっ甲","赤べっ甲","丹頂","丹頂三色","丹頂昭和","プラチナ黄金","山吹黄金","銀松葉","赤松葉",
"レインボーフィッシュ","ドワーフホーク","ランプロローグス","ボアフィッシュ","タツノオトシゴ","エイ","ブルータン","アデヤッコ","ドワーフグラミー","ネオンフィッシュ","イエローストライプマルーンクラウンフィッシュ","マーテンシーバタフライフィッシュ","シンガポールエンジェルフィッシュ","ホシゾラヤッコ","セグロチョウチョウウオ","ロイヤルエンジェルフィッシュ","シロクロカクレクマノミ","フエヤッコダイ","フレームエンジェルフィッシュ","ハーフブラックエンジェルフィッシュ","ダブルサドルバタフライフィッシュ","フォルスパーソナイファーエンジェルフィッシュ","マルチカラーエンジェルフィッシュ","スクリブルエンジェルフィッシュ","タンクブレッドエンジェルフィ   ッシュ","オレンジバタフライフィッシュ","ピグミーエンジェルフィッシュ","スリーバンドバタフライフィッシュ","レッドストライプエンジェルフィッシュ","スポットフィンバタフライエンジェルフィッシュ","ラスティーエンジェルフィッシュ","シナモンクラウンフィッシュ","レモンバタフライフィッシュ","オーリガバタフライフィッシュ","バイカラーエンジェルフィッシュ","ラクーンバタフライフィッシュ","タヒチアンバタフライフィッシュ","マルーンクラウンフィッシュ","フレームバックエンジェルフィッシュ","パキスタンバタフライフィッシュ","タテジマキンチャクダイ","ティアドロップバタフライフィッシュ","クラーキークラウンフィッシュ","クライスルースエンジェルフィッシュ","デクリビスバタフライフィッシュ","コラールビューティーエンジェルフィッシュ","レモンピールエンジェルフィッシュ","パッサーエンジェルフィッシュ","アミチョウチョウウオ","フォーアイエンジェルフィッシュ","ダイオウグソクムシ","ダイオウイカ","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Coral","Coral","Coral","Stone","Coral","Coral","SnowMan","Egg1","Egg2","Egg3","Egg4","Egg5","Egg6","Egg7","Egg8","Jack","Vase","Box","Glass","Cup","Bottle","Ship","Car","Plane","Clover","Balloon","Green Hat","Green Drink","Coral","Coral","Coral","Coral","Coral","Coral","Coral","Coral","Coral","Coral","Coral","Coral","Coral","Sea Weed","Sea Weed","Sea Weed","Sea Weed","Rocks","Rocks","Rocks","Rocks");

static var enam = new Array(
"","Shiro","Higoi","Crow","Kōhaku","Taishō Sanke","Shōwa Sanke","Asagi","Shiro Utsuri","Ki Utsuri","Hi Utsuri",
"Bekko","Ki Bekko","Aka Bekko","Tanchō","Tanchō Sanke","Tanchō Shōwa","Platiunum ōgon","Yamabuki ōgon","Gin Matsuba","Aka Matsuba",
"Rainbowfish","Dwarf hawkfish","Six bar lamprologus","BoarFish","Seahorse","Manta Ray","Blue Tang","Blueface Angelfish","Dwarf Gourami","NeonFish",

"Yellowstripe Maroon Clownfish","Mertensii Butterflyfish","Singapore Angelfish","Bluespotted Angelfish","Saddleback Butterflyfish","Regal Angelfish","Black and White Ocellaris Clownfish","Yellow Longnose Butterflyfish","Frame Angelfish","Half Black Angelfish",
"Double Saddle Butterflyfish","False Personifer Angelfish","Multicolor Angelfish","Scribbled Angelfish","Tank Bred Annularis Angelfish","Orange Butterflyfish","Pygmy Angelfish","Three Banded butterflyfish","Red Stripe Angelfish","Spotfin Butterflyfish",
"Rusty Angelfish","Cinnamon Clownfish","Lemon Butterflyfish","Auriga Butterflyfish","Bicolor Angelfish","Raccoon Butterflyfish","Tahitian Butterflyfish","Maroon Clownfish","Flameback Angelfish","Pakistan Butterflyfish",
"Emperor Angelfish","Teardrop Butterflyfish","Clarkii Clownfish","Chrysurus Angelfish","Declivis Butterflyfish","Coral Beauty Angelfish","Lemonpeel Angelfish","Passer Angelfish","Latticed Butterflyfish","Foureye Butterflyfish",

"Giant Isopod","Giant Squad","","","","","","","","",
"","","","","","","","","","");


var gr : int[];
gr = new Array(
0,5,1,2,3,5,4,5,5,2,5,
5,5,2,4,5,5,6,6,6,1,
1,5,5,5,7,8,5,2,5,5,

3,4,2,2,4,2,3,4,2,2,
4,2,2,2,2,4,2,4,2,4,
2,3,4,4,2,4,4,3,2,4,
2,4,3,2,4,2,2,2,4,4,

9,10,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0);

static var gnam = new Array(
"","White","Red","Black","Buttefly","Tropical","Starfish","Seahorse","Ray","Isopod","Mollusca");

static var gnamj = new Array(
"","小さな魚","エンジェルフィッシュ","クマノミ","バタフライ","トロピカル","ヒトデ","タツノオトシゴ","エイ","グソクムシ","なんたいどうぶつ");

var ky : int[];
ky = new Array(0,10,15,20,-10,-15,-20,-25,-30,-40,-50,-60,-70,-80,-90,-100,-120,-140,-160,-180,-200,100,120,140,150,-2,-2,160,160,180,180,-3,200,240,250,280,300,-4,340,360,400,420,440,460,500,-5,600,640,700,750,800,850,900,1000,1200,1400,1600,2000,-5,2400,3000,3600,4000,-6,5000,6000,7000,-5,8000,9000,10000,-80,-100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,20,20,30,30,10,10,10,10,10,-1,-1,-1,-1,10,200,200,200,100,100,-20,-20,-20,1,1,-1,-2,300,300,300,300,400,400,400,400,500,500,500,500,500,-10,-10,-10,-10,-20,-20,-20,-20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-20,-20,-20,-20,100,-10,-10,-10,-5,-5,-5,-10,-10,-20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

var il : int[];
il = new Array(1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,16,16,17,17,17,18,18,19,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,26,27,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,1,1,42,43,43,44,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

var kt : int[];
kt = new Array(0,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,14,14,16,16,12,13,13,14,48,48,14,14,15,15,15,18,18,20,20,18,18,24,24,22,22,25,25,26,26,27,27,28,28,30,30,32,32,32,32,34,34,34,34,34,36,36,36,36,36,36,36,36,36,36,480,960,48,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

var nl : int[];
nl = new Array(1,
7,15,30,40,49,73,109,163,244,366,549,823,1234,1851,2776,4164,6246,9369,14053,21079,23186,25504,28054,30859,33944,37338,41071,45178,49695,54664,60130,66143,72757,80032,88035,96838,106521,117173,128890,141779,155956,171551,188706,207576,228333,251166,276282,303910,334301,367731,404504,444954,489449,538393,592232,651455,716600,788260,867086,953794,1049173,1154090,1269499,1396448,1536092,1689701,1858671,2044538,2248991,2473890,2721279,2993406,3292746,3622020,3984222,4382644,4820908,5302998,5833297,6416626,7058288,7764116,8540527,9394579,10334036,11367439,12504182,13754600,15130060,16643066,18307372,20138109,22151919,24367110,26803821,29484203,32432623,35675885,39243473);

static var onam = new Array(
"","Coral","Coral","Coral","Coral","Coral","Coral","SnowMan","Egg1","Egg2","Egg3","Egg4","Egg5","Egg6","Egg7","Egg8","Jack","Vase","Box","Glass","Cup","Bottle","Ship","Car","Plane","Clover","Balloon","Green Hat","Green Drink","","","","","");

var IAP : String[];
IAP = new Array("com.coremedia.fish.koi10","com.coremedia.fish.koi20","com.coremedia.fish.koi50","com.coremedia.fish.koi110","com.coremedia.fish.koi350",    "com.coremedia.fish.koi600");

/*
var mix =[
["","010101","010101","010101","010101","010101","010101","010101","010101","010101","010101"],
["","010101","010101","010101","010101","010101","010101","010101","010101","010101","010101"],
["","040404","010101","010101","010101","010101","010101","010101","010101","010101","010101"],
["","080808","101313","010101","010203","010203","010203","010203","010203","010203","010203"],
["","080808","010101","050605","010203","010203","010203","010203","010203","010203","010203"],
["","020202","040404","040404","030303","010203","010203","010203","010203","010203","010203"],
["","030507","030408","050710","010203","010203","010203","010203","010203","010203","010203"],
["","020406","040506","010408","030508","010306","030809","010203","010203","010203","010203"],
["","030406","010307","020409","010203","040307","020310","030610","010203","010203","010203"],
["","010101","010101","010101","010101","010101","010101","010101","010101","010101","010101"],
["","010101","010101","010101","010101","010101","010101","010101","010101","010101","010101"]
];
*/

function Awake() {
// 	PlayerPrefs.DeleteAll();
//print(mix(1,2));
	now=PlayerPrefs.GetInt("now",0);
	last=(System.DateTime.UtcNow.Subtract(new System.DateTime(2024, 1, 1))).TotalSeconds-now;
	if (now==0) PlayerPrefs.SetInt("sta",last);
	day = ((System.DateTime.UtcNow.Subtract(new System.DateTime(2024, 1, 1))).TotalSeconds-PlayerPrefs.GetInt("sta"))/86400+1;
print("day:"+day+","+last);
	ho=last/3600;if (deb) ho=12;
	cha=PlayerPrefs.GetInt("cb");
	PlayerPrefs.SetInt("free",0);
	PlayerPrefs.SetInt("fbwin",0);

	ini=1;tab=1;fs=1;fe=20;v=100;
//	if (Application.platform == RuntimePlatform.OSXEditor) deb=1;
	deb=0;

	la=Application.systemLanguage.ToString();
	uid=SystemInfo.deviceUniqueIdentifier;
// print("uid:"+uid);
	if (la=="Japanese") jp=1;
	if (deb) jp=0;

#if UNITY_ANDROID && !UNITY_EDITOR
	uid=PlayerPrefs.GetString("IMEI");
	if (uid.length!=15) uid=SystemInfo.deviceUniqueIdentifier;

	if (SystemInfo.deviceModel.IndexOf("Amazon")==0 || SystemInfo.deviceModel.IndexOf("KF")==0) ama=1;
	if (ama==1) {

print("ama:"+SystemInfo.deviceModel);


	}
#endif

	Screen.sleepTimeout = 0.0f;
	x = new float[100];
	y = new float[100];
	sx = new float[100];
	sy = new float[100];
	f = new int[100];
	fv = new int[100];
	fa = new int[100];
	ag = new int[100];
	fl = new int[100];
	sp = new float[100];
	pmx = new int[20];
	itx = new Texture[100];
	cb = new int[20];
	gtm = new int[10];
	z = new int[100];

	fid[0]="GameMaster";
	by=-1.0;
	pn=1;
	var offs = Vector3(0.0,1.0,0.0);
//	Instantiate (ball, offs, transform.rotation);
/*
	for (var l=1;l<=40;l++) {
		x[l]=l;
	}
	for (l=1;l<=40;l++) {
		cl=Random.Range(0,40);
		jp=x[l];x[l]=x[cl];x[cl]=jp;
	}
	for (l=1;l<=40;l++) {
		s=s+(x[l]+30)+",";
	}
	print(s);
*/
//	Instantiate (Resources.Load("jelly1"), Vector3(0.0,1.0,0.0), Quaternion.Euler(Random.Range(-20,20),Random.Range(0,360),0));

//	i1=renderer.material.GetTexture ("i1");

	var os=SystemInfo.operatingSystem;
	os=os.Replace(" ", "_");
	os=os.Replace("(", "_");
	os=os.Replace(")", "_");
	os=os.Replace(",", "_");
//	load("ld=1&ini=1&v="+v+"&la="+la+"&os="+SystemInfo.deviceModel);

	load("ld=1&ini=1&v="+v+"&la="+la);
	// ver=(jp)?"サーバーに接続中…\n":"Connecting to server…\n";

	fmax=20;
// 	cl=99;
//	check();
	PlayerPrefs.SetInt("chk",1);

#if UNITY_ANDROID
#endif

#if UNITY_IPHONE
#endif

//	chart();
//	PlayerPrefs.SetInt("ad",1);
//	if (ama<1) PlayerPrefs.SetInt("inter",1);

}

function ad() {
// print("ad:");
#if UNITY_ANDROID
//	PlayerPrefs.SetInt("ad",1);
#endif
}

function adr() {
// print("adr:");
//	PlayerPrefs.SetInt("ad",-1);
}

function chart() {

	cha--;
print("cb:"+cha);
	if (cha<0) {
#if UNITY_IPHONE
	cha=10;
//	PlayerPrefs.SetInt("inter",1);
#endif
#if UNITY_ANDROID
	cha=5;
//	PlayerPrefs.SetInt("inter",1);
#endif
 	}
	PlayerPrefs.SetInt("cb",cha);

}

function check() {
}

function OnApplicationPause() {
//	Application.Quit();
}

function OnApplicationQuit() {
	now = (System.DateTime.UtcNow.Subtract(new System.DateTime(2024, 1, 1))).TotalSeconds;
	PlayerPrefs.SetInt("now",now);
	save();
}

function https(adgp : int) {
	var url = "https://coregame.net/koi/koi4.php";
	var form = new WWWForm();
	form.AddField("id", uid);
	form.AddField("inappp", adgp);
	form.AddField("fbna", fbna);
	form.AddField("fbid", fbid);
	if (ama>0) form.AddField("sig", "kindle"); else form.AddField("sig", PlayerPrefs.GetString("sig"));
	form.AddField("sdat", PlayerPrefs.GetString("dat"));
print ("sig:"+PlayerPrefs.GetString("sig")+" "+PlayerPrefs.GetString("dat"));

	var ww = WWW(url, form);
	yield ww;
	s=ww.text+"&";
	print (s);
	err=tks("err");
	pp=tk("gp");
	gp=tk("sen");
}

function save() {
	var s2="new=1&lv="+lv+"&ex="+xp+"&pmx1=99&cl="+cl+"&";
	for (k=1;k<=50;k++) {
		if (f[k]>0) {
//print("sv:"+k+","+f[k]);
		s2=s2+"fn"+k+"="+f[k]+"&";
		s2=s2+"ag"+k+"="+ag[k]+"&";
		s2=s2+"fl"+k+"="+fl[k]+"&";
		}
	}
	for (var b=1;b<=16;b++) {
		s2=s2+"cb"+b+"="+cb[b]+"&";
	}
	for (k=1;k<=20;k++) {
		s2=s2+"z"+k+"="+z[k]+"&";
	}
	PlayerPrefs.SetString("sv",s2);
print("sv:"+s2);
}

function nkoi() {
	f[r2+1]=got;
	var ob : GameObject;
	var offs = Vector3(0f,0.2f,0f);
	ob=Instantiate(Resources.Load("f"+got), offs, Quaternion.Euler(0,0,0));
	ob.name="f"+got;
	save();
	par1.Play();se2.Play();
}

function cross() {
	// load("gst="+gst+"&ld="+pn+"&dt=cb_"+cb[1+cn*4]+"_"+cb[2+cn*4]+"_"+cn+"_");
	if (lv==3) {
		cb[3+cn*4]=3;cb[4+cn*4]=10;
	} else {
		cb[3+cn*4]=mix(cb[1+cn*4],cb[2+cn*4]);
	}
	lv++;
	save();
}

function mix(m1 : int,m2 : int) {
	if (m1+m2<=8) cb[4+cn*4]=(m1+m2)*60; else cb[4+cn*4]=(m1+m2)*1800;
	var txt : TextAsset=Resources.Load("cb2") as TextAsset;
	s = txt.text;
	for (j=0;j<=m2;j++) {
		for (i=0;i<=20;i++) {
			s2=tk3();
			if (i==m1 && j==m2) {
print("mix:"+s2);
				if (s2.length<6) return 1;
				r=Random.Range(0,100);
				if (r<60) return parseInt(s2.Substring(0,2));
				else if (r>90) return parseInt(s2.Substring(4,2));
				else return parseInt(s2.Substring(2,2));
			}
		}
	}
}

function load(pa : String) {
//	s=PlayerPrefs.GetString("sv","new=1&lv=1&pmx1=10&fn1=19&fn2=20&fn3=17&fn4=18&fn5=16&");
	s=PlayerPrefs.GetString("sv","new=1&lv=1&pmx1=99&cl=0&");

	var url = "https://coregame.net/koi/koi4.php?id="+uid+"&"+pa;
//print(pa);
	// var www : WWW = new WWW (url);
	// yield www;
	// if (www.error != null) {ver="Internet connection error";return;}
	// s=www.text+"&";
//s="new=1&lv=5&ex=0&sen=100&food=20&cl1=10&pmx1=10&box=1&idc=1&count=10000&fn1=1&&fn2=2&";
	print ("s:"+s);
	err=tks("err");
	if (err.IndexOf("レベル")>=0 || err.IndexOf("Level")>=0) {
//		par1.Play();se2.Play();
	}
	ver=tks("ver");
	if (mn==2 || mn==3) {
		lv=tk("lv");
		xp=tk("ex");
	}
//	if (err!="" || tk("new")<1) {my=0.0;vy=0.0;return;}
	if (tk("new")<1) {my=0.0;vy=0.0;return;}
	mt=0.0;
	lv=tk("lv");
	xp=tk("ex");
	gp=tk("sen");
	pp=tk("gp");
	cl=tk("cl");
	nam=tks("name");
	cnt=tks("count");
	gst=tks("gst");
	idc=tk("idc");
	wl=tk("wl");
	fb=tk("fb");
	tw=tk("tw");
	got=tk("got");
	slot=tk("slot");
	fbna=tks("fbna");

	if (tk("ho")>=60) vok=1;
	cl=cl-last*2;
	if (cl<0) cl=0;
print (last+" cl:"+cl);

	ver="";gst="";nam="nam";

	var go = GameObject.FindGameObjectsWithTag("koi");
	for (var k=0;k<go.length;k++) {
		Destroy(go[k]);
	}
	for (k=1;k<=99;k++) {
		ag[k]=tk("ag"+k);
		fl[k]=tk("fl"+k);
		if (k<=15) pmx[k]=tk("pmx"+k);
		for (var h=1;h<=ho;h++) {
			if (fl[k]>2) {
				fl[k]-=2;ag[k]++;
				if (ag[k]>99) ag[k]=99;
			}
		}
	}
	for (k=0;k<=9;k++) {
		gid[k]=tks("gid"+k);
		gtm[k]=tk("gtm"+k);
	}
	for (k=1;k<=50;k++) {
//		f[k]=Random.Range(4,5);
		f[k]=tk("fn"+k);
		fa[k]=Random.Range(1,4);
		fv[k]=Random.Range(0,9);
		sp[k]=Random.Range(1.0,10.0);
		x[k]=Random.Range(-1.0,1.0);
		y[k]=Random.Range(-0.3,0.3);
		if (f[k]<=200) {
			var offs = Vector3(x[k],Random.Range(0.2,0.2),y[k]);
//			if (f[k]>=17 && f[k]<=19) offs = Vector3(x[k],Random.Range(0.3,1.5),-0.5);
			if (f[k]==71) offs = Vector3(x[k],0.2,y[k]);
			if (f[k]==72) offs = Vector3(x[k],0.5,0);
		} else {
			offs = Vector3(ag[k]/25.0-2.0,0.0,fl[k]/50.0-1.0);
		}

		var ob : GameObject;
		var ob2 : GameObject;

		if (f[k]>=1 && f[k]<=20) {
			if (Resources.Load("f"+f[k])!=null) {
				ob=Instantiate(Resources.Load("f"+f[k]), offs, Quaternion.Euler(0,Random.Range(0,360),0));
				ob.name="f"+f[k];
//				ob.tag="koi";
			}
		} else {
			if (GameObject.Find("of"+f[k])) {
				ob=Instantiate(GameObject.Find("of"+f[k]), offs, Quaternion.Euler(0,Random.Range(0,360),0));
				ob.tag="koi";
			}
		}

		if (f[k]>=208 && f[k]<=216) offs = Vector3(ag[k]/25.0-2.0,0.3,fl[k]/50.0-1.0);
		if (f[k]>=217 && f[k]<=224) offs = Vector3(ag[k]/25.0-2.0,0.0,fl[k]/50.0-1.0);

		if (f[k]>=201 && f[k]<=249) {
			ob=Resources.Load("f"+f[k]);
			Instantiate(ob, offs, ob.transform.rotation);
		}


//		Instantiate (koi, offs, transform.rotation);
	}
// #CBINI
	for (var b=1;b<=16;b++) {
		cb[b]=tk("cb"+b);
		if (b%4==0) cb[b]-=last;
	}
//	cb[1]=1;cb[2]=2;cb[3]=3;cb[4]=600;
print("cb:"+cb[1]+" "+cb[2]+" "+cb[3]+" "+cb[4]);

//	s=tksa("z");
// print("z:"+s);
	for (var i=1;i<100;i++) {
//print("s:"+s);
		z[i]=tk("z"+i);
	}

	fi=0;ini=0;
	PlayerPrefs.SetInt("fbini",1);

/*
	if (wl==0) marine.renderer.material.mainTexture = Resources.Load("w0");
	if (wl==1) marine.renderer.material.mainTexture = Resources.Load("w1");
	if (wl==2) marine.renderer.material.mainTexture = Resources.Load("w2");
	if (wl==3) marine.renderer.material.mainTexture = Resources.Load("w3");
	if (wl==4) marine.renderer.material.mainTexture = Resources.Load("w4");
	if (wl==5) marine.renderer.material.mainTexture = Resources.Load("w5");
	if (wl==6) marine.renderer.material.mainTexture = Resources.Load("w6");
	if (wl==7) marine.renderer.material.mainTexture = Resources.Load("w7");
	if (wl==8) marine.renderer.material.mainTexture = Resources.Load("w8");
	if (wl==9) marine.renderer.material.mainTexture = Resources.Load("w9");
	if (wl==10) marine.renderer.material.mainTexture = Resources.Load("w10");
	if (wl==11) marine.renderer.material.mainTexture = Resources.Load("w11");
	if (wl==12) marine.renderer.material.mainTexture = Resources.Load("w12");
	if (wl==13) marine.renderer.material.mainTexture = Resources.Load("w13");
	if (wl==14) marine.renderer.material.mainTexture = Resources.Load("w14");
*/

//	if (ama==0) ad();


//	err="アプリがバージョンアップしました。仕様変更によりこのバージョンは遊べません。恐れ入りますが最新版にアップデートしてください";
//	err="Gがたりません";
}

function tk(pa : String) {
	if (s.IndexOf(pa)<0) return 0;
	var s2=s.Substring(s.IndexOf(pa)+pa.Length+1);
	try {
		return parseInt(s2.Substring(0,s2.IndexOf("&"[0])));
	} catch (e) {
		return 0;
	}
}

function tk2() {
	if (s=="") return 0;
	var l=s.IndexOf("_"[0]);
	if (l<0) return 0;
	var re=s.Substring(0,l);
	if (re.length==0) return 0;
	s=s.Substring(l+1);
	return parseInt(re);
}

function tk3() {
	if (s=="") return "";
	var l=s.IndexOf(","[0]);
	if (l<0) return "";
	var re=s.Substring(0,l);
	s=s.Substring(l+1);
	return re;
}

function tksa(pa : String) {
	if (s.IndexOf(pa)<0) return "";
	var s2=s.Substring(s.IndexOf(pa)+pa.Length+1);
	try {
		return s2.Substring(0,s2.IndexOf("&"[0]));
	} catch (e) {
		return "";
	}
}


function tks(pa : String) {
	if (s.IndexOf(pa)<0) return "";
	var s2=s.Substring(s.IndexOf(pa)+pa.Length+1);
	try {
		return s2.Substring(0,s2.IndexOf("&"[0]));
	} catch (e) {
		return "";
	}
}

function Match() {
	if (hit.transform.gameObject.tag == "koi" || hit.transform.gameObject.tag == "obj") {
		print(hit.transform.gameObject.tag);
		matchObject = hit.transform.gameObject;
		return;
	}
	fi=0;
	return;
}

function tim(t : float) {
	t=parseInt(t);
	return fnm(t/3600)+":"+fnm(t%3600/60)+":"+fnm(t%60);
}

function fnm(fnm : int) {
	if (fnm<10) return "0"+fnm; else return fnm;
}


function Update () {
	var go : GameObject[];
	var fod : GameObject[];

	var count=PlayerPrefs.GetInt("count");
	if (count>0) {
print("countjs:"+count);
		PlayerPrefs.SetInt("count",-1);
		for (var c=0;c<=count;c++) {
			fbn[c]=PlayerPrefs.GetString("user"+c);
			fid[c]=PlayerPrefs.GetString("id"+c);
		}
	}

	if (PlayerPrefs.GetString("fbna")!="") {
		fbna=PlayerPrefs.GetString("fbna");
		PlayerPrefs.SetString("fbna","");
		PlayerPrefs.SetInt("login",0);
		fbid=PlayerPrefs.GetString("fbid");
		if (PlayerPrefs.GetInt("logb")<1) https(50);
		PlayerPrefs.SetInt("logb",1);
	}

	if (PlayerPrefs.GetInt("pp")>0) {
		PlayerPrefs.SetInt("pp",0);
		https(PlayerPrefs.GetInt("pp"));
	}

	var res=PlayerPrefs.GetString("log");

/*
	if (ama>0 && pay>0) {
// Obtain object used to interact with plugin
var iapService : IAmazonIapV2;
iapService = AmazonIapV2Impl.Instance;

// Construct object passed to operation as input
var request : ResetInput;
request = new ResetInput();

// Set input value
request.Reset = true;

// Call synchronous operation with input object
var response : RequestOutput;
response = iapService.GetPurchaseUpdates(request);

// Get return value
res = "suc"+response;
print("ama:"+res);
	}
*/
	if (res.IndexOf("suc")>=0) {
//		PlayerPrefs.SetString("log","sucaqua20");
		PlayerPrefs.SetString("log","");
		if (res.IndexOf("sucerr")>=0) {
			query=false;err="";paid=0;pay=0;return;
		}
/*
#if UNITY_ANDROID

		if (res.IndexOf("koi10")>=0) {https(10);GoogleIAB.purchaseProduct("koi10");}
		if (res.IndexOf("koi20")>=0) {https(20);GoogleIAB.purchaseProduct("koi20");}
		if (res.IndexOf("koi50")>=0) {https(50);GoogleIAB.purchaseProduct("koi50");}
		if (res.IndexOf("koi110")>=0) {https(110);GoogleIAB.purchaseProduct("koi110");}
		if (res.IndexOf("koi350")>=0) {https(350);GoogleIAB.purchaseProduct("koi350");}
		if (res.IndexOf("koi600")>=0) {https(600);GoogleIAB.purchaseProduct("koi600");}
#endif
		if (res.IndexOf("koi10,")>=0) https(10);
		if (res.IndexOf("koi20,")>=0) https(20);
		if (res.IndexOf("koi50,")>=0) https(50);
		if (res.IndexOf("koi110,")>=0) https(110);
		if (res.IndexOf("koi350,")>=0) https(350);
		if (res.IndexOf("koi600,")>=0) https(600);
*/
		query=false;err="";paid=0;pay=0;
	}

	RenderSettings.fogDensity=(99-cl)/200.0;

	if (Input.GetMouseButtonDown(0)){  //	reset
		btm=Time.time;
		if (mn==2 && Input.mousePosition.y/Screen.height>0.1) {
			mt=0.0;
			if (lv==2) {lv=3;mn=0;got=2;nkoi();}
			if (by<0.0) {by=1.0;ltm=Time.time;}		//	Feed
		} else if (mn==3 && Input.mousePosition.y/Screen.height>0.1) {
			if (cl<99) {
				if (ty<=0) ty=5;
				xp+=2;
				if (xp>nl[lv]) {
					lv=2;xp=0;mn=0;got=1;nkoi();
//					par1.Play();se2.Play();
				}
			}
			cl+=10;ltm=Time.time;
			if (cl>=99) {cl=99;}		//	Clean
		} else {
//			print("mt:"+mt);
			lastMousePosition = Input.mousePosition;dn=1;
//			if (mn==0 && fi==0) mt=0.0;
			var ray = Camera.main.ScreenPointToRay ( Input.mousePosition );
//			print(Input.mousePosition.y/Screen.height);
			if (Physics.Raycast( ray, hit, 100) && Input.mousePosition.y/Screen.height<0.92)  {
				if (mt>80.0 || Input.mousePosition.y/Screen.height>0.14) {
					if (mn==0 && fi==0 && mv==0 && tc==0) Match();
				}
			}
			if (matchObject==null && mn==0 && fi==0) {
				mt=0.0;
				if (ama==0) ad();
			}
		}
	}
	if (Input.GetMouseButtonUp(0)) {
		if (mv==1) {
			ag[fi]+=vx;fl[fi]+=vy;
			if (ag[fi]<0) ag[fi]=0;
			if (ag[fi]>99) ag[fi]=99;
			if (fl[fi]<0) fl[fi]=0;
			if (fl[fi]>90) fl[fi]=90;
		}
		dn=0;my+=vy;vx=0;vy=0;
	}
	if (gy<0) {
		gy+=2;if (gy>=0) gy=0;
	}
	if (gy>0) {
		gy-=2;if (gy<=0) gy=0;
	}
	if (dn==0) vy+=gy;

	if (dn==1) {
		if (mv==1) {
			ltm=Time.time;
			vx=(Input.mousePosition.x-lastMousePosition.x)/10.0;
			vy=(Input.mousePosition.y-lastMousePosition.y)/10.0;
		} else {
			gy=(lastMousePosition.y-Input.mousePosition.y);
			vy+=gy;
			lastMousePosition.y=Input.mousePosition.y;
		}
	}
	if (mv==0) {
		if (my+vy>0) vy=-my;
		if (mn==1 && my+vy<-fe*78*Screen.height/320) vy=-fe*78*Screen.height/320-my;
	}
	fod = GameObject.FindGameObjectsWithTag("food");
	fod[0].transform.position.y=by;

	r2=0;
	go = GameObject.FindGameObjectsWithTag("koi");

	for (var k=0;k<go.length;k++) {
	  if (f[k+1]>200) {
	  	if (go[k]==matchObject) {
	  	  	go[k].transform.localPosition.x = (ag[k+1]+vx)/25.0-2.0;
	  		go[k].transform.localPosition.z = (fl[k+1]+vy)/50.0-1.0;
	  		if (Time.time%0.1<0.07) go[k].transform.localPosition.y=0.0; else go[k].transform.localPosition.y=3.0;
			fi=k+1;
			if (mt==0.0) mt=0.1;
		}
	  } else {
	  	if (deb) {
	  		go[k].transform.localScale=Vector3(1.0,1.0,1.0);
	  	} else {
	  		if (f[k+1]==72) go[k].transform.localScale=Vector3((ag[k+1]+50.0)/700.0,(ag[k+1]+50.0)/700.0,(ag[k+1]+50.0)/700.0);
	  		else go[k].transform.localScale=Vector3((ag[k+1]+50.0)/140.0,(ag[k+1]+50.0)/140.0,(ag[k+1]+50.0)/140.0);
	  	}
	  	r2++;
		if (Random.Range(0,30)==0) fv[k]=Random.Range(0,9);
		if (fv[k]==0) sp[k]-=0.05;
		if (fv[k]==1) sp[k]-=0.02;
		if (fv[k]==2) go[k].transform.localRotation.y+=1*Time.deltaTime;
		if (fv[k]==6) go[k].transform.localRotation.y-=1*Time.deltaTime;
		if (fv[k]==7) sp[k]+=0.03;
		if (fv[k]==8) sp[k]+=0.1;
		if (f[k+1]==25) sp[k]=0.01;				//	seahorse
		if (f[k+1]==71 || f[k+1]==72) sp[k]=0.01;
		if (sp[k]<0.1) {sp[k]=0.1;fv[k]=8;}
		if (sp[k]>5.0) {sp[k]=5.0;fv[k]=0;}
		if (by<=2.0 && by>-0.1) {
			if (by>-0.1) by-=0.1*Time.deltaTime;
			sp[k]=3.0;
			if (fl[k+1]<90) {
				ty=10;
				go[k].transform.LookAt(fod[0].transform);
				if (Vector3.Distance(go[k].transform.position,fod[0].transform.position)<0.2) {
					ty=5;
					fl[k+1]++;
				}
//				if (fl[k]==97) go[k].transform.localRotation = Quaternion.Euler(Random.Range(-20,20),Random.Range(0,360),0);
			}
		}
		if (go[k]==matchObject) {
			fi=k+1;
			if (mt==0.0) mt=0.1;
		} else {
			go[k].transform.position += go[k].transform.forward/(10.0/sp[k])*Time.deltaTime;
		}
		if (go[k].transform.position.y>0.4 || go[k].transform.position.y<0.2) go[k].transform.position.y = 0.3;
		if (go[k].transform.position.x<-1.8) go[k].transform.localRotation = Quaternion.Euler(Random.Range(-10,10),90,0);
		if (go[k].transform.position.x>1.8) go[k].transform.localRotation = Quaternion.Euler(Random.Range(-10,10),270,0);
		if (go[k].transform.position.z<-1.0) go[k].transform.localRotation = Quaternion.Euler(Random.Range(-10,10),-45+Random.Range(0,90), 0);
		if (go[k].transform.position.z>1.0) {
			go[k].transform.localRotation = Quaternion.Euler(Random.Range(-10,10),160+Random.Range(0,40), 0);
			go[k].transform.position.z-=0.1;
		}
//		go[k].transform.localRotation = Quaternion.AngleAxis((Time.time+k) * -45.0, Vector3.up);
		if (!go[k].transform.GetComponent.<Animation>().isPlaying) {
			if (Random.Range(0,5)<1) fa[k]=Random.Range(1,4);
			if (fa[k]>0) go[k].GetComponent.<Animation>().Play(fa[k].ToString());
		}
		var screenPos : Vector3 = Camera.main.WorldToScreenPoint (go[k].transform.position);
		sx[k]=screenPos.x;sy[k]=screenPos.y;
	  }
	}
/*
	if (clock==1) {
		Text.text=System.DateTime.Now.ToString("HH:mm:ss");
	} else {
		Text.text="";
	}
*/
//	GameObject.Find("pl2").transform.animation.Play();

	if (Time.time-ltm>2.0 && ltm>0.0) {
		if (mn==2) {
			ltm=-1.0;
			s="mn=2&gst="+gst+"&ld="+pn+"&dt=";
			for (k=0;k<go.length;k++) {
//				if (fl[k]==99) s+="f_"+k+"_";
				s+="f_"+k+"_";
			}
			print("feed:"+s);
//			load(s);
		}
		if (mn==3) {
			ltm=-1.0;
//			load("mn=3&gst="+gst+"&ld="+pn+"&dt=c_"+cl+"_");
		}
	}

	if (Time.time-btm>5.0 && mn==0 && mt==0.0) {mt=0.1;adr();}
	if (mt>0.0) mt+=Time.deltaTime*100.0;
	if (Time.time>lt+0.1) {
		if (tm%10==0) {cb[4]-=1;cb[8]-=1;cb[12]-=1;cb[16]-=1;}
		tm++;lt=Time.time;
	}
//	tm+=Time.deltaTime;
//	cube1.renderer.material.SetTextureOffset("_MainTex", Vector2(tm/100.0,0));
//	cube3.renderer.material.SetTextureOffset("_MainTex", Vector2(Time.time/170.0,0));
//	cube2.renderer.material.SetTextureOffset("_MainTex", Vector2(tm/100.0,-tm/70.0));
//	cube4.renderer.material.SetTextureOffset("_MainTex", Vector2(Time.time/120.0,-Time.time/170.0));
}

function OnGUI () {

	GUI.skin = skin;

	sw=Screen.width;
	sh=Screen.height;

//	if (sh<=320) GUI.skin.font = mika;
  if (Application.platform == RuntimePlatform.IPhonePlayer) GUI.skin.font = mika;
	var sz=14;
	if (sw>1000) sz=20;
	if (sw>1900) sz=32;
	GUI.skin.box.fontSize = GUI.skin.label.fontSize =	GUI.skin.button.fontSize = sz;

	if (deb) {
//		GUI.Label(Rect(sw*0.1,sh*0.1,sw*0.5,sh*0.1), "deb:"+uid+"\nmy:"+my+" vy:"+vy+" mn:"+mn+" fi:"+fi);
	}

	if (ver!="") {
		if ((ver.IndexOf("接続中") || (ver.IndexOf("server"))) && ini==1) {
//			GUI.DrawTexture(Rect(0,0,sw,sh), spl);
			return;
		}
		GUI.Box(Rect(sw*0.3,sh*0.3,sw*0.4,sh*0.4), ver);
		return true;
	}
	if (err!="") {
		GUI.Box(Rect(sw*0.3,sh*0.3+my+vy,sw*0.4,sh*0.1*(1+err.length/80)), err);
		if (lv>3 && (err.IndexOf("Level")>=0 || err.IndexOf("レベル")>=0)) {
			if (GUI.Button(Rect(sw*0.4,sh*0.8,sw*0.2,sh*0.1), "Share")) {
				if (fbna!="") PlayerPrefs.SetInt("feed",1); else PlayerPrefs.SetInt("fbwin",2);
			}
			GUI.Label(Rect(sw*0.4,sh*0.8,sw*0.1,sh*0.1), fba);
	    }
		if (lv>3 && (err.IndexOf("new")>=0 || err.IndexOf("新しい")>=0)) {
			if (GUI.Button(Rect(sw*0.4,sh*0.8,sw*0.2,sh*0.1), "Share")) {
				if (fbna!="") PlayerPrefs.SetInt("feed",2); else PlayerPrefs.SetInt("fbwin",2);
			}
			GUI.Label(Rect(sw*0.4,sh*0.8,sw*0.1,sh*0.1), fba);
	    }
		if (GUI.Button(Rect(sw*0.8,sh*0.8,sw*0.15,sh*0.1), "OK")) {
			if (err.IndexOf("金貨")>=0 || err.IndexOf("enough")>=0) pay=1;
			err="";
			if (lv==2 || lv==3) mn=0;
		}
		return true;
	}

	if (fin>0 && gst=="") {
		var gm : int;
		gm=cb[4+cn*4]/3600+1;gm=0;
		if (gm<1) gm=1;
		if (lv==3) gm=0;
//		if (jp) lab="ジェム "+gm+" 個を使って今すぐ花を100%に成長させることができます\n使用しますか？"; else lab="You can grow flower full instantly for "+gm+" gems.\nUse gems?";
		GUI.Box(Rect(sw*0.2,sh*0.3,sw*0.6,sh*0.3),(jp)?"ゴールド"+gm+"を使って今すぐ交配を終了できます\n\nゴールドを使いますか？":"You can finish   Cross-breeding now for "+gm+" Gold.\n\nUse Gold?");
//		GUI.Label(Rect(sw*0.2,sh*0.3,sw*0.6,sh*0.3),"Use gems?");
		if (GUI.Button(Rect(sw*0.32,sh*0.8,sw*0.15,sh*0.1), (jp)?"はい":"Yes")) {
//			if (gm>pp) {
//				if (jp) msd="ジェムが足りません。購入しますか？"; else msd="Not enough gems\nDo you want to purchase gems?";
//				return;
//			}
			err="Server Connecting...";
			load("ld="+pn+"&cn="+cn+"&fin=1");
			pp-=gm;cb[4+cn*4]=0;
			fin=0;err="";
		}
		if (GUI.Button(Rect(sw*0.52,sh*0.8,sw*0.15,sh*0.1), (jp)?"いいえ":"No")) {fin=0;}
		return;
	}
	if (rel>0 && gst=="") {
//		GUI.Box(Rect(sw*0.2,sh*0.3,sw*0.6,sh*0.3),(jp)?"この鯉を本当に逃がしますか？":"Are you sure to release this koi?");
		GUI.Box(Rect(sw*0.2,sh*0.3,sw*0.6,sh*0.3),(jp)?"この鯉はまだ逃がせません":"You can not release this koi yet.");
/*
		if (GUI.Button(Rect(sw*0.32,sh*0.8,sw*0.15,sh*0.1), (jp)?"はい":"Yes")) {
			err="Server Connecting...";
			load("ld="+pn+"&cn="+cn+"&fin=1");
			rel=0;err="";
		}
*/
		if (GUI.Button(Rect(sw*0.52,sh*0.8,sw*0.15,sh*0.1), "OK")) {rel=0;}
		return;
	}

	var te : String;

#if UNITY_IPHONE
	var selStrings = new Array(							// ###iPhone###
"","10 Gold","20 Gold","50 Gold","110 Gold","350 Gold","600 Gold");
	if (pay>0) {
		if (query) {
			GUI.Box(Rect(sw*0.3,sh*0.3,sw*0.4,sh*0.4),"Processing...");
		} else {
			for (iy=1;iy<=6;iy++) {
				if (GUI.Button(Rect(sw*0.3,sh*(iy+1)*0.1,sw*0.4,sh*0.1), ""+selStrings[iy])) {
					pay=iy+1;
					query=true;
//					Bonjour.StartLookup("bon", ""+(iy+1));
					StoreKitBinding.purchaseProduct(IAP[pay-2],1);
					return;
				}
			}
			if (GUI.Button(Rect(sw*0.45,sh*0.8,sw*0.1,sh*0.1), "Cancel")) {
				pay=0;
				PlayerPrefs.SetInt("free",0);
			}
		}
		if (query && Time.frameCount % 10 == 0) {
//			paid=Bonjour.GetServiceCount();
			if (paid==-1) {
				err="Purchase failed";
				pay=0;query=false;
			}
			if (paid==pay) {
				if (pay==2) https(10);
				if (pay==3) https(20);
				if (pay==4) https(50);
				if (pay==5) https(110);
				if (pay==6) https(350);
				if (pay==7) https(600);
				pay=0;query=false;
			}
		}
		return;
	}
#endif
#if UNITY_ANDROID

	var selStrings = new Array(							// ###Android###
"","10 Gold","20 Gold","50 Gold","110 Gold","350 Gold","600 Gold");
	if (pay>0) {
		if (query) {
			GUI.Box(Rect(sw*0.3,sh*0.3,sw*0.4,sh*0.4),"Processing...");
		} else {
			for (iy=1;iy<=6;iy++) {
				if (GUI.Button(Rect(sw*0.3,sh*(iy+1)*0.1,sw*0.4,sh*0.1), ""+selStrings[iy])) {
					pay=iy+1;
					if (ama>0) {
					} else {
/*
						if (pay==2) GoogleIAB.purchaseProduct("koi10");
						if (pay==3) GoogleIAB.purchaseProduct("koi20");
						if (pay==4) GoogleIAB.purchaseProduct("koi50");
						if (pay==5) GoogleIAB.purchaseProduct("koi110");
						if (pay==6) GoogleIAB.purchaseProduct("koi350");
						if (pay==7) GoogleIAB.purchaseProduct("koi600");
*/
					}
					pay=0;
//					query=true;
//				Application.OpenURL ("http://50.17.193.58/pay.php?uid="+SystemInfo.deviceUniqueIdentifier+"&app=aqua&p="+(iy*2-1));
//					return;
				}
			}
//			GUI.DrawTexture(Rect(sw*0.3,sh*0.8,sw*0.07,sh*0.07), paypal);
			if (GUI.Button(Rect(sw*0.45,sh*0.8,sw*0.1,sh*0.1), "Cancel")) {
				pay=0;
				PlayerPrefs.SetInt("free",0);
			}
/*
			if (GUI.Button(Rect(sw*0.3,sh*0.8,sw*0.07,sh*0.07), "Cancel")) {
				PlayerPrefs.SetString("log","sucaqua20");
				pay=0;paid=0;
			}
*/
		}
		return;
	}
#endif
/*
	if (GUI.Button(Rect(sw*0.81,sh*0.1-mt,sw*0.04,sw*0.04), c4)) {
		pay=1;
	}
*/
	if (mn==4 && PlayerPrefs.GetInt("fbwin")>0) {
		GUI.Box(Rect(sw*0.25,sh*0.3,sw*0.5,sh*0.3), (jp)?"Facebookにつなげよう\n\n1.ログインするだけで初回500ゴールドをもらえるよ!\n\n2.ログイン後は1日3回3人の友達に1Goldを送る事ができます!":"Facebook connect\n\n1.You can get 50 Gold!\n\n2.You can gift 3 Gold a day to the other 3 friends!");
		if (GUI.Button(Rect(sw*0.4,sh*0.6,sw*0.2,sh*0.1), "Facebook Login")) PlayerPrefs.SetInt("fbwin",2);
		if (GUI.Button(Rect(sw*0.4,sh*0.8,sw*0.2,sh*0.1), "Later")) PlayerPrefs.SetInt("fbwin",0);
		GUI.DrawTexture(Rect(sw*0.3,sh*0.3,sw*0.05,sw*0.05),fbi);
//		GUI.DrawTexture(Rect(sw*0.475,sh*0.5,sw*0.05,sw*0.05),c2);
		return;
	}
/*
	if (GUI.Button(Rect(sw*0.14,sh*0.2-mt,sw*0.05,sw*0.05), c4)) {
		Advertisement.Initialize("25523", true);
//		if (Advertisement.isReady("25523")) Advertisement.Show("25523");
		if(Advertisement.canShow()){
    	Advertisement.setZone("PLACEMENT ID");
    	Advertisement.show(options);
		}
	}
*/
	if (got>0) {
		if (ev<0.1) {ev+=0.01;ex+=0.01;}
		if (ev>=0.1 && ev<0.15) {ev+=0.01;ex-=0.01;}
		GUI.Box(Rect(sw*(0.3-ex),sh*(0.3-ex),sw*(0.38+ex*2),sh*(0.1+ex*2)), (jp)?fnam[got]+"を手に入れた！":"You got "+enam[got]);
		if (GUI.Button(Rect(sw*0.4,sh*0.8,sw*0.2,sh*0.1), "OK")) {
//			se2.Play();
			z[got]++;
print ("got:"+got+","+z[got]);
/*
			s="mn=2&gst="+gst+"&ld="+pn+"&z2=";
			for (var k=1;k<=16;k++) {
				s+=z[k]+"_";
			}
*/

//			load(s);
/*
			if (z[got]==1) {
				err="Quest Completed !!\n\nYou got a new Koi!";par1.Play();
				WaitForSeconds(3);
				https(5);
			}
*/
			got=0;
			save();
		}
		return;
	}


	for (var fr=0;fr<10;fr++) {
		if (inv[fr]!="") {
			if (jp) {
				GUI.Box(Rect(sw*0.3,sh*0.3+fr*sh*0.1,sw*0.38,sh*0.1), inv[fr]+"さんから友達依頼");
			} else {
				GUI.Box(Rect(sw*0.3,sh*0.3+fr*sh*0.1,sw*0.38,sh*0.1), inv[fr]+" invited you.");
			}
			if (GUI.Button(Rect(sw*0.7,sh*0.3+fr*sh*0.1,sw*0.08,sh*0.1), yes)) {
				load("ld=1&fr=1&add="+inv[fr]);
			}
			if (GUI.Button(Rect(sw*0.8,sh*0.3+fr*sh*0.1,sw*0.08,sh*0.1), can)) {
				load("ld=1&fr=1&dec="+inv[fr]);
			}
		}
	}
/*
	if (lv==0) {
		GUI.Box(Rect(sw*0.3,sh*0.5,sw*0.4,sw*0.1), "Data Loading...");
		return true;
	}
*/
//	GUI.Box(Rect(sw*0.775,sh*0.01,sw*0.25,sh*0.1), "Silver");
//	GUI.Box(Rect(sw*0.775,sh*0.01-mt,sw*0.25,sw*0.04), "");



	if (ty>0) {
		ty-=1;
//		GUI.Label(Rect(sw*0.08,sh*0.01-mt+ty*3+10,sw*0.2,sw*0.04), txp);
	}

	GUI.Label(Rect(sw*0.013,sh*0.01-mt,sw*0.2,sw*0.04), "Day "+day);

	if (deb>2) {
	GUI.DrawTexture(Rect(sw*0.03,sh*0.026-mt,sw*0.14,sw*0.02), b1);
	if (xp<nl[lv]) GUI.DrawTexture(Rect(sw*0.032,sh*0.030-mt,sw*xp/nl[lv]*0.136,sw*0.015), b4); else GUI.DrawTexture(Rect(sw*0.032,sh*0.030-mt,sw*0.136,sw*0.015), b4);
		GUI.Label(Rect(sw*0.2,sh*0.01,sw*0.25,sw*0.04), "xp "+xp+"/"+nl[lv]);
	GUI.Label(Rect(sw*0.0,sh*0.01-mt,sw*0.06,sw*0.04), c3);
    GUI.contentColor = Color.black;
	GUI.Label(Rect(sw*0.013,sh*0.01-mt,sw*0.2,sw*0.04), ""+lv);
    GUI.contentColor = Color.white;
    }

//	GUI.Box(Rect(sw*0.85,sh*0.01-mt,sw*0.14,sw*0.04), "");
//	GUI.DrawTexture(Rect(sw*0.85,sh*0.01-mt,sw*0.14,sw*0.04), bu);
/*
	GUI.skin = skin2;
	GUI.Box(Rect(sw*0.85,sh*0.01-mt,sw*0.14,sw*0.04), "");
	GUI.Box(Rect(sw*0.85,sh*0.1-mt,sw*0.14,sw*0.04), "");
	GUI.skin = skin;

	GUI.Label(Rect(sw*0.89,sh*0.01-mt,sw*0.14,sw*0.04), ""+gp);
	GUI.Label(Rect(sw*0.85,sh*0.01-mt,sw*0.1,sw*0.04), c1);
	GUI.Label(Rect(sw*0.89,sh*0.1-mt,sw*0.14,sw*0.04), ""+pp);
	GUI.Label(Rect(sw*0.85,sh*0.1-mt,sw*0.1,sw*0.04), c2);
*/
#if UNITY_ANDROID
	if (vok) if (GUI.Button(Rect(sw*0.92,sh*0.2-mt,sw*0.08,sw*0.06), vid)) {
		PlayerPrefs.SetInt("vid",1);
	}
#endif
/*
	if (GUI.Button(Rect(sw*0.85,sh*0.2-mt,sw*0.14,sw*0.04), "Free Pearl")) {
		PlayerPrefs.SetInt("show",1);
	}
	if (GUI.Button(Rect(sw*0.85,sh*0.3-mt,sw*0.14,sw*0.04), vid)) {
		PlayerPrefs.SetInt("vid",1);
	}
*/


// 	GUI.Label(Rect(sw*0.85,sh*0.09-mt,sw*0.05,sw*0.04), tnk);
// 	if (GUI.Button(Rect(sw*0.00,sh*0.09-mt,sw*0.15,sw*0.05), "      Pond "+r2+"/"+pmx[pn])) tbe=pn;
// 	if (pmx[pn]<40) GUI.Label(Rect(sw*0.01,sh*0.09-mt,sw*0.05,sw*0.05), b13);

	if (gst) GUI.Box(Rect(sw*0.85,sh*0.2-mt,sw*0.14,sw*0.1), gst+"'s\nPond");

	if (tby>0 && gst=="") {
		if (lv<tby*5) {
			if (jp) te="新しい水槽はLv "+tby*5+"になると1000コインにて購入できます\nまたはパール"+tby*10+"個を使って今すぐ購入しますか？"; else te="You can buy new tank for 1000 coins at Level "+tby*5+"\nOr buy now for "+tby*10+" pearl ?";
			GUI.Box(Rect(sw*0.3,sh*0.3+my+vy,sw*0.4,sh*0.15*(1+err.length/30)),te);
			if (GUI.Button(Rect(sw*0.32,sh*0.8,sw*0.15,sh*0.08), (jp)?"はい":"Yes")) {
				ver="Processing…";
				load("ld="+tby+"&pl="+tby*10);
				tby=0;
			}
			if (GUI.Button(Rect(sw*0.52,sh*0.8,sw*0.15,sh*0.08), (jp)?"いいえ":"No")) tby=0;
		} else {
			if (jp) te="新しい水槽を 1000コインで購入しますか？"; else te="Buy new tank for 1000 coins ?";
			GUI.Box(Rect(sw*0.3,sh*0.3+my+vy,sw*0.4,sh*0.15*(1+err.length/30)), te);
			if (GUI.Button(Rect(sw*0.32,sh*0.8,sw*0.15,sh*0.08), (jp)?"はい":"Yes")) {
				ver="Processing…";
				load("ld="+tby+"&go=1000");
				tby=0;
			}
			if (GUI.Button(Rect(sw*0.52,sh*0.8,sw*0.15,sh*0.08), (jp)?"いいえ":"No")) tby=0;
		}
		return true;
	}
	if (tbe>0 && gst=="") {
		if (lv<9999) {
			if (jp) te="金貨"+(pmx[pn])+"枚を使って今すぐ10拡張しますか？"; else te="You can expand tank.\nExpand now for "+(pmx[pn])+" Gold ?";
			GUI.Box(Rect(sw*0.3,sh*0.3+my+vy,sw*0.4,sh*0.15*(1+err.length/30)), te);
			if (GUI.Button(Rect(sw*0.32,sh*0.8,sw*0.15,sh*0.08), (jp)?"はい":"Yes")) {
				ver="Processing…";
				load("ld="+pn+"&pl="+(pmx[pn]));
				tbe=0;
			}
			if (GUI.Button(Rect(sw*0.52,sh*0.8,sw*0.15,sh*0.08), (jp)?"いいえ":"No")) tbe=0;
		} else {
			if (jp) te="水槽を 1000コインで10拡張しますか？"; else te="Expand tank for 1000 coins ?";
			GUI.Box(Rect(sw*0.3,sh*0.3+my+vy,sw*0.4,sh*0.15*(1+err.length/30)), te);
			if (GUI.Button(Rect(sw*0.32,sh*0.8,sw*0.15,sh*0.08), (jp)?"はい":"Yes")) {
				ver="Processing…";
				load("ld="+pn+"&go=1000");
				tbe=0;
			}
			if (GUI.Button(Rect(sw*0.52,sh*0.8,sw*0.15,sh*0.08), (jp)?"いいえ":"No")) tbe=0;
		}
		return true;
	}	if (tc==1) {
		for (var t=0;t<15;t++) {
			if (pmx[t+1]>0) {
				if (GUI.Button(Rect(sw*(0.2+t%3*0.2),sh*(0.2+(t/3)*0.1),sw*0.2,sh*0.1), "Tank "+(t+1)+" ["+pmx[t+1]+"]")) {
					if (pmx[t+1]>0) {
						pn=t+1;tc=0;by=1.0;
						ver="Data Loading…";
						load("ld="+pn+"&ini=1&gst="+gst);
					}
				}
			} else {
				GUI.Box(Rect(sw*(0.2+t%3*0.2),sh*(0.2+(t/3)*0.1),sw*0.2,sh*0.1), b9);
				if (GUI.Button(Rect(sw*(0.2+t%3*0.2),sh*(0.2+(t/3)*0.1),sw*0.2,sh*0.1), "Unlock")) {
					tby=t+1;
				}
			}
		}
	}

	if (tbs>0 && gst=="") {
		te=(jp)?"交配スロットを金貨"+(25*Mathf.Pow(2,(cn-1)))+"枚を使って拡張しますか？":"You can expand breeding slot for "+(25*Mathf.Pow(2,(cn-1)))+" Gold?";
		te="Coming soon...";
		GUI.Box(Rect(sw*0.3,sh*0.3+my+vy,sw*0.4,sh*0.15*(1+err.length/30)),te);
/*
		if (GUI.Button(Rect(sw*0.32,sh*0.8,sw*0.15,sh*0.08), (jp)?"はい":"Yes")) {
			ver="Processing…";
			load("ld="+pn+"&slo=1&cn="+cn);
			tbs=0;
		}
*/
		if (GUI.Button(Rect(sw*0.52,sh*0.8,sw*0.15,sh*0.08), "OK")) tbs=0;
		return;
	}

   var centeredStyle = GUI.skin.GetStyle("Label");
   centeredStyle.alignment = TextAnchor.UpperCenter;
																				// Menu Button
/*
	if (GUI.Button(Rect(sw*0.0,sh*0.88+mt,sw*0.08,sw*0.08),hlp)) help=1;
	if (help>0) {
		if (jp) err="Tutorial\n\nおそうじでまずは水槽を綺麗にしましょう\nショップから最初の魚を購入しましょう\nエサからエサを与えましょう\n水槽を綺麗に保ちましょう、たまにエサをあげるのを忘れずに\n育ったら魚を売って、また新しい魚を買いましょう\nその後は水槽の上限を増やす事もできますし、新しい水槽を15個まで増やす事も可能です\nそしてあなた自身のアクアリウムを創作しましょう！！\n\n"; else err="Thank you for playing Aqualand.\nWe will publish major undated version in few weeks.\nPlease check for updates.\n\n** Upcoming features **\n*Over 50 fishes and decorations will be added\n*Cross-Breeding\n*Mini game,etc.\n\nTutorial\n\nClean your aquarium.\nBuy your first fish.\nFeed your fish.\nKeep tank clean,and sometimes feed them again.\nSell your fish,and buy new fish,expand tank,\nand buy a new tank up to 15 Tanks\nMake your own Aquarium!!\n\n";

		if (jp) err=err+"Ver 1.07\nユニークな魚「タツノオトシゴ」「エイ」が追加されました\n冬とドラゴンの壁紙が追加されました\nかざり「ゆきだるま」が追加かされました\n新アイテムは友達→GameMasterの部屋を訪れると見る事ができます"; else err=err+"Ver 1.20\nst patrick's day items added\n";
	}
*/
	if (GUI.Button(Rect(sw*0.15,sh*0.85+mt,sw*0.1,sw*0.1),tar)) {mn=0;}
	GUI.Label(Rect(sw*0.15,sh*0.86+mt,sw*0.1,sw*0.04),(jp)?"カーソル":"Select");
	if (rnd==0) {
		if (GUI.Button(Rect(sw*0.27,sh*0.85+mt,sw*0.1,sw*0.1),tsh)) {mn=3;ltm=-1;ad();}
		GUI.Label(Rect(sw*0.27,sh*0.86+mt,sw*0.1,sw*0.04),(jp)?"おそうじ":"Clean");
		if (GUI.Button(Rect(sw*0.39,sh*0.85+mt,sw*0.1,sw*0.1), tfd)) {mn=2;ltm=-1;ad();}
		GUI.Label(Rect(sw*0.39,sh*0.86+mt,sw*0.1,sw*0.04),(jp)?"エサ":"Feed");
	}
	if (gst=="") {
/* Shop
		if (GUI.Button(Rect(sw*0.51,sh*0.85+mt,sw*0.1,sw*0.1), b10)) {
			if (fi==0) {
				mn=1;mt=100.1;
				if (lv<=2) {tab=1;fs=1;fe=20;}
				else if (tab==4) {fs=71;fe=2;}
			}
		}
		GUI.Label(Rect(sw*0.51,sh*0.86+mt,sw*0.1,sw*0.04),(jp)?"ショップ":"Store");
*/

		if (GUI.Button(Rect(sw*0.75,sh*0.85+mt,sw*0.1,sw*0.1), can)) {
				Application.Quit();
		}
		GUI.Label(Rect(sw*0.75,sh*0.86+mt,sw*0.1,sw*0.04),(jp)?"終了":"Exit");



if (GUI.Button(Rect(sw*0.51,sh*0.85+mt,sw*0.1,sw*0.1), b8)) {
	mt=0.1;my=0.0;vy=0.0;mn=6;inp = "";
}
GUI.Label(Rect(sw*0.51,sh*0.86+mt,sw*0.1,sw*0.04),(jp)?"鯉Book":"Book");


	if (GUI.Button(Rect(sw*0.63,sh*0.85+mt,sw*0.1,sw*0.1), hrt)) {mn=5;mt=0.1;my=0.0;vy=0.0;ad();}
		GUI.Label(Rect(sw*0.63,sh*0.86+mt,sw*0.1,sw*0.04),(jp)?"交配":"Cross\nBreeding");
	}
  centeredStyle.alignment = TextAnchor.MiddleLeft;

  var tmp : Texture;
  tmp=can;
  if (gst) tmp=b6;
	if (GUI.Button(Rect(sw*0.93,sh*0.89+mt,sw*0.07,sw*0.07), tmp)) { // Cancel
		if (gst=="") {
			if (mn==0) {vy=0.0;my=0.0;}
			mt=0.1;mn=0;tc=0;
			if (ama==0) adr();
			chart();
		} else {
			ver=(jp)?"サーバーに接続中...":"Connecting to server…\n";gst="";rnd=0;by=-1.0;tby=0.0;tbe=0.0;
			load("ld=1&ini=1");
		}
	}
	if (fi>0) {														// Select
	  if (f[fi]>200) {												// Deco
		GUI.Box(Rect(sw*0.2,sh*0.2,sw*0.6,sh*0.4), "");
		GUI.Label(Rect(sw*0.3,sh*0.2,sw*0.6,sw*0.04), (jp)?"かざり "+fnam[f[fi]]+" x:"+ag[fi]+" y:"+fl[fi]:"Deco "+fnam[f[fi]]+" x:"+ag[fi]+" y:"+fl[fi]);
			if (mv==0) {
				if (GUI.Button(Rect(sw*0.30,sh*0.5,sw*0.15,sh*0.1), (jp)?"動かす":"Move")) {
					mv=1;
				}

				if (GUI.Button(Rect(sw*0.55,sh*0.5,sw*0.15,sh*0.1), (jp)?"売る":"Sell")) {
					rel=1;
				}
			} else {
				GUI.Label(Rect(sw*0.4,sh*0.4,sw*0.6,sh*0.1), "Drag to move deco");
			}
	  } else {														// Fish
		GUI.Box(Rect(sw*0.2,sh*0.2,sw*0.6,sh*0.6), "");
		if (jp==1) GUI.Label(Rect(sw*0.3,sh*0.2,sw*0.6,sw*0.04), ""+fnam[f[fi]]);
		GUI.Label(Rect(sw*0.3,sh*0.24,sw*0.6,sw*0.04), ""+enam[f[fi]]);

		GUI.Label(Rect(sw*0.3,sh*0.3,sw*0.6,sw*0.04), (jp)?"成長度 ":"Growth ");
		GUI.DrawTexture(Rect(sw*0.43,sh*0.326,sw*0.14,sw*0.02), b1);
		GUI.DrawTexture(Rect(sw*0.432,sh*0.330,sw*0.136*ag[fi]/90.0,sw*0.015), b4);

		GUI.Label(Rect(sw*0.3,sh*0.4,sw*0.6,sw*0.04), (jp)?"満腹度 ":"Full ");
		GUI.DrawTexture(Rect(sw*0.43,sh*0.426,sw*0.14,sw*0.02), b1);
		GUI.DrawTexture(Rect(sw*0.432,sh*0.430,sw*0.136*fl[fi]/90.0,sw*0.015), b3);

/*
		GUI.Label(Rect(sw*0.3,sh*0.5,sw*0.6,sw*0.04), "Happy "+fl[fi]);
		GUI.DrawTexture(Rect(sw*0.43,sh*0.526,sw*0.14,sw*0.02), b1);
		GUI.DrawTexture(Rect(sw*0.432,sh*0.530,sw*0.136*((fl[fi]-10.0)/89.0),sw*0.015), b2);
*/
		var ys : int;
		if (f[fi]>200 && f[fi]<400) {
			ys=ky[f[fi]]/2;
		} else {
			ys=ky[f[fi]]*1.5*ag[fi]/90.0;
		}
/*
		if (ky[f[fi]]<0) ys=-ys*120;
		GUI.Label(Rect(sw*0.35,sh*0.55,sw*0.6,sw*0.04), ""+ys);
		GUI.Label(Rect(sw*0.52,sh*0.55,sw*0.6,sw*0.04), ""+f[fi]*5*ag[fi]/90);
		GUI.Label(Rect(sw*0.30,sh*0.55,sw*0.6,sw*0.04), c1);
		GUI.Label(Rect(sw*0.45,sh*0.55,sw*0.6,sw*0.04), c3);
*/
		if (gst=="") {
/*
			if (GUI.Button(Rect(sw*0.30,sh*0.7,sw*0.15,sh*0.1), "Move")) {
				fi=0;
			}
*/
			if (GUI.Button(Rect(sw*0.6,sh*0.68,sw*0.15,sh*0.1), (jp)?"逃がす":"Release")) {
				rel=1;
			}
	  	}
	  }
	  if (GUI.Button(Rect(sw*0.8,sh*0.2,sw*0.07,sw*0.07), tmp)) {
  		if (mv==1) {
				ltm=-1.0;vx=0;vy=0;
				load("ld="+pn+"&mov="+fi+"&x="+(ag[fi]+vx)+"&y="+(fl[fi]+vy));
			}
			mt=0.0;
			fi=0;mv=0;matchObject=null;
	  }
	  return true;
	}
	if (mn>0) {
		if (GUI.Button(Rect(sw*0.8,sh*0.2,sw*0.07,sw*0.07), tmp)) {
			if (mn==5 && cb[3+cn*4]==0) {cb[1+cn*4]=0;cb[2+cn*4]=0;}
			mn=0;
		}
	}

	if (mn==10) {
		for (var q=3;q<=20;q++) {
			if (il[q]<=lv) {
				GUI.Box(Rect(sw*0.2,sh*q/8+my+vy,sw*0.6,sh*0.12), "");
				GUI.Label(Rect(sw*0.3,sh*q/8+my+vy,sw*0.6,sh*0.12), "Get a "+enam[q]);
				tex=Resources.Load("i"+q);
				GUI.DrawTexture(Rect(sw*0.22,sh*q/8+my+vy,sw*0.07,sw*0.07), tex);
				if (z[q]>0) {
					GUI.Label(Rect(sw*0.65,sh*q/8+my+vy,sw*0.6,sh*0.12), "Completed!");
				} else {
// 					GUI.DrawTexture(Rect(sw*0.65,sh*q/8+sh*0.03+my+vy,sw*0.03,sw*0.03), c2);
// 					GUI.Label(Rect(sw*0.7,sh*q/8-sh*0.02+my+vy,sw*0.1,sw*0.1), "5");
				}
			}
		}
		GUI.DrawTexture(Rect(sw*0.25,sh*0.1,sw*0.5,sh*0.15), makib);
		return;
	}

	if (mn==1 || cb2>0) {
/*
	GUI.Box(Rect(sw*0.0,sh*0.01,sw*0.14,sw*0.04), "");
	GUI.Label(Rect(sw*0.04,sh*0.01,sw*0.14,sw*0.04), ""+gp);
	GUI.Label(Rect(sw*0.0,sh*0.01,sw*0.1,sw*0.04), c1);
	GUI.Box(Rect(sw*0.0,sh*0.07,sw*0.14,sw*0.04), "");
	GUI.Label(Rect(sw*0.04,sh*0.07,sw*0.14,sw*0.04), ""+pp);
	GUI.Label(Rect(sw*0.0,sh*0.07,sw*0.1,sw*0.04), c2);*/
	if (cb2==0) {
		var lab : String;
//		if (jp) lab="さかな"; else lab="Fish";
/*
		if (GUI.Button(Rect((tab==4)?sw*0.01:sw*0.03,sh*0.35,(tab==4)?sw*0.16:sw*0.12,sw*0.07), (jp)?"スペシャル":"Special")) {tab=4;fs=71;fe=2;}
		if (GUI.Button(Rect((tab==1)?sw*0.01:sw*0.03,sh*0.5,(tab==1)?sw*0.16:sw*0.12,sw*0.07), (jp)?"さかな":"Fish")) {tab=1;fs=1;fe=72;}
//		if (jp) lab="かざり"; else lab="Deco";
		if (GUI.Button(Rect((tab==2)?sw*0.01:sw*0.03,sh*0.65,(tab==2)?sw*0.16:sw*0.12,sw*0.07), (jp)?"かざり":"Deco")) {tab=2;fs=201;fe=49;my=-5470;}
//		if (jp) lab="かべがみ"; else lab="Wallpaper";
		if (GUI.Button(Rect((tab==3)?sw*0.01:sw*0.03,sh*0.8,(tab==3)?sw*0.16:sw*0.12,sw*0.07), (jp)?"かべがみ":"Wallpaper")) {tab=3;fs=401;fe=14;}
*/
		if (my+vy<-fe*100*Screen.height/320) vy=-fe*100*Screen.height/320-my;
//		if (jp) lab="パールを買う"; else lab="Buy\nPearls";
		if (GUI.Button(Rect(sw*0.03,sh*0.13,sw*0.12,sw*0.07), (jp)?"Goldを\n買う":"Buy\nGold")) {
			pay=1;
#if UNITY_ANDROID
//	    AmazonIAP.initiateItemDataRequest(IAP);
#endif
		}
	}
		for (var f=1;f<=fe;f++) {																													//buy
			if (cb2>0) {
				GUI.Box(Rect(sw*0.2,sh*f/4+my+vy,sw*0.6,sh*0.24), "");
				tex=Resources.Load("i"+(fs-1+f));
				if (z[fs+f-1]>0 && tex!=null) GUI.DrawTexture(Rect(sw*0.22,sh*f/4+my+vy+sw*0.015,sw*0.11,sw*0.11), tex);

				if (z[fs+f-1]>0 && fs==1) GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.06+my+vy,sw*0.6,sh*0.24), (jp)?"Fish No"+f+"  "+fnam[f]/*+"\n\n("+gnamj[gr[f]]+")"*/:"Fish No"+f+"  "+enam[f]/*+"\n\n("+gnam[gr[f]]+")"*/);
				if (z[fs+f-1]>0 && gr[fs+f-1]<=8 && gr[cb[1+cn*4]]!=gr[fs+f-1]) if (GUI.Button(Rect(sw*0.62,sh*f/4+my+vy+sh*0.13,sw*0.13,sh*0.1), "Select")) {
					if (lv==3) {
						if (cb[1+cn*4]==0) cb[1+cn*4]=1; else cb[2+cn*4]=2;
					} else cb[cb2+cn*4]=f;
					cb2=0;
				}
				if (lv==3 && xp<=3) if (cb[1+cn*4]==0) GUI.DrawTexture(Rect(sw*0.64,sh*(0.15+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar); else GUI.DrawTexture(Rect(sw*0.64,sh*(0.45+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
			} else if (Mathf.Abs(sh*f/4+my+vy)<1000 && il[fs+f-1]<=lv+1) {
				GUI.Box(Rect(sw*0.2,sh*f/4+my+vy,sw*0.6,sh*0.24), "");
				tex=Resources.Load("i"+(fs-1+f));
				GUI.Box(Rect(sw*0.22,sh*f/4+my+vy+sw*0.015,sw*0.11,sw*0.11), tex);
				if (tex!=null) GUI.DrawTexture(Rect(sw*0.22,sh*f/4+my+vy+sw*0.015,sw*0.11,sw*0.11), tex);

				if (fs==1 || fs==71) {
					GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.1+my+vy,sw*0.6,sh*0.24), (jp)?"Koi No"+(fs+f-1)+"  "+fnam[fs+f-1]:"Koi No"+(fs+f-1)+"  "+enam[fs+f-1]);
//					GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.06+my+vy,sw*0.6,sh*0.24), (jp)?"必要レベル "+il[fs+f-1]+"  (グループ:"+gnamj[gr[fs+f-1]]+")":"Level "+il[fs+f-1]+"  (Group:"+gnam[gr[fs+f-1]]+")");
					GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.06+my+vy,sw*0.6,sh*0.24), (jp)?"必要レベル "+il[fs+f-1]:"Level "+il[fs+f-1]);
				}
//				if (fs==1 && jp==0) GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.1+my+vy,sw*0.6,sh*0.24), "Fish No"+f+"  "+enam[f]);
				if (fs==201) GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.1+my+vy,sw*0.6,sh*0.24), "Deco No"+f+"  "+fnam[f+200]);
				if (fs==401) GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.1+my+vy,sw*0.6,sh*0.24), "Wallpaper No"+f+" ");
				GUI.Label(Rect(sw*0.4,sh*f/4-sh*0.06+my+vy,sw*0.6,sh*0.24), (jp)?"必要レベル "+il[fs+f-1]:"Level "+il[fs+f-1]);
	//			GUI.Label(Rect(sw*0.4,sh*f/3+my+vy,sw*0.6,sh*0.32), "Buy  "+ky[f]+"  Sell  "+ky[f]);
				var yy=ky[fs+f-1];
	//			var ys : int;
				if (yy>0) {
					GUI.DrawTexture(Rect(sw*0.43,sh*f/4+sh*0.09+my+vy,sw*0.025,sw*0.025), c1);
					if (fs-1+f>200 && fs-1+f<400) {
						ys=yy/2;
					} else {
						ys=yy*1.5;
					}
				} else {
					GUI.DrawTexture(Rect(sw*0.43,sh*f/4+sh*0.09+my+vy,sw*0.025,sw*0.025), c2);
					ys=-yy*150;yy=-yy;
				}
				GUI.Label(Rect(sw*0.4,sh*f/4+my+vy-sh*0.05,sw*0.6,sh*0.32), "Buy         "+yy);
				if (fs<401) {
					GUI.Label(Rect(sw*0.4,sh*f/4+my+vy,sw*0.6,sh*0.32), "Sell         "+ys);
					GUI.DrawTexture(Rect(sw*0.43,sh*f/4+sh*0.14+my+vy,sw*0.025,sw*0.025), c1);
				}
				var kt1 : float;
				kt1=(kt[f]*90.0/60.0);
				var kt2=kt[f]*90%60;
				if (fs==1) GUI.Label(Rect(sw*0.4,sh*f/4+sh*0.05+my+vy,sw*0.6,sh*0.32), "Growth in "+kt1+" hours");
				if (il[fs+f-1]<=lv) {
					if (GUI.Button(Rect(sw*0.62,sh*f/4+my+vy+sh*0.13,sw*0.13,sh*0.1),"B U Y")) {
						if (r2>=pmx[pn]) {err=(jp)?"水そうが一杯です。先におさかなを売るか水そうを広げてください":"Tank is full.You need to sell fish or expand tank.";return;}
						se1.Play();
						//load("ld="+pn+"&buy="+(fs+f-1));
						got=fs+f-1;nkoi();
	//					if (fs==201) load("ld="+pn+"&buy="+(f+200));
						mn=0;by=-1.0;my=0;vy=0;
					}
				} else {
					GUI.Box(Rect(sw*0.62,sh*f/4+my+vy+sh*0.13,sw*0.13,sh*0.1), b9);
				}
			}
		}
		if (lv==2 && r2==0) {
			GUI.DrawTexture(Rect(sw*0.64,sh*(0.15+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
		}
		if (lv==2 && r2==1) {
			GUI.DrawTexture(Rect(sw*0.64,sh*(0.45+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
		}
		return true;
	}
	if (mn==2) {
		GUI.Box(Rect(sw*0.375,sh*0.2,sw*0.25,sw*0.04), "Tap to Feed");
		var go = GameObject.FindGameObjectsWithTag("koi");
		for (k=1;k<=go.length;k++) {
			GUI.DrawTexture(Rect(sx[k],sh-sy[k]-50,sw*fl[k]/99*0.05,2), b5);
		}
	}
	if (mn==3) {
		GUI.Box(Rect(sw*0.375,sh*0.2,sw*0.25,sw*0.04), (jp)?"タップでおそうじ":"Tap to Clean");
		GUI.DrawTexture(Rect(sw*0.43,sh*0.27,sw*0.14,sw*0.02), b1);
		GUI.DrawTexture(Rect(sw*0.432,sh*0.274,sw*cl/99.0*0.136,sw*0.015), b5);
	}
	if (mn==4) {

//		GUI.Box(Rect(sw*0.02,sh*0.3,sw*0.20,sw*0.04), "Your ID:"+cnt);
/*
		if (GUI.Button(Rect(sw*0.46,sh*0.15,sw*0.05,sw*0.05), "?")) {
			if (jp) {
				err="IDは英字のみか英数字のみの組み合わせで一度だけ変更できます\n\n(例 aqualove aqua1234)";
			} else {
				err="You can change your ID only once.\nID must be alphanumeric characters.\n(ex aqualove aqua1234)";
			}
		}
		if (idc>0) if (GUI.Button(Rect(sw*0.3,sh*0.15,sw*0.14,sw*0.05), "Change")) {
			mn2=1;
			keyboard = iPhoneKeyboard.Open("");
		}
*/
#if UNITY_ANDROID
//		if (ama>0)
//		if (GUI.Button(Rect(sw*0.02,sh*0.1,sw*0.2,sw*0.08), "View\nLeaderboards")) {
//				AGSClient.ShowGameCircleOverlay();
//			}
#endif

//		GUI.Label(Rect(sw*0.02,sh*0.6,sw*0.2,sw*0.04), "Input friend's ID");
//		if (GUI.Button(Rect(sw*0.02,sh*0.4,sw*0.2,sw*0.07), "Invite friends\n(Input friend's ID)")) {
//			mn2=2;
//			keyboard = iPhoneKeyboard.Open("");
//		}
		if (GUI.Button(Rect(sw*0.02,sh*0.8,sw*0.2,sw*0.07), "Random\nVisit")) {
					pn=1;rnd=1;
					load("ld=1&gst=gst&rnd=1");
					mn=0;
					chart();
		}

//		if (GUI.Button(Rect(sw*0.02,sh*0.5,sw*0.2,sw*0.04), "Random Visit")) {}
//		inp = GUI.TextField (Rect (sw*0.3,sh*0.2,sw*0.2,sw*0.04), inp, 25);
		for (f=0;f<=99;f++) {
			if (fid[f]!="") {
				GUI.Box(Rect(sw*0.3,sh*0.3+f*sh*0.1+my+vy,sw*0.3,sh*0.08), ""+fbn[f]);
				if (fid[f]=="not") {
					if (GUI.Button(Rect(sw*0.75,sh*0.3+f*sh*0.1+my+vy,sw*0.15,sh*0.1), (jp)?"誘う":"Invite")) {
						PlayerPrefs.SetInt("invite",1);
					}
				} else {
					var gf2=-1;
					for (var g=0;g<=2;g++) {
						if (fid[f]==gid[g]) gf2=g;
					}
					if (gf2>=0) {
						if (GUI.Button(Rect(sw*0.6,sh*0.3+f*sh*0.1+my+vy,sw*0.15,sh*0.1), ((82800-gtm[gf2])/3600)+":"+(82800-gtm[gf2])/60%60)) {}
					} else {
						if (GUI.Button(Rect(sw*0.6,sh*0.3+f*sh*0.1+my+vy,sw*0.15,sh*0.1), (jp)?"ギフト":"Gift")) {
	print("gift:"+fid[f]);
							gid[gf]=fid[f];gf++;
							load("ld=1&gft="+fid[f]+"&fbna="+fbna);
						}
					}
					if (GUI.Button(Rect(sw*0.75,sh*0.3+f*sh*0.1+my+vy,sw*0.15,sh*0.1), (jp)?"訪問":"Visit")) {
						pn=1;rnd=0;
						load("ld=1&fbid="+fid[f]+"&gst="+fbn[f]);
						mn=0;
					}
				}
//				if (GUI.Button(Rect(sw*0.75,sh*0.3+f*sh*0.1+my+vy,sw*0.08,sh*0.1), (jp)?"削除":"Delete")) {
//					load("ld=1&fr=1&del="+fid[f]);
//				}
			}
		}
		if (keyboard) {
			if (keyboard.done) {
				inp=keyboard.text;
			}
		}
		if (inp) {
			if (mn2==1) {
				load("ld=1&idc="+keyboard.text+"&la="+la);
				ver="Sending...";inp="";keyboard.text="";
			} else {
				load("ld=1&mc="+cnt+"&inv="+keyboard.text+"&la="+la);
				ver="Searching...";inp="";keyboard.text="";
			}
		}
	}

	if (mn==6) { 					//book
// 		GUI.Box(Rect(sw*0.2,sh*0.0,sw*0.6,sh*1.0), "");
		GUI.DrawTexture(Rect(sw*0.2,sh*0.0,sw*0.6,sh*1.0), maki);
		GUI.Label(Rect(sw*0.7,sh*0.1,sw*0.4,sh*0.15), "Page "+(cn+1)+"/4");

		for (f=1;f<=4;f++) {
			var bx=0.0f;
			var by=0.0f;
			if (f==2 || f==4) bx=0.3;
			if (f>=3) by=0.3;
		// GUI.Box(Rect(sw*0.2,sh*f/4,sw*0.6,sh*0.24), "")
			if (z[f+cn*4]>0) {
			tex=Resources.Load("i"+(f+cn*4));
			GUI.Box(Rect(sw*(0.22+bx),sw*(0.02+by),sw*0.26,sw*0.2), "");
			GUI.DrawTexture(Rect(sw*(0.2+bx),sw*(0.02+by),sw*0.15,sw*0.15), tex);
			GUI.Label(Rect(sw*(0.32+bx),sw*(-0.05+by),sw*0.3,sw*0.2), "Koi No."+(f+cn*4)+"\n"+enam[f+cn*4]);
			GUI.Label(Rect(sw*(0.32+bx),sw*(0.0+by),sw*0.3,sw*0.2), "Collect "+z[f+cn*4]);
			}
		}

	if (mn==6) {
		if (cn<4) {
			if (GUI.Button(Rect(sw*0.80,sh*0.55,sw*0.07,sw*0.07), arr)) {cn++;}
		}
	} else {
		if (cn<3) {
			if (GUI.Button(Rect(sw*0.80,sh*0.55,sw*0.07,sw*0.07), arr)) {cn++;}
		}
	}
		if (cn>0) {
			if (GUI.Button(Rect(sw*0.13,sh*0.55,sw*0.07,sw*0.07), arl)) {cn--;}
		}
	}

	if (mn==5) { 					//breed
//		GUI.Box(Rect(sw*0.2,sh*0.2,sw*0.6,sh*0.6), "Cross Breeding\n\nSlot "+(cn+1)+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		GUI.Box(Rect(sw*0.2,sh*0.08,sw*0.6,sh*0.8), "");
		GUI.DrawTexture(Rect(sw*0.45,sh*0.3,sw*0.1,sw*0.1), hrt);
//		GUI.Label(Rect(sw*0.2,sh*0.2,sw*0.6,sh*0.2), "Cross Breeding\nSlot "+(cn+1));
//		GUI.DrawTexture(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.15), maki);
		GUI.skin = skin2;
//		GUI.Label(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.15), "交配 Cross Breeding");
		GUI.DrawTexture(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.15), makia);
		GUI.skin = skin;
		if (cb[1+cn*4]==0) {
			if (GUI.Button(Rect(sw*0.3,sh*0.3,sw*0.1,sw*0.1), (jp)?"１匹目を\n選択":"Tap to\n\nSelect Koi1")) {cb2=1;fs=1;fe=20;}
		} else {
//			GUI.Box(Rect(sw*0.3,sh*0.3,sw*0.1,sw*0.1), (jp)?"グループ\n\n"+gnamj[gr[cb[1+cn*4]]]+"\n\n("+fnam[cb[1+cn*4]]+")":"Group\n"+gnam[cb[1+cn*4]]+"\n\n("+enam[cb[1+cn*4]]+")");
			GUI.Box(Rect(sw*0.3,sh*0.3,sw*0.1,sw*0.1), (jp)?""+fnam[cb[1+cn*4]]:""+enam[cb[1+cn*4]]);
		}
		if (cb[2+cn*4]==0) {
			if (GUI.Button(Rect(sw*0.6,sh*0.3,sw*0.1,sw*0.1), (jp)?"２匹目を\n選択":"Tap to\n\nSelect Koi2")) {cb2=2;fs=1;fe=20;}
		} else {
//			GUI.Box(Rect(sw*0.6,sh*0.3,sw*0.1,sw*0.1), (jp)?"グループ\n\n"+gnamj[gr[cb[2+cn*4]]]+"\n\n("+fnam[cb[2+cn*4]]+")":"Group\n"+gnam[cb[2+cn*4]]+"\n\n("+enam[cb[2+cn*4]]+")");
			GUI.Box(Rect(sw*0.6,sh*0.3,sw*0.1,sw*0.1), (jp)?""+fnam[cb[2+cn*4]]:""+enam[cb[2+cn*4]]);
		}
		if (lv==3 && xp<=3 && gst=="") {
			if (cb[3+cn*4]>0 && cb[4+cn*4]<=0) {
				GUI.Box(Rect(sw*0.3,sh*0.0,sw*0.4,sh*0.1), (jp)?"生まれたお魚\nは・・・":"Your fish\nis...");
				GUI.DrawTexture(Rect(sw*0.45,sh*(0.3+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
			} else if (cb[4+cn*4]>0) {
//				GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.1), (jp)?"交配には時間がかかりますが\nパールを使ってすぐに完了できます\n今回はパールがかからないので完了をタップしてください":"Cross Breeding");
				GUI.DrawTexture(Rect(sw*0.45,sh*(0.53+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
			} else if (cb[1+cn*4]==0) {
				GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.1), (jp)?"まずは１匹目\nの魚を選んで":"Cross Breeding");
				GUI.DrawTexture(Rect(sw*0.3,sh*(0.1+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
			}	else if (cb[2+cn*4]==0) {
				GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.1), (jp)?"次に２匹目\nの魚を選び":"Cross Breeding");
				GUI.DrawTexture(Rect(sw*0.6,sh*(0.1+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
			}	else {
				GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.1), (jp)?"タップで\n交配開始！":"Cross Breeding");
				GUI.DrawTexture(Rect(sw*0.45,sh*(0.3+Time.time%0.5/10.0),sw*0.1,sw*0.1),ar);
			}
		}
		if (slot<cn) {
			if (GUI.Button(Rect(sw*0.43,sh*0.5,sw*0.14,sw*0.14), b9)) {tbs=1;}
		} else if (cb[3+cn*4]==0) {
			if (cb[1+cn*4]>0 && cb[2+cn*4]>0) if (GUI.Button(Rect(sw*0.43,sh*0.5,sw*0.14,sw*0.14), (jp)?"タップで\n交配開始！":"Tap to\n\ncrossbreed")) {
				// err="Server Connecting...";
				// load("gst="+gst+"&ld="+pn+"&dt=cb_"+cb[1+cn*4]+"_"+cb[2+cn*4]+"_"+cn+"_");
				cross();
			}
		} else {
			if (cb[4+cn*4]>0) {
				gm=cb[4+cn*4]/3600+1;
				if (lv==3) gm=0;
				GUI.Box(Rect(sw*0.43,sh*0.5,sw*0.14,sh*0.2), "Slot "+(cn+1)+"\n"+tim(cb[4+cn*4]));
				if (deb) if (GUI.Button(Rect(sw*0.43,sh*0.7,sw*0.14,sh*0.1), gm+" Finish")) {fin=1;}
//				GUI.Label(Rect(sw*0.44,sh*0.72,sw*0.03,sw*0.03), c2);
			} else {
				if (GUI.Button(Rect(sw*0.43,sh*0.5,sw*0.14,sw*0.14), (jp)?"タップで\nゲット！":"Tap\nto\nGet!")) {
					if (r2>=pmx[pn]) {err=(jp)?"水そうが一杯です。先におさかなを売るか水そうを広げてください":"Tank is full.You need to sell fish or expand tank.";return;}
					mn=0;
					got=cb[3+cn*4];nkoi();
					cb[1+cn*4]=0;cb[2+cn*4]=0;cb[3+cn*4]=0;cb[4+cn*4]=0;save();
					//load("ld="+pn+"&cn="+cn+"&cb="+(3+cn*4));
				}
			}
		}

		if (cn<3) {
			if (GUI.Button(Rect(sw*0.80,sh*0.55,sw*0.07,sw*0.07), arr)) {cn++;}
		}
		if (cn>0) {
			if (GUI.Button(Rect(sw*0.13,sh*0.55,sw*0.07,sw*0.07), arl)) {cn--;}
		}

//		if (cb[2]==0) GUI.Box(Rect(sw*0.4,sh*0.7,sh*0.16,sh*0.16), "Tap to\ncrossbreed");
	}

	if (PlayerPrefs.GetInt("pt")>0) {
//		GUI.Box (Rect(Screen.width/2 - 120,Screen.height/2-140,240,240), "Tapjoy Offer Point\n\nYou got "+PlayerPrefs.GetInt("pt")+" pearls");
//		if (GUI.Button (Rect (sw*0.45,sh*0.7,sw*0.1,sh*0.05), "OK")) {
			https(PlayerPrefs.GetInt("pt"));
			PlayerPrefs.SetInt("pt",0);
//		}
	}
//tuto
	var ti=Time.time%0.5;
	if (lv==1 && gst=="") {
		if (mn==0) {
			GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.25), (jp)?"チュートリアル\n\nコイの世界へようこそ！\n\n池が汚れています\nまずはおそうじしましょう":"Koi Garden Tutorial\nFirst,Clean your pond.");
			GUI.DrawTexture(Rect(sw*0.27,sh*(0.68+ti/10.0),sw*0.1,sw*0.1),ar);
		} else {
			GUI.DrawTexture(Rect(sw*0.45,sh*(0.3+ti/10.0),sw*0.1,sw*0.1),ar);
		}
	}
	if (lv==2 && r2==0 && gst=="") {
		if (mn==0) {
			GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.25), (jp)?"レベルがあがりました！\nレベルが上がっていくと水槽を増やせたり\n新しいお魚を買うことができます\n\nでは最初のおさかなを買ってみましょう":"Leveled up!\nSome koi unlocked.\n\nThen,Buy a koi.");
			GUI.DrawTexture(Rect(sw*0.51,sh*(0.68+ti/10.0),sw*0.1,sw*0.1),ar);
		} else {
			GUI.DrawTexture(Rect(sw*0.65,sh*(0.3+ti/10.0),sw*0.1,sw*0.1),ar);
		}
	}
	if (lv==2 && r2==0 && gst=="") {
		if (mn==0) {
			GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.2), (jp)?"おさかなをもう一匹買ってみましょう":"Buy another fish.");
			GUI.DrawTexture(Rect(sw*0.51,sh*(0.68+ti/10.0),sw*0.1,sw*0.1),ar);
		} else {
			GUI.DrawTexture(Rect(sw*0.65,sh*(0.3+ti/10.0),sw*0.1,sw*0.1),ar);
		}
	}
	if (lv==2 && r2==1 && gst=="") {
		if (mn==0) {
			GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.2), (jp)?"おさかなをえさを与えてみましょう\n\n空腹になるとお魚は成長しません":"Feed a fish.\n\nHungry fish never grow up.");
			GUI.DrawTexture(Rect(sw*0.39,sh*(0.68+ti/10.0),sw*0.1,sw*0.1),ar);
		} else {
			GUI.DrawTexture(Rect(sw*0.45,sh*(0.3+ti/10.0),sw*0.1,sw*0.1),ar);
		}
	}
	if (lv==3 && xp==0 && mn==0 && gst=="") {
		GUI.Box(Rect(sw*0.3,sh*0.1,sw*0.4,sh*0.3), (jp)?"最後に交配をしてみましょう\n\n交配(Cross Breeding)とは違う種類の魚を組み合わせ\n違った種類の魚を生み出す機能です\n\n様々な交配を試して全種の鯉を集めましょう":"Try CrossBreeding.\n\nCrossBreeding create a new Koi Fish.\n\nAnd collect all kois !!");
		GUI.DrawTexture(Rect(sw*0.63,sh*(0.68+ti/10.0),sw*0.1,sw*0.1),ar);
	}


//	if (GUI.Button(Rect(0,200,100,100), "ever")) {Application.OpenURL("https://secure.everbadge.com/offerwall?sub_id="+uid+"&currency=ZyMVV67bSEYvTujxfiYVjsfDjbYKJ0xvuZlyhCvOXKk");}

/*
	if (lv>=3) if (GUI.Button(Rect(-mt,sh*0.2,sw*0.12,sw*0.08), que)) {
		mn=10;
	}
*/

	for (var c=0;c<=slot;c++) {
		if (cb[3+c*4]>0) {
			if (GUI.Button(Rect(0,sh*(0.35+c*0.12),sh*0.12,sh*0.12), hrt)) {
				mn=5;
			}
			GUI.Label(Rect(0,sh*(0.3+c*0.12),sh*0.15,sh*0.15),(cb[4+c*4]>=0)?""+tim(cb[4+c*4]):"  !!");
		}
	}
	if (deb) {
//		GUI.Box(Rect(sw*0.3,sh*0.3,sw*0.38,sh*0.1), SystemInfo.deviceModel+" "+ama);

//		if (GUI.Button(Rect(0,sh*0.55,sh*0.15,sh*0.15), "JP")) {
//			jp=1-jp;
//		}
//		if (GUI.Button(Rect(0,sh*0.5,sh*0.1,sh*0.1), "Par")) {par1.Play();}
/*
			if(AGSClient.IsServiceReady()) {
 				AGSLeaderboardsClient.SubmitScore("aqualv",2);
			}
*/
//		}
	}


}
/*
			GUI.Box(Rect(sw*0.3,sh*0.3+fr*sh*0.1,sw*0.38,sh*0.1), inv[fr]+"さんから友達依頼");
			if (GUI.Button(Rect(sw*0.7,sh*0.3+fr*sh*0.1,sw*0.08,sh*0.1), "はい")) {
				load("ld=1&fr=1&add="+inv[fr]);
			}
			if (GUI.Button(Rect(sw*0.8,sh*0.3+fr*sh*0.1,sw*0.08,sh*0.1), "いいえ")) {
*/
//	Common Uncommon Rare Legendary	mythical(架空)
//
// 1 neon tetra ネオンテトラ
// 2
// 4 clown fish カクレクマノミ

// 463,2990 478,3066 515,3128 1726,11066 1936,11753 2043,11967 2766,13604
// TapFish
//
// FishFarm
// Blue Green Damselfish,Sulphur damsel,Goldtail demoiselle,Blue chromis,Royal gramma,Fire goby,Clown anemonefish,Tailspot blenny,Black anemonefish,Twoband anemonefish,Mandarinfish,Blacktail humbug,Bangail cardinalfish


// select * from aqua where id='2C214B3D-64B3-5484-AB39-579FEA0FEEB7'
// select * from aqua where count='259479' 201321 IMEI:359569040536469 219900
// select * from aqua where count='269779' 201321

//008888_246_007367_249_002688_248_005390_247_001671_232_005070_232_005044_231_006164_235_003668_230_008166_243_007850_236_002556_237_f_9000072_f_9000071_f_9000001_f_9000002_f_9000004_f_9000004_f_9000005_f_9000006_f_9000007_f_9000008_f_9000009_f_9000010_f_9000011_f_9000012_f_9000014_f_9000015_f_9000016_


// day1 lv3 f3,day2 lv4 f6,day3 lv5 f10
// Amazon
// 34,64,61,42,68,36,44,33,45,55,66,39,59,40,67,43,47,49,51,56,41,69,50,35,46,57,54,65,53,48,62,60,38,70,32,37,52,63,58,31,
// CA:5F:DC:B3:B6:4D:0E:DF:34:06:CB:49:49:A4:43:C3

//
//  taggable_friends /me/taggable_friends?fields=id,name

// Quest

// Clean Tank
// Buy a fish
// Buy Zebrafish
// Feed
// Cross Breed

//You can get free gems by just downloading Apps on from the Google Play Store or the Apple App Store .

/*


*/
