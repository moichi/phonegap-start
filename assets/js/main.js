(function($) {
  document.addEventListener("deviceready", function() {
  // 処理は全てこの中に書いていきます。
		
    $("#camera").click(function(){
      navigator.camera.getPicture(function(url) {
        $("#image").attr("src", url);
      }, function(error) {
        alert("camera error");
      }, {quality: 50, destinationType: Camera.DestinationType.FILE_URI});
    });
		
  });
})(jQuery);