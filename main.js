const container = document.getElementById("movie");

function movies(poster,div, button,paragraph){

    const card = document.createElement("div");
    card.className = "card";
     
    const poster1 = document.createElement("img");
    poster1.src=poster
    poster1.className="poster";


    const div1 = document.createElement("div");
    div1.className = "div1";
    div1.textContent = div;

    const button1 = document.createElement("a");
    button1.className = "button1";
    button1.textContent="play now";
    button1.href=button;

    const paragraph1 = document.createElement("p");
    paragraph1.className="paragraph1";
    paragraph1.textContent=paragraph;
    

    container.appendChild(card);
    card.appendChild(poster1);
    card.appendChild(div1);
    card.appendChild(button1);
    card.appendChild(paragraph1);
    

}
movies("images/cobra-kai-5.jpg","new","https://www.youtube.com/watch?v=d6qv9N6iK3M","Aquaman And The Lost Kingdom");
movies("images/cravin.webp","new","https://www.youtube.com/watch?v=csbcfZIRCnQ","Aquaman And The Lost Kingdom");
movies("images/maxresdefault (1).jpg","new","https://www.youtube.com/watch?v=NTO9wR22DZM","Aquaman And The Lost Kingdom");
movies("images/blue-beetle.jpg","new","https://www.youtube.com/watch?v=DHn_idEeEu8","Aquaman And The Lost Kingdom");

