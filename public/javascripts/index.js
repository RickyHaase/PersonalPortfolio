let code = "fadeIn(content);";
let i = 0;
let writeCode = setInterval(function(){
    if (i < code.length){
        // Writes the string one character at a time at the defined interval to the page
        document.getElementById('introCode').appendChild(document.createTextNode(code.charAt(i)));
        i++;
    }else{
        // console.log('exited loop')
        clearInterval(writeCode);
        setTimeout(function(){
            // fade out the written message
            fadeOut()
            setTimeout(function(){
                // remove written message from DOM before fading in header and content
                let introCode = document.getElementById('introCode');
                introCode.parentNode.removeChild(introCode);
                fadeIn('aboutHeader', 'aboutContent');
                setTimeout(function(){
                    // fade in the nav and page down buttons
                    fadeIn('nav', 'nextPage')
               }, 1500);
           }, 1000);
       }, 500);
    }
}, 100);

function fadeOut(){
    let introCode = document.getElementById('introCode');

    introCode.classList.add('fade-out');
    introCode.classList.add('hidden');
}

function fadeIn(a, b){
    let elementA = document.getElementById(a);
    let elementB = document.getElementById(b);

    elementA.classList.add('fade-in');
    elementB.classList.add('fade-in');

    elementA.classList.remove('hidden');
    elementB.classList.remove('hidden');
}

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });