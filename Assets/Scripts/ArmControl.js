var Coll : Collider2D;

function ClawUp () {
transform.localRotation = Quaternion.Euler(0,0,50);
Reset();
}

function ClawDown () {
transform.localRotation = Quaternion.Euler(0,0,-50);
Reset();
}

function Reset() {
yield WaitForSeconds (0.25);
 transform.localRotation = Quaternion.Euler(0,0,0);
 }