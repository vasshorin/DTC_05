let submitButton = document.getElementById("submitBtn")
let Country = document.getElementById("country")
let Province = document.getElementById("province")
function countryChange(){
	console.log(Country.value)
	if(Country.value == 'Australia'){
		submitButton.setAttribute("href",'./australia.html')
	}
	if(Country.value == 'Canada'){
		submitButton.setAttribute("href",'./canada.html')
	}
	if(Country.value == 'France'){
		submitButton.setAttribute("href",'./france.html')
	}
	if(Country.value == 'Germany'){
		submitButton.setAttribute("href",'./germany.html')
	}
	if(Country.value == 'Japan'){
		submitButton.setAttribute("href",'./japan.html')
	}
	if(Country.value == 'New Zealand'){
		submitButton.setAttribute("href",'./newZealand.html')
	}
	if(Country.value == 'Singapore'){
		submitButton.setAttribute("href",'./singapore.html')
	}
	if(Country.value == 'Thailand'){
		submitButton.setAttribute("href",'./thailand.html')
	}
	if(Country.value == 'United Kingdom'){
		submitButton.setAttribute("href",'./uk.html')
	}
	if(Country.value == 'United States'){
		submitButton.setAttribute("href",'./usa.html')
	}

// Provinces
	if(Country.value == 'Canada' && Province.value == "Alberta"){
		submitButton.setAttribute("href",'./canada-alberta.html')
	}
	if(Country.value == 'Canada' && Province.value == "British Columbia"){
		submitButton.setAttribute("href",'./canada-bc.html')
	}
	if(Country.value == 'Canada' && Province.value == "Manitoba"){
		submitButton.setAttribute("href",'./canada-manitoba.html')
	}
	if(Country.value == 'Canada' && Province.value == "New Brunswick"){
		submitButton.setAttribute("href",'./canada-brunswick.html')
	}
	if(Country.value == 'Canada' && Province.value == "Newfoundland and Labrador"){
		submitButton.setAttribute("href",'./canada-newfoundland.html')
	}
	if(Country.value == 'Canada' && Province.value == "Northwest Territories"){
		submitButton.setAttribute("href",'./canada-northwest.html')
	}
	if(Country.value == 'Canada' && Province.value == "Nova Scotia"){
		submitButton.setAttribute("href",'./canada-novaScotia.html')
	}
	if(Country.value == 'Canada' && Province.value == "Nunavut"){
		submitButton.setAttribute("href",'./canada-nunavut.html')
	}
	if(Country.value == 'Canada' && Province.value == "Ontario"){
		submitButton.setAttribute("href",'./canada-ontario.html')
	}
	if(Country.value == 'Canada' && Province.value == "Prince Edward Island"){
		submitButton.setAttribute("href",'./canada-princeEdward.html')
	}	
	if(Country.value == 'Canada' && Province.value == "Quebec"){
		submitButton.setAttribute("href",'./canada-quebec.html')
	}
	if(Country.value == 'Canada' && Province.value == "Saskatchewan"){
		submitButton.setAttribute("href",'./canada-saskatchewan.html')
	}
	if(Country.value == 'Canada' && Province.value == "Yukon"){
		submitButton.setAttribute("href",'./canada-yukon.html')
	}

}

//countries
$('#selectBtn').click(function(){
	scrollTo("#submitBtn")
})

// canada
$('#checkBtn').click(function(){
	scrollTo("#collapseExampleBox")
})
$('#getBtn').click(function(){
	scrollTo("#collapse1Box")
})
$('#quarantineBtn').click(function(){
	scrollTo("#collapse2Box")
})
$('#uploadBtn').click(function(){
	scrollTo("#collapse3Box")
})
// australia
$('#auCheckBtn').click(function(){
	scrollTo("#auCollapseBox1")
})
$('#auGetBtn').click(function(){
	scrollTo("#auCollapseBox2")
})
$('#auQuarantineBtn').click(function(){
	scrollTo("#auCollapseBox3")
})
$('#auPresentBtn').click(function(){
	scrollTo("#auCollapseBox4")
})
$('#itemsBtn').click(function(){
	scrollTo("#custom-section")
})

//newZealand
$('#newCheckBtn').click(function(){
	scrollTo("#newCollapseBox1")
})
$('#newGetBtn').click(function(){
	scrollTo("#newCollapseBox2")
})
$('#newManagedBtn').click(function(){
	scrollTo("#newCollapseBox3")
})
$('#newShowBtn').click(function(){
	scrollTo("#newCollapseBox4")
})

// uk
$('#ukCheckBtn').click(function(){
	scrollTo("#ukCollapseBox1")
})
$('#ukGetBtn').click(function(){
	scrollTo("#ukCollapseBox2")
})
$('#ukQuarantineBtn').click(function(){
	scrollTo("#ukCollapseBox3")
})
$('#ukShowBtn').click(function(){
	scrollTo("#ukCollapseBox4")
})

// usa
$('#usaCheckBtn').click(function(){
	scrollTo("#usaCollapseBox1")
})
$('#usaGetBtn').click(function(){
	scrollTo("#usaCollapseBox2")
})
$('#usaShowBtn').click(function(){
	scrollTo("#usaCollapseBox3")
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