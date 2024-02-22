/*
using System;
using UnityEngine;
using UnityEngine.Advertisements;

internal class ads : MonoBehaviour {
    void Awake() {
        if (Advertisement.isSupported) {
            Advertisement.allowPrecache = true;
            Advertisement.Initialize ("95436");
        } else {
            Debug.Log("Platform not supported");
        }
    }

    void Update() {
			if (PlayerPrefs.GetInt("vid")>0) {
				PlayerPrefs.SetInt("vid",0);
        Advertisement.Show(null, new ShowOptions {
             pause = true,
             resultCallback = result => {
                 Debug.Log("UnityAds:"+result.ToString());
                 if (result.ToString().IndexOf("Finish")>=0) {
                 			PlayerPrefs.SetInt("pp",1);
                 }
             }
         });
			}
    }
    
    void OnGUI() {
		}
}
*/