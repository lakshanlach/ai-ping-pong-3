function preload(){

}


function setup(){
    canvas =  createCanvas(700,520);
    canvas.parent(document.getElementById("canvas"))
   
    
   video = createCapture(VIDEO)
   video.size(700, 600)
   video.position(328,125)
   
   
   poseNet = ml5.poseNet(video, modelLoaded)
   poseNet.on("pose", gotPoses)
   }
   
   function modelLoaded() {
     console.log('modelloaded')
}

function draw(){

}

function gotPoses(){
    
}