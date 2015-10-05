var vid = document.getElementById('vid');
document.getElementById("get").addEventListener("click", test);
function test(){
    var x = Math.floor((Math.random() * 10) + 1);
    if( x == 1 ){
vid.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/DsLRuwPX6c8" frameborder="0" allowfullscreen></iframe>';
    }
    if( x == 2){
     vid.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EglOsfErtaE" frameborder="0" allowfullscreen></iframe>';
    }
    if( x== 3){
     vid.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/jofNR_WkoCE" frameborder="0" allowfullscreen></iframe>';
    }
    if( x== 4){
     vid.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6gx79m23lZA" frameborder="0" allowfullscreen></iframe>';
    }

    if(x == 5){
        vid.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/HFgAPQ43oXk" frameborder="0" allowfullscreen></iframe>';
    }
    if(x == 6){
        vid.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/4AFuzwmokGI" frameborder="0" allowfullscreen></iframe>';
    }
    if(x == 7){
        vid.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/lG5cEik2ABY" frameborder="0" allowfullscreen></iframe>';
    }
    if(x == 8){
        vid.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/D3gAcyIB358" frameborder="0" allowfullscreen></iframe>';
    }
    if(x == 9){
        vid.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/75bMzTkwUAY" frameborder="0" allowfullscreen></iframe>';
    }
    if(x == 10){
        vid.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/oNpMDN4QqD8" frameborder="0" allowfullscreen></iframe>';
    }
}
