$(document).ready(function () {
  if (location.pathname != "/modules")
    var navLink = "a[href*='" + location.pathname + "']";
    $(navLink).addClass("currentlink");
    $(navLink).parent("li").addClass("active");
});
