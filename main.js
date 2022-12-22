Webcam.set({

    width: 360,
    height: 360,
    image_format: "png",
    png_quality: 90
})

Webcam.attach("#foto")

var varqualquer=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aBRdK93QF/model.json",modelLoad)

function modelLoad(){

    console.log("mineirinhoA")

}

function verificar() {

    Webcam.snap(function (data_uri) {

        document.getElementById("chegaalogo").innerHTML = '<img src="' + data_uri + '" id="9min" >'

    })


    var img = document.getElementById('9min')
    varqualquer.classify(img,speed)



}

function speed(error,results){

    if (error){
console.log(error)
    }

    else {
        console.log(results)
        document.getElementById('PMAIOR').innerHTML = 'o seu emoji deve ter sido'+results[0].label
    }

}