$(document).ready(function () {
  if (location.pathname != "/modules")
    $("a[href*='" + location.pathname + "']").addClass("currentlink");
});
