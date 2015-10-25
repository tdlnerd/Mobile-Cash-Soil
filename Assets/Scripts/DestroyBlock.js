  #pragma strict
 var ScoreBox : UI.Text;
 var PS : GameObject;
 var Scorevar : Var;
 var Dig : AudioClip;
 
function Start () {
var SystemVar = GameObject.Find("Varsystem");
var Scorevar = SystemVar.GetComponent(Var);
}
 function OnCollisionEnter2D (hit : Collision2D) {
 	if (hit.gameObject.tag == "DigDirt") {
	 hit.gameObject.SetActive(false);
	 GetComponent.<AudioSource>().PlayOneShot(Dig);
	 var clone = Instantiate(PS, hit.transform.position, hit.transform.rotation);
	 }
	 if (hit.gameObject.tag == "Ore") {
	 var Calculations = hit.transform.localScale.x * 200;
	 Scorevar.Score = Scorevar.Score + Calculations;
	 Destroy(hit.gameObject);
	 }
}