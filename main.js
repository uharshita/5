song1 ="";
song2 = "";
leftWristX = 0;
leftWristY= 0;
rightWristX=0;
rightWristY = 0

function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
console.log('PoseNet Is Initialized');

}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = "+ leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = "+ rightWristY);
}
}
function preload()
{
    song1 = loadSound("Ed Sheeran - Shape of You(Mr-Jatt1.com).mp3");
    song2 = loadSound("Illegal Weapon 2.0 - Street Dancer 3D 128 Kbps.mp3");

}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    
}