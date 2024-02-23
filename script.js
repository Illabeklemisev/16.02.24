function draw(event) {
    let canvas = document.getElementById("imgCanvas");
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();

    let posX = event.clientX;
    let pasY = event.clientY;

    ctx.fillstyle = "#00ff00"

    ctx.arc(posX, posY, 50, 0, 2 * Math.PI)

    
}