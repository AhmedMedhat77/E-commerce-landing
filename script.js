//navbar toggler
let navBtn = document.querySelector(".navbar__toggler");

navBtn.addEventListener("click", (e) => {
  document.querySelector(".navbar__menu").classList.toggle("active");
});
