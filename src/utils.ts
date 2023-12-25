let intervals = new Map<HTMLElement, number>();

export function typeText(element: HTMLElement, delay: number, duration: number): void {

    // get the text
    let text = element.textContent as string;

    // if there is no text, return
    if(!text){
        return;
    }

    let clone = element.cloneNode(true) as HTMLElement;

    // clear clone innertext
    clone.innerText = "";

    // add the clone to the element's parent
    element.parentElement?.appendChild(clone);

    // hide element
    element.style.visibility = "hidden";

    // clear the interval if it exists
    if(intervals.has(element)){
        console.log("clearing interval");
        console.log(intervals.get(element));
        clearInterval(intervals.get(element));
        // remove the interval
        intervals.delete(element);
    }

    // wait for the delay
    let interval = setTimeout(() => {                
        const glitchCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "~", "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        // start typing
        let i = 0;

        let interval = setInterval(() => {
            // add the next character
            clone.innerHTML = text.substring(0, i).replaceAll(" ", "&nbsp;") + "<i><u><b>" + glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)] + "</b></u></i>" + "&nbsp;".repeat(text.substring(i).length-1);

            // increment i
            i++;

            // if i is greater than the length of the text, stop
            if(i >= text.length){
                clearInterval(interval);

                // remove clone
                clone.remove();

                // show element
                element.style.visibility = "visible";

                return;
            }

        }, duration / text.length);

    }, delay);

    // store the interval
    intervals.set(element, interval);
}

export function convertRemToPixels(rem: number) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}