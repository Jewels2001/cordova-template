
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI
    };

    $("#takePhoto").on("click", takePic);

    function takePic() {
        console.log("click");
        navigator.camera.getPicture(onSuccess, onError, options)
    }

    function onSuccess(imageData) {
        console.log("Success! :)");
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            //$('#photo1').href = myNewImage;
            $("#takePhoto").after("<img src='" + myNewImage + "'>");
            // $("#myimg").attr("src", imageData);
            // $("#gallery").append("<img src='" + imgData + "'>");
        }, onError);
    }

    function onError(message) {
        console.log("Error :(");
        alert("Photo not taken because " + message);
    }

}
