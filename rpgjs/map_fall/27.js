var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 27, ev = 'game.ev['+map+']['+id+']', name = '生物微機電導論';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 7; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('生物是相當奧妙的，你相不相信念力的存在？你相不相信三人成虎？當你狠狠的盯著別人的後腦勺看時，那個人發現的機率有多高？有時是否總覺得有人在盯著你看？是真的嗎？還是你自己的幻覺？本課程將帶你透過科學的方法，研究精神力的各種可能，快來一窺究竟吧！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('你有什麼偉大的精神力？'),
				t('你是一條魚，刀子正向你揮來，眼看你將成為生魚片…你會怎樣求救？'),
				'CHOICES: ["我家有老母和小孩要養！","你放了我，給你100萬！","殺了我，我作鬼會來報仇！"]',
				'CHOICE_0',
					s(ev+'.take("裝可憐博取對方同情心，這是很高明的戰術。你心思敏銳，能感受到別人情緒細微的變化，你也可以從很平常的事物中，提煉出安慰人心、感動對方的話語，人人都想要聽聽你的建議！")'),
				'CHOICE_1',
					s(ev+'.take("這是一種勾起對方慾望的交易戰術。你有樂觀的自信，也有準確的判斷力，可以把想法變為現實，無論在哪個領域，你都將出類拔萃，成為一個讓人羨慕的人！")'),
				'CHOICE_2',
					s(ev+'.take("這是一種迫使對方屈服的戰術。你擁有不畏懼權威的領導力，這種能力可以影響很多人，可以促使一群人為你衝鋒陷陣，你也能讓周邊的人都振奮起來！")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		 t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
