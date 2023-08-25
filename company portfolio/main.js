// ---------Responsive-navbar-active-animation using jquery-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});







//map
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("our company location it's our pleasure to calling us.");
polygon.bindPopup("I am a polygon.");
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

	var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);





/// email js but it not work i think it about cdn not work in egypt i use cdn from unpkg so it cause problem with it  
const btn = document.getElementById('contact-btn');
const form = document.getElementById('contactForm');
const warningMessage = document.getElementById('form-message-warning');
const successMessage = document.getElementById('form-message-success');
btn.addEventListener('click', function(e) {
	e.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_61y92dm';
   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = 'Send Email';
	  successMessage.style.display="block";

	}, (err) => {
      btn.value = 'Send Email';
	  warningMessage.style.display="block";

    });
});



// filter  , change font , dark mode it not fanatasic dark mode  but it is good as a concept
const bodyElement  = document.querySelector("body");
const switcherDark  = document.querySelector("#cnvs-switcher-dark-mode");
const container = document.querySelector('#work-demos');
const switcherFont  = document.querySelector("#cnvs-switcher-body-font");
const sortOldest  = document.querySelector(".oldest");
const sortNewest  = document.querySelector(".newest");
// event listner for dark mode
switcherDark.addEventListener('change' ,e =>{
	
	if (e.target.checked) {
		console.log(e.target.checked);

		bodyElement.classList.toggle("dark-mode")
	} else 	if (!e.target.checked) {
		bodyElement.classList.remove("dark-mode")
	} 
});


// event listner for change font of website
switcherFont.addEventListener("click", e=>{
	bodyElement.style.fontFamily = e.target.value
})


// event listner for filter 
sortOldest.addEventListener('change' , function sortDivs() {

	const divs = Array.from(container.getElementsByClassName('item'));
  
	// Define the comparison function based on data-value attribute
	const compareFn = (a, b) => {
	  const aValue = parseInt(a.getAttribute('data-value'));
	  const bValue = parseInt(b.getAttribute('data-value'));
	  return aValue - bValue;
	};
  
	// Sort the divs array
	divs.sort(compareFn);
	// Append sorted divs back to the container
	divs.forEach((div) => {
	  container.appendChild(div);
	});
} )
sortNewest.addEventListener('change' , function sortDivs() {

	const divs = Array.from(container.getElementsByClassName('item'));
  
	// Define the comparison function based on data-value attribute
	const compareFn = (a, b) => {
	  const aValue = parseInt(a.getAttribute('data-value'));
	  const bValue = parseInt(b.getAttribute('data-value'));
	  return aValue - bValue;
	};
  
	// Sort the divs array
	divs.sort(compareFn).reverse();
	// Append sorted divs back to the container
	divs.forEach((div) => {
	  container.appendChild(div);
	});
} )





