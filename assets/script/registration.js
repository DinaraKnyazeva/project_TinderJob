let isApplicant = false;
let isEmployer = false;

let applicant = document.querySelector('.applicant');
let employer = document.querySelector('.employer');

applicant.onclick = function () {
    isApplicant = true;
    isEmployer = false;

    applicant.style.background = "blue";
    employer.style.background = null;
}

employer.onclick = function () {
    isEmployer = true;
    isApplicant = false;

    employer.style.background = "blue";
    applicant.style.background = null;
}

let dataForJson = {};
dataForJson['skills'] = '';
dataForJson['skills'] = [];
let key = '';
let value = '';

let skillsButtons = document.querySelectorAll('.skills-button');
skillsButtons.forEach((item, index) => {
    item.addEventListener('click', function() {
        item.style.background = "blue";
        console.log('!!!!');
        console.log(item.textContent);
        dataForJson['skills'].push(item.textContent);
    });
});

let submit = document.querySelector('.submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();

    //Сборка объекта

    //Сборка инпутов
    inputs = document.querySelectorAll('input');
    inputs.forEach((item, index) => {
        key = item.getAttribute('class');
        console.log('ключ');
        console.log(key);
        value = item.value;

        if (key == null) {
            return false;
        }

        dataForJson[key] = value;
    });

    if(isApplicant) {
        dataForJson['role'] = 'applicant';
    }

    if(isEmployer) {
        dataForJson['role'] = 'employer';
    }
    
    let json = JSON.stringify(dataForJson);
    console.log(dataForJson);

}, false);
