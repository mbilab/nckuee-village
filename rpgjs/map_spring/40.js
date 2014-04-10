var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 2, id = 40, ev = 'game.ev['+map+']['+id+']', name = '單晶片系統設計與應用';
game.ev[map][id] = new game.Ev({
	can_take: function() {
		return RPGJS.Variables.data[0] = 1;
		if ( G.player.hp < this.hp_cost() ) RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		else RPGJS.Variables.data[0] = 1;
	},
	hp_cost: function() { return 15; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('本課程主要介紹以單晶片為基礎之儀器系統設計及其應用。內容包含數位信號處理器（DSP），如：德州儀器之TMS320C54x序列等DSP；各種微控制器。現代儀器系統中常見之單晶片。課程以實際應用為主要目的，除了信號處理及資料轉換相關理論之介紹外，並包含單晶片之硬體介紹與軟體設 計，相關工具使用及電路系統設計等。本課包含實驗，期望學生在修完此課程後能對單晶片系統設計有一完整概念。\n學單晶片一定會聽過「8051」。8051是Intel在1980年發表的一顆單晶片處理器，和早期個人電腦的CPU  8086/8088是差不多年代(1978/1979)的東西。8086/8088現在我們可能很少用到了，他後來變成了大家比較熟悉的80286、 386、486、Pentium等等等；但8051從2x年前一直到今天他都還是8051，而且一直被廣泛使用著。Intel的8051家族還有一些兄弟 姊妹，包含8031/8051/8751和8032/8052/8752等等，他們只差別在於ROM的型式、容量，或是功能的擴充，其它基本的功能和內部 指令都是相同的。這些與8051指令集相容的MCU，通稱作MCS-51。\n8051因為發展的早，使用的廣，幾乎可說是單晶片入門的代名詞。學校的單晶片課程大都以8051作為教學內容，市面上的參考書籍、網路上的參考資料，全 都是以8051最多。尤其在台灣，其它單晶片的資料相較之下簡直是少的可憐。另外和程式開發有關的，像整合編輯器(IDE)、編譯器 (Compiler)、軟體模擬器(Simulator)等等的，也都是以8051的數量最多。所以8051在學習和使用上有著極大的優勢。'),
    t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
 	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問剛剛介紹的單晶片是何者？'),
				'CHOICES: ["８０５１","４０７２","９７８１","３３６９"]',
				'CHOICE_0',
					s(ev+'.take("上課有聽課果然是對的")'),
				'CHOICE_1',
					s(ev+'.fail("就跟你說上課要聽不要快轉！")'),
				'CHOICE_2',
					s(ev+'.fail("就跟你說上課要聽不要快轉！")'),
				'CHOICE_3',
					s(ev+'.fail("就跟你說上課要聽不要快轉！")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4