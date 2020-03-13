// JavaScript Document
function reset_search(){
		document.getElementById("search").action="http://google.com/search"
		document.getElementById("search_content").name='q'
}
function reset_search_baidu(){
		document.getElementById("search").action="http://baidu.com/s"
		document.getElementById("search_content").name='word'
}

function reset_search_zhihu(){
		document.getElementById("search").action="http://www.zhihu.com/search"
		document.getElementById("search_content").name='q'
}
function reset_search_bili(){
		document.getElementById("search").action="https://search.bilibili.com/all"
		document.getElementById("search_content").name='keyword'
}

function reset_search_scholar(){
		document.getElementById("search").action="https://scholar.google.com/scholar"
		document.getElementById("search_content").name='q'
}

function reset_search_translate(){
		document.getElementById("search").action="https://translate.google.cn"
		document.getElementById("search_content").name='text'
}
function reset_search_weibo(){
		document.getElementById("search").action="https://s.weibo.com/weibo"
		document.getElementById("search_content").name='q'
}
function reset_search_github(){
		document.getElementById("search").action="https://github.com/search"
		document.getElementById("search_content").name='q'
}

function checkemail(){
			var account=document.getElementById('account').value;
			var password=document.getElementById('password').value;
			var account_block=document.getElementById('account_block');
			account_block.innerHTML='';
			
			if(account =="" || password==""){
				alert("不能为空");
				//account_block.innerHTML="不能为空";
				return false;
			}
			if(account.length<3){
				alert("长度不能小于3");
				return false;
			}
			
		}
function computer(){
	var a=document.getElementById('a').value;
	var b=document.getElementById('b').value;
	answer=Number(a)+Number(b)
	document.getElementById("answer").value=answer
}


