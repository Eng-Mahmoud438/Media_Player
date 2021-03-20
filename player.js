class Player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height=screen.height + "px";
        if(screen.width<500){
heightMain.style.width = sreen.width + "px";
        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300 + "px";
    }
}
onload = new Player();
//class buttons
class Audio_Player{
    constructor(){
this.audio_file = document.getElementById("audio_file");
this.title_audio = document.getElementById("title_audio");
this.play_pauseb = document.getElementById("play_pause");
this.isPlayed;
this.play_pauseb.addEventListener("click",()=>{
    this.play_pause();
});
this.names_radio = [];
this.names_radio[0]="Radio Algerie";
this.names_radio[1]="Radio Maroc";
this.names_radio[2]="Radio International";
this.source_audio = [];
this.source_audio[0]="https://ch1.ice.infomaniak.ch/ch1-32.aac";
this.source_audio[1]="http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
this.source_audio[2]="https://rai.ice.infomaniak.ch/rai-32.aac";
this.server ==0;
this.setResource();
document.getElementById("next").addEventListener("click",()=>{
if(this.server<this.source_audio.length-1){
    ++this.server;
    this.isPlayed == false;
}else{
    this.server=0
}
localStorage.setItem("Save-Position",this.server);
this.setResource();
});
document.getElementById("back").addEventListener("click",()=>{
if(this.server>0){
--this.server;
this.isPlayed == false;
}else{
    this.server =this.source_audio.length-1;
}
localStorage.setItem("Save-Position",this.server);
this.setResource();
});
    }
    setResource(){
        if(localStorage.getItem("Save-Position")!=null){
this.server =localStorage.getItem("Save-Position");
        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML=this.names_radio[this.server];
        this.play_pause();
    }
   play_pause(){
if(this.isPlayed == false){
    this.audio_file.play();
    this.isPlayed = true;
    this.play_pauseb.src="./img/pause.png";//src="./img/pause.png"
}else{
    this.audio_file.pause();
    this.isPlayed = false;
    this.play_pauseb.src="./img/play.png";
}
    }
}
onload = new Audio_Player();
