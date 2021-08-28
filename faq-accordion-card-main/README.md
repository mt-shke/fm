![](./screenshot.jpg)

### What I learned

filter: drop-shadow(0 2rem 1px rgba(110, 110, 110, 0.747));
css selector + 

(input id="one" -> label for="one") : onclick works and is bind to !ID!!

////
Accordion with input label solution
input id="one" -> label for="one" class="question" -> p class="answer"
////

input {
position: absolute;
opacity: 0;
z-index: -1;
}
input + .question + .answer {
overflow: hidden;
max-height: 0rem;
font-weight: 400;
}
input:checked + .question {
font-weight: 700;
}
input:checked + .question:after {
transform: rotate(-180deg);
}
input:checked + .question + .answer {
overflow: hidden;
max-height: 8rem;
color: $text-dark-blue;
}
