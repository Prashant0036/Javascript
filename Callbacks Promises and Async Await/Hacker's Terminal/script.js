// <!-- Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds

// Initializing Hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...

// The three dots must blink so that it looks like a real terminal
// -->


let div = document.createElement("div");
document.body.append(div);
// div.innerHTML = "<h2>Hacker's Terminal </h2>";

async function hacking(string) {
  return new Promise((resolve, reject) => {
    let randomTime = Math.floor(Math.random() * 7 + 1);
    setTimeout(() => {
    

      div.innerHTML += `<h3>${string}</h3>`;

      // For blinking the dots

      //   console.log(typeof(div.lastElementChild.textContent))

      let blinkingInterval = setInterval(() => {
        if (div.lastElementChild.textContent.endsWith("...")) {
          div.lastElementChild.textContent =
            div.lastElementChild.textContent.slice(0, -3);
        } else {
          div.lastElementChild.textContent += ".";
        }
      }, 700);
      resolve(()=>{clearInterval(blinkingInterval)});
    }, randomTime * 1000);
  });
}



let messages = [
    "Initializing Hacking",
    " Reading your Files",
    " Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
];
// function call

let functionCall = async () => {
  for (let message of messages) {
    await hacking(message);
  }
};
functionCall();
