using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class GoogleScore : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Social.ReportScore(1, "CgkIyfaN6e0QEAIQAQ", (bool success) => {
			// handle success or failure
		});
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
