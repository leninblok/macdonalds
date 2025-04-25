let heading= document.querySelector('#class-heading')
const mobileText = heading.innerHTML.replace(/<br\s*\/?>/gi, '');
const desktopText = heading.innerHTML

checkBreakpoint();
window.addEventListener('resize', checkBreakpoint);


function checkBreakpoint() {
  if (window.innerWidth < 768) {
	heading.innerHTML=mobileText
  } else {
  	heading.innerHTML=desktopText
  }
}