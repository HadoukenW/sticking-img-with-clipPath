// learn what all this code means at
// https://www.creativecodingclub.com/bundles/creative-coding-club
// unlock over 200 GSAP lessons today


const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

// gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector("h1")
	let animation = gsap.timeline()
	   animation.to(photos[index], {clipPath: 'inset(0% 0% 0% 0%)', backgroundPosition: '0% 75%'})
	//    .set(allPhotos[index], {autoAlpha:0})
	   .to('.gallery', {background: ''})
	ScrollTrigger.create({
		trigger:headline,
		start:"top bottom",
		end:"bottom top",
		animation:animation,
		scrub:true,
	})
})
	
let sectionsEven = document.querySelectorAll(".desktopContentSection:not(:first-child):nth-child(even)")
sectionsEven.forEach( (sectionn) => {
	let evenSection = gsap.timeline({
		scrollTrigger: {
			trigger: sectionn,
			start: 'top top',
			scrub: true,
			end: '+=400'
		},
})
evenSection.fromTo('body',
{background: 'rgb(255, 237, 224)'},
{background: 'rgb(224, 240, 255)'},
	
	)
	
})

let sectionsOdd = document.querySelectorAll(".desktopContentSection:not(:first-child):nth-child(odd)")
sectionsOdd.forEach( (sectionn) => {
	let oddSection = gsap.timeline({
		scrollTrigger: {
			trigger: sectionn,
			start: 'top top',
			scrub: true,
			end: '+=400'
		},
})
oddSection.fromTo('body',
	{background: 'rgb(224, 240, 255)'},
	{background: 'rgb(255, 237, 224)'}
	
	)
	
})



  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});

















 



/* ScrollTrigger Docs

https://greensock.com/docs/v3/Plugins/ScrollTrigger

*/





/* 

learn more GreenSock and ScrollTrigger

https://www.creativeCodingClub.com

new lessons weekly
less than $1 per week

*/