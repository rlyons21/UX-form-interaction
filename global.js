window.addEventListener("load", function(){
	var addAlbumBtn = document.getElementsByClassName("addAlbum");
	var formContainer = document.getElementsByClassName("formsContainer");
	var exitForm = document.getElementsByClassName("exitForm");
	var nextForm = document.getElementsByClassName("nextForm");
	var prevForm = document.getElementsByClassName("prevForm"); 

	addAlbumBtn[0].addEventListener("click", function(link){
		link.preventDefault();
		formContainer[0].style.display = "flex";
		
	});

	exitForm[0].addEventListener("click", function(){
		formContainer[0].style.display = "none";
	});

	nextForm[0].addEventListener("click", function(){
		var get_info = new XMLHttpRequest();

		get_info.addEventListener("load", function(e){
			var r = e.target.response;
			var response = JSON.parse(r);

			if(response.hasOwnProperty("Selena_Gomez")){
				alert("nope");
			}

		});

		get_info.open("get", "info.txt");
		get_info.send();
	});



});