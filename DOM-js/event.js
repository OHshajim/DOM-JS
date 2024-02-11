// system - 2 //impotent
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// system - 3
const makePurple = document.getElementById('make-purple');
makePurple.onclick = makepurple;
function makepurple() {
    document.body.style.backgroundColor = 'purple'
}

// system -3.2
const makePink = document.getElementById('make-pink');
makePink.onclick = function makepink() {
    document.body.style.backgroundColor = 'pink';
}

// system -4 
const makeMagenta = document.getElementById('make-magenta');
makeMagenta.addEventListener('click', magenta)
function magenta() {
    document.body.style.backgroundColor = 'magenta'
};

//    system -4.2
const makeAqua = document.getElementById('make-aqua');
makeAqua.addEventListener('click', function aqua() { document.body.style.backgroundColor = 'aqua' })

//    system -4.3 //important 
document.getElementById('make-teal').addEventListener('click', function teal() { document.body.style.backgroundColor = 'teal' });