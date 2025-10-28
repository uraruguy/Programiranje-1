



function povecaj (x) {
    var y = 3;    // lokalno sprmennljivko lahko definiramo na dva načina; al z var al pa de jo damo v paramete x 
    x = x+1;
    y = y+2;
}

y = 10;
povecaj (y);
povecaj (y);
console.log (y);