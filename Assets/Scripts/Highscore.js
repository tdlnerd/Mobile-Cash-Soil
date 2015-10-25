 #pragma strict
var UIbox : UI.Text;
function Start () {
var highscore = PlayerPrefs.GetInt("High Score");
UIbox.text = highscore.ToString();
}