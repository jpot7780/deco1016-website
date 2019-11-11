let button = document.getElementById("submit");
let form = document.forms[0];
console.log(form);


form.addEventListener("change", function(event){
    event.preventDefault();

    let homeclub = form.elements["homeclub"].value;
            
    localStorage.setItem("homeclub", homeclub);

    console.log(localStorage.getItem("homeclub"));
    console.log("testing")
})

console.log("testing")