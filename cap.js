// captcha generator
function CaptchaGenerator(){
    let one = new Array('a','b','c','d','e','f','g','h','A','B','C','D','E','F','G','H');
	
	let a = one[Math.floor(Math.random()*one.length)];
	let b = one[Math.floor(Math.random()*one.length)];
	let c = one[Math.floor(Math.random()*one.length)];
    let d = one[Math.floor(Math.random()*one.length)];
	let e = one[Math.floor(Math.random()*one.length)];
	let f = one[Math.floor(Math.random()*one.length)];

    let result = a+' '+b+' '+c+' '+d+' '+e+' '+f;
    document.getElementById("showCaptcha").value = result;

}

// verify
function verify(){
    let one = removespace(document.getElementById("showCaptcha").value);
	let two = removespace(document.getElementById("userinput").value);
	
	if (one==two){
	return true}
	else{
	return false}
}


// remove space

function removespace(s){
	   return s.split(' ').join('')
}