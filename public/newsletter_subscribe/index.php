<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	header("Access-Control-Allow-Methods: *");
	
	$submitStream = file_get_contents('php://input');
	$postData = json_decode($submitStream, true);
	if ($submitStream && $postData['email']) {
		// echo $postData['email'];
		$url = 'https://us12.api.mailchimp.com/3.0/lists/2aeaa55cca/members';
		$data_array = array(
			'email_address' => $postData['email'],
			'status' => 'subscribed'
		);
		$data = json_encode($data_array);
	
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_USERPWD, 'user:1c356f36d04d7a24af073c24f8594fe7-us12');
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$resp = curl_exec($ch);
	
		/* if ($e = curl_error($ch)) {
			echo 'error:'. $e;
		} else {
			$decoded = json_decode($resp);
			foreach ($decoded as $key => $value) {
				echo '<p><b>'. $key .':</b> '. json_encode($value) .'</p>' ;
			}
		}; */
		// echo json_encode($postData);
		// echo $resp;
		echo 'finished';

		curl_close($ch);
	} else {
		print_r('404');
	};
?>