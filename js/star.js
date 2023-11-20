addEventListener("load", function() {
    this.document.querySelector(".star").addEventListener("click", function() {
        let star = document.querySelector(".star");
        star.setAttribute("transform", "rotate(18, 70, 59.4)");
        setTimeout(function() {
            star.setAttribute("transform", "rotate(36, 70, 59.4)");
        }, 100)
        setTimeout(function() {
            star.setAttribute("transform", "rotate(54, 70, 59.4)");
        }, 200)
        setTimeout(function() {
            star.setAttribute("transform", "rotate(72, 70, 59.4)");
        }, 300)
    })
});