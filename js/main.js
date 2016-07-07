$(document).ready(function(){
    
    uploadImages().done(function(){
        //initalize grid
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 200
        });
    });
});

function uploadImages(){
    var x = $.Deferred();
    for(var i=0; i< 19; i++){
        /** upload the 19 photos from the gallery folder **/
        var img = new Image();
        img.src = "img/gallery/img-" + i + ".jpg";
        var item = $("<div class='grid-item'></div>")
        item.append(img);
        $("#gallery .grid").append(item);
    }
    x.resolve();
}