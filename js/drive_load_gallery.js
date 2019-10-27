
    $(document).ready(function () {
        read_value();
    });

    var script_url = "https://script.google.com/macros/s/AKfycbz-LtKLCstYk0vukCk0lSnoeLiTAysW9Wo7w1f6vm8j3acuJ1GY/exec";

var imgname = []; 
  
 
function read_value() {

 var url = script_url+"?action=read";

 $.getJSON(url, function (json) {

     for (var i = 0; i < json.records.length; i++) {

         imgname[i] = json.records[i].Download;


         var y = document.createElement("IMG");
         y.setAttribute("src", imgname[i]);
         y.setAttribute("width", "300");
         y.setAttribute("height", "300");
         y.setAttribute("alt", "MACE_Img");
         y.setAttribute("style", "margin: 1%;background-color:white; border-radius: 21px 21px 21px 21px;border 1px solid green;");
         y.className = "imggallery_img";
         var divs = document.getElementById("image_load_gallery")
         divs.appendChild(y);
     }
 });
}
