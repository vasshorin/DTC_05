let submitButton = document.getElementById("submitBtn")
let Country = document.getElementById("country")
let Nationality = document.getElementById("nationality")

function searchCountry(){
	console.log(Country.value)
    console.log(Nationality.value)
	if(Country.value == 'Australia' && Nationality.value == 'Canada'){
		console.log("asdsa")
		submitButton.setAttribute("href",'./australia-visa.html')
	}
	if(Country.value == 'Canada'){
		submitButton.setAttribute("href",'./canada.html')
	}
	if(Country.value == 'New Zealand'){
		submitButton.setAttribute("href",'./newZealand.html')
	}
	if(Country.value == 'United Kingdom'){
		submitButton.setAttribute("href",'./uk.html')
	}
	if(Country.value == 'United States'){
		submitButton.setAttribute("href",'./usa.html')
	}
}