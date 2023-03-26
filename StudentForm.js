var studentNameError = document.getElementById('student-name-error');

function Namevalidate() {  
    var studentName = document.getElementById('student-name').value.trim();

    if (!studentName) {
        studentNameError.innerHTML = 'Please Enter your Name';
        return false
    }
    if (!studentName.match(/^[A-Z a-z]*$/)) {
        studentNameError.innerHTML = "Please enter valid Name"
        return false
    }
    studentNameError.innerHTML = "<p class='sucessmsg'>Valid</p>"
    return true;

}


var studentEmailError = document.getElementById('student-email-error');

function Emailvalidate(){
    var studentEmail = document.getElementById('student-email').value.trim();

    var validEmali = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!studentEmail){
        studentEmailError.innerHTML ='Please Enter your Emali';
        return false
    }
    else if(!studentEmail.match(validEmali)){
        studentEmailError.innerHTML = 'Please enter valid Emali'
        return false
    }
    studentEmailError.innerHTML = "<p class='sucessmsg'>Valid</p>"
    return true;
}


var studentWebsiteError = document.getElementById('student-website-error');

function Websitevalidate(){

    var studentWebsite = document.getElementById('student-website').value.trim();
    var validWebsitLink = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (!studentWebsite){
        studentWebsiteError.innerHTML ='Please Enter your Website Link';
        return false
    }
    if (!studentWebsite.match(validWebsitLink)){
        studentWebsiteError.innerHTML = "please enter Valid url"
        return false
    }
    studentWebsiteError.innerHTML = "<p class='sucessmsg'>Valid</p>"
    return true;
}


var studentImageError = document.getElementById('student-image-error');

function Imagevalidate(){

    var studentImageLink = document.getElementById('student-image-link').value.trim();
    var validImageLink = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (!studentImageLink){
        studentImageError.innerHTML ='Please Enter your Image Link';
        return false
    }
    if (!studentImageLink.match(validImageLink)){
        studentImageError.innerHTML = "please enter Valid Image Link"
        return false
    }
    studentImageError.innerHTML = "<p class='sucessmsg'>Valid</p>" 
    return true;
}

var studentGenderError = document.getElementById('student-gender-error');

function gendervalidation(){

    let genders = document.getElementsByName("student-gender");
    let genderSelected;
    genders.forEach((gender) => {
        if (gender.checked === true) genderSelected = gender;
    });

    if(!genderSelected){
        studentGenderError.innerHTML="Please select your gender";
        return false;
    }
    studentGenderError.innerHTML= "";
    return true;
}


function getStudentInfo () {
    let name = document.getElementById("student-name");
    let email = document.getElementById("student-email");
    let website = document.getElementById("student-website");
    let profileImg = document.getElementById("student-image-link");
    let genders = document.getElementsByName("student-gender");
    let skills = document.getElementsByName("student-skills");

    let genderSelected;
    let selectedSkills = [];

    genders.forEach((gender) => {
        if (gender.checked === true) genderSelected = gender;
    });

    skills.forEach((skill) => {
        if (skill.checked === true) selectedSkills.push(skill);
    });

    return { name, email, website, profileImg, genderSelected, selectedSkills };
};
 

function formclear() {

    let { name, email, website, profileImg, genderSelected, selectedSkills} = getStudentInfo();

    name.value = "";
    email.value = "";
    website.value = "";
    profileImg.value = "";
    studentNameError.innerHTML = " ";
    studentEmailError.innerHTML = " ";
    studentWebsiteError.innerText = " ";
    studentImageError.innerText = " "
    studentGenderError.innerHTML = " ";

    if (genderSelected !== undefined){
        genderSelected.checked = false;
    }

    if (selectedSkills.length !== 0){
        selectedSkills.forEach((item) => (item.checked = false));
    }

}


const createCard = ({
    name,
    email,
    website,
    profileImg,
    genderSelected,
    selectedSkills,
}) => {
    console.log(selectedSkills)
    const cardItems = document.getElementById('card-items')

    let cardItem = `
         <div class="card-items row">
            <div class="Detalis  col-8">
              <p class="st-name">${name.value}</p>
              <p class="st-gender">${genderSelected.value}</p>
              <p class="st-mail">
                <a href="mailto:${email.value}">${email.value}</a>
              </p>
              <p class="st-site">
                <a href="${website.value}" target="_blank">${website.value}</a>
              </p>
              <p>${selectedSkills.map((item) => (item.value))}</p>
            </div>
            <div class="profile col-4">
                <img class="profileImg" src="${profileImg.value}" alt="profile" class="st-img" />
            </div>
        </div>
  `;

    cardItems.insertAdjacentHTML("beforeend", cardItem);
};


function submitEnrollDetalis (){
    let valid = Namevalidate() && Emailvalidate() && Websitevalidate() && Imagevalidate() && gendervalidation();
    console.log(valid)
    
    if (valid) {
        createCard(getStudentInfo());
    }
}


function deletecard() {
    const cardItems = document.getElementById('card-items')
    cardItems.removeChild(cardItems.lastElementChild);
}