// const lis = document.querySelectorAll('li');

// lis.forEach(li => {
//     li.addEventListener('click', function () {
//         lis.forEach(item => item.classList.remove('active'));
//         li.classList.add('active');
//     });
// });


const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');

console.log(day, week, month);

const dayBtn = document.querySelector(".Daily");
const weekBtn = document.querySelector(".Weekly");
const monthBtn = document.querySelector(".Monthly");

console.log(dayBtn, weekBtn, monthBtn);


let showDay = () => {
    console.log("day is clicked");

    day.style.display = "grid";
    week.style.display = "none";
    month.style.display = "none";
}

let showWeek = () => {
    console.log("Week is clicked");

    day.style.display = "none";
    week.style.display = "grid";
    month.style.display = "none";
}

let showMonth = () => {
    console.log("month is clicked");

    day.style.display = "none";
    week.style.display = "none";
    month.style.display = "grid";
}



dayBtn.addEventListener("click", showDay);
weekBtn.addEventListener("click", showWeek);
monthBtn.addEventListener("click", showMonth);


// const sect = document.querySelectorAll('section');

// sect.forEach(section => {
//     section.addEventListener('click', function () {
//         sect.forEach(item => item.style.display = "none");
//         section.classList.add('active');
//     });
// });