window.addEventListener("load", function(){
	var addAlbumBtn = document.getElementsByClassName("addAlbum");
	var formContainer = document.getElementsByClassName("formsContainer");
	var exitForm = document.getElementsByClassName("exitForm");
	var forms = document.getElementsByClassName("form");
	var nextForm = document.getElementsByClassName("nextForm");
	var prevForm = document.getElementsByClassName("prevForm"); 

	for(i=0; i < forms.length; i++){
		forms[i].style.display = "none";
	}


	addAlbumBtn[0].addEventListener("click", function(link){
		link.preventDefault();
		formContainer[0].style.display = "flex";
		forms[0].style.display = "inline";
		
	});

	exitForm[0].addEventListener("click", function(){
		formContainer[0].style.display = "none";
	});

	nextForm[0].addEventListener("click", function(){
		var get_info = new XMLHttpRequest();

		get_info.addEventListener("load", function(e){
			var r = e.target.response;
			var response = JSON.parse(r);
			var artistName = document.getElementsByClassName("artistName")[0].value.split(" ").join("_");
			var albumTitle = document.getElementsByClassName("albumTitle")[0].value.split(" ").join("_");

debugger;

			if(response.hasOwnProperty(artistName) && response[artistName].albums.hasOwnProperty(albumTitle)){
				alert("nope");
			}

		});

		get_info.open("get", "info.txt");
		get_info.send();
	});



});