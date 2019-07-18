var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.unsplash.com/photos/?client_id=2162c09ca7ae984caf1bc3f5d7e744f735982861bba651eead6dfe374d346b09%0A",
    "method": "GET",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "PostmanRuntime/7.15.0",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "ab474d6a-3ea8-4b28-ba20-59e3d24df569,ea6644a8-394f-4c3b-b5c7-df2763209da6",
      "Host": "api.unsplash.com",
      "accept-encoding": "gzip, deflate",
      "content-length": "108",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    }
  }
  

$(".imgSearchButton").click(function(){
    $.ajax(settings).done(function (response) {
        console.log(response);
      });
})