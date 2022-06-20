// Dichiarazione dell'array contenente le URL delle immagini fornite
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

// Inizializzazione del primo elemento attivo dell'index a 0
let activeElementIndex = 0;

// Assegnazione di variabile per il Container del Carousel
const imgWrapper = document.querySelector(".carousel_wrapper .carousel_image_container");

// Assegnazione di variabile per i "figli" di imgWrapper
const imgList = imgWrapper.children;

// Creazione di un ciclo FOR per il caricamento html delle immagini
for (i=0; i<images.length; i++){
    // Creo l'elemento html di tipo img
    const newImg = document.createElement("img");

    // Aggiungo la classe active che dovrà avere il primo elemento newImg 
    if (i === 0){
        newImg.classList.add("active");
    }
    
    // Aggiungo l'src dell'immagine
    newImg.setAttribute("src", images[i]);

    // Aggiungo l'img creata alla lista
    imgWrapper.append(newImg);
}

// Al clic sul pulsante Next nascondo l'immagine attuale e mostro la successiva
const buttonNext = document.getElementById("next-button");

buttonNext.addEventListener("click", function(){
    // Rimozione della classe active dall'elemento attuale
    imgList[activeElementIndex].classList.remove("active");
    
    // Incremento di 1 per l'elemento attivo, seleziono quindi il prossimo
    activeElementIndex = activeElementIndex + 1;

    if (activeElementIndex === imgList.length){
        activeElementIndex = 0;
    }

    // Aggiungo la classe active al nuovo elemento attivo
    imgList[activeElementIndex].classList.add("active");

})

// Al clic sul pulsante Previous nascondo l'immagine attuale e mostro la precedente
const buttonPrev = document.getElementById("prev-button");

buttonPrev.addEventListener("click", function(){
    // Rimozione della classe active dall'elemento attuale
    imgList[activeElementIndex].classList.remove("active");
    
    // Decremento di 1 per l'elemento attivo, seleziono quindi il precedente
    activeElementIndex = activeElementIndex - 1;

    if (activeElementIndex < 0){
        activeElementIndex = imgList.length - 1;
    }

    // Aggiungo la classe active al nuovo elemento attivo
    imgList[activeElementIndex].classList.add("active");
})