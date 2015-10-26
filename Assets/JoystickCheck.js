var JTrans : Transform;
var Startx : float;
var Starty : float;
var Difx : float;
var Dify : float;
function Start () {
Startx = transform.position.x;
Starty = transform.position.y;
}

function Update () {
Difx = Startx - transform.position.x;
Dify = Starty - transform.position.y;
Debug.Log(Difx);
}