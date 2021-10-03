chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerHTML = selection[0];
    console.log(selection[0]);
    console.log( document.getElementById("output").innerHTML);
});