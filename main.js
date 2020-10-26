$(document).ready(() => {
  // SEARCH
  $("#search-btn").on("click", function () {
    var api_url = "https://images-api.nasa.gov";
    var key = "vzj8JrmpKONko2DW5C4KPzOQTADnPyaRnSBCnElz";
    const text = $("#user-text").val();

    $(".container").empty();

    $.get(`${api_url}/search?title=${text}`).then((data) => {
      console.log("success", data);
      const container = $(".container");
      data.collection.items.slice(0, 20).forEach((item) => {
        //links [] => href => "https://"
        var pic = $('<img class="border border-white"/>'); // creating new img element
        var picLink = item.links[0].href; //get link from object
        // var name = $('<p/>')
        var titleText = item.data[0].title;
        const title = $(`<p class="title">${titleText}</p>`);
        pic.attr("src", picLink); // set src attribute to the link
        container.append(title);
        pic.appendTo(title);
      });
    });
    $("#loadmore").toggleClass("hidden");
  });
  // LOADMORE
  $("#loadmore").on("click", function () {
    var api_url = "https://images-api.nasa.gov";
    var key = "vzj8JrmpKONko2DW5C4KPzOQTADnPyaRnSBCnElz";

    const text = $("#user-text").val();

    $.get(`${api_url}/search?title=${text}`).then((data) => {
      console.log("success", data);
      const container = $(".container");
      const picText = $("#pictext");
      data.collection.items.slice(21, 40).forEach((item) => {
        var pic = $('<img class="border border-white"/>');
        var picLink = item.links[0].href;
        var titleText = item.data[0].title;
        const title = $(`<p class="title">${titleText}</p>`);
        pic.attr("src", picLink);
        container.append(title);
        pic.appendTo(title);
      });
    });
  });
});

var buttonmore = document.getElementById("loadmore");
buttonmore.addEventListener("click", hideshow, false);

function hideshow() {
  document.getElementById("loadmore").style.display = "block";
  this.style.display = "none";
}
