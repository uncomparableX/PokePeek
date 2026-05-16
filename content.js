const petContainer = document.createElement('div');
petContainer.className = 'poke-pet-container';
document.body.appendChild(petContainer);

const getUrl = (path) => chrome.runtime.getURL(path);

const pokeRoster = [
    { id: 'pikachu', img: getUrl('images/pikachu.gif'), color: '#FFFF00' }, 
    { id: 'bulbasaur', img: getUrl('images/bulbasaur.gif'), color: '#32CD32' }, 
    { id: 'squirtle', img: getUrl('images/squirtle.gif'), color: '#00BFFF' }, 
    { id: 'charmander', img: getUrl('images/charmander.gif'), color: '#FF4500' } 
];

// Pure anime language permutations!
const dialogue = {
    'pikachu': ["Pika pika!", "Pikachu!", "Pika pi!", "Piiii-ka!", "Pika pi pikachu!"],
    'bulbasaur': ["Bulba bulba bulbasaur!", "Bulbasaur!", "Bulba bulba!", "Bulba saurrr!", "Bulba!"],
    'squirtle': ["Squirtle!", "Squirtleee!", "Suiiiiirtleee!", "Squirtle squirtleee!"],
    'charmander': ["Char!", "Charmander!", "Char char!", "Charmander char!", "Chaaaaar!"]
};

function getRandomText(id) {
    const phrases = dialogue[id];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function createPetElement(petData, side) {
    const slider = document.createElement('div');
    slider.className = `poke-pet-slider ${side}-side`;
    
    const floater = document.createElement('div');
    floater.className = 'poke-pet-floater';

    const hoverboard = document.createElement('div');
    hoverboard.className = 'poke-hoverboard';
    hoverboard.style.setProperty('--glow-color', petData.color);
    
    const img = document.createElement('img');
    img.className = 'poke-pet-img';
    img.src = petData.img;
    
    const bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    
    // Facing logic
    if (side === 'left') {
        img.style.transform = 'scaleX(-1)'; 
    } else {
        img.style.transform = 'scaleX(1)'; 
    }

    floater.appendChild(hoverboard);
    floater.appendChild(img);
    floater.appendChild(bubble);
    slider.appendChild(floater);
    petContainer.appendChild(slider);
    
    slider.getBoundingClientRect();
    
    return { slider, img, bubble, id: petData.id }; 
}

function runPeekCycle() {
    const shuffled = [...pokeRoster].sort(() => 0.5 - Math.random());
    
    const leftElements = createPetElement(shuffled[0], 'left');
    const rightElements = createPetElement(shuffled[1], 'right');

    // 1. Slide in
    setTimeout(() => {
        leftElements.slider.classList.add('peeking');
        rightElements.slider.classList.add('peeking');
    }, 100);

    // 2. Chat Sequence
    setTimeout(() => {
        leftElements.bubble.textContent = getRandomText(leftElements.id);
        leftElements.bubble.classList.add('show');
        
        setTimeout(() => {
            leftElements.bubble.classList.remove('show');
            rightElements.bubble.textContent = getRandomText(rightElements.id);
            rightElements.bubble.classList.add('show');
            
            setTimeout(() => {
                rightElements.bubble.classList.remove('show');
            }, 3000); 
        }, 3500); 

    }, 4500); 

    // 3. Leave Sequence
    setTimeout(() => {
        leftElements.img.style.transform = 'scaleX(1)';   
        rightElements.img.style.transform = 'scaleX(-1)'; 
        
        setTimeout(() => {
            leftElements.slider.classList.remove('peeking');
            rightElements.slider.classList.remove('peeking');
            
            setTimeout(() => {
                leftElements.slider.remove();
                rightElements.slider.remove();
            }, 4500); 
        }, 500); 

    }, 15000); 

    // 4. Next appearance schedule
    const randomBreak = 30000 + (Math.random() * 10000); 
    const nextVisit = 20000 + randomBreak; 
    
    setTimeout(runPeekCycle, nextVisit);
}

// Start sequence 2 seconds after page load
setTimeout(runPeekCycle, 2000);