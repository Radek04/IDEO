document.getElementById("rozwiajnie").style.height = document.getElementById("glowny").style.height;
document.getElementById("czesc1").style.height = document.getElementById("glowny").style.height;
function menu()
    {
        if(document.getElementById("zwijanie").className=="lewo")
        {
            document.getElementById("nawigacja").style.display="none";
            document.getElementById("zwijanie").src = "strzalka_prawo.png";
            document.getElementById("zwijanie").className="prawo";
            document.getElementById("napis-menu").style.display="block";
        }
        else
        {
            document.getElementById("nawigacja").style.display="inline-block";
            document.getElementById("zwijanie").src = "strzalka_lewo.png";
            document.getElementById("zwijanie").className="lewo";
            document.getElementById("napis-menu").style.display="none";
        }
    }
function szukaj()
{
    if(document.getElementById("input-szukaj").style.className=="wyl")
    {
        document.getElementById("input-szukaj").style.display="inline-block"; 
        document.getElementById("input-szukaj").style.className="wl";
    }
    else
    {
        document.getElementById("input-szukaj").style.display="none";
        document.getElementById("input-szukaj").style.className="wyl";
    }
}