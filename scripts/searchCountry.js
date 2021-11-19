const collectionRef = db.collection('Country')
   
let submitButton = document.getElementById("submitBtn")
let Country = document.getElementById("country")
let Nationality = document.getElementById("nationality")
let div1 = document.getElementById('test')

function searchCountry(){
  console.log(Country.value)
  console.log(Nationality.value)
  console.log(collectionRef)
  console.log(collectionRef.doc(Country.value).get().then((snapshot) => {
    console.log(snapshot.data())
	const allowed = snapshot.data()['Allowed']
	const notAllowed = snapshot.data()['Not_allowed']
	const link = snapshot.data()['Link']
	const link_no = snapshot.data()['Link_no']
	const exists = allowed.indexOf(Nationality.value)
	if (exists == -1){
		submitButton.setAttribute("href",link)
		// div1.textContent = "ASDJNAFJIASDBFISDBFIASDBFABSD"
	} else {
		submitButton.setAttribute("href",link_no)
	}
	console.log(exists)
}).catch((value) => {
    console.log(value)
  }))
}