//-----------------Gallery and Modal------------------------------
const arrImages = [ //const = keyword, arrImages = variable-navn, [] = array.
    ["flower1.jpg", "PinkRose"],
    ["flower2.jpg", "WhiteRose"],
    ["flower3.jpg", "WhiteRoses"],
    ["flower4.jpg", "PinkFlower"],
]
//konstant variable, kaldet arrImages, som er et array der indeholder fire arrays. 

console.log(arrImages);

let html ="";

arrImages.forEach(function(value){
    html += `<img width="250px" src="assets/images/${value[0]}" title="${value[1]}" onclick="displayDialog(this)">`;//onclick="OpenImagesFunction()"
});

wrapper.insertAdjacentHTML("afterbegin", html);
//insertAdjacentHTML(position, text) = metode til at indsætte html-kode i dom 
//afterbegin = Just inside the element, before its first child.

console.log(displayDialog);

function displayDialog(id){
    modal.showModal();
    modal.style.backgroundImage = `url(${id.src})`;
};

modal.addEventListener("click", function(){
    modal.close();
});

//----------------------VALIDATE------------------------------------------
const validate = (form) => {
    console.log("Her er formen", form);

    let errors = [];

    console.log(form.name.value);
    if(form.name.value === ""){
        errors.push("Udfyld venligst dit navn\n");
    };

    if(errors.length > 0) {
        console.log("alle fejl:", errors.length);

        let msg = "fejl fundet er: \n\n";

        for(let i = 0; i < errors.length; i++){
            mgs += errors[i];
        }
        alert(msg);
        return false;
    };
    return true;
};