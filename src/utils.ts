export function typeText(element: HTMLHeadingElement, delay: number, duration: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {

        // get the text
        let text = element.textContent as string;

        // if there is no text, return
        if(!text){
            resolve();
        }

        // clear the text
        element.innerText = "";

        // wait for the delay
        setTimeout(() => {                
            const glitchCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "~", "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

            // start typing
            let i = 0;

            let interval = setInterval(() => {
                // add the next character
                element.innerHTML = text.substring(0, i).replaceAll(" ", "&nbsp;") + "<i><u><b>" + glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)] + "</b></u></i>" + "&nbsp;".repeat(text.substring(i).length-1);

                // increment i
                i++;

                // if i is greater than the length of the text, stop
                if(i >= text.length){
                    clearInterval(interval);
                    element.textContent = text;

                    // resolve the promise
                    resolve();
                }

            }, duration / text.length);

        }, delay);

    });

}

export function convertRemToPixels(rem: number) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}