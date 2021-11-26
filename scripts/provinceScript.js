// alberta, manitoba, nunavut, ontario, princeEdward, quebec, saskatchewan, 
// yukon, brunswick, 
$('#checkBtn').click(function(){
	scrollTo("#collapseExampleBox")
})
$('#isolationBtn').click(function(){
	scrollTo("#collapse1Box")
})

$('#maskBtn').click(function(){
	scrollTo("#collapse2Box")
})
// bc
$('#bcCheckBtn').click(function(){
	scrollTo("#bcCollapseExampleBox")
})
$('#bcIsolationBtn').click(function(){
	scrollTo("#bcCollapse1Box")
})
$('#bcMaskBtn').click(function(){
	scrollTo("#bcCollapse2Box")
})

//northwest
$('#northCheckBtn').click(function(){
	scrollTo("#northCollapseExampleBox")
})
$('#northIsolationBtn').click(function(){
	scrollTo("#northCollapse1Box")
})
$('#northTestBtn').click(function(){
	scrollTo("#northCollapse2Box")
})
$('#northMaskBtn').click(function(){
	scrollTo("#northCollapse3Box")
})

// newfoundland
$('#newCheckBtn').click(function(){
	scrollTo("#newCollapseExampleBox")
})
$('#newIsolationBtn').click(function(){
	scrollTo("#newCollapse2Box")
})
$('#newFormBtn').click(function(){
	scrollTo("#newCollapse2Box")
})
$('#newMaskBtn').click(function(){
	scrollTo("#newCollapse3Box")
})

// novaScotia
$('#novaCheckBtn').click(function(){
	scrollTo("#novaCollapseExampleBox")
})
$('#novaIsolationBtn').click(function(){
	scrollTo("#novaCollapse1Box")
})
$('#novaFormBtn').click(function(){
	scrollTo("#novaCollapse2Box")
})
$('#novaMaskBtn').click(function(){
	scrollTo("#novaCollapse3Box")
})
function scrollTo(ele,speed){
	if(!speed) speed = 300;
	if(!ele){
		$("html,body").animate({
			scrollTop:0,
		},speed)
	}else{
		if(ele.length>0){
			$("html,body").animate({
				scrollTop:$(ele).offset().top,
			},speed)
		}
	}
}

//top button
var mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}