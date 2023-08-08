import { PartialStyleDeclaration } from "./main";

export function* follow(element:HTMLElement): Generator<PartialStyleDeclaration> {
    // 0. keep track of mouse position    
    let mouseX = 0; // initialize
    let mouseY = 0; // initialize
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })

    // 1. perform incremental animation
    while (true) {
        let bb = element.getBoundingClientRect();
        // get the current target circle
        let x = bb.left; // use the center
        let y = bb.top; // use the center
        x += (mouseX - x) * 0.02; // some fraction of the distance
        y += (mouseY - y) * 0.02; // some fraction of the distance

        yield {
            "left": `${x.toString()}px`,
            "top":`${y.toString()}px`
        }
    }
}