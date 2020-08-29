function Bulb(){
    var  image = document.getElementById('image');
    if(image.src.match("bulb.jpg")){
        image.src = "bulbb.jpg";
        document.getElementById("switch").value = "Turn Off";
        
    }else{
        document.getElementById("switch").value = "Turn On";
        image.src = "bulb.jpg";
        
    }
}