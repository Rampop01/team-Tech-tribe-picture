// --------details----------
const details = [
    {
      name: "Popoola Rahmat",
      email: "Popoolarahmat96@gmail.com",
      image: "./images/Team Tech Tribe/rahmah.jpg",
      occupation: "Frontend",
    },
  {
    name: "Shomope Aishah",
    email: "aishashomope@gmail.com",
    image: "./images/Team Tech Tribe/aisha.jpg",
    track: "Backend",
  },
  {
    name: "Ti-jesu Adeleke ",
    email: "tijesuadeleke94@gmail.com",
    image: "/images/Team Tech Tribe/teejay.jpg",
    track: "Frontend",
  },
  {
    name: "Peace Sandy",
    email: "peacesandy04@gmail.com",
    image: "/images/Team Tech Tribe/peace.jpg",
    track: "Backend",
  },
  {
    name: "Chidimma Okoye",
    email: "chidimmaokoyeuzu@gmail.com",
    image: "/images/Team Tech Tribe/chi.jpg",
    track: "Frontend",
  },
];


const maleMembers = [
  {
    name: "Nkenna Agu",
    email: "Popoolarahmat96@gmail.com",
    image: "./images/Team Tech Tribe/AGUUU.jpeg",
    occupation: "Frontend",
  },
  {
    name: "Kareem Wajud",
    email: "aishashomope@gmail.com",
    image: "./images/Team Tech Tribe/wajud.jpg",
    track: "Backend",
  },
  {
    name: "Jigar Favor",
    email: "tijesuadeleke94@gmail.com",
    image: "/images/Team Tech Tribe/jaf.jpg",
    track: "Frontend",
  },
  {
    name: "Musa Muhammad",
    email: "peacesandy04@gmail.com",
    image: "/images/Team Tech Tribe/musa.jpg",
    track: "Backend",
  },
  {
    name: "Alawode Muneef",
    email: "chidimmaokoyeuzu@gmail.com",
    image: "/images/Team Tech Tribe/muneef.jpg",
    track: "Frontend",
  },
  {
    name: "Oluwleke Saleem",
    email: "chidimmaokoyeuzu@gmail.com",
    image: "/images/Team Tech Tribe/Salem.jpg",
    track: "Frontend",
  },
  {
    name: "Ahmad Qozeem",
    email: "chidimmaokoyeuzu@gmail.com",
    image: "/images/Team Tech Tribe/ahmad.jpg",
    track: "Frontend",
  },
  {
    name: "Oladoja Abdulrasheed",
    email: "chidimmaokoyeuzu@gmail.com",
    image: "/images/Team Tech Tribe/oladoja.jpg",
    track: "Frontend",
  },
];
// the detailsssss
const userData = document.querySelector(".content");
renderUser();
function renderUser() {
  var localData = "";
  details.forEach((each_datails) => {
    localData += `<div class="container">
    <img src="./${each_datails.image}" alt="${each_datails.name}">
    <div class="about">
        <div class="info">
           
            ${each_datails.name}</span>
        </div>
        <div class="info">
            <span>Email: </span>
            <span>${each_datails.email}</span>
        </div>
        <div class="info">
            <span>Track: </span>
            <span>${each_datails.track}</span>
        </div>
    </div>
</div>`;
    userData.innerHTML = localData;
  });


let userDrop = document.getElementById("newUsers");
let newUser = "<option>Add male members</option>";
maleMembers.forEach((member) => {
  newUser += `<option value="${member.email}">${member.name}</option>`;
  userDrop.innerHTML = newUser;
});
}

function addNewMembers(event) {
  let targetUser = event.target.value
  maleMembers.forEach((member) => {
    if (targetUser == member.email) {
      details.push(member)
      renderUser();
    }
  });
}

function firstUser() {
  let removedUser = details.shift();
  alert(`${removedUser.name} has been removed`);
  // details.shift();
  renderUser();
}

function lastUser() {
  // details.pop();
  let removedUser = details.pop();
  alert(`${removedUser.name} has been removed`);
  // details.shift();
  renderUser();
}
