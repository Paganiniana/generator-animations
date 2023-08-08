import { PartialStyleDeclaration } from "./main";

export function* bounce(element:HTMLElement, dx:number=0): Generator<PartialStyleDeclaration> {
    let dy = 0;

    // 1. perform incremental animation
    while (true) {
        // initialize 
        let bb = element.getBoundingClientRect();
        let x = bb.x;
        let y = bb.y;

        // check for bounce condition
        if (bb.bottom > window.innerHeight) {
            dy = 0 - dy; // switch the direction
            dy = dy * (0.8) // introduce decay
            y -= 5; // make sure it doesn't get stuck
        }

        // increment position
        x += dx;
        y += dy;
        
        // increment velocity
        dy += 0.05;


        yield {
            "left": `${x.toString()}px`,
            "top":`${y.toString()}px`
        }
    }
}