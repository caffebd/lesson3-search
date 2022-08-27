const nameSection = document.getElementById('nameSection')
const nationalitySection = document.getElementById("nationalitySection");
const ageSection = document.getElementById("ageSection");
const birthSection = document.getElementById("birthSection");

const nameBox = document.getElementById("nameBox");
const nationalityBox = document.getElementById("nationalityBox");
const birthBox = document.getElementById("birthBox");
const ageBox = document.getElementById("ageBox");

const searchBox = document.getElementById("searchBox");

const studentDetails = document.getElementById("studentDetails");



const studentCounter = document.getElementById("studentCounter");

let allStudents = [];

if (localStorage.hasOwnProperty("allStudents")) {  
    let loadedStudents = localStorage.getItem("allStudents");
    allStudents = JSON.parse(loadedStudents);
    studentCounter.innerHTML =
        `Students in Database ${allStudents.length}`;
    }


function clearDatabase() {
    localStorage.removeItem("allStudents");
    allStudents.length = 0
    studentCounter.innerHTML =
        `Students in Database ${allStudents.length}`;
    studentDetails.innerHTML = "";
}

function showAllStudents() {
    
    studentDetails.innerHTML = "";

        //start at 0  //stop at the end       //add 1 each time
    for (let i = 0; i < allStudents.length; i++) {
        
            createStudent(i);
    
    }
}


function searchStudentDetails() {

    let searchName = searchBox.value;

    studentDetails.innerHTML = "";


    // ! means NOT same as searchName == ""  --> NOTHING THERE
    
    if (!searchName) return
 
    

    for (let i = 0; i < allStudents.length; i++) {
        
        if (allStudents[i].name.toLowerCase().includes(
            searchName.toLowerCase() )
        ) {
            createStudent(i);
        }
        
        //if (searchName.toLowerCase() == allStudents[i].name.toLowerCase()) {
        
            //if (searchName == allStudents[i].name) {
            //show the details
            //i is the position of the student we want
            
         

            //break if only want to return first match
        

    }



    // not needed for studentCreate

    // let nameContent = "";
    // let nationalityContent = "";
    // let birthContent = "";
    // let ageContent = "";
    
    // nameSection.innerHTML = nameContent;
    // nationalitySection.innerHTML = nationalityContent;
    // birthSection.innerHTML = birthContent;
    // ageSection.innerHTML = ageContent;




}


function validation() {
    let pass = true

    if (!nameBox.value) {
        nameBox.placeholder = "required field"
        pass = false
    } 
    if (!nationalityBox.value) {
      nationalityBox.placeholder = "required field";
      pass = false;
    }
    if (!birthBox.value) {
      birthBox.placeholder = "required field";
      pass = false;
    }
    if (!ageBox.value) {
      ageBox.placeholder = "required field";
      pass = false;
    } 
    return pass //true or false
}

function enterStudentDetails() {
  //object
  let student = {
    name: nameBox.value,
    nationality: nationalityBox.value,
    dateOfBirth: birthBox.value,
    age: ageBox.value,
  };

  //long form
  let result = validation();

  if (result == false) {
    return;
  }

  //short form same as above
  //if ( !validation() ) return

  // || means OR

  // if (!nameBox.value
  //     || !nationalityBox.value
  //     || !birthBox.value
  //     || !ageBox.value) {

  //     alert("Please complete all fields");
  //     return //means stop the function here

  // }

  allStudents.push(student);

  studentCounter.innerHTML = `Students in Database ${allStudents.length}`;

  nameBox.value = "";
  nationalityBox.value = "";
  birthBox.value = "";
  ageBox.value = "";

  nameBox.placeholder = "";
  nationalityBox.placeholder = "";
  birthBox.placeholder = "";
  ageBox.placeholder = "";

  localStorage.setItem("allStudents", JSON.stringify(allStudents));
}

function createStudent(count) {
    let nameContent = ''
    let nationalityContent = ''
    let birthContent = ''
    let ageContent = ''


    nameContent = `Student Name: ${allStudents[count].name}`;
    nationalityContent = `Student Nationality: ${allStudents[count].nationality}`;
    birthContent = `Student Date of Birth ${allStudents[count].dateOfBirth}`;
    ageContent = `Student age: ${allStudents[count].age}`;


    let nameText = studentDetails.appendChild(document.createElement("p"))
    nameText.innerHTML = nameContent

    let nationalityText = studentDetails.appendChild(document.createElement("p"));
    nationalityText.innerHTML = nationalityContent;
    
    let birthText = studentDetails.appendChild(document.createElement("p"));
    birthText.innerHTML = birthContent;
    
    let ageText = studentDetails.appendChild(document.createElement("p"));
    ageText.innerHTML = ageContent; 

    studentDetails.appendChild(document.createElement("hr"))

}

function showStudent(count) {

    let nameContent = ''
    let nationalityContent = ''
    let birthContent = ''
    let ageContent = ''


    nameContent = `Student Name: ${allStudents[count].name}`;
    nationalityContent = `Student Nationality: ${allStudents[count].nationality}`;
    birthContent = `Student Date of Birth ${allStudents[count].dateOfBirth}`;
    ageContent = `Student age: ${allStudents[count].age}`;
    

    nameSection.innerHTML = nameContent;
    nationalitySection.innerHTML = nationalityContent;
    birthSection.innerHTML = birthContent;
    ageSection.innerHTML = ageContent;
}


