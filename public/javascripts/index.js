let codeA = "document.getElementById('aboutMe').appendChild(content);";
let codeB = "fadeIn(content);";
let i = 0;
let writeCode = setInterval(function(){
    if (i < codeB.length){
        document.getElementById('introCode').appendChild(document.createTextNode(codeB.charAt(i)));
        i++;
    }else{
        clearInterval(writeCode);
        // console.log('exited loop')
        setTimeout(function(){
            // console.log('next function')
            fadeOut()
            setTimeout(function(){
                // console.log('next function')
                addContent()
                fadeIn('aboutHeader', 'aboutContent')
                setTimeout(function(){
                    // console.log('next function')
                    fadeIn('nav', 'nextPage')
               }, 1500);
           }, 1000);
       }, 500);
    }
}, 100);

function addContent(){
    let header = document.createTextNode('Hello World');
    let text = 'My name is Ricky and I am fairly new to this whole web development thing. That being said, I’ve got a number of projects under my belt, each one exponentially better than the last. I have what I feel to be a good base knowledge of the field and great problem solving/research skills that allow me to find a solution for nearly any problem. Take a look at some of my projects below:';

    document.getElementById('aboutHeader').appendChild(header);
    document.getElementById('aboutContent').innerHTML = text;
}

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