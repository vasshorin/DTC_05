//choose destination country based on user input
const collectionRef = db.collection('Country')
   
let submitButton = document.getElementById("submitBtn")
let Country = document.getElementById("country")
let Nationality = document.getElementById("nationality")
let div1 = document.getElementById('test')

function searchCountry(){
//   console.log(Country.value)
//   console.log(Nationality.value)
//   console.log(collectionRef)
  console.log(collectionRef.doc(Country.value).get().then((snapshot) => {
    // console.log(snapshot.data())
	const visa = snapshot.data()['Need']
	// const visa = "require visa"
	const noVisa = snapshot.data()['No_need']
	const allowed = snapshot.data()['Allowed']
	const notAllowed = snapshot.data()['Not_allowed']
	const link = snapshot.data()['Link']
	const link_no = snapshot.data()['Link_no']
	const exists = allowed.indexOf(Nationality.value)
	if (exists == -1){
		submitButton.setAttribute("href",link)
		localStorage.setItem('div1', visa)
	} else {
		submitButton.setAttribute("href",link)
		localStorage.setItem('div1', noVisa)
	}
	console.log(exists)
}).catch((value) => {
    console.log(value)
  }))
}



//customs information and regulations
let submitButton = document.getElementById("submitBtn1")
let Country = document.getElementById("country1")
function countryChange(){
	console.log(Country.value)
	if(Country.value == 'Australia'){
		submitButton.setAttribute("href",'countries/australia.html')
	}
	if(Country.value == 'Canada'){
		submitButton.setAttribute("href",'countries/canada.html')
	}
	if(Country.value == 'France'){
		submitButton.setAttribute("href",'countries/france.html')
	}
	if(Country.value == 'Germany'){
		submitButton.setAttribute("href",'countries/germany.html')
	}
	if(Country.value == 'Japan'){
		submitButton.setAttribute("href",'countries/japan.html')
	}
	if(Country.value == 'New Zealand'){
		submitButton.setAttribute("href",'countries/newZealand.html')
	}
	if(Country.value == 'Singapore'){
		submitButton.setAttribute("href",'countries/singapore.html')
	}
	if(Country.value == 'Thailand'){
		submitButton.setAttribute("href",'countries/thailand.html')
	}
	if(Country.value == 'United Kingdom'){
		submitButton.setAttribute("href",'countries/uk.html')
	}
	if(Country.value == 'United States'){
		submitButton.setAttribute("href",'countries/usa.html')
	}
}


