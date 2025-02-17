const Course=[
    {id: 1,name:"java",Image:"https://miro.medium.com/v2/resize:fit:800/1*zTXgv6_TGg0mW6et6MCVsQ.jpeg",price:999},
    {id: 2,name:"python",Image:"https://th.bing.com/th/id/R.43fc2e36b500ae92019f1fb78ae869f9?rik=IKOM8Y1%2bxPy3Ww&riu=http%3a%2f%2fblog.hyperiondev.com%2fwp-content%2fuploads%2f2017%2f12%2fpy_machine.jpg&ehk=ovGRN0NyGmeoAnu7R2sngonxo2i0gQFbqy0rZ5NqorU%3d&risl=&pid=ImgRaw&r=0",price:2599},
    {id: 3,name:"AI",Image:"https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601-cl.jpg",price:1500},
    {id: 4,name:"C",Image:"https://repository-images.githubusercontent.com/677277670/ba91111f-9222-4230-a47b-ff85e739d644",price:19999},
    {id: 5,name:"C++",Image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",price:5000},
    {id: 6,name:"GenAI",Image:"https://th.bing.com/th/id/OIP.jGq-u2Unn3DgQIHMqPQjWAHaE8?rs=1&pid=ImgDetMain",price:400},
    {id: 7,name:"Haching",Image:"https://th.bing.com/th/id/OIP.Lds9t0cEdoeV-YXCS6rvvgHaD4?rs=1&pid=ImgDetMain",price:599},
    {id: 8,name:"CSS",Image:"https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-1200-80.jpg",price:8999},
    {id: 9,name:"Javascript",Image:"https://th.bing.com/th/id/OIP.-HHfqZ3bGRsZbIh8uZVu2AHaD4?rs=1&pid=ImgDetMain",price:4999},
    {id: 10,name:"React",Image:"https://wallpapercave.com/wp/wp6953020.jpg",price:4000},
    {id: 11,name:"HTML",Image:"https://th.bing.com/th/id/OIP.QQUTcBAmVvxoiZ0CRJy5rwHaHa?rs=1&pid=ImgDetMain",price:3562},
    {id: 12,name:"DS",Image:"https://i.ytimg.com/vi/Qmt0QwzEmh0/maxresdefault.jpg",price:875},
    {id: 13,name:"DBMS",Image:"https://www.interviewbit.com/blog/wp-content/uploads/2021/08/dbms.jpg",price:20000},
    {id: 14,name:"Devops",Image:"https://th.bing.com/th/id/OIP.CXNBX9fPpyQ6MKr9U-sgJQHaE7?rs=1&pid=ImgDetMain",price:16235},
    {id: 15,name:"Exel skills",Image:"https://th.bing.com/th/id/OIP.henyjcjn1mBiXiutxLFanQHaDt?rs=1&pid=ImgDetMain",price:114520},
    {id: 16,name:"Graphic design",Image:"https://th.bing.com/th/id/R.9a2a98fc5eb653c740ef4ae885ce36e7?rik=NAs0WAxHL50jQQ&riu=http%3a%2f%2fseriousimaging.net%2fwp-content%2fuploads%2f2013%2f10%2fBay-Area-graphic-design-company.jpg&ehk=lw17hlD05BUKkRhlGmSDGHru3VJSJqfUtpVaM2X6U%2bE%3d&risl=&pid=ImgRaw&r=0",price:67888},
]

//Render Courses

function renderCourses(Courses,CourseList){
    const container=document.getElementById(CourseList);
    container.innerHTML="";
    Courses.forEach(Course => {
        const CourseDiv=document.createElement("div");
        CourseDiv.classList.add("Course-item");
        CourseDiv.innerHTML= `
        <img src="${Course.Image}"/>
        <h1>${Course.name}</h1>
        <h2>${Course.price}</h2>
        
        <button onclick = "Signup(${Course.id})">Sign Up</button> `
        
        container.appendChild(CourseDiv);
    })
}

//Search functionality
function searchCourses(query){
    const filterCourses = Course.filter(Course=>
        Course.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderCourses(filterCourses,"CourseList");
}

//Add EventListner to button
document.getElementById("searchButton")?.addEventListener("click",() => {
    const query = document.getElementById("CourseSearch").value;
    searchCourses(query);
})

// Signup functionality
function SignupCourses(query){
    const filterCourses = Course.filter(Course=>
        Course.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderCourses(filterCourses,"CourseList");
}

//Add EventListner to button
document.getElementById("SignupButton")?.addEventListener("click",() => {
    const query = document.getElementById("CourseSignup").value;
    SignupCourses(query);
})


//Sorting
function sortCourses(criteria){
    if(criteria === "price"){
        return Course.sort((a,b) => a.price-b.price);
    }
    return Course;
}

//Adding Events listeners
document.getElementById("sortOptions")?.addEventListener("change",(event)=>{
    const sortedCourses = sortCourses(event.target.value);
    renderCourses(sortedCourses,"CourseList");
})

//Sign Up
 
function Signup(CourseId){
    const Course=Course.find(p => p.id === CourseId);
    let cart=JSON.parse(localStorage.getItem("Signup"))||[];
    cart.push(Course);
    localStorage.setItem("Signup",JSON.stringify(Signup));
    alert(`${Course.name}is added to Courses`)
    renderSignup();
}
//Render Courses in cart

 function renderSignup(){
    const Signup=JSON.parse(localStorage.getItem("Signup"))||[];
    const container = document.getElementById("Signup Course");
    container.innerHTML="";
    if(Signup.length == 0){
        container.innerHTML="<h1>No Course Here</h1>"
    }
    Signup.forEach(Course => {
        const SignupDiv = document.createElement("div");
        SignupDiv.classList.add("Add Course");
        SignupDiv.innerHTML=`
        <img src="${Course.Image}"/>
        <h3>${Course.name}</h3>
        <h2>${Course.price}</h2>
        <button onclick="removeFromSignup(${Course.id})">Remove</button>
        `
        container.appendChild(cartDiv);
    })
 }

 //Remove from Course
 function RemoveFormCourse(CourseId){
    let Signup=JSON.parse(localStorage.getItem("Signup"))||[];
    cart= Signup.filter(Course => Course.id !== CourseId);
    localStorage.setItem("Signup",JSON.stringify(Signup));
    alert("Course is removed successfully");
    renderCart();
 }

 //Calander subtotal
 function renderSubtotal(Signup){
    const subtotal= Signup.reduce((total,time) => total + Course.price,0);
    const subtotalContainer=document.getElementById("subtotal");
    if(Signup.length > 0){
        subtotalContainer.innerHTML =`Subtotal : Rs. ${subtotal}`
    }else{
        subtotalContainer.innerHTML =`No Courses Here`
    }
 }
 

if(document.getElementById("CourseList"))renderCourses(Course,"CourseList");
if(document.getElementById("cartItems"))renderCart();