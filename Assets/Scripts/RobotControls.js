
var rb: Rigidbody2D;
 var playerSpeed : float = 10; //speed player moves
 var turnSpeed : float = 100; // speed player turns
 var thrust: float;
 var jump = true;
 var tpos : Vector2;
var Left = false;
var Right = false;
var holder = false;
var JS : JoystickCheck;
function Start () {
JS = GameObject.Find("JS").GetComponent(JoystickCheck);
}
 function Update () {
     MoveForward(); // Player Movement
     Debug.Log(tpos);
 }
 
 function MoveForward()
 {
     if(JS.Difx > 20)//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(180,0,180);
         }
     if(JS.Difx < -20)//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(0,0,0);
     }
     if(JS.Dify > 20) {
     transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(0,0,-90);
      }
 }
 function Jump() {
 	if (jump == true) {
 	jump = false;
 	rb.AddForce(transform.up * thrust);
  }
}

function Down () {
transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(0,0,-90);
}

 
 
 