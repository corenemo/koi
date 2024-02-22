<?PHP
//115805985111955
//https://graph.facebook.com/oauth/authorize?client_id=115805985111955&redirect_uri=http://184.72.56.91/koi/t.php
//fdate 10000_15_15_
function tk() {
	global $s;
	$i=strpos($s,"_");
	$re=substr($s,0,$i);$s=substr($s,$i+1);
	if ($re=="") return 0;
	return $re;
}

function lvup($px,$jp) {
	global $nex,$gp,$lv,$dat,$ex;
	$ex+=$px;
	if ($ex>=$nex[$lv]) {
		$ex-=$nex[$lv];$lv++;$gp++;
		if ($jp>0) $dat.="pub=$lv&err=レベルが $lv になった! 1ゴールドを手に入れた!&"; else $dat.="pub=$lv&err=Leveled up to $lv! You got 1 Gold!&";
	}
}
  
require_once("../supersimpledbe.php");
require_once("../process.php");

//echo mktime();
//echo sprintf("%010d",   367);

if ($la=="Japanese") $jp=1;

$fnam = array(
"","ネオンテトラ","ダニオ","マジェスティックエンジェルフィッシュ","カクレクマノミ","ブルーフィッシュ","キチョウチョウウオ","ベタ","モンガラ","エンジェルフィッシュ","ブルーフィッシュ","ディスカス","ディスカス","クイーンエンジェルフィッシュ","ハシナガチョウチョウウオ","ナンヨウハギ","ミノカサゴ","アカヒトデ","アオヒトデ","キヒトデ","ホラダニオ","レインボーフィッシュ","ドワーフホーク","ランプロローグス","ボアフィッシュ","タツノオトシゴ","エイ","ブルータン","アデヤッコ","ドワーフグラミー","ネオンフィッシュ","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Coral","Coral","Coral","Stone","Coral","Coral");

$enam = array(
"","Neon Tetra","Zebrafish","MajesticAngelfish","Clownfish","Blue Fish","Butterflyfish","Betta Fish","Lagoon Triggerfish","Angelfish","Blue Fish",
"Discus","Discus","Queen Angelfish","Copperband Butterflyfish","Paracanthurus hepatus","Lionfish","Red Starfish","Blue Starfish","Yellow Starfish","Hora danio",
"Rainbowfish","Dwarf hawkfish","Six bar lamprologus","BoarFish","Seahorse","Manta Ray","Blue Tang","Blueface Angelfish","Dwarf Gourami","NeonFish",

"Yellowstripe Maroon Clownfish","Mertensii Butterflyfish","Singapore Angelfish","Bluespotted Angelfish","Saddleback Butterflyfish","Regal Angelfish","Black and White Ocellaris Clownfish","Yellow Longnose Butterflyfish","Frame Angelfish","Half Black Angelfish",
"Double Saddle Butterflyfish","False Personifer Angelfish","Multicolor Angelfish","Scribbled Angelfish","Tank Bred Annularis Angelfish","Orange Butterflyfish","Pygmy Angelfish","Three Banded butterflyfish","Red Stripe Angelfish","Spotfin Butterflyfish",
"Rusty Angelfish","Cinnamon Clownfish","Lemon Butterflyfish","Auriga Butterflyfish","Bicolor Angelfish","Raccoon Butterflyfish","Tahitian Butterflyfish","Maroon Clownfish","Flameback Angelfish","Pakistan Butterflyfish",
"Emperor Angelfish","Teardrop Butterflyfish","Clarkii Clownfish","Chrysurus Angelfish","Declivis Butterflyfish","Coral Beauty Angelfish","Lemonpeel Angelfish","Passer Angelfish","Latticed Butterflyfish","Foureye Butterflyfish",

"Giant Isopod","Giant Squad","","","","","","","","",
"","","","","","","","","","");

$il = array(1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,16,16,17,17,17,18,18,19,5,10,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,1,1,42,43,43,44,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

$gr = 
Array(0,1,2,3,4,4,4,5,5,2,5,
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


$ky = Array(0,10,15,20,-10,-15,-20,-25,-30,-40,-50,-60,-70,-80,-90,-100,-120,-140,-160,-180,-200,100,120,140,150,-2,-2,160,160,180,180,-3,200,240,250,280,300,-4,340,360,400,420,440,460,500,-5,600,640,700,750,800,850,900,1000,1200,1400,1600,2000,-5,2400,3000,3600,4000,-6,5000,6000,7000,-5,8000,9000,10000,-80,-100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,20,20,30,30,10,10,10,10,10,-1,-1,-1,-1,10,200,200,200,100,100,-20,-20,-20,1,1,-1,-2,300,300,300,300,400,400,400,400,500,500,500,500,500,-10,-10,-10,-10,-20,-20,-20,-20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-20,-20,-20,-20,100,-10,-10,-10,-5,-5,-5,-10,-10,-20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);


$nex = Array(0,
7,15,30,40,49,73,109,163,244,366,549,823,1234,1851,2776,4164,6246,9369,14053,21079,23186,25504,28054,30859,33944,37338,41071,45178,49695,54664,60130,66143,72757,80032,88035,96838,106521,117173,128890,141779,155956,171551,188706,207576,228333,251166,276282,303910,334301,367731,404504,444954,489449,538393,592232,651455,716600,788260,867086,953794,1049173,1154090,1269499,1396448,1536092,1689701,1858671,2044538,2248991,2473890,2721279,2993406,3292746,3622020,3984222,4382644,4820908,5302998,5833297,6416626,7058288,7764116,8540527,9394579,10334036,11367439,12504182,13754600,15130060,16643066,18307372,20138109,22151919,24367110,26803821,29484203,32432623,35675885,39243473);

$kt = Array(0,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,14,14,16,16,12,13,13,14,48,48,14,14,15,15,15,18,18,20,20,18,18,24,24,22,22,25,25,26,26,27,27,28,28,30,30,32,32,32,32,34,34,34,34,34,36,36,36,36,36,36,36,36,36,36,480,960,48,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

// 2 -> 3Hours +1/3min

//"","Small","Angelfish","Crown Fish","Buttefly","Tropical","Starfish","Seahorse","Manta","Isopod","Mollusca"); 

//$mix[0] = array("","");
$mix[1] = array("","010101","010101","010101","010101","010101","010101","010101","010101","010101","010101");
$mix[2] = array("","040404","010101","010101","010101","010101","010101","010101","010101","010101","010101");
$mix[3] = array("","080808","101313","010101","010203","010203","010203","010203","010203","010203","010203");
$mix[4] = array("","080808","010101","050605","010203","010203","010203","010203","010203","010203","010203");
$mix[5] = array("","020202","040404","040404","030303","010203","010203","010203","010203","010203","010203");
$mix[6] = array("","030507","030408","050710","010203","010203","010203","010203","010203","010203","010203");
$mix[7] = array("","020406","040506","010408","030508","010306","030809","010203","010203","010203","010203");
$mix[8] = array("","030406","010307","020409","010203","040307","020310","030610","010203","010203","010203");
$mix[9] = array("","010101","010101","010101","010101","010101","010101","010101","010101","010101","010101");
$mix[10] = array("","010101","010101","010101","010101","010101","010101","010101","010101","010101","010101");

	
$vowels = array(" ", "(", ")", ",", "$", "&");
$onlyconsonants = str_replace($vowels, "_", $os);


if ($v>0 && $v<100) {
	if ($jp) {
		die("err=We have a server maintenance for critical error.Data of our users are all stored on the server.We have to submit updated version.Update will be mid-October.Sorry for inconvenience.&");
	} else {
		die("err=We have a server maintenance for critical error.Data of our users are all stored on the server.We have to submit updated version.Update will be mid-October.Sorry for inconvenience.&");
	}
}
$dat="";$tex="";$mes="";

if ($ini) {
	$query="SELECT * from mesk where id ='$id' and count<'1'";
	$data=simpledb_query($query,'');process($data);
	foreach($list as $key1=>$my) {
		if ($my["text"]=="inv") {
			$f++;
			$dat.="inv$f=".$my["count"]."&";
		} else {
			$mes.=$my["text"]."\n---\n";
		}
	}
	$gf=0;
	$query="SELECT * from mesk where fid ='$id'";
	$data=simpledb_query($query,'');process($data);
	foreach($list as $key1=>$my) {
		if (mktime()-$my["time"]<82800) {
			$dat.="gtm$gf=".(mktime()-$my["time"])."&gid$gf=".$my["fbid"]."&";
			$gf++;
		}
	}
//	$query="DELETE from mesk where ItemName =$id";
//	$data=simpledb_query($query,'');
//	$query="UPDATE mesk SET count=1 where ItemName =$id"."inv";
//	$data=simpledb_query($query,'');
	$query="DELETE from mesk where ItemName =$id"."f";
	$data=simpledb_query($query,'');


}

if ($mes) $mes.="&";

if ($idc) {
	if(preg_match("/^[a-zA-Z0-9]+$/", $idc) && $idc<1){} else {die("err=can not change&");}
	$query="SELECT * from koif where count ='$idc'";
	$data=simpledb_query($query,'');process($data);
	if (count($list)) {
		if ($jp) {		
			die("err=すでに使用されています&");
		} else {
			die("err=Already used&");
		}
	}
	
	$query="UPDATE koif SET count=".$idc." WHERE ItemName=$id";
	$data=simpledb_query($query, '');
	if ($jp) {			
		$mes="IDを変更しました&";		
	} else {
		$mes="ID changed&";		
	}
}

if ($gst) {
	if ($rnd) {
$today = getdate();
$today_month = $today['mon'];
$today_day = $today['mday'];
$today_year = $today['year'];

$s = $today['seconds'];
$m = $today['minutes'];
$h = $today['hours'];

$s -= rand(0,86400);
$timestamp = mktime($h, $m, $s, $today_month, $today_day, $today_year);
$rd=date('YmdHis', $timestamp);

		$query="SELECT * from koif where date<'$rd' order by date desc";
//echo $query;
	} else {
		$query="SELECT * from koif where id='$id'";
	}
	$data=simpledb_query($query,'');process($data);
	foreach ($list as $key1=>$my) {
		$myn=$my["count"];
		if ($rnd) $gst=$myn;
	}
//print_r($my);koif
	if ($fbid) $query="SELECT * from koif where fbid='$fbid'"; else $query="SELECT * from koif where count='$gst'";
} else {
	$query="SELECT * from koif where id='$id'";
}
$data=simpledb_query($query,'');process($data);


if ($inappp) {

	if (ereg("Android",$_SERVER["HTTP_USER_AGENT"]) && $inappp!=50 && $inappp>1 && $sig!="kindle") {
		$pubkey = file_get_contents("public.pem");
		$pubkeyid = openssl_get_publickey($pubkey);
		$sig = base64_decode($sig);
		$ve = openssl_verify($sdat, $sig, $pubkeyid);
		if ($ve<1) $inappp=0;
	}

		if (ereg($id,'221CA7B8-6922-4639-BB82-DE90D9B2BA8E')) {$inappp=0;}

	if ($inappp==50) {
		if (ereg($id,'ccfa8e6a949a31e6917bda5d3e3006c1fe808c0a1b5caac8c6e2e8f1702072914c1a801a25dccee15d194fa13abad78afc0d85919d0b0d70293cd3c2163a526132f281a8feaff28742e1a80343a93cedb89f393595cd008d4316b8d2c1430285b01d882b9b028d5b1bcef73b881cc91fc72377544e0c0a1aed1b4a781e985f8d')) {$inappp=0;}

		$query="INSERT INTO koif (ID,id,fbna,fbid) VALUES ($id,$id,$fbna,$fbid)";
		$data=simpledb_query($query, '');
		process($data);
	}

//	$query2="SELECT * from pay where uid='$id' and dol='$inappp'";
//	$data2=simpledb_query($query2,'');process($data2);
//	if (count($list)) $inappp=0;

	$query="SELECT * from koif where id='$id'";
	$data=simpledb_query($query,'');process($data);

	foreach($list as $key1=>$my) {
		$sen=$my["sen"];$gp=$my["gp"];
	}
	$gp+=$inappp;
	$query2="UPDATE koif SET gp=$gp WHERE ItemName=$id";
	$data2=simpledb_query($query2, '');
	$dat.="sen=".$sen."&gp=".$gp."&";
	
	if ($inappp==18) {
		$query="INSERT INTO koif (ID,id,fb) VALUES ($id,$id,2)";
		$data=simpledb_query($query, '');
		process($data);
	}
	if ($inappp==15) {
		$query="INSERT INTO koif (ID,id,tw) VALUES ($id,$id,2)";
		$data=simpledb_query($query, '');
		process($data);
	}
	if ($inappp>1) {
		$from="info@f-app.com";$to="nemo0511@gmail.com";
		$body="$id $inappp $ve";
		$res=mail($to,"*** Koi ***",$body,"From: $from\n");
	}
	if ($inappp>0) {
		$query="INSERT INTO pay (ID,uid,app,dol,date) VALUES ($id,$id,aqua2,$inappp,".date("YmdHis").")";
		$data=simpledb_query($query, '');
	}
	die("$dat");
}				

if ($gft) {
	$query="SELECT * from koif where fbid ='$gft'";
	$data=simpledb_query($query,'');process($data);
	foreach ($list as $key1=>$my) {
		$iid=$my["id"];
		$sen=$my["sen"];$gp=$my["gp"];
	}
	$gp+=1;
	$query2="UPDATE koif SET gp=$gp WHERE ItemName=$iid";
	$data2=simpledb_query($query2, '');
	if ($iid) {
		$query="INSERT into mesk (ID,id,fid,fbid,count,text,date,time) VALUES (".$mc.$iid."inv,$iid,$id,$gft,$mc,$fbna sent you a Gold,".date("YmdHis").",".mktime().")";
		$data=simpledb_query($query, '');
		process($data);
		if ($jp) {			
			die("err=ギフトを送りました&");
		} else {
			die("err=Gift sent&");
		}
	} else {
		if ($jp) {			
			die("err=IDが見つかりません&");	
		} else {
			die("err=ID not found&");	
		}
	}
	exit;
}
				
if ($inv) {
	if ($inv==$mc) die("err=That's you!&");
	$query="SELECT * from koif where count ='$inv'";
	$data=simpledb_query($query,'');process($data);
	foreach ($list as $key1=>$my) {
		$iid=$my["id"];
	}
	if ($iid) {
		$query="INSERT into mesk (ID,id,fid,count,text,date) VALUES (".$mc.$iid."inv,$iid,$id,$mc,inv,".date("YmdHis").")";
		$data=simpledb_query($query, '');
		process($data);
		if ($jp) {			
			die("err=友達申請を送りました&");
		} else {
			die("err=Invitation sent&");
		}
	} else {
		if ($jp) {			
			die("err=IDが見つかりません&");	
		} else {
			die("err=ID not found&");	
		}
	}
	exit;
}

if ($fr || $ini) {
	foreach($list as $key1=>$my) {
		$s=$my["fr"];
		$name=$my["name"];
		$count=$my["count"];
	}
	if ($del) {
		$s=str_replace($del."_","",$s);
		$query="UPDATE koif SET fr=$s WHERE ItemName=$id";
		$data=simpledb_query($query, '');
	}
	if ($add) {
		if (!ereg($add."_",$s)) {	
			$s.=$add."_";
			$query="UPDATE koif SET fr=$s WHERE ItemName=$id";
			$data=simpledb_query($query, '');
		}
																	
		$query="SELECT * from koif where count='$add'";
		$data=simpledb_query($query,'');process($data);
		foreach($list as $key1=>$my) {
			$fid=$my["id"];
			$s2=$my["fr"];
		}
		if (!ereg($count."_",$s2)) {
			$s2.=$count."_";
			$query="UPDATE koif SET fr=$s2 WHERE ItemName=$fid";
			$data=simpledb_query($query, '');
		}
	}
	if ($add || $dec) {
/*
		if ($add) $query="Delete from mesk WHERE ItemName=".$add.$id."inv";
		if ($dec) $query="Delete from mesk WHERE ItemName=".$dec.$id."inv";
		$data=simpledb_query($query, '');
		$query="SELECT * from koif where id='$id'";
		$data=simpledb_query($query,'');process($data);
*/
	}

	$f=1;
	while ($s!="") {
		$s3=tk();
		echo "fr$f=$s3&";
		$f++;
	}
//	exit;
}

if (count($list)) {
	if ($ld || $buy || $sell || $cb) {
		$r=1;$r2=0;
		foreach($list as $key1=>$my) {
			$sen=$my["sen"];$gp=$my["gp"];$food=$my["food"];
			$nd=$my["date"];$ts=$my["time"];$bd=$my["box"];
			$fid=$my["id"];$pcl=$my["pcl"];$wl=$my["wall"];$z1=$my["z"];
			$pmax=$my["pmax"];$slot=$my["slot"];$la=$my["la"];
			$lv=$my["lv"];$ex=$my["ex"];
			if ($my["fb"]<2) $fb=1;
			$tw=1-$my["tw"];
			$name=$my["name"];$count=$my["count"];
			if ($count>0) $dat.="idc=1&";
			if ($my["la"]=="Japanese") $jp=1;

			$ss=$s;$s=$ts;
			for ($p=1;$p<=15;$p++) {
				$tim[$p]=tk();
			}
			$s=$ss;
			$ss=$s;$s=$pcl;
			for ($p=1;$p<=15;$p++) {
				$cle[$p]=tk();
			}
			$s=$ss;
			$ss=$s;$s=$wl;
			for ($p=1;$p<=15;$p++) {
				$wal[$p]=tk();
			}
			$ss=$s;$s=$z1;
			for ($p=1;$p<=15;$p++) {
				$z[$p]=tk();
			}
			$s=$ss;
			
			for ($p=1;$p<=15;$p++) {
				$pmx[$p]=$my["pmx$p"];
			}
			if ($slo && $cn>0) {
				$pl=25*pow(2,($cn-1));
				if ($gp>=$pl) {
					$gp-=$pl;$slot++;
					$query2="UPDATE koif SET gp=$gp,slot=$slot WHERE ItemName=$id";
					$data=simpledb_query($query2, '');
				} else {
					if ($jp) {						
						die("err=金貨が足りません!");
					} else {
						die("err=not enough gold!");
					}
				}
			} else if ($fin) {
				$pl=(int)($my["cb".(4+$cn*4)]/3600)+1;
				if ($lv==3) $pl=0;
				if ($gp>=$pl) {
					$gp-=$pl;
					$my["cb".(4+$cn*4)]=0;
					$query2="UPDATE koif SET gp=$gp,cb".(4+$cn*4)."=0 WHERE ItemName=$id";
					$data=simpledb_query($query2, '');
				} else {
					if ($jp) {						
						die("err=金貨が足りません!");
					} else {
						die("err=not enough gold!");
					}
				}
			} else if ($pmx[$ld]==0) {						// Pond Buy 
				if ($pl) {
					if ($gp>=$pl) {
						$gp-=$pl;
						$pmx[$ld]=10;
						$query2="UPDATE koif SET gp=$gp,pmx$ld=10 WHERE ItemName=$id";
						$data=simpledb_query($query2, '');
					} else {
						if ($jp) {						
							die("err=購入には金貨が足りません!");
						} else {
							die("err=not enough gold!");
						}
					}
				}
				if ($go) {
					if ($sen>=$go) {
						$sen-=$go;
						$pmx[$ld]=10;
						$query2="UPDATE koif SET sen=$sen,pmx$ld=10 WHERE ItemName=$id";
						$data=simpledb_query($query2, '');
					} else {
						if ($jp) {
							die("err=銀貨が足りません!");
						} else {
							die("err=not enough silver!");
						}
					}
				}
			} else {								// Pond Expand
				if ($pl) {
					if ($gp>=$pl && $pmx[$ld]<40) {
						$gp-=$pl;
						$pmx[$ld]+=10;
						$query2="UPDATE koif SET gp=$gp,pmx$ld=".$pmx[$ld]." WHERE ItemName=$id";
						$data=simpledb_query($query2, '');
					} else {
						if ($jp) {						
							die("err=拡張には金貨が足りません!");
						} else {
							die("err=not enough gold!");
						}
					}
				}	
				if ($go) {
					if ($sen>=$go && $pmx[$ld]<40) {
						$sen-=$go;
						$pmx[$ld]+=10;
						$query2="UPDATE koif SET sen=$sen,pmx$ld=".$pmx[$ld]." WHERE ItemName=$id";
						$data=simpledb_query($query2, '');
					} else {
						if ($jp) {
							die("err=銀貨が足りません!");
						} else {
							die("err=not enough silver!");
						}
					}
				}	
			}
			if ($z2) {
				$query2="UPDATE koif SET z=$z2 WHERE ItemName=$id";
				$data=simpledb_query($query2, '');
			}

			if ($dt) {
				$s=$dt;
				while ($s!="") {
					$s3=tk();$s4=tk();
					if ($s3=="f") {
						$ff[$s4+1]=1;//echo "ok".$s4;
					}
					if ($s3=="c" && $cle[$ld]<99) {
						if ($gst) {
							$tex=$myn." cleaned your pond.";
							$xp+=(int)(($s4-$cle[$ld])/5);
						} else {
							lvup((int)(($s4-$cle[$ld])/5),$jp);
						}
						$cl=$s4;$cle[$ld]=$s4;
					}
					if ($s3=="cb") {
						$s5=tk();$s8=tk();
						if ($gr[$s4]>$gr[$s5]) $s6=$mix[$gr[$s4]][$gr[$s5]]; else $s6=$mix[$gr[$s5]][$gr[$s4]];
						$rr=rand(0,100);
						if ($s6=="") $s6=0;
						else if ($rr<60) $s9=substr($s6,0,2);
						else if ($rr<90) $s9=substr($s6,2,2);
						else $s9=substr($s6,4,2);
/*						
	$tf=1;
	for ($l=1;$l<=72;$l++) {
		if ($gr[$l]==$s9 && $il[$l]<=$lv) {$tf=$l;}
	}	
	for ($l=$tf;$l>=1;$l--) {
		if ($gr[$l]==$s9) {
			if ($end<1 && rand(1,10)<=7) $tf=$l; else $end=1;
		}
	}
						$s9=$tf;
*/
						$s7=$kt[$s9]*360;
						$dat.="cb".(1+$s8*4)."=$s4&cb".(2+$s8*4)."=$s5&cb".(3+$s8*4)."=$s9&cb".(4+$s8*4)."=$s7&";
						$my["cb".(1+$s8*4)]=$s4;$my["cb".(2+$s8*4)]=$s5;$my["cb".(3+$s8*4)]=$s9;$my["cb".(4+$s8*4)]=$s7;
						$query2="UPDATE koif SET cb".(1+$s8*4)."=$s4,cb".(2+$s8*4)."=$s5,cb".(3+$s8*4)."=$s9,cb".(4+$s8*4)."=$s7 WHERE ItemName=$id";
						$data=simpledb_query($query2, '');
					}
				}
			}
			$s=$my["pond$ld"];$s2=$s;$s5="";
			$ho=(int)((mktime()-$tim[$ld])/60);
			$sc=mktime()-$tim[$ld];
			if ($ho==0) $nod=1;
			if ($ho>10000) $ho=10000;
			$dat.="ho=$ho&sc=$sc&";
			$tim[$ld]=mktime();
			$cle[$ld]-=(int)($ho/24);if ($cle[$ld]<0) $cle[$ld]=0;
			if ($bo>=12) {
				if ($box) {
					$rr=rand(1,2);
					if ($rr==1) {$sen=$sen+30;}
					if ($rr==2) {$ex=$ex+30;}
					if ($rr==3) {$gp=$gp+1;}

					$dat.="box=0&";
					$query="UPDATE koif SET box=".date("YmdHis")." WHERE ItemName=$id";
					$data=simpledb_query($query, '');
				} else {
					$dat.="box=1&";
				}
			}
			if ($r==1) {$dat.="food=".$food."&";}
			while ($s!="") {
				$s3=tk();
				$s4=tk();
				if ($s4%1000<=200) {
					$r2++;
					$fn=($s4%1000);$fl=($s4/1000%100);$ag=(int)($s4/100000);
					if ($ho>0 && $gst=="") {
						for ($mi=0;$mi<$ho;$mi++) {
							if ($mi%8==0) {
								$fl--;
								if ($fl<0) $fl=0;
							}
							if ($ag<90 && $fl>0 && $mi%$kt[$fn]==0) {
								$ag++;
								if ($ag>90) $ag=90;
							}
						}
//						$dat="cl=".$cle[$ld]."&";$s5=$cl."_";
					}
//					echo "ff$r=".$ff[$r]."<BR>";
//					if ($r==1) {$dat.="cl=".$cle[$ld]."&";}
					if ($ff[$r]) {
						if ($fl<80) {
							if ($gst) {
								$tex=$myn." fed your fish.";
								$xp+=1; 
							} else {
								lvup(3,$jp);
							}
						}
						$fl=90;
					}
					if ($sell==$r) {
						$pex=(int)($fn*$ag*5/90);
						lvup($pex,$jp);
						if ($ky[$fn]>0) {
							$sen+=(int)($ky[$fn]*1.5*$ag/90);
						} else {
							$sen-=(int)($ky[$fn]*150*$ag/90);
						}
						$r--;$sell=999;
					} else {
						$dat.="fn$r=".$fn."&ag$r=".$ag."&fl$r=".$fl."&";
						$fn=sprintf("%03d",$fn);
						$ag=sprintf("%02d",$ag);
						$fl=sprintf("%02d",$fl);
						$s5.=$s3."_".$ag.$fl.$fn."_";
					}
				} else {
					if ($sell==$r) {
						$fn=($s4%1000);
						$sen+=(int)($ky[$fn]/2);
						$r--;$sell=999;
					} else {
						if ($mov==$r) {
							$dat.="ag$r=".$x."&fl$r=".$y."&fn$r=".($s4%1000)."&";
							$x=sprintf("%02d",$x);$y=sprintf("%02d",$y);
							$s5.="00".$x.$y."_".$s4."_";
						} else {
							$s5.=$s3."_".$s4."_";
							$dat.="ag$r=".(int)($s3/100)."&fl$r=".($s3%100)."&fn$r=".($s4%1000)."&";
						}
					}
				}
				$r++;
			}
			$dat.="cl=".$cle[$ld]."&"."wl=".$wal[$ld]."&";
			$cla=$cle[1]."_".$cle[2]."_".$cle[3]."_".$cle[4]."_".$cle[5]."_".$cle[6]."_".$cle[7]."_".$cle[8]."_".$cle[9]."_".$cle[10]."_".$cle[11]."_".$cle[12]."_".$cle[13]."_".$cle[14]."_".$cle[15]."_";
			$tia=$tim[1]."_".$tim[2]."_".$tim[3]."_".$tim[4]."_".$tim[5]."_".$tim[6]."_".$tim[7]."_".$tim[8]."_".$tim[9]."_".$tim[10]."_".$tim[11]."_".$tim[12]."_".$tim[13]."_".$tim[14]."_".$tim[15]."_";
			
			
			if ($sell) {
				$dat.="fn$r=0&ag$r=0&fl$r=0&ox$r=0&oy$r=0";
			}
			if ($gst) {
				if (ereg("fed",$tex) || ereg("エサ",$tex)) {
					$query="INSERT into mesk (ID,id,fid,count,text,date) VALUES ($fid"."f".",$fid,$id,$count,$tex,".date("YmdHis").")";
				} else if ($tex) {
					$query="INSERT into mesk (ID,id,fid,count,text,date) VALUES ($fid,$fid,$id,$count,$tex,".date("YmdHis").")";
				}
				$data=simpledb_query($query, '');
				$query="UPDATE koif SET pond$ld=$s5,pcl=".$cla.",time=".$tia." WHERE ItemName=$fid";
//				echo $query; 
				$data=simpledb_query($query, '');
				$query="SELECT * from koif where id ='$id'";
				$data=simpledb_query($query,'');process($data);
				foreach($list as $key1=>$my) {
					$exm=$my["ex"];
				}
				$exm+=$xp;
				$query="UPDATE koif SET ex=$exm WHERE ItemName=$id";
				$data=simpledb_query($query, '');
			} else {
				if ($nod==1) {
					$query="UPDATE koif SET lv=$lv,ex=$ex,sen=$sen,gp=$gp,pond$ld=$s5,food=$food,pcl=".$cla." WHERE ItemName=$id";
				} else {
					for ($c=1;$c<=16;$c++) {
						if ($c%4==0) $my["cb$c"]-=$sc;
					}
					$query="UPDATE koif SET cb4=".$my["cb4"].",cb8=".$my["cb8"].",cb12=".$my["cb12"].",cb16=".$my["cb16"]." WHERE ItemName=$id";
					$data=simpledb_query($query, '');
					$query="UPDATE koif SET lv=$lv,ex=$ex,sen=$sen,gp=$gp,pond$ld=$s5,food=$food,pcl=".$cla.",date=".date("YmdHis").",time=".$tia." WHERE ItemName=$id";
				}
				$data=simpledb_query($query, '');
			}
		}

		if ($buy || $cb) {
			if ($cb) {
				$buy=(int)($my["cb".$cb]);$got=$buy;
				if ($lv==3) lvup(10,$jp); else lvup($cb*10,$jp);
				$my["cb".(1+$cn*4)]=0;$my["cb".(2+$cn*4)]=0;$my["cb".(3+$cn*4)]=0;$my["cb".(4+$cn*4)]=0;		
			}
			$zz="";$z[$buy]=$z[$buy]+1;
			if ($buy>2 && $z[$buy]==1) {
				$gp=$gp+5;$mes="Quest Completed !!\n\nYou got a new Koi!".$buy.$z[$buy];
			}
			for ($p=1;$p<=16;$p++) {
				$zz.=$z[$p]."_";
			}
			
			if ($cb<1 && $ky[$buy]<0 && $gp<-$ky[$buy]) {
				if ($en) {
					die("err=not enough gold!");
				} else {
					die("err=金貨が足りません!");
				}
			}
			if ($cb<1 && $sen<$ky[$buy]) {
				if ($en) {
					die("err=not enough silver!");
				} else {
					die("err=銀貨が足りません!");
				}
			}

			$query2="UPDATE koif SET lv=$lv,ex=$ex,z=$zz,cb".(1+$cn*4)."=0,cb".(2+$cn*4)."=0,cb".(3+$cn*4)."=0,cb".(4+$cn*4)."=0 WHERE ItemName=$id";
			simpledb_query($query2, '');

			if ($r2>=$pmx[$ld]) {die("err=Tank is full.You need to sell fish or expand tank.");}
			if ($r>=60) {die("err=Objects full.\nAll Objects(include fish) limits 60");}
			if ($cb<1) if ($ky[$buy]>0) $sen-=$ky[$buy]; else $gp+=$ky[$buy];
			if ($buy>=9999) { // food old
				if ($buy==101) $food+=10;
				if ($buy==102) $food+=50;
				$dat.="food=".$food."&gp=".$gp."&sen=".$sen."&";
				$query="UPDATE koif SET food=$food,sen=$sen,gp=$gp WHERE ItemName=$id";
			} else {
				if ($buy>=400 && $buy<=600) {
					$dat="wl=".($buy-400)."&gp=".$gp."&sen=".$sen."&".$dat;
					$wal[$ld]=$buy-400;
					$wl=$wal[1]."_".$wal[2]."_".$wal[3]."_".$wal[4]."_".$wal[5]."_".$wal[6]."_".$wal[7]."_".$wal[8]."_".$wal[9]."_".$wal[10]."_".$wal[11]."_".$wal[12]."_".$wal[13]."_".$wal[14]."_".$wal[15]."_";
				} else if ($buy<=200) {
					$dat.="ag$r=00&fl$r=0&fn$r=$buy&gp=".$gp."&sen=".$sen."&";
					$s2.="f_000000".$buy."_";
				} else {
					$dat.="ag$r=50&fl$r=50&fn$r=".($buy)."&gp=".$gp."&sen=".$sen."&";
					$s2.="005050_".$buy."_";
				}
				$query="UPDATE koif SET pond$ld=$s2,sen=$sen,gp=$gp WHERE ItemName=$id";
				if ($buy>=400 && $buy<=600) {
					$query="UPDATE koif SET wall=$wl,sen=$sen,gp=$gp WHERE ItemName=$id";
				}
			}
			$data=simpledb_query($query, '');
		} else {
			$dat.="gp=".$gp."&sen=".$sen."&";
		}
	} 
	$inv=1;
	if ($ini) {
		$query="select * from mesk where inv='$id'";
		$data=simpledb_query($query,'');process($data);
		foreach($list as $key1=>$my) {
			$dat.="inv$inv=".$my["id"]."&";
		}
	}
	$new=1;
	if ($mn>0) $new=0;
	for ($p=1;$p<=15;$p++) {
		$dat.="pmx$p=".$pmx[$p]."&";
	}
	
	if ($query2) $data=simpledb_query($query2, '');						

	for ($c=1;$c<=16;$c++) {
		echo "cb$c=".$my["cb$c"]."&";
	}
	echo "r2=".($r2)."&fbn=$fbn&z=$z1&got=$got&slot=$slot&fb=$fb&tw=$tw&mn=$mn&new=$new&gst=$gst&name=$name&count=$count&lv=".$lv."&ex=".$ex."&$dat&err=".$mes;
} else {
	if ($gst) {
		die("err=ID not found");
	} else {
/*
		$name=file_get_contents("http://graph.facebook.com/$id");
		$fname=substr($name,strpos($name,"first_name")+13);
		$fname=substr($fname,0,strpos($fname,'"'));
		$name=substr($name,strpos($name,"name")+7);
		$name=substr($name,0,strpos($name,'"'));
*/
		$fp = @fopen("count.php","r+") or die("error");
		flock($fp, LOCK_EX);
		$count = fgets($fp, 64);
		$count++;
		rewind($fp);
		fputs($fp, $count);
		fclose($fp);

		$pmax=1;
		$pn=1;
		$fr="";
		$tia=mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_".mktime()."_";
		$query="INSERT INTO koif (ID,id,name,la,os,lv,ex,gp,sen,food,pmax,pond1,fr,pmx1,wall,pcl,date,time,box,count,os) VALUES ($id,$id,$fname,$la,$os,1,0,0,100,20,$pmax,$pond1,$fr,10,0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_,0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_,".date("YmdHis").",".$tia.",0000000000,".$count.",$os)";
		$data=simpledb_query($query, '');
		process($data);
	}
	echo "new=1&lv=1&ex=0&sen=100&food=20&cl1=10&pmx1=10&box=1&idc=1&count=".$count;
}

?>