document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('.video-hover');

    videos.forEach(function(video) {
        video.addEventListener("mouseover", function() {
            video.play();
        });

        video.addEventListener("mouseout", function() {
            video.pause();
        });
    });
});