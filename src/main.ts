export type PartialStyleDeclaration = { [key:string]: string }

import { follow } from "./follow"
import { bounce } from "./bounce"

// 1. set up the ball
const ball = document.querySelector("#ball") as HTMLDivElement;

// 2. initialize
const follower = follow(ball);
const bouncer = bounce(ball);
let isBouncing = false;

// 3. start the style loop
function applyStyles() {
  let styles = isBouncing ? bouncer.next().value : follower.next().value;
  for (let key in styles) {
    // apply each style
    ball.style[key] = styles[key];
  }
  requestAnimationFrame(applyStyles);
}
applyStyles()

// 4. change from following to bouncing
ball.addEventListener("click", () => {
  isBouncing = true;   
});