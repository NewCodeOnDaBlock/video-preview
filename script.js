
/* ------ Delcared Variables ------------ */

let video = document.getElementById("my-video");
let playing = true;

/* ------ Plays Video when "onMouseOver" even occurs------------ */

function playMuted(element){

    element.play(element);
    video.muted = true;

}

/* ------ Pauses Video When "onMouseOut" Event occurs ------------ */

function pauseMuted(element){

    element.pause(element);
    video.muted = false;

}

/* ------ Plays and Pauses Video When "Onclick" Event is True ------------ */

function playVideo(element) {

  if(playing){

    element.play(element);
    video.muted = false;
    playing = false;
  }
  else{

      element.pause(element);
      playing = true;
  }
}

function subThanks (element){

  element.innerText = "Thanks For Subbing!";

}



function shadowMove(element){

  element.classList.add("shadow-effect");
 }

function shadowOut(element){

  element.classList.remove("shadow-effect");
}

