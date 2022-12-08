wirstX=0;
wirstY=0;

function setup()  {

    video = createCapture(VIDEO);
    video.size(550,500); 

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaed);
    poseNet.on('pose',gotPoses) ;
}

function modelLoaeded () {

console.log('poseNet is initialized');

}

function gotPosese(results) {

    if(results.length > 0) 

   {
    console.log(results);
    wirstX = results[0].pose.nose.x;
    wirstY = results[0].pose.nose.y;
    console.log("wirstX =" +  wirstX + "wirstY =" + wirstY);
   } 
}

function draw() {

    background('#b778c2');
    Fill('red');
    storke('black');
}

