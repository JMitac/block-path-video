(function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var video = document.getElementById('video');
    video.addEventListener('play',function(){
        video.play();
        var self = this;
        (function loop(){
            if(!self.paused && !self.ended){
                ctx.drawImage(self, 0, 0);
                setTimeout(loop,1000/30);
            }
        })(); 
    },0)
})();