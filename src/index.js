document.getElementById("reloadButton").addEventListener("click", function() {
    location.reload();
});

document.getElementById("menu-toggle").addEventListener("click", function(){
    var myCollapse = bootstrap.Collapse.getOrCreateInstance("menu-collapse");
    myCollapse.toggle();
});