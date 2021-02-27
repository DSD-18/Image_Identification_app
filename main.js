// Coding for webcam
Webcam.set({
    width:310, height: 300, image_format:'png',png_quality:90,
    constraints:{   
        facingMode:"environment"
    }
});
Webcam.attach("#camera");

function take_snapshot (){
    Webcam.snap(function(snapimage){
    document.getElementById('result').innerHTML = "<img src='" + snapimage + "' id='captured_image'>"
});
};

classifier = ml5.imageClassifier('mobileNet', modelloaded);
console.log('ml5version', ml5.version)
function modelloaded(){
    console.log('modelloaded')
}
function check(){
    img= document.getElementById('captured_image');
    classifier.classify( img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);

    }
    else{
        console.log(results);
        document.getElementById('object_name').innerHTML = results[0].label
    }    
}