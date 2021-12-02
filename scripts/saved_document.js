// RETURN BACK BUTTON
function return_back() {
    window.history.back();
}

// PASSPORT SHOW, UPDATE, READ -->
function AddUploadListenerPassport() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const fileInput = document.getElementById("passportInput");
            const image = document.getElementById("passportPic");
            fileInput.addEventListener('change', function (e) {
                var blob = URL.createObjectURL(e.target.files[0]);
                var targetfile = (e.target.files[0]);
                image.src = blob;
                addImagePassport(user.uid, targetfile);

            });
        }
    });
}
AddUploadListenerPassport("user");

//Add image
function addImagePassport(userid, pickedfile) {
    var storageRef = storage.ref("passports/" + userid + ".jpg");
    var metadata = {
        contentType: 'image/jpeg',
    };
    storageRef.put(pickedfile, metadata)
        .then(function () {
            storageRef.getDownloadURL()
                .then(function (url) {
                    // console.log(url); 
                    db.collection("users").doc(userid).update({
                        "passport": url
                    })
                })
        });
}

// Show picture
function ShowNewPassport() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").where("name", "==", user.displayName)
                .get()
                .then(function (snap) {
                    snap.forEach(function (doc) {
                        var passportPic = doc.data().passport;
                        // console.log('Showing new passport', passportPic)
                        $("#passportPic").attr("src", passportPic);
                    })
                })
        }
    });
}
ShowNewPassport();

// Change passport open link
let submitButton = document.getElementById("submitBtnPassport")
const collectionRef = db.collection('users')

function showImage() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // console.log(user)
            db.collection('users').doc(user.uid).get().then(function (doc) {
                var passportUrl = doc.data().passport
                // console.log(passportUrl);
                submitButton.setAttribute("href", passportUrl)
            })
        }
    })
}
showImage()

// VACCINE READ, GET, POST
function AddUploadListenerVaccine() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // console.log(user.uid)
            const fileInput = document.getElementById("vaccineInput");
            const image = document.getElementById("vaccinePic");
            fileInput.addEventListener('change', function (e) {
                var blob = URL.createObjectURL(e.target.files[0]);
                var targetfile = (e.target.files[0]);
                image.src = blob;
                addImageVaccine(user.uid, targetfile);
            });
        }
    });
}
AddUploadListenerVaccine("user");

// Add new picture
function addImageVaccine(userid, pickedfile) {
    var storageRef = storage.ref("vaccine/" + userid + ".jpg");
    var metadata = {
        contentType: 'image/jpeg',
    };
    storageRef.put(pickedfile, metadata)
        .then(function () {
            storageRef.getDownloadURL()
                .then(function (url) {
                    // console.log(url); 
                    db.collection("users").doc(userid).update({
                        "vaccine": url
                    })
                })
        });
}

//Show new picture
function ShowNewVaccine() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").where("name", "==", user.displayName)
                .get()
                .then(function (snap) {
                    snap.forEach(function (doc) {
                        var vaccinePic = doc.data().vaccine;
                        // console.log('Showing new img', vaccinePic)
                        $("#vaccinePic").attr("src", vaccinePic);
                    })
                })
        }
    });
}
ShowNewVaccine();

// Update vaccine open file link
let submitButtonVaccine = document.getElementById("submitBtnVaccine")
const collectionRefnew = db.collection('users')

function showImageVaccine() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // console.log(user)
            db.collection('users').doc(user.uid).get().then(function (doc) {
                var vaccineUrl = doc.data().vaccine
                submitButtonVaccine.setAttribute("href", vaccineUrl)
            })
        }
    })
}
showImageVaccine()


// OTHER DOCUMENTS  READ, GET, POST-->
function AddUploadListenerDoc() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // console.log(user.uid)
            const fileInput = document.getElementById("docInput");
            const image = document.getElementById("docPic");
            fileInput.addEventListener('change', function (e) {
                var blob = URL.createObjectURL(e.target.files[0]);
                var targetfile = (e.target.files[0]);
                image.src = blob;
                addImageDoc(user.uid, targetfile);
            });
        }
    });
}
AddUploadListenerDoc("user");

function addImageDoc(userid, pickedfile) {
    var storageRef = storage.ref("docs/" + userid + ".jpg");
    var metadata = {
        contentType: 'image/jpeg',
    };
    storageRef.put(pickedfile, metadata)
        .then(function () {
            storageRef.getDownloadURL()
                .then(function (url) {
                    console.log(url);
                    db.collection("users").doc(userid).update({
                        "docs": url
                    })
                })
        });
}

function ShowNewDoc() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").where("name", "==", user.displayName)
                .get()
                .then(function (snap) {
                    snap.forEach(function (doc) {
                        var docPic = doc.data().docs;
                        $("#docPic").attr("src", docPic);
                    })
                })
        }
    });
}
ShowNewDoc();

// Update open picture link
let submitButtonDocs = document.getElementById("submitBtnDocs")
const collectionRefnewDoc = db.collection('users')

function showImageDoc() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // console.log(user)
            db.collection('users').doc(user.uid).get().then(function (doc) {
                var docUrl = doc.data().docs
                submitButtonDocs.setAttribute("href", docUrl) //update url
            })
        }
    })
}
showImageDoc()


// Display saved countries as a custom name
function displayCountries() {
    let cardTemplate = document.getElementById("countryCardTemplate")
    let cardGroup = document.getElementById("countriesGroup");
    firebase.auth().onAuthStateChanged(user => {
        if (user) {

            while (cardGroup.firstChild) {
                cardGroup.removeChild(cardGroup.firstChild)
            }

            db.collection("users").doc(user.uid).collection("saved_countries").orderBy("name").get()
                .then(allCountries => {
                    allCountries.forEach(doc => {
                        var customName = doc.data().name; // gets the name field
                        var link = doc.data().link; // gets the link here


                        let testCard = cardTemplate.content.cloneNode(true);
                        testCard.querySelector('.card-title').innerHTML = customName;
                        testCard.querySelector('a').onclick = () => goTo(link);
                        cardGroup.appendChild(testCard);
                    })
                })
        }
    })

}

// Connects the saved countries with the links
function goTo(link) {
    console.log("redirect");
    window.location.assign(link)
}