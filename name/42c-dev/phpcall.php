<?php
    $myObj = (object)array();
    $i = "/42c-dev/";

    // main slide image
    $myObj-> mainslide = [
        $i . "img/PI4_5140.jpg",
        $i . "img/PI4_6473.jpg",
        $i . "img/PI4_6489.jpg"
    ];

    // intro text
    $myObj->intro = '
            <h4>WELCOME TO
                <span class="primary-42C-color">42C THE CHIC</span> THE CHIC HOTEL NAKHONSAWAN</h4>
            <p>
                42C The Chic Hotel is new modern style hotel in Nakhon Sawan. The words 42C derived from 4 rivers from the north merged and
                form "Chaopraya River” the main river of the country nourishing large part of agriculture sector
                in Thailand. Take full scenic view through glass wall from floor to ceiling. The best scenic
                point in town and night market for shopping
            </p>';

    // overview hotel
    // ====================

    // room
    $roomobj = (object)array();
    $roomobj->type = "room";
    $roomobj->header = "ROOM";
    $roomobj->url = $i . "img/PI4_5140.jpg";
    $roomobj->content = "Modern and beautiful designed room with fully furnished and facilities. Variuos room type suitable for family or single traveller .";
    
    // returant
    $restobj = (object)array();
    $restobj->type = "restaurant";
    $restobj->header = "RESTAURANT";
    $restobj->url = $i ."img/PI4_6473.jpg";
    $restobj->content = "Luxury european designed at the center of the town. Come visit to taste the premium selected food and beverage ..";

    // conference
    $conobj = (object)array();
    $conobj->type = "conference";
    $conobj->header = "CONFERENCE ROOM";
    $conobj->url = $i ."img/conference/u_room/PI4_4826.jpg";
    $conobj->content = "Designed for on-demand event with great service provided. From medium to large conference room available with special offer for you .";

    

    //
    $myObj->overview = [
        $roomobj,
        $restobj,
        $conobj
    ];  
    $myJSON = json_encode($myObj);
    echo $myJSON;
?>