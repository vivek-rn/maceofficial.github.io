
    $(document).ready(function () {
        read_value();
    });
  
var script_url = "https://script.google.com/macros/s/AKfycbwFuNDGUuwtdrqq-E1EnInh3H5KEqn50CyZUYVq5cdtrHgC3Sc/exec";

var imgname = []; 
  
 
function read_value() {

 var url = script_url+"?action=read";

 $.getJSON(url, function (json) {

     for (var i = 0; i < json.records.length; i++) {

         imgname[i] = json.records[i].Download;


         var x = document.createElement("IMG");
         x.setAttribute("src", imgname[i]);
         //x.setAttribute("width", "760");
         //x.setAttribute("height", "400");
         x.setAttribute("alt", "MACE_Img");
         x.className = "imgslider_img";
         var li = document.createElement("li");
         li.appendChild(x);
         var ul = document.getElementById("image_slider")
         ul.appendChild(li);
     }


     /*NEW SCRIPT*/


     var alinknxt = document.createElement("A");
     alinknxt.className = "control_next";
     alinknxt.innerHTML = ">>";

     var alinkprev = document.createElement("A");
     alinkprev.className = "control_prev";
     alinkprev.innerHTML = "<<";

     document.getElementById("slider").appendChild(alinknxt);
     document.getElementById("slider").appendChild(alinkprev);

     jQuery(document).ready(function ($) {

         $(function () {
             setInterval(function () {
                 moveRight();
             }, 5000);
         });

         var slideCount = $('#slider ul li').length;
         var slideWidth = $('#slider ul li').width();
         var slideHeight = $('#slider ul li').height();
         var sliderUlWidth = slideCount * slideWidth;

        // $('#slider').css({ width: slideWidth, height: slideHeight });

        // $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth - slideCount });

         $('#slider ul li:last-child').prependTo('#slider ul');

         function moveLeft() {
             $('#slider ul').animate({
                 left: +slideWidth
             }, 200, function () {
                 $('#slider ul li:last-child').prependTo('#slider ul');
                 $('#slider ul').css('left', '');
             });
         };

         function moveRight() {
             $('#slider ul').animate({
                 left: -slideWidth
             }, 200, function () {
                 $('#slider ul li:first-child').appendTo('#slider ul');
                 $('#slider ul').css('left', '');
             });
         };

         $('a.control_prev').click(function () {
             moveLeft();
         });

         $('a.control_next').click(function () {
             moveRight();
         });

     });

 });
}




