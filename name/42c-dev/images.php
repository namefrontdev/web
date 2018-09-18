<?php
    $path = "/42c-dev/";
    $images = (object)array();
    
    $images->overview = [
        $path. "img/PI4_6473.jpg",
        $path. "img/PI4_6489.jpg",
        $path. "img/PI4_5140.jpg",
    ];  
    $myJSON = json_encode($images);
    echo $myJSON;
?>