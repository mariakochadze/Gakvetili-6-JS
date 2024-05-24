function switchi(){
    let svichi = document.getElementById("switch").innerHTML;

    console.log(svichi);

    if(svichi == '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>'){
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';

        document.documentElement.style.setProperty("--surati", "url(../img/shavi.jpg)");

    }
    else{
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.documentElement.style.setProperty("--surati", "url(../img/tetri.jpg)");

    }
}