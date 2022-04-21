const myList=document.getElementById('list');
const grades= new Map();

function addGrade(name, grade) {
    const div=document.createElement('div');
    const nameH1=document.createElement('h1');
    const gradeH1=document.createElement('h1');

    div.className='grade';
    nameH1.innerText = name;
    gradeH1.innerText = grade;

    div.appendChild(nameH1);
    div.appendChild(gradeH1);

    myList.appendChild(div);
}

grades.set("Kyle", 90);
grades.set("Stan", 80);
grades.set("Kenny", 70);
grades.set("Cartmen", 60);

grades.forEach((grade, name)=> {
    addGrade(name, grade+"%");
});