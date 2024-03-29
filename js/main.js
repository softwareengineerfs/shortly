//Getting all elements
const elUrlShortener = document.querySelector(".url-shortener")
const elUrlShortenerForm = document.querySelector(".js-url-shortener-form");
const elUrlShortenerResults = document.querySelector(".url-shortener__results");


// open form
if (elUrlShortenerForm) {

  elUrlShortenerForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    elUrlShortenerResults.classList.add("url-shortener__results--open");
 })

}

// make form interactive
if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function (evt) {
    if (evt.target.matches(".js-copy-short-link-button")) {

      // change button text
      evt.target.textContent = "Copied!";

      //change bgcolor
      evt.target.classList.add("url-shortener__copy-button--copied");


      //copy short link
      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

      //Reset button text and class after 5 seconds
      setTimeout(function (){
        evt.target.textContent = "Copy";
        evt.target.classList.remove("url-shortener__copy-button--copied");
      },5000);
    }
  });
}
