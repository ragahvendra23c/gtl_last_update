

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
//  setTimeout(function(){
//    loginPopup.classList.add("show");
//  },5000)

})

function showPopup(){
      const timeLimit = 3 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})



$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});


// toggle
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// Backend - Index Page
// query form
const firebaseConfig = {
    databaseURL: "https://global-lifetech-academy-default-rtdb.firebaseio.com"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

function IndexRequestQuery(event){
    console.log("clicked")
    event.preventDefault()
    let name = document.getElementById("index_name").value
    let email = document.getElementById("index_email").value
    let mobile = document.getElementById("index_mobile").value
    let course = document.getElementById("index_course").value
    console.log(name,email,mobile,course)
    
    var listRef = database.ref('Enquiry_Request/')
var newRef = listRef.push()
newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Contact Number: " + mobile + "<br/><br/> Course: " + course;

            console.log(body);
            Email.send({
                SecureToken:"8c5aebbb-a633-4a55-b57d-b8229df4a33e",
                Host: "smtp.elasticemail.com",
                Username: "raghavdev322@gmail.com",
                Password: "0DDAF1431DCCFD9D19E12A72FC2C1B4504B9",
                To: 'globallifetech@gmail.com',
                From: "globallifetech@gmail.com",
                Subject: "Global LifeTech Enquiry",
                Body: body
            })
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name").value=""
   document.getElementById("index_email").value=""
   document.getElementById("index_mobile").value=""
    document.getElementById("index_course").value=""
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name").value=""
    document.getElementById("index_email").value=""
    document.getElementById("index_mobile").value=""
     document.getElementById("index_course").value=""
})
}



// Contacy Form
function IndexContactQuery(event){
    console.log("clicked")
    event.preventDefault()
    let name = document.getElementById("index_name1").value
    let email = document.getElementById("index_email1").value
    let mobile = document.getElementById("index_mobile1").value
    let course = document.getElementById("index_course1").value
    let training=document.getElementById("index_training1").value
    let location=document.getElementById("index_location1").value
    console.log(name,email,mobile,course,training,location)
    var listRef = database.ref('Enquiry_Request/')
var newRef = listRef.push()
newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course,
    "training_type":training,
    "location":location
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Contact Number: " + mobile + "<br/><br/> Course: " + course +"<br/><br/> Training Type: "+training +"<br/><br/> Location :"+location

            console.log(body);
            Email.send({
                SecureToken:"8c5aebbb-a633-4a55-b57d-b8229df4a33e",
                Host: "smtp.elasticemail.com",
                Username: "raghavdev322@gmail.com",
                Password: "0DDAF1431DCCFD9D19E12A72FC2C1B4504B9",
                To: 'globallifetech@gmail.com',
                From: "globallifetech@gmail.com",
                Subject: "Global LifeTech Enquiry",
                Body: body
            })
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name1").value=""
   document.getElementById("index_email1").value=""
   document.getElementById("index_mobile1").value=""
    document.getElementById("index_course1").value=""
    document.getElementById("index_training1").value=""
    document.getElementById("index_location1").value=""
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name1").value=""
    document.getElementById("index_email1").value=""
    document.getElementById("index_mobile1").value=""
     document.getElementById("index_course1").value=""
   document.getElementById("index_training1").value=""
     document.getElementById("index_location1").value=""
})
}



// Popu Form

function IndexPopupQuery(event){
    console.log("clicked")
    event.preventDefault()
    let name = document.getElementById("index_name3").value
    let email = document.getElementById("index_email3").value
    let mobile = document.getElementById("index_mobile3").value
    let course = document.getElementById("index_course3").value
    let training=document.getElementById("index_training3").value
    let location=document.getElementById("index_location3").value

    console.log(name,email,mobile,course,training,location)
    var listRef = database.ref('Enquiry_Request/')
var newRef = listRef.push()
newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course,
    "training":training,
    "location":location
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course+ "<br/><br/> Training Type: "+ training + "<br/><br/> Training Location: "+ location 

            console.log(body);
            Email.send({
                SecureToken:"8c5aebbb-a633-4a55-b57d-b8229df4a33e",
                Host: "smtp.elasticemail.com",
                Username: "raghavdev322@gmail.com",
                Password: "0DDAF1431DCCFD9D19E12A72FC2C1B4504B9",
                To: 'globallifetech@gmail.com',
                From: "globallifetech@gmail.com",
                Subject: "Global LifeTech Enquiry",
                Body: body
            })
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name3").value=""
   document.getElementById("index_email3").value=""
   document.getElementById("index_mobile3").value=""
    document.getElementById("index_course3").value=""
    document.getElementById("index_training3").value=""
    document.getElementById("index_location3").value=""
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name3").value=""
    document.getElementById("index_email3").value=""
    document.getElementById("index_mobile3").value=""
     document.getElementById("index_course3").value=""
     document.getElementById("index_training3").value=""
     document.getElementById("index_location3").value=""
})
}



// impressed
// Contacy Form
function IndexImpressesQuery(event){
    console.log("clicked")
    event.preventDefault()
    let name = document.getElementById("index_name2").value
    let email = document.getElementById("index_email2").value
    let mobile = document.getElementById("index_mobile2").value
    let course = document.getElementById("index_course2").value
    console.log(name,email,mobile,course)
    var listRef = database.ref('Enquiry_Request/')
var newRef = listRef.push()
newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course;

            console.log(body);
            Email.send({
                SecureToken:"8c5aebbb-a633-4a55-b57d-b8229df4a33e",
                Host: "smtp.elasticemail.com",
                Username: "raghavdev322@gmail.com",
                Password: "0DDAF1431DCCFD9D19E12A72FC2C1B4504B9",
                To: 'globallifetech@gmail.com',
                From: "globallifetech@gmail.com",
                Subject: "Global LifeTech Enquiry",
                Body: body
            })
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name2").value=""
   document.getElementById("index_email2").value=""
   document.getElementById("index_mobile2").value=""
    document.getElementById("index_course2").value=""
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name2").value=""
    document.getElementById("index_email2").value=""
    document.getElementById("index_mobile2").value=""
     document.getElementById("index_course2").value=""
})
}
