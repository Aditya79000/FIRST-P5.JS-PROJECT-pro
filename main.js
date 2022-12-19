function take_snapshot(){
    save('student_name.png');
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video,130,70,350,350);
    stroke(255,100,0);
    fill(0,255,138);
    circle(500,50,70);

    stroke(255,100,0);
    fill(0,255,138);
    circle(110, 50, 70);

    stroke(255,100,0);
    fill(0,5,155);
    rect(146, 40, 320, 30,20);

    stroke(255,100,0);
    fill(0,5,155);
    rect(100, 83, 30, 320,20);

    stroke(255,100,0);
    fill(0,5,155);
    rect(480, 83, 30, 320,20);

    stroke(255,100,0);
    fill(0,255,138);
    circle(110,435,65,70);

    stroke(255,100,0);
    fill(0,5,155);
    rect(143, 420, 320, 30, 20); 

    stroke(255,100,0);
    fill(0,255,138);
    circle(495,435,65,70);

}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
