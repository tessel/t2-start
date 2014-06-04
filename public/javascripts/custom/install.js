$(function () {
  var foundOS = false;
  var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
  var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
  var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

  isMac && $('#osx-tab').trigger('click');
  isWindows && $('#pc-tab').trigger('click');
  isLinux && $('#linux-tab').trigger('click');

  // show based on window hash
  var hash = window.location.hash;
  if (hash) {
    hash = hash.substring(hash.indexOf('#')+1).toLowerCase();
    if (['osx', 'linux', 'windows'].indexOf(hash) != -1){
      $('#'+hash+'-tab').trigger("click");
      foundOS = true;
    }
  }

  foundOS = foundOS || isMac || isWindows || isLinux;
  if (!foundOS) {
    // no clue what os, display everything
    splitTabs($("#install-tabs"), $("#install-content"), $("#anchor"));
  }

  function getFirstAndRest(e) {
    var children = e.children();

    // takes an element and splits it up into first child and rest of children
    var first = $(children[0]);
    var rest = [];
    for(var i = 1; i < children.length; i++){
      rest.push($(children[i]));
    }

    return {"first": first, "rest": rest};
  }

  function splitTabs(tabElement, tabContent, anchor){
    // takes a tabbed element and splits it up longform
    tabElement.removeAttr("data-tabs");
    // get the list of children, all the tab items
    var tabs = getFirstAndRest(tabElement);
    // empty all except the first
    tabElement.empty();
    var emptyTab = tabElement.clone();
    tabElement.append(tabs.first);
    $(tabElement.children("dd")).css("width", "100%");

    // do the same thing with content
    var contents = getFirstAndRest(tabContent);
    tabContent.empty();
    var emptyContent = tabContent.clone();
    tabContent.append(contents.first);

    // reconstruct some more tabs
    for (var i = 0; i < tabs.rest.length; i++){
      var tempTab = emptyTab.clone();
      tempTab.append(tabs.rest[i]);
      $(tempTab.children("dd")).addClass("active").css("width", "100%");

      var tempContent = emptyContent.clone();
      tempContent.append(contents.rest[i]);
      $(tempContent.children(".content")).addClass("active");

      anchor.append(tempTab);
      anchor.append(tempContent);
    }
  }
})