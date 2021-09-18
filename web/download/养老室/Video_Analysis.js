function videoW(id) {
	switch (id) {
		case "1":
			vSrc = "/file/Video/蔡徐坤.mp4";
			break;
		case "2":
			vSrc = "/file/Video/1.mp4";
			break;
		case "3":
			vSrc = "/file/Video/2.mp4";
			break;
		case "4":
			vSrc = "/file/Video/3.mp4";
			break;
		case "film01":
			vSrc = "/file/Video/film/1 阿拉丁.mp4";
			break;
		case "film02": 
			vSrc = "/file/Video/film/2 误杀.mp4";
			break;
		case "film03":
			vSrc = "/file/Video/film/3 决战中途岛.mp4";
			break;
		case "film04":
			vSrc = "/file/Video/film/4 00003.mp4";
			break;
		case "film04_60f":
			vSrc = "/file/Video/film/4 60P.mp4";
			break;
		case "film05":
			vSrc = "/file/Video/film/5 沉睡魔咒2.mp4";
			break;
		case "film06":
			vSrc = "/file/Video/film/6 大侦探皮卡丘.mp4";
			break;
		case "film07":
			vSrc = "/file/Video/film/7 飞驰人生.mp4";
			break;
		case "film08":
			vSrc = "/file/Video/film/8_憨豆特工3/Johnny.English.Strikes.Again.2018.1080p.BluRay.H264.10Bit.AAC-MRSK.mp4";
			vTracknum = 1;
			vTracksum.tsrc[0] = "/file/Video/film/8_憨豆特工3/Subs/憨豆特工3_简体中文_字幕_修正版.vtt";
			vTracksum.tlabel[0] = "简体中文";
			vTracksum.tsrclang[0] = "zh_cn";
			break;
		case "film09":
			vSrc = "/file/Video/film/9 寄生虫.mp4";
			break;
		case "film10":
			vSrc = "/file/Video/film/10 囧妈.mp4";
			break;
		case "film11":
			vSrc = "/file/Video/film/11 少年的你/11 少年的你.mp4";
			vTracknum = 1;
			vTracksum.tsrc[0] = "/file/Video/film/11 少年的你/2_English.vtt";
			vTracksum.tlabel[0] = "English";
			vTracksum.tsrclang[0] = "en";
			break;
		case "film12":
			vSrc = "/file/Video/film/12 无敌破坏王2.mp4";
			break;
		case "film13":
			vSrc = "/file/Video/film/13 驯龙高手3.mp4";
			break;
		case "film14":
			vSrc = "/file/Video/film/14 勇敢者的游戏2.mp4";
			break;
		case "film15":
			vSrc = "/file/Video/film/15 追龙2.mp4";
			break;
		case "film16":
			vSrc = "/file/Video/film/16 红海行动.mp4";
			break;
		case "film17":
			vSrc = "/file/Video/film/17 Inception/17 Inception.mp4";
			vTracknum = 2;
			vTracksum.tsrc[0] = "/file/Video/film/17 Inception/Chinese Simplified.vtt";
			vTracksum.tlabel[0] = "简体中文";
			vTracksum.tsrclang[0] = "zh_cn";

			vTracksum.tsrc[1] = "/file/Video/film/17 Inception/English.vtt";
			vTracksum.tlabel[1] = "English";
			vTracksum.tsrclang[1] = "en";
			break;
		case "film18":
			vSrc = "/file/Video/film/18 我不是药神/Dying.To.Survive.2018.CHINESE.1080p.BluRay.H264.AAC-VXT.mp4";
			vTracknum = 1;
			vTracksum.tsrc[0] = "/file/Video/film/18 我不是药神/2_English.vtt";
			vTracksum.tlabel[0] = "English";
			vTracksum.tsrclang[0] = "en";
			break;
		case "film19":
			vSrc = "/file/Video/film/19 花木兰_2020/Mulan.2020.1080p.WEBRip.DDP5.1.X264-EVO[EtHD].mp4";
			vTracknum = 3;
			vTracksum.tsrc[0] = "/file/Video/film/19 花木兰_2020/zh_cn.vtt";
			vTracksum.tlabel[0] = "简体中文";
			vTracksum.tsrclang[0] = "zh_cn";

			vTracksum.tsrc[1] = "/file/Video/film/19 花木兰_2020/English.vtt";
			vTracksum.tlabel[1] = "English";
			vTracksum.tsrclang[1] = "en";

			vTracksum.tsrc[2] = "/file/Video/film/19 花木兰_2020/zh_cn&English.vtt";
			vTracksum.tlabel[2] = "简体中文 & English";
			vTracksum.tsrclang[2] = "zh_cn";
			break;
		case "film20":
			vSrc = "/file/Video/film/20 卧虎藏龙/Crouching.Tiger.Hidden.Dragon.2000.REMASTERED.CHINESE.1080p.BluRay.H264.AAC-VXT.mp4";
			break;
		case "film21":
			vSrc = "/file/Video/film/21_夺冠/Leap.2020.CHINESE.1080p.WEBRip.x264-VXT.mp4";
			vTracknum = 1;

			vTracksum.tsrc[0] = "/file/Video/film/21_夺冠/Subs/2_English.vtt";
			vTracksum.tlabel[0] = "English";
			vTracksum.tsrclang[0] = "en";
			break;
		case "film22":
			vSrc = "/file/Video/film/22_八佰/八佰.HD.1080p.国语中英双字.mp4";
			break;
		case "film23":
			vSrc = "/file/Video/film/23_我和我的祖国/My.People.My.Country.2019.WEB-DL.4k.H265.DD5.1.AAC-HDSWEB.mp4";
			break;
		case "film24":
			vSrc = "/file/Video/film/24_姜子牙/姜子牙.HD.1080p.国语中字.mp4";
			break;
		case "film25":
			vSrc = "/file/Video/film/25_信条/Tenet.2020.1080p.HDRip.x264.AAC2.0-SHITBOX.mp4";
			vTracknum = 1;

			vTracksum.tsrc[0] = "/file/Video/film/25_信条/Subs/[zmk.pw]Tenet.2020.1080p.HDRip.X264-EVO.vtt";
			vTracksum.tlabel[0] = "简体中文 & English";
			vTracksum.tsrclang[0] = "zh_cn";
			break;
		case "film26":
			vSrc = "/file/Video/film/26_魔法黑森林/Into.the.Woods.2014.1080p.BluRay.H264.AAC-RARBG.mp4"
			vTracknum = 3;

			vTracksum.tsrc[0] = "/file/Video/film/26_魔法黑森林/Subs/Into.the.Woods.2014.1080p.BluRay.x264-SPARKS.简体.vtt";
			vTracksum.tlabel[0] = "简体中文";
			vTracksum.tsrclang[0] = "zh_cn";

			vTracksum.tsrc[1] = "/file/Video/film/26_魔法黑森林/Subs/Into.the.Woods.2014.1080p.BluRay.x264-SPARKS.英文.vtt";
			vTracksum.tlabel[1] = "英文";
			vTracksum.tsrclang[1] = "en";

			vTracksum.tsrc[2] = "/file/Video/film/26_魔法黑森林/Subs/Into.the.Woods.2014.1080p.BluRay.x264-SPARKS.简体&英文.vtt";
			vTracksum.tlabel[2] = "简体 & 英文";
			vTracksum.tsrclang[2] = "zh_cn";
			break;
		case "film27":
			vSrc = "/file/Video/film/27_哥斯拉 vs 金刚(2020)/Godzilla.vs.Kong.2021.1080p.HMAX.WEB-DL.DDP5.1.x264-MRCS.mp4"
			vTracknum = 1;

			vTracksum.tsrc[0] = "/file/Video/film/27_哥斯拉 vs 金刚(2020)/Subs/zh_cn(机翻).vtt";
			vTracksum.tlabel[0] = "简体中文(机翻)";
			vTracksum.tsrclang[0] = "zh_cn";
			break;
		case "banana":
			//vSrc = "/10198539.mp4";
			alert("你在想Peach");
			break;
	}
}
/*
	<li class="l1"><div class="lbox" onclick='Play("1");'><a class="a1">鸡你太美</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("2");'><a class="a1">音频可视化-</a><a class="a1" style="color:#0d6cad">Blue</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("3");'><a class="a1">音频可视化-</a><a class="a1" style="color:#ff0000"> Red</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("4");'><a class="a1">音频可视化-</a><a class="a1" style="color:#69da28">Rreen</a></div></li>
 
    <li class="l1"><div class="lbox" onclick='Play("film01");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">阿拉丁</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film02");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">误杀</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film03");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">决战中途岛</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film04");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">流浪地球 原碟</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film04_60f");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">流浪地球 原碟 60fps</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film05");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">沉睡魔咒2</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film06");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">大侦探皮卡丘</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film07");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">飞驰人生</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film08");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">憨豆特工3</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film09");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">寄生虫</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film10");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">囧妈</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film11");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">少年的你</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film12");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">无敌破坏王</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film13");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">驯龙高手3</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film14");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">勇敢者的游戏2</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film15");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">追龙2</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film16");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">红海行动</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film17");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">盗梦空间</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film18");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">我不是药神</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film19");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">花木兰 2020</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film20");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">卧虎藏龙</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film21");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">夺冠</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film22");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">八佰</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film23");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">我和我的祖国</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film24");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">姜子牙</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film25");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">信条</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film26");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">魔法黑森林</a></div></li>
	<li class="l1"><div class="lbox" onclick='Play("film27");'><a class="a1">[电影]</a><a class="a1" style="font-weight:600;">哥斯拉 vs 金刚(2020)</a></div></li>
 */
