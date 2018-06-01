window.onload = function(e){ 
    var images = document.getElementsByClassName('lazyload')
    for (var i = images.length - 1; i >= 0; i--) {
        images[i].src=images[i].getAttribute("data-src")
    }
    var imagesBackground = document.getElementsByClassName('lazyloadBackground')
    for (var i = imagesBackground.length - 1; i >= 0; i--) {
        imagesBackground[i].style.backgroundImage='url('+ imagesBackground[i].getAttribute("data-src")+")"
    }
}