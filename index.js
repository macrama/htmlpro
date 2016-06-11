$('#btn-send').click(function(e) {
  // Please set your email in url field
  $.ajax({
      url: "https://formspree.io/macraens198@gmail.com",  
      method: "POST",
      error: function () {
        $('#container').html('<h1>hi</h1>')
      },
      data: {
             email: email.value,
             message: area.value,
             tel:phone.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<p>Good bye!</p>')
     
  } );
  e.preventDefault();
});


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(100,100,90,0,1*Math.PI);
ctx.font = "30px Arial";
ctx.strokeText("30%",80,100);
ctx.strokeStyle = "#FFA500";
ctx.stroke();