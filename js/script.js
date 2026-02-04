let person = {
    firstname: "Ole",
    lastname: "Erling",
    age: 54,
    married: true,
    hometown: "Roskilde",
    hobbies: ["Repliler", "Programmering", "Frimærker"],
    pet: {
        type: "Klapperslange",
        name: "Holger",
    }
}

console.log(person.firstname) // Ole
console.log(person.lastname)  // Erling


console.log(person["pet"])
console.log(person["petname"])

// opgave 1
person.hobbies.forEach(function (hobby) {
    console.log(hobby)
})
// Reptiler
// Fimærker
// Programmering

console.log(person.pet.type)  //Klapperslange
console.log(person.pet.name)  // Holger



// opgave 2
let person2 = {
    firstname: "Ole",
    lastname: "Erling",
    age: 54,
    married: true,
    hometown: "Roskilde",
    hobbies: ["Repliler", "Programmering", "Frimærker"],
    pet: {
        type: "Klapperslange",
        name: "Holger",
    }
}

console.log(person2.firstname); // Ole
console.log(person2.lastname);  // Erling
console.log(person2["age"]);
console.log(person2["hobby"]);


person2.hobbies = ["Reptiler", "Frimærker", "Programmering"];

console.log(person2.pet.type)  //Klapperslange
console.log(person2.pet.name)  // Holger

person2.hobbies.forEach(function (hobby) {
    console.log(hobby)
})
// Reptiler
// Fimærker
// Programmering



// opgave 3
let students = [
    { name: "Sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk designer" },
];

let studentListDiv = document.querySelector(".student-list");

// studentListDiv.insertAdjacentHTML("beforebegin", "<h2>Opgavae 3</h2>")


// students.forEach(function (student) {
//     const studentDiv = document.createElement("div");

//     studentDiv.textContent =
//         `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
//     studentListDiv.append(studentDiv);

// })

// students.forEach(student => {
//     let studentDiv = document.createElement("div");
//     studentDiv.classList.add("student")
//     let studentHeadline = document.createElement("h2");
//     studentHeadline.textContent = student.name;
//     let studentInfo = document.createElement("p")
//     studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
//     studentDiv.append(studentHeadline, studentInfo);
//     studentListDiv.appendChild(studentDiv);
// });

const ul = `<ul class="student__wrapper"></ul>`
studentListDiv.insertAdjacentHTML("afterbegin", ul)
const wrapper = document.querySelector(".student__wrapper")

students.forEach((student) => {
    const li = `<li><h2 class="student">Navn: ${student.name} Alder: ${student.age} Kursus:  ${student.course}</h2></li>`
    wrapper.insertAdjacentHTML("afterbegin", li)
})

// studentListDiv.insertAdjacentHTML("afterbegin", studentString)





