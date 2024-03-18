const cl=console.log;

const stdForm= document.getElementById("stdForm");

const noStdInfo= document.getElementById("noStdInfo");
const stdTable= document.getElementById("stdTable");

const stdContainer = document.getElementById("stdContainer");

const fnameControl= document.getElementById("fname");
const lnameControl= document.getElementById("lname");
const emailControl= document.getElementById("email");
const constactControl= document.getElementById("contact");



const addStdBtn = document.getElementById("addStdBtn");


let stdsArr =[];



const handlesdtCountState =()=>{
	if(stdsArr.length>0){
		stdTable.classList.remove("d-none");
		noStdInfo.classList.add("d-none");
		
	}
	else{
			stdTable.classList.add("d-none");
		noStdInfo.classList.remove("d-none");
	}
}


handlesdtCountState();



const templatingTable = (arr) =>{
	result='';
	arr.forEach((std,i)=>{
		result+=`<tr>
					<td>${i+1}</td>
					<td>${std.fname}</td>
					<td>${std.lname}</td>
					<td>${std.email}</td>
					<td>${std.contact}</td>
				</tr>`
	})
	
	stdContainer.innerHTML=result;
}



const onStdAddHandler = e => {
	e.preventDefault();
	//cl(`hello`)
	let stdObj = {
		fname: fnameControl.value,
		lname: lnameControl.value,
		email: emailControl.value,
		contact: constactControl.value,
	}
	stdsArr.push(stdObj);
	handlesdtCountState();
	
	
	templatingTable(stdsArr);
	
	
	Swal.fire({
  title: `${stdObj.fname} ${stdObj.lname} added as a student successfully !!!`,
  //text: "Modal with a custom image.",
  imageUrl: "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/34-512.png",
  imageWidth: 250,
  imageHeight: 200,
  imageAlt: "Custom image"
});
	
	
	e.target.reset();
}



stdForm.addEventListener("submit", onStdAddHandler);