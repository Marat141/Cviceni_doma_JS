let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(oneParagraph){
    if (oneParagraph.textContent.toLowerCase.includes("nakrmit")){
        oneParagraph.remove()
    }
});