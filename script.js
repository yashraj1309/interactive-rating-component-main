let  setRating = '';
const rating = (e) => {
    setRating = e;
    document.getElementById("setRating").innerHTML = setRating;
}

const selectElement = document.querySelector(".a");
const targetElement = document.querySelector(".b");

function changeScreen() {
        if(setRating === '') {
            return;
        }
        targetElement.style.display = "flex";
        selectElement.style.display = "none";
}
