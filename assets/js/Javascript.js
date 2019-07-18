function runQuery(){
  var query = $(".imgSearchInput").val()

    var settings = {
        "url": "https://api.unsplash.com/search/photos/?per_page=25&page=1&client_id=2162c09ca7ae984caf1bc3f5d7e744f735982861bba651eead6dfe374d346b09&query="+query,
        "method": "GET",
      }

    $.ajax(settings).done(function (response) {
        response.results.forEach(element => {
            var imgLink = "<img alt='"+element.alt_description+"' src='"+element.urls.thumb+"'>";
            $(".resultComponent").append(imgLink)
        });
      });
}

$(".imgSearchButton").click(function(){
  runQuery()
})

$(document).on('keypress',function(e) {
  if(e.which == 13) {
    runQuery()
  }
});