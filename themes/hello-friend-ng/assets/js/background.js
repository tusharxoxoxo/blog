// Cycle a gradient on background of the page
var darkColors = new Array(
[37,38,39], //#252627
[43,48,58], //#2B303A
[48,58,77], //#303A4D
[54,68,96], //#364460
[59,78,115], //3B4E73
[68,88,134], //#415886
[70,98,153] //#466299
);

var lightColors = new Array(
[250,250,250], //#FAFAFA
[242,243,247], //#F2F3F7
[233,236,243], //#E9ECF3
[225,230,240], //#E1E6F0
[217,223,236], //#D9DFEC
[208,216,233], //#D0D8E9
[200,209,229] //#C8D1E5
); 

if (isDark) {
    var colors = darkColors;
}
else {
    var colors = lightColors;
}

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.004;

function updateGradient() {
  
    if ( $===undefined ) return;
  
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";

    $('#container').css({
    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        
        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        
    }
}

var isPost = $('#post-info').length;

if (!isMobile() && !isPost) {
    setInterval(updateGradient,10);
    // observe the toggleTheme button
    var prevClassState = document.body.classList.contains("dark-theme");
    var themeObserver = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            if(mutation.attributeName == "class"){
                                var currentClassState = mutation.target.classList.contains("dark-theme");
                                if(prevClassState !== currentClassState)    {
                                    prevClassState = currentClassState;
                                    if(currentClassState)
                                        colors = darkColors;
                                    else
                                        colors = lightColors;
                                }
                            }
                        });
                    });
    themeObserver.observe(document.body, {attributes: true});
}