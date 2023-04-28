// --- VARIABLES ---

let number = [];
let given = [];
let i;
let num;
let div;
let text;
let hide;
let ver;

// --- START ---

const timer = setTimeout(number_hide, 30000);
const timer_prompt = setTimeout(number_clear, 30050);

number_gen();

// --- FUNCTIONS ---

function number_gen() {
    for (i = 0; i < 5; i++) {
        num = Math.floor(Math.random() * 100);
        number.push(num);
    }
    for (i = 0; i < number.length; i++) {
          div = document.createElement("div");
          text = document.createTextNode(number[i]);
          div.appendChild(text);
          document.getElementById("number_container").appendChild(div); 
    }
}

function number_hide() {
    document.getElementById("number_container").style.display = "none";
}

function number_clear() {
    num = prompt("Inserire numeri");
    given = num.split(" ");
    for (i = 0; i < given.length; i++) {
        given[i] = parseInt(given[i]);
    }
    ver = 0;

    for (i = 0; i < number.length; i++) {
        if (number[i] != given[i]) {
            ver = 1;
            break;
        }
    }
    if (ver == 1) {
        alert("Hai perso");
    }
    else {
        alert("Hai vinto");
    }

    clearTimeout(timer_prompt);
    clearTimeout(timer);
}