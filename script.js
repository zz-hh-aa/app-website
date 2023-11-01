// toggle accordions
document.querySelectorAll('.accordion_button').forEach((button) => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('accordion_button--active');

    if (button.classList.contains('accordion_button--active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
        accordionContent.style.maxHeight = null;
    }
    })
})

// random fact generator
let factgen = document.getElementById("random_fact");
let factout = document.getElementById("fact_output");
let facts = [
  "I make electronic music. My first exposure to programming was through exploring the visual pseudo-code language Max/MSP, which lets you build instruments, effects, and lots more. That was 10 years ago and I still don’t know how to use it!",
  "I’m a permaculture enthusiast! ‘Permaculture’ is a concatenation of ‘permanent’ and ‘agriculture’. Some say permaculture has as many definitions as practitioners. I’ve heard it referred to as garden automation. Personally, I think of it as a a way of bringing systems-thinking into growing and place design. Ethics are central to permaculture; its key principles are <em>people-care</em>, <em>earth-care</em>, and <em>fair-share</em>.", 
  "My brain is a Notion database. This is hyperbole, but I do use the software to organise just about everything – even if I don’t like that it a.) doesn’t allow offline storage, b.) is hosted on AWS. I’m particularly enjoying using the database feature to put together my own searchable code glossary, to which I add all the functions, methods, etc. that I’ve encountered to date.", 
  "I have a wormery and use it to make compost. My worms are fed a steady diet of coffee grounds and banana peels, as well as scrap paper and cardboard. They served as the inspiration for my game!", 
  "Orange is one of my favourite colours. Can you tell? (Try highlighting some text!)"
];

factgen.addEventListener('click', function() {
  let randomfact = facts[Math.floor(Math.random() * facts.length)];
  factout.innerHTML = randomfact; // already have the text in but then toggle the display value (OR set static value / accordion box size)
})

// date and time
let datetime = document.getElementById("datetime");
let d = new Date();
datetime.innerHTML = `Today's date is ${d.toLocaleDateString()}.`;