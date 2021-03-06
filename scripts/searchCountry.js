// Run check against the database to verify user's input and return result
const collectionRef = db.collection('Country')
   
let submitButton = document.getElementById("submitBtn")
let Country = document.getElementById("country")
let Nationality = document.getElementById("nationality")
let div1 = document.getElementById('test')

function searchCountry(){
  console.log(collectionRef.doc(Country.value).get().then((snapshot) => {
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