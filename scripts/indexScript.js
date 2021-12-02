//Verify Login
var link = document.getElementById("btn");
function checkLogin() {
    firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('btn').onclick = function () {
        link.setAttribute('href', './profile.html')
        // document.getElementById('btn').href = "profile.html"
        console.log("logged in")
        // return false;
        }
        // window.location.href = "profile.html";
    } else {
        link.setAttribute('href', './login.html')
        // window.location.href = "login.html";
        console.log("NOT")
    }
    })
}
checkLogin()


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
let submitButtonNew = document.getElementById("submitBtn1")
let CountryNew = document.getElementById("country1")
function countryChange(){
	console.log(CountryNew.value)
	if(CountryNew.value == 'Australia'){
		submitButtonNew.setAttribute("href",'countries/australia.html')
	}
	if(CountryNew.value == 'Canada'){
		submitButtonNew.setAttribute("href",'countries/canada.html')
	}
	if(CountryNew.value == 'France'){
		submitButtonNew.setAttribute("href",'countries/france.html')
	}
	if(CountryNew.value == 'Germany'){
		submitButtonNew.setAttribute("href",'countries/germany.html')
	}
	if(CountryNew.value == 'Japan'){
		submitButtonNew.setAttribute("href",'countries/japan.html')
	}
	if(CountryNew.value == 'New Zealand'){
		submitButtonNew.setAttribute("href",'countries/newZealand.html')
	}
	if(CountryNew.value == 'Singapore'){
		submitButtonNew.setAttribute("href",'countries/singapore.html')
	}
	if(CountryNew.value == 'Thailand'){
		submitButtonNew.setAttribute("href",'countries/thailand.html')
	}
	if(CountryNew.value == 'United Kingdom'){
		submitButtonNew.setAttribute("href",'countries/uk.html')
	}
	if(CountryNew.value == 'United States'){
		submitButtonNew.setAttribute("href",'countries/usa.html')
	}
}


