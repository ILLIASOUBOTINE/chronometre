const inpText = document.querySelector(".inp_text");
const btnClick = document.querySelector(".btn_click");
const tim = document.querySelector(".tim");
const startBtn = document.querySelector("#start");
const body = document.querySelector("body");
let tog = false;
console.log(tim);

let timeTotale = 0;
let ms = 0;
let s = 0;
let m = 0;
// body.addEventListener("click", ()=>{

//     const timeInterval = setInterval(() => {
//     if(!tog) {
//         clearInterval(timeInterval);

//       }

//   if (tog) {

//     tim.children[3].innerHTML = `${i} ms`;
//     i += 100;
//   }

//   }, 1000);
// })

function start() {
  tog = true;

  startBtn.disabled = tog;

  const timeInterval = setInterval(() => {
    if (tog) {
      for (let i = 0; i < tim.children.length; i++) {
        if (i === 0) {
          tim.children[i].innerHTML = `${Math.floor(
            timeTotale / 3600 / 1000
          )} h`;
        }
        if (i === 1) {
          // m+=0.1;
          if (m > 60) {
            m = 0;
          }

          tim.children[i].innerHTML = `${Math.floor(m)} min`;
        }
        if (i === 2) {
          // s+=0.1;
          if (s > 59) {
            s = 0;
            m += 1;
          }
          tim.children[i].innerHTML = `${Math.floor(s)} s`;
        }
        if (i === 3) {
          ms += 100;
          if (ms > 999) {
            ms = 0;
            s += 1;
          }
          tim.children[i].innerHTML = `${ms} ms`;
        }
      }
      // tim.children[3].innerHTML = `${timeTotale} ms`;
      timeTotale += 100;
    } else {
      clearInterval(timeInterval);
    }
  }, 100);
}

function stop() {
  tog = false;

  startBtn.disabled = tog;
}

function reset() {
  timeTotale = 0;
  ms = 0;
  s = 0;
  m = 0;
  tim.children[0].innerHTML = `0 h`;
  tim.children[1].innerHTML = `0 min`;
  tim.children[2].innerHTML = `0 s`;
  tim.children[3].innerHTML = `0 ms`;
  tog = false;

  startBtn.disabled = tog;
}
