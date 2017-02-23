
  $(document).ready(function(){

  $(".new-tweet textarea").on("input", function(our){

   let text = $(our.target).val().length;

   if(text > 140){
     $('.new-tweet .counter').css('color', 'red');
     $('.new-tweet .counter').text(`${140 - text}`);
   } else {
     $('.new-tweet .counter').css('color', 'black');
     $('.new-tweet .counter').text(`${140 - text}`);
   }

  })
  })
