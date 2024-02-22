using UnityEngine;
using System.Collections;

public class adm : MonoBehaviour {

	
	void imobileSdkAdsSpotDidReady ( string value) {
		print ("R:"+value);
	}
	void imobileSdkAdsSpotDidFail ( string value) {
		print ("F:"+value);
	}
	void imobileSdkAdsSpotDidShow ( string value) {
		print ("S:"+value);
	}
	void imobileSdkAdsSpotDidClick ( string value) {
		print ("C:"+value);
	}
	void imobileSdkAdsSpotDidClose ( string value) {
		print ("E:"+value);
	}
}
