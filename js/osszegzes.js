function osszegzes(){
    let osszeg = 0;
    let span = document.getElementById("osszeg");
    
    for(let i=0; i<tomb.length; i++)
        osszeg += tomb[i];

    span.innerHTML = osszeg;
}

/* Átlagolás: HÁZI! */
