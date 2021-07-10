setTimeout(() => {
    let item = document.querySelector('img.css-19fzd3p');
    console.log(item);
    item.src = `https://source.unsplash.com/random/?farm-animal-face`;
   
    const essayElements = document.querySelectorAll('.css-zlbo66.e12lgu630');
    console.log(essayElements);

    if (essayElements.length === 0) {}// do something
    else {

    //let string = essayElements[0].innerText;
    
    let string = 'Lorem ipsum I am an open book lorem ipsum'

    const trope1List = ["I am an open book", "I'm an open book", "Ask me anything", "ask me anything", "Just ask", "just ask"]
    const real1 = "I have nothing to say for myself. I have nothing to offer you conversationally. This is awkward. Who am I? What do I enjoy? What am I doing here? What do I want in a relationship? Argh! I can't cope without closed questions and time to think, if only there was a questionnaire I can fill in. Oh wait..."

    for (let i = 0; i < trope1List.length; i++) {
      start = string.indexOf(trope1List[i]);
        if (start> -1 ) {
            helperFunction(string, real1, trope1List[i], start)
            break;
        }
    }
    }

    function helperFunction (string, replaceText, strikeText, startPosition) {
        const beforeText = string.slice(0, startPosition - 1);
        const afterText = string.slice(startPosition + strikeText.length + 1);
        
        const beforeSpan = document.createElement('span');
        const strikeSpan = document.createElement('span');
        const replaceSpan = document.createElement('span');
        const afterSpan = document.createElement('span');
        
        strikeSpan.style.textDecoration = 'line-through';
        replaceSpan.style.fontWeight = 900;
        
        beforeSpan.innerText = beforeText;
        strikeSpan.innerText = strikeText;
        replaceSpan.innerText = replaceText;
        afterSpan.innerText = afterText;

        const parent = essayElements[0].parentNode;
        parent.removeChild(essayElements[0]);
        parent.appendChild(beforeSpan);
        parent.appendChild(strikeSpan);
        parent.appendChild(replaceSpan);
        parent.appendChild(afterSpan);
    }


}, 5000);