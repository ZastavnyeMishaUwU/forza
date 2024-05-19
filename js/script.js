console.log("artemka lubit kurku gril!")


let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Come back!";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

