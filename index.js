
let ElStars = document.querySelectorAll(".fa-star");
let emojisEl = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];


ElStars.forEach( (ElStar, index  ) => {
    ElStar.addEventListener( "click", () => {
       updateRating(index);
    })
})

function updateRating(index) {
    ElStars.forEach( (ElStar,idx) => {
        if(idx < index + 1){
            ElStar.classList.add("active");
        }else 
        {
            ElStar.classList.remove("active")
        }
    })

    emojisEl.forEach( (emojiEl) => {
        emojiEl.style.transform = `translateX(${index * -50}px)`;
        emojiEl.style.color = colorsArray[index];
    })
}