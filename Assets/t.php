<?

//require './aws-autoloader.php';
//phpinfo();

$sig="YIHjgQaEwirW+sIHxsPbkDFMeiPNXyHa9GAN8QvU19Es7Jbzll8ej4ZTjAEOcbapl2KNlAVJC+P40ur0b1d13msA9UxvFdgWG2z9NdxlgWMTRcYfBtDrQ499fPUid4IivrfZSdg9mGf9M7dw2pGl0pLKiV8X9NztIadAlz95t7uZqksoWngHqjtzsE98DSHeQY5kSET9cuozF/K/nllGkWWBC+Cbrc2886DeKazs7/JIg7mnqq3TqwOwnxEFaxbug/QXwLMzzx8hmVe9+rqCJgBY9Hb4mrejY8H6tIduE4XJCgs3ZSSFqa9yIvQdry6FO4t4g7Px3oxbtEASbrtIzA==";

$dat='{"orderId":"GPA.1317-3827-4758-84414","packageName":"com.coremedia.fish","productId":"koi110","purchaseTime":1459087168130,"purchaseState":0,"purchaseToken":"ggceecgfkpllhdpfocichoem.AO-J1Ox_ya7qF9cQ8dAoXZlksn2epb7umlizelwhbZAqY4M45mTmA7cEP_oAMdf2F_LFDyYzY88fCBfMOiHjj-7cC8B-BSWl_XDd30GRceyPudMV688SXRk"}';

		$pubkey = file_get_contents("public.pem");
		$pubkeyid = openssl_get_publickey($pubkey);
		$sig = base64_decode($sig);
		$ve = openssl_verify($dat, $sig, $pubkeyid);

print("ve:".$ve);

?>