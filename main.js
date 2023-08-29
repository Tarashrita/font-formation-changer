function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(782,550);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    };
}

function draw() {
    background('#E6E6FA');
}

function modelLoaded() {
    console.log("PoseNet has been initialized!");
}

