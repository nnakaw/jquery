if(is_array($_FILES)) {
	if(is_uploaded_file($_FILES['userImage']['tmp_name'])) {
		$sourcePath = $_FILES['userImage']['tmp_name'];
		$targetPath = "https://rdnjrn2.blogspot.com/2019/03/up.html/".$_FILES['userImage']['name'];
		if(move_uploaded_file($sourcePath,$targetPath)) {
?>
			<img src="<?php echo $targetPath; ?>" width="150px" height="150px" />
<?php
		}
	}
}
