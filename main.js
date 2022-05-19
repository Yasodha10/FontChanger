function setup()
{
    canvas=createCanvas(500, 500);
    canvas.position(500,160);
}
add = 10;
subtract = 10;

function increase()
{
    add=add+10;
    document.getElementById("font_change").innerHTML = "Add";
}
function decrease()
{
    subtract=subtract-10;
    document.getElementById("font_change").innerHTML = "Subtract";
}