let datastore;
const heading = document.querySelectorAll(".heading");
const hours = document.querySelectorAll(".hoursCurrent");
const hoursPrevious = document.querySelectorAll(".hoursPrevious");
const dayIdentifier = document.querySelectorAll(".dayIdentifier");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
async function dataFetch() {
    await fetch("./data.json")
        .then(res => res.json())
        .then(data => datastore = data)
        .catch(error => console.log(error));
    displayDay();
}

dataFetch();

function displayDay() {

    for (let i = 0; i < heading.length; i++) {
        heading[i].textContent = datastore[i].title;
    }

    for (let i = 0; i < hours.length; i++) {
        hours[i].textContent = datastore[i].timeframes.daily.current;
    }

    for (let i = 0; i < hoursPrevious.length; i++) {
        hoursPrevious[i].textContent = datastore[i].timeframes.daily.previous;
    }

    for (let i = 0; i < dayIdentifier.length; i++) {
        dayIdentifier[i].textContent = "day";
    }

    weekly.classList.remove("active");
    daily.classList.add("active");
    monthly.classList.remove("active");

}

function displayWeek() {
    for (let i = 0; i < heading.length; i++) {
        heading[i].textContent = datastore[i].title;
    }

    for (let i = 0; i < hours.length; i++) {
        hours[i].textContent = datastore[i].timeframes.weekly.current;
    }

    for (let i = 0; i < hoursPrevious.length; i++) {
        hoursPrevious[i].textContent = datastore[i].timeframes.weekly.previous;
    }

    for (let i = 0; i < dayIdentifier.length; i++) {
        dayIdentifier[i].textContent = "week";
    }
    weekly.classList.add("active");
    daily.classList.remove("active");
    monthly.classList.remove("active");
}

function displayMonth() {
    for (let i = 0; i < heading.length; i++) {
        heading[i].textContent = datastore[i].title;
    }

    for (let i = 0; i < hours.length; i++) {
        hours[i].textContent = datastore[i].timeframes.monthly.current;
    }

    for (let i = 0; i < hoursPrevious.length; i++) {
        hoursPrevious[i].textContent = datastore[i].timeframes.monthly.previous;
    }

    for (let i = 0; i < dayIdentifier.length; i++) {
        dayIdentifier[i].textContent = "month";
    }
    weekly.classList.remove("active");
    daily.classList.remove("active");
    monthly.classList.add("active");
}

daily.addEventListener("click", () => {
    displayDay();
})

weekly.addEventListener("click", () => {
    displayWeek();
})

monthly.addEventListener("click", () => {
    displayMonth();
})