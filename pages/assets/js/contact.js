
const firebaseConfig = {
    databaseURL: "https://global-lifetech-academy-default-rtdb.firebaseio.com"
  }
  firebase.initializeApp(firebaseConfig)
  const database = firebase.database()


// contact
function pythonContact(event) {
    console.log("clicked")
    event.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mobile").value
    let course = document.getElementById("course").value
    let training = document.getElementById("trainingtype").value
    let location = document.getElementById("location").value
  
    console.log(name, email, mobile, course, training, location)
    var listRef = database.ref('GlobalLifeTech_Enquiry/')
    var newRef = listRef.push()
    newRef.set({
      'name': name,
      'email': email,
      'mobile': mobile,
      "course": course,
      "training": training,
      "location": location
    })
    var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course + "<br/><br/> Training Type: " + training + "<br/><br/> Training Location: " + location
  
    console.log(body);
    Email.send({
      SecureToken: "8c5aebbb-a633-4a55-b57d-b8229df4a33e",
      Host: "smtp.elasticemail.com",
      Username: "raghavdev322@gmail.com",
      Password: "0DDAF1431DCCFD9D19E12A72FC2C1B4504B9",
      To: 'globallifetech@gmail.com',
      From: "globallifetech@gmail.com",
      Subject: "Global LifeTech Enquiry",
      Body: body
    })
      .then(() => {
        alert("We will get back to you very Soon...!!")
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("mobile").value = ""
        document.getElementById("course").value = ""
        document.getElementById("trainingtype").value = ""
        document.getElementById("location").value = ""
      }).catch(() => {
        alert("Network Error, So try after some time ")
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("mobile").value = ""
        document.getElementById("course").value = ""
        document.getElementById("trainingtype").value = ""
        document.getElementById("location").value = ""
      })
  }
  