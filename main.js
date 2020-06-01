$(document).ready(function() {

  $.ajax({
    url: "getPagamenti.php",
    method: "GET",
    success: function(data, stato){

      for (var i = 0; i < data.length; i++) {
        var pory = data[i].status;
        var jax = data[i].price;
        $("main").append(pory);
        $("main").append(jax);
        $("main").append("<br>");
      }

    },
    error: function (err){
      alert("chiulo");
    }
  });
})
