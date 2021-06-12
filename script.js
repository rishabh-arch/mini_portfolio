

var balls = document.getElementsByClassName("mask_eye");
document.onmousemove = function () {
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
}

let toggle = document.getElementById('toggle');
let toggle_label = document.getElementById('toggle_label');


function toggleCheck() {
  toggle.checked = true;
  toggle_label.style.visibility = "visible";

}
function toggleUnChecked(){
  toggle_label.style.visibility = "hidden";
}

const buddha_svg = document.getElementById('buddha_svg');

const toggleBtn = document.getElementById('toggle-btn');

buddha_svg.classList.replace('buddha_svg_top', 'buddha_svg_top_Active');

function skill(getid) {
  const unactive = document.querySelectorAll(".page-link");
  for (var i = 0; i < unactive.length; ++i) {
    unactive[i].classList.remove('link_bottom_active');
  }

  const active = document.getElementById(getid);
  document.title = `Portfolio - ${getid}`;
  active.classList.add('link_bottom_active');
  buddha_svg.style.left = "-25%";


  let profile_input = document.getElementById('profile_input');
  let skill_input = document.getElementById('skill_input');
  let contact_input = document.getElementById('contact_input');
  let projects_input = document.getElementById('projects_input');
  let profile_ul = document.getElementById('profile_ul');

  if (getid === "profile") {
    profile_ul.classList.remove('hidden');

    profile_input.checked = true;
    skill_input.checked = false;
    contact_input.checked = false;
    projects_input.checked = false;
  }
  if (getid === "skill") {
    skill_input.checked = true;

    contact_input.checked = false;
    projects_input.checked = false;
    profile_input.checked = false;
  }
  if (getid === "contact") {

    contact_input.checked = true;

    projects_input.checked = false;
    profile_input.checked = false;
    skill_input.checked = false;
  }
  if (getid === "projects") {

    projects_input.checked = true;

    contact_input.checked = false;
    skill_input.checked = false;
    profile_input.checked = false;
  }

}
