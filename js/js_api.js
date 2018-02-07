function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}



function uploadPic2Server(){
    
    
   

  // Get the form element withot jQuery
var form = document.getElementById("apiForm");

var ImageURL = tsCanvasOut.toDataURL();
// Split the base64 string in data and contentType
var block = ImageURL.split(";");
// Get the content type of the image
var contentType = block[0].split(":")[1];// In this case "image/gif"
// get the real base64 content of the file
var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

// Convert it to a blob to upload
var blob = b64toBlob(realData, contentType);

// Create a FormData and append the file with "image" as parameter name
var formDataToUpload = new FormData(form);
formDataToUpload.append("image", blob);
    
    $.ajax({
    url:"http://thesign.jlmayorga.com.co/launch/upload_photo.php",
    data: formDataToUpload,// Add as Data the Previously create formData
    type:"POST",
    contentType:false,
    processData:false,
    cache:false,
    dataType:"json", // Change this according to your response from the server.
    error:function(err){
        console.error(err);
    },
    success:function(data){
        console.log(data);
    },
    complete:function(){
        console.log("Request finished.");
    }
});

}
