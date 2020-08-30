$(function () {
  $(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");
    var newDevour = {
      devoured: newEat,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevour,
    }).then(function () {
      console.log("changed sleep to", newEat);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#bg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("added a new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});