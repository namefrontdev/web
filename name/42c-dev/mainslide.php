<?php
    $path = "/42c-dev/";
    $mainslide = (object)array();
    
    $mainslide->images = [
        $path. "img/PI4_6473.jpg",
        $path. "img/PI4_6489.jpg",
        $path. "img/PI4_5140.jpg",
    ];  
    $myJSON = json_encode($mainslide);
    echo $myJSON;
?>