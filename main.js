noseX=0;
noseY=0;

difference = 0;

rightWristX = 0;

leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(400, 400);
    canvas.position(450, 220);

    poseNet = ml5.poseNet(video, modelLaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Inicializou!')
}

function gotPoses(results) {

    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw() {
    background('#68BD84');
}
