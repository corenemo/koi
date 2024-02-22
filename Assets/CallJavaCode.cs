//Aqualand

/*
using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;
using System;

public class CallJavaCode : MonoBehaviour 
{
	private AndroidJavaClass tapjoyConnect;
	private AndroidJavaObject tapjoyConnectInstance;
	private AndroidJavaObject currentActivity;
	
	bool queryFeaturedApp = false;
	bool queryDisplayAd = false;
	bool queryTapPoints = false;
	bool querySpendPoints = false;
	bool queryAwardPoints = false;
	
	string tapPointsLabel = "";
	
	public int pt=0;
	
	void Start ()
	{
		pt=PlayerPrefs.GetInt("pt");
		// Attach our thread to the java vm; obviously the main thread is already attached but this is good practice..
		JavaVM.AttachCurrentThread();
		
		// Enable logging for debugging.
		AndroidJavaClass tapjoyLog = new AndroidJavaClass("com.tapjoy.TapjoyLog"); 
		tapjoyLog.CallStatic("enableLogging", true);
		
		// Get the activity context for Android.
		AndroidJavaClass jc = new AndroidJavaClass("com.unity3d.player.UnityPlayer"); 
		currentActivity = jc.GetStatic<AndroidJavaObject>("currentActivity");
		
		// Connect to the Tapjoy servers.
		tapjoyConnect = new AndroidJavaClass("com.tapjoy.TapjoyConnect");
		tapjoyConnect.CallStatic("requestTapjoyConnect", 
		              			currentActivity,										// Activity context. 
		              			"19c0ea86-4023-44a0-b0b4-960252806474", 				// YOUR APP ID GOES HERE
		              			"HSB0NQAGvykOOWkva0bJ");								// YOUR SECRET KEY GOES HERE
		
		tapjoyConnectInstance = tapjoyConnect.CallStatic<AndroidJavaObject>("getTapjoyConnectInstance");
		tapjoyConnectInstance.Call("initVideoAd");
		
		
	}
	
	void ad () {
		print ("ad");
//		queryDisplayAd = true;		
	}
	
	
	private string showOffers = "show offers";
	private string featuredApp = "show featured app";
	private string displayAd = "display ad";
	private string getPoints = "get tap points";
	private string spendPoints = "spend points";
	private string awardPoints = "award points";
	
	void OnGUI()
	{
		int y = 25;
		int h = 60;
		int pad = 25;
		
		// Display status
//		GUI.Box(new Rect (15, 180, 200, 20), tapPointsLabel);
		
		y += h + pad;

		if (GUI.Button(new Rect (0, 40, 40, 40), "Free\nPearl")) {
			Debug.Log("showing offers...");
			tapjoyConnectInstance.Call("showOffers");
		}

		
		if (PlayerPrefs.GetInt("chk")>0)
		{
			PlayerPrefs.SetInt("chk",0);
			tapjoyConnectInstance.Call("getTapPoints");
			queryTapPoints = true;
		}
				
		y += h + pad;
		
		y += h + pad;
		
		if (queryFeaturedApp)
		{
			// Debug.Log("QUERY FEATURED APP: " + tapjoyConnectInstance.Call<bool>("didReceiveFeaturedAppData"));
			
			if (tapjoyConnectInstance.Call<bool>("didReceiveFeaturedAppData"))
			{
				//Debug.Log("---------- FEATURED APP ----------");
				tapjoyConnectInstance.Call("showFeaturedAppFullScreenAd");
				
				queryFeaturedApp = false;
			}
			else
			if (tapjoyConnectInstance.Call<bool>("didReceiveFeaturedAppDataFail"))
			{
				tapPointsLabel = "Get Featured App failed";
				queryFeaturedApp = false;
			}
		}
		
		if (queryDisplayAd)
		{
			// Debug.Log("QUERY DISPLAY AD: " + tapjoyConnectInstance.Call<bool>("didReceiveDisplayAdData"));
			
			if (tapjoyConnectInstance.Call<bool>("didReceiveDisplayAdData"))
			{
				//Debug.Log("---------- DISPLAY AD ----------");
				tapjoyConnectInstance.Call("showBannerAd");
				
				queryDisplayAd = false;
			}
			else
			if (tapjoyConnectInstance.Call<bool>("didReceiveDisplayAdDataFail"))
			{
				tapPointsLabel = "Get Display Ad failed";
				queryDisplayAd = false;
			}
		}
		
		if (queryTapPoints)
		{
			if (tapjoyConnectInstance.Call<bool>("didReceiveGetTapPointsData"))
			{
				//Debug.Log("---------- GET TAP POINTS ----------");
				//Debug.Log("points: " + tapjoyConnectInstance.Call<int>("getTapPointsTotal"));
				pt +=tapjoyConnectInstance.Call<int>("getTapPointsTotal");
				tapPointsLabel = "Total TapPoints: " + pt.ToString();
				
				queryTapPoints = false;
				
				PlayerPrefs.SetInt("pt",pt);
				if (tapjoyConnectInstance.Call<int>("getTapPointsTotal")>0) {
				tapjoyConnectInstance.Call("spendTapPoints",tapjoyConnectInstance.Call<int>("getTapPointsTotal"));
					querySpendPoints = true;
				}
			}
			else
			if (tapjoyConnectInstance.Call<bool>("didReceiveGetTapPointsDataFail"))
			{
				tapPointsLabel = "Get Tap Points failed";
				queryTapPoints = false;
			}
		}
		
		if (querySpendPoints)
		{
			if (tapjoyConnectInstance.Call<bool>("didReceiveSpendTapPointsData"))
			{
				//Debug.Log("---------- GET SPEND TAP POINTS ----------");
				//Debug.Log("points: " + tapjoyConnectInstance.Call<int>("getTapPointsTotal"));
				tapPointsLabel = "Total TapPoints: " + (tapjoyConnectInstance.Call<int>("getTapPointsTotal")).ToString();
				
				querySpendPoints = false;
			}
			else
			if (tapjoyConnectInstance.Call<bool>("didReceiveSpendTapPointsDataFail"))
			{
				tapPointsLabel = "Spend Points failed";				
				querySpendPoints = false;
			}
		}
		
		if (queryAwardPoints)
		{
			if (tapjoyConnectInstance.Call<bool>("didReceiveAwardTapPointsData"))
			{
				//Debug.Log("---------- GET TAP POINTS ----------");
				//Debug.Log("points: " + tapjoyConnectInstance.Call<int>("getTapPointsTotal"));
				tapPointsLabel = "Total TapPoints: " + (tapjoyConnectInstance.Call<int>("getTapPointsTotal")).ToString();
				
				queryAwardPoints = false;
			}
			else
			if (tapjoyConnectInstance.Call<bool>("didReceiveAwardTapPointsDataFail"))
			{
				tapPointsLabel = "Award Points failed";
				queryAwardPoints = false;
			}
		}
	}
}

*/
