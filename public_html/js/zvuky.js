/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 

$(document).ready(function() {
        
    var obj = document.createElement("audio");
    obj.src="http://kahimyang.info/resources/sound/click.mp3";
    obj.volume=1.0;
    obj.autoPlay=false;
    obj.preLoad=true;       
 
        $(".zvuk_stisk_tlacitka").click(function() {
            obj.play();
        });    
});
 

 
                        
