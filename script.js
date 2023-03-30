window.onload = function () {
  // api url
  const api_url = "https://api.adviceslip.com/advice";
  const btn = document.getElementById("button_dice");
  var rot = 90;

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    document.getElementById("advice_id").innerHTML = data.slip.id;
    document.getElementById("advice_text").innerHTML = data.slip.advice;
  }
  // Calling that async function
  getapi(api_url);

  btn.onclick = function () {
    btn.style = "transform: rotate(" + rot + "deg)";
    rot += 90;
    getapi(api_url);
  };
};
