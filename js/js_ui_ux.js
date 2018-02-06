document.querySelector("viewButton.main").parentElement.style.display = "block";

function ctrlRst(){
    document.querySelector("viewButton.main").parentElement.style.display = "block";
  document.querySelector("viewButton.fx").parentElement.style.display = "none";
}

function ctrlSwitch(){
    alert("Message :: Switching Camera")
}
function ctrlSnap(){
    alert("Message :: Switching Camera")
}
function ctrlFx(){
  document.querySelector("viewButton.main").parentElement.style.display = "none";
  document.querySelector("viewButton.fx").parentElement.style.display = "block";
}