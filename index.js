//About me Section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

//Side bar(Phone view) for smaller width view
var sidemenu = document.getElementById("sidemenu");

const openmenu = () => {
  sidemenu.style.right = "0";
};

const closemenu = () => {
  sidemenu.style.right = "-200px";
};

//Form Response Section
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxTKdtjcIm5724BBIJgt29_j7bBFM0JeJXAkUwvTY5qiEH3G3VPxRIsoz_kSCpWcGeQAw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfullly!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
