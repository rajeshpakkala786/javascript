function switchoff()
{
document.getElementById("bulbid").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("catid").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
document.getElementById("heading").textContent="Switched Off";
document.getElementById("buttonOff").style.backgroundColor="#22c55e";
document.getElementById("buttonOn").style.backgroundColor="#cbd2d9";
}

function switchon(){
    document.getElementById("bulbid").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catid").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("heading").textContent="Switched on";
    document.getElementById("buttonOff").style.backgroundColor="#cbd2d9";
    document.getElementById("buttonOn").style.backgroundColor="#e12d39";
    }
    