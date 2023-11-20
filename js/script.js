

addEventListener("load", function() {
    let canvas = this.document.querySelector("canvas");
    console.log(canvas);
    let ctx = canvas.getContext("2d");


    this.document.getElementById("draw_hazel").addEventListener("click", function() {
        let img = document.querySelector("img#hazel_img");
        ctx.drawImage(img, 0, 0, 600, 600);
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Hazel", 200, 50);
        
    });

    this.document.getElementById("draw_biscuit").addEventListener("click", function() {
        let img = document.querySelector("img#biscuit_img");
        ctx.drawImage(img, 0, 0, 800, 600);
        ctx.font = "60px Arial";
        ctx.fillStyle = "purple";
        ctx.fillText("Biscuit Dog", 150, 50);
    });

    this.document.getElementById("draw_bacon").addEventListener("click", function() {
        let img = document.querySelector("img#bacon_img");
        ctx.drawImage(img, 0, 0, 600, 600);
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Bacon", 200, 50);
    });

    this.document.getElementById("draw_bear").addEventListener("click", function() {
        let img = document.querySelector("img#bear_img");
        ctx.drawImage(img, 0, 0, 600, 800);
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Bear", 200, 50);
    });

    this.document.getElementById("draw_millie").addEventListener("click", function() {
        let img = document.querySelector("img#millie_img");
        ctx.drawImage(img, 0, 0, 600, 800);
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Millie", 200, 50);
    });

    this.document.getElementById("draw_molly").addEventListener("click", function() {
        let img = document.querySelector("img#molly_img");
        ctx.drawImage(img, 0, 0, 600, 600);
        ctx.font = "60px Arial";
        ctx.fillStyle = "purple";
        ctx.fillText("Molly", 200, 50);
    });

    this.document.getElementById("draw_carter").addEventListener("click", function() {
        let img = document.querySelector("img#carter_img");
        ctx.drawImage(img, 0, 0, 600, 600);
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Carter", 200, 50);
    });

    // this.document.querySelector(".star").addEventListener("click", function() {
    //     let star = document.querySelector(".star");
    //     star.setAttribute("transform", "rotate(18, 70, 59.4)");
    //     setTimeout(function() {
    //         star.setAttribute("transform", "rotate(36, 70, 59.4)");
    //     }, 100)
    //     setTimeout(function() {
    //         star.setAttribute("transform", "rotate(54, 70, 59.4)");
    //     }, 200)
    //     setTimeout(function() {
    //         star.setAttribute("transform", "rotate(72, 70, 59.4)");
    //     }, 300)
    // })
});