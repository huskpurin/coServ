exports.run = function(inData, callback)  {
	var  rtnData = {errCode: 0};
	if (inData._loc == 'en') {
		rtnData.value = {
			list: [
			{
				title: 'What is coServ?',
				body1: 'coServ is a light weight web framework implemented in node.js. With less than 2 kloc, it supports the MVC paradigm, a convenient page layout scheme, a very versatile template engine, multi-lingual page generation, a SASS like CSS pre-processor, and more. It is intended to bring a friendly web development environment to node developers.',
				body2: 'coServ does not try to tweak CSS or Javascript. It does not invent a whole new system for you to digest before you can do anything. There are no new syntex to learn, though coServ may ask you to think of web applications in a different way. By thinking differently, web development can be much easier and more interesting.'
			}
			]
		};
	}
	else if (inData._loc == 'zh') {
		rtnData.value = {
			list: [
			{
				title: '什麼是 coServ?',
				body1: 'coServ 是以 node.js 實作的一個非常精簡的 web server。以一千多行的程式碼，coServ 支援了 MVC 架構、網頁版型設計模式、幾乎無所不能的樣板引擎、快速簡易的多國語言生成、類似 SASS 的 CSS 前置處理器等等功能。coServ 的設計目的是為 node.js 的開發者帶來友善的 web 開發環境。',
				body2: 'coServ 並未去更動 CSS 或是 Javascript 的語法，也沒有創造一套全新的技術系統讓開發者必須花許多時間去學習後才能寫出任何程式。使用 coServ，你不必學習新的語法，但你確實會以不同的角度來看待網路應用程式的開發。藉由不同的視野和觀點，網路應用的開發可以容易的多，也有趣的多。'
			}
			]
		};
	}
	callback( rtnData );	
};