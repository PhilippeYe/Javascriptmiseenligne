const toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('night-mode');
});

const button = document.querySelector("#btn");
const h1 = document.querySelector("h1");

button.addEventListener("click", function() {
  
    if (h1.classList.contains("blue")){
        h1.classList.remove("blue")
        h1.classList.add("red")
   }
   else{
        h1.classList.remove("red")
        h1.classList.add("blue")
      
   }
})

const togglebutton = document.querySelector("#btn1");
const list = document.querySelector("#list");

button.addEventListener("click", function() {
  const li = document.createElement("li");
  const text = document.createTextNode("Vive la France, Vive les Bleus");

  li.append(text);
  list.append(li);

})