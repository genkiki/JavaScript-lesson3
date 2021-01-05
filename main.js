
document.getElementById("keyword").oninput = function() {
    let input_text = document.getElementById("keyword").value;
    let keyword_text = document.getElementsByClassName("keyword-text");

    for(let i = 0; i <= keyword_text.length - 1; i++) {
        let text = keyword_text[i].textContent;
        if(text.indexOf(input_text) === -1) {
            console.log("true");
            keyword_text[i].parentElement.style.display = "none";
        } else {
            console.log("false");
            keyword_text[i].parentElement.style.display = "block";
        }
    }
}