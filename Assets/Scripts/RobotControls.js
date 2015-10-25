
var rb: Rigidbody2D;
 var playerSpeed : float = 10; //speed player moves
 var turnSpeed : float = 100; // speed player turns
 var thrust: float;
 var jump = true;
 function Update () 
 {
 	 for (var touch : Touch in Input.touches) {
        if (touch.phase == TouchPhase.Began) {
            // Construct a ray from the current touch coordinates
            var ray = Camera.main.ScreenPointToRay (touch.position);
            }
     MoveForward(); // Player Movement
     Debug.Log(touch.position.x);
 }
 }
 
 function MoveForward()
 {
 	if(Input.GetKeyDown("up") && jump == true)//Press up arrow key to move forward on the Y AXIS
     {
      Jump();
     }
     if (null) //Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(0,0,-90);
     }
     if(Input.GetKey("left"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(180,0,180);
     }
     if(Input.GetKey("right"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(0,0,0);
     }
 
 }
 
 function Jump() {
 jump = false;
 rb.AddForce(transform.up * thrust);
         transform.rotation = Quaternion.Euler(180,0,180);
}


 
 
 