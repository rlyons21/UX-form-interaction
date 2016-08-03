window.addEventListener("load", function(){
	var addAlbumBtn = document.getElementsByClassName("addAlbum");
	var formContainer = document.getElementsByClassName("formsContainer");
	var exitForm = document.getElementsByClassName("exitForm");
	var forms = document.getElementsByClassName("form");
	var nextForm = document.getElementsByClassName("nextForm");
	var prevForm = document.getElementsByClassName("prevForm"); 
	var addMember = document.getElementById("addAnotherMember");
	var previousBtn = document.getElementsByClassName("previous");
	var addImage = document.getElementById("addAnotherImage");



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
			var id = this.getAttribute("id");
			forms[parseInt(id.slice(-1))-1].style.display = "none";
			forms[parseInt(id.slice(-1))].style.display = "inline";
		});
	}

	for(i=0; i < prevForm.length; i++){
		prevForm[i].addEventListener("click", function(){
			var id = this.getAttribute("id");
			forms[parseInt(id.slice(-1))].style.display = "none";
			forms[parseInt(id.slice(-1))-1].style.display = "inline";
		});
	}



	addMember.addEventListener("click", function(){
		var MIform = document.getElementById("part_2");
		var member = document.getElementsByClassName("members");
		var instrument = document.getElementsByClassName("instruments");
		var n = member.length;
		member[n-1].style.display = "none";
		instrument[n-1].style.display = "none";

		if(previousBtn[0].currentStyle ?  previousBtn[0].currentStyle.display :
                          getComputedStyle(previousBtn[0], null).display == "none"){
			previousBtn[0].style.display = "block";
		}


		var newMember = document.createElement("input");
		newMember.setAttribute("type", "text");
		newMember.setAttribute("class", "members");
		newMember.setAttribute("id", "members_" + n)
		newMember.setAttribute("placeholder", "Name...");
		newMember.setAttribute("name", "members_" + n)

		var newInstrument = document.createElement("input");
		newInstrument.setAttribute("type", "text");
		newInstrument.setAttribute("class", "instruments");
		newInstrument.setAttribute("id", "instruments_" + n);
		newInstrument.setAttribute("placeholder", "Instrument(s)...");
		newInstrument.setAttribute("name", "instruments_" + n);

		MIform.appendChild(newMember);
		MIform.appendChild(newInstrument);

	});


	previousBtn[0].addEventListener("click", function(){


	});

	addImage.addEventListener("click", function(){
		var AIform = document.getElementById("part_4");
		var image = document.getElementsByClassName("images");
		var x = image.length;

		var newImage = document.createElement("select");
		newImage.setAttribute("form", "addAlbum");
		newImage.setAttribute("class", "images");
		newImage.setAttribute("id", "images_" + x);
		newImage.setAttribute("name", "images_" + x);

		AIform.appendChild(newImage);

	});



});