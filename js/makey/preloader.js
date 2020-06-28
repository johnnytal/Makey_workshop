var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px', fill: 'lightgrey', fontWeight: 'normal', align: 'center'
        });
     
        game.load.image('makey', 'assets/makey/images/makey.png');
        game.load.image('space', 'assets/makey/images/space.png');
        game.load.image('click', 'assets/makey/images/click.png');
        game.load.image('up', 'assets/makey/images/up.png');
        game.load.image('down', 'assets/makey/images/down.png');
        game.load.image('right', 'assets/makey/images/right.png');
        game.load.image('left', 'assets/makey/images/left.png');
        game.load.image('bg', 'assets/makey/images/bg.jpg');

        game.load.audiosprite('vibes', 'assets/makey/audio/vibes.mp3', null, audioVibes);
        game.load.audiosprite('harp', 'assets/makey/audio/harp.mp3', null, audioHarp);
        game.load.audiosprite('bass', 'assets/makey/audio/bass.mp3', null, audioBass);
        game.load.audiosprite('pizz', 'assets/makey/audio/pizz.mp3', null, audioPizz);
        game.load.audiosprite('tuba', 'assets/makey/audio/tuba.mp3', null, audioTuba);
        game.load.audiosprite('drums', 'assets/makey/audio/drums.mp3', null, audioDrums);
        game.load.audiosprite('oud', 'assets/makey/audio/oud.mp3', null, audioOud);
        
        game.load.audiosprite('kalimba', 'assets/makey/audio/kalimba.mp3', null, audioKalimba);
        game.load.audiosprite('log', 'assets/makey/audio/log.mp3', null, audioLog);
        game.load.audiosprite('pan', 'assets/makey/audio/pan.mp3', null, audioPan);
        game.load.audiosprite('xylo', 'assets/makey/audio/xylo.mp3', null, audioXylo);
        game.load.audiosprite('glock', 'assets/makey/audio/glock.mp3', null, audioGlock);
        game.load.audiosprite('metals', 'assets/makey/audio/metals.mp3', null, audioMetals);
    },
    
    create: function(){
        this.game.state.start("Game"); 
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};