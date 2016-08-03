window.addEventListener("load", function(){
	var addAlbumBtn = document.getElementsByClassName("addAlbum");
	var formContainer = document.getElementsByClassName("formsContainer");
	var exitForm = document.getElementsByClassName("exitForm");
	var forms = document.getElementsByClassName("form");
	var nextForm = document.getElementsByClassName("nextForm");
	var prevForm = document.getElementsByClassName("prevForm"); 
	var addMember = document.getElementById("addAnotherMember");



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
		for(i=0; i<forms.length; i++){
			forms[i].style.display = "none";
		}
	});

	nextForm[0].addEventListener("click", function(){
		var get_info = new XMLHttpRequest();

		get_info.addEventListener("load", function(e){
			var r = e.target.response;
			var response = JSON.parse(r);
			var artistName = document.getElementsByClassName("artistName")[0].value.split(" ").join("_");
			var albumTitle = document.getElementsByClassName("albumTitle")[0].value.split(" ").join("_");


			if(response.hasOwnProperty(artistName) && response[artistName].albums.hasOwnProperty(albumTitle)){
				alert("This artist's album aready exists in our records.");
			} else{
				forms[0].style.display = "none";
				forms[1].style.display = "inline";
			}


		});

		get_info.open("get", "info.txt");
		get_info.send();
	});


	for(i=1; i<nextForm.length; i++){
		nextForm[i].addEventListener("click", function(){

		});
	}

	addMember.addEventListener("click", function(){
		var previous = document.getElementsByClassName("previous");
		var MIform = document.getElementById("form_2");
		var member = document.getElementsByClassName("members");
		var instrument = document.getElementsByClassName("instruments");
		var n = member.length;
		member[n-1].style.display = "none";
		instrument[n-1].style.display = "none";

		if(previous[0].currentStyle ?  previous[0].currentStyle.display :
                          getComputedStyle(previous[0], null).display == "none"){
			previous[0].style.display = "block";
		}

		var newMember = document.createElement("input");
		newMember.setAttribute("type", "text");
		newMember.setAttribute("class", "members");
		newMember.setAttribute("id", "members_" + n)
		newMember.setAttribute("placeholder", "Name...");

		var newInstrument = document.createElement("input");
		newInstrument.setAttribute("type", "text");
		newInstrument.setAttribute("class", "instruments");
		newInstrument.setAttribute("id", "instruments_" + n);
		newInstrument.setAttribute("placeholder", "Instrument(s)...");

		MIform.appendChild(newMember);
		MIform.appendChild(newInstrument);

	});


});