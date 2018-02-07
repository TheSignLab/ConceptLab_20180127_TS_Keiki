<?php

header("Access-Control-Allow-Origin: *");
$jsonArray = array('Status' => 'No Connected',  
                   'Message' => 'None', 
                   'PhotoKey' => 'None', 
                   'PhotoURL' => 'None');
                   
    



// --  Credenciales  --//
    $servername = "localhost";
    $username = "thesign_admin";
    $password = "lvosca.inc";
    $dbname = "thesign_app_db";
    $table = "launch_app";
// -------------------//






// --   Conexión   --//
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
// ------------------//







// --   Agregar Photo  --//



 $targetPath = "No Try";

// Do something with the gif image
$file = $_FILES['image']['tmp_name'];
file_put_contents("image.gif",$file );

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES['image']['tmp_name']);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES['image']['tmp_name']);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES['image']['tmp_name'] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {    
    $uploadOk = 0;
    echo "No img file";
     echo $target_file;
}




// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
        echo "The file ". basename( $_FILES['image']['tmp_name']). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}



try {
    $targetPath = "Try";
    // Do something with the gif image
$file = $_FILES['image']['tmp_name'];
} catch (Exception $e) {
        $targetPath = "Try Error";

}


$photo_path = $targetPath;
$last_id = $conn->insert_id;
$photo_key = md5($last_id);




$sql = "INSERT INTO $table (dName, dEmail, dPhotoPath,dPhotoKey) VALUES ('John', 'john@example.com','$photo_path','$photo_key')";
$sql_Ok = "";
$sql_result = $conn->query($sql);
if ($sql_result== TRUE) {  
    $sql_Ok = "Ok";
} else {
    $sql_Ok = "No Ok";
}


if ($sql_Ok == "Ok") {  
    
    $jsonArray['Status'] = 'Ok';    
    $jsonArray['Message'] = " Todo bien";      
    $jsonArray['PhotoKey'] = " $photo_key ";  
    $jsonArray['PhotoURL'] = " $photo_path ";   


} else {
    
    $jsonArray['Status'] = 'Error';    
    $jsonArray['Message'] = "Todo mal" ;    
    $jsonArray['PhotoKey'] = "$photo_key ";  
    $jsonArray['PhotoURL'] = " $photo_path ";  
}


// -----------------------------------------//









// -- Objeto de Salida -- //
   // $conn->close();
    echo json_encode($jsonArray);
//------------------------//






?>
