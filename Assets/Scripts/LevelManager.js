var Roundvar : Var;
function OnCollisionEnter2D (hit : Collision2D) {
		if (hit.gameObject.tag == "Player") {
	hit.transform.position = Vector2(25.14,-4);
	Application.LoadLevel (Application.loadedLevelName);
	Roundvar.Round = Roundvar.Round + 1;
   }
}