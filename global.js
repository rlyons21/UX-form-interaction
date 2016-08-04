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
	var addTrack = document.getElementById("addAnotherTrack");

	var uploadBtn = document.getElementsByClassName("chooseFile");
	
	var membersTitle = document.getElementsByClassName("artistMembers");
	var locationTitle = document.getElementsByClassName("artistLocation");
	var imageTitle = document.getElementsByClassName("artistImage");
	var trackTitle = document.getElementsByClassName("trackCount");
	var trackCount = 1;

	var submitAlbum = document.getElementsByClassName("submit");


	for(i=0; i<uploadBtn.length; i++){
		uploadBtn[i].addEventListener("click", function(btn){
			btn.preventDefault();
		});
	}

	

	for(i=0; i<addAlbumBtn.length; i++){


		addAlbumBtn[i].addEventListener("click", function(link){
			link.preventDefault();

			for(i=0; i < forms.length; i++){
				forms[i].style.display = "none";
			}

			formContainer[0].style.display = "flex";
			forms[0].style.display = "inline";
			
		});
	}

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
				membersTitle[0].innerHTML = "Add " + document.getElementsByClassName("artistName")[0].value + "'s Members";
				locationTitle[0].innerHTML = document.getElementsByClassName("artistName")[0].value + "'s Location";
				imageTitle[0].innerHTML = document.getElementsByClassName("artistName")[0].value + "'s Image";

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

	previousBtn[0].addEventListener("click", function(){

	});



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
		newMember.setAttribute("id", "members_" + n);
		newMember.setAttribute("placeholder", "Name...");
		newMember.setAttribute("name", "members_" + n);

		var newInstrument = document.createElement("input");
		newInstrument.setAttribute("type", "text");
		newInstrument.setAttribute("class", "instruments");
		newInstrument.setAttribute("id", "instruments_" + n);
		newInstrument.setAttribute("placeholder", "Instrument(s)...");
		newInstrument.setAttribute("name", "instruments_" + n);

		MIform.insertBefore(newMember,MIform.childNodes[2]);
		MIform.insertBefore(newInstrument, MIform.childNodes[3]);

	});



	addImage.addEventListener("click", function(){
		var AIform = document.getElementById("part_4");
		var image = document.getElementsByClassName("images");
		var x = image.length;
		image[x-1].style.display = "none";

		var newImage = document.createElement("select");
		newImage.setAttribute("form", "addAlbum");
		newImage.setAttribute("class", "images");
		newImage.setAttribute("id", "images_" + x);
		newImage.setAttribute("name", "images_" + x);

		var option1 = document.createElement("option");
		option1.text = "ALBUM COVER";
		option1.value = "albumCover_" + x;

		var option2 = document.createElement("option");
		option2.text = "ALBUM BACK";
		option2.value = "albumBack_" + x;

		var option3 = document.createElement("option");
		option3.text = "ALTERNATE ALBUM COVER";
		option3.value = "altCover_" + x;

		var option4 = document.createElement("option");
		option4.text = "EXTRA ALBUM ART";
		option4.value = "extraArt_" + x;

		AIform.appendChild(newImage);
		newImage.appendChild(option1);
		newImage.appendChild(option2);
		newImage.appendChild(option3);
		newImage.appendChild(option4);

	});


	addTrack.addEventListener("click", function(){
		trackCount += 1;
		trackTitle[0].innerHTML = "TRACK " + trackCount;

		var trackForm = document.getElementById("part_6");
		var tracks = document.getElementsByClassName("tracks");
		var y = tracks.length;
		tracks[y-1].style.display = "none";

		var newTrack = document.createElement("input");
		newTrack.setAttribute("type", "text");
		newTrack.setAttribute("class", "tracks");
		newTrack.setAttribute("id", "tracks_" + y);
		newTrack.setAttribute("placeholder", "Track title");
		newTrack.setAttribute("name", "tracks_" + y);

		trackForm.appendChild(newTrack);
	});


	submitAlbum[0].addEventListener("click", function(form){
		form.preventDefault();
		forms[5].style.display = "none";
		forms[6].style.display = "inline";
	});

});