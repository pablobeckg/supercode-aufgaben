const date = new Date();
let utcdate = new Date().toUTCString();


    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const format1 = date.toLocaleDateString("en-GB");
    const format2 = date.toLocaleDateString("es-CL");

    document.querySelector('h1').innerHTML = date.toLocaleDateString();
    document.querySelector('h2').innerHTML = utcdate;
    document.querySelector('h3').innerHTML = format1;
    document.querySelector('h4').innerHTML = format2;
    document.querySelector('h5').innerHTML = day;
    document.querySelector('h6').innerHTML = month;
    document.querySelector('p').innerHTML = year;
   
 


