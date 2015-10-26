 #pragma strict
import SimpleJSON;
var Score : float;
var Damage : float;
var Round : float;
var Live : float;
var ScoreBox : UI.Text;
var RoundBox : UI.Text;
var DamageBar : UI.Slider;
var LiveBox : UI.Text;
var HSBox : UI.Text;
var highscore : float;
var url = "http://files.helloben.co/cashdirt_server/insert";
var HA : String;
var UploadT = false;
var NoMore = false;
var Name : UI.Text;
var highscoreUrl= "http://files.helloben.co/cashdirt_server/insert";
var CheckName : UI.InputField;
var RandomName : String[];
var ULMessage : UI.Text;

function Awake () {
DontDestroyOnLoad (gameObject);
	if (FindObjectsOfType(GetType()).Length > 1)
         {
             Destroy(gameObject);
         }
}	

function Update () {
ScoreBox.text = Score.ToString();
RoundBox.text = Round.ToString();
DamageBar.value = Damage;
LiveBox.text = Live.ToString();
	if (Live < 1 &&  NoMore == false) {	
	Application.LoadLevel("GameOver");
	if (Score > highscore) {
	PlayerPrefs.SetInt("highscore", Score);
		}
	Destroy(gameObject);
	}
	}

function Start () {
ULMessage.text = "";
Round = 1;
Damage = 100;
Score = 0;
highscore = PlayerPrefs.GetInt("highscore");
}