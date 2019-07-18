


  

$(".imgSearchButton").click(function(){
    var query = $(".imgSearchInput").val()

    var settings = {
        "url": "https://api.unsplash.com/photos/?per_page=25&client_id=2162c09ca7ae984caf1bc3f5d7e744f735982861bba651eead6dfe374d346b09&query="+query,
        "method": "GET",
      }

    $.ajax(settings).done(function (response) {
        response.array.forEach(element => {
            var imgLink = element.url.full
        });
      });
})