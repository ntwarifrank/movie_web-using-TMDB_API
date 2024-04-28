const containerr = document.getElementById("moviee");

function moviess(poster,div, button,paragraph){

    const card1 = document.createElement("div");
    card1.className = "card";
     
    const poster1 = document.createElement("img");
    poster1.src=poster
    poster1.className="poster";


    const div1 = document.createElement("div");
    div1.className = "div1";
    div1.textContent = div;

    const button1 = document.createElement("a");
    button1.className = "button1";
    button1.href=button;
    button1.textContent="play now";
    

    const paragraph1 = document.createElement("p");
    paragraph1.className="paragraph1";
    paragraph1.textContent=paragraph;
    

    containerr.appendChild(card1);
    card1.appendChild(poster1);
    card1.appendChild(div1);
    card1.appendChild(button1);
    card1.appendChild(paragraph1);
    

}
moviess("images/the-flash-united-i183184.jpg","new","https://www.youtube.com/watch?v=XY_tkp1YiEg","Aquaman And The Lost Kingdom");
moviess("images/spiderman.jpg","new","https://www.youtube.com/watch?v=mBrUx6M6R7U","Aquaman And The Lost Kingdom");
moviess("images/shangchi.jpg","new","https://www.youtube.com/watch?v=yN68JOvaxAE","Aquaman And The Lost Kingdom");
moviess("images/jumanji.jpg","new","https://www.youtube.com/watch?v=pVwWge2qws8","Aquaman And The Lost Kingdom");
moviess("images/big-game.jpg","new","https://www.youtube.com/watch?v=Ca7LBG68XdI","Aquaman And The Lost Kingdom");
moviess("images/maxresdefault.jpg","new","https://www.youtube.com/watch?v=5UTmN8jPJS0","Aquaman And The Lost Kingdom");
moviess("images/https-2F2Fblogs-images.forbes.com2Fscottmendelson2Ffiles2F20182F042Fimage001-cebe539.jpg","new","https://www.youtube.com/watch?v=GL_8NockIi4","Aquaman And The Lost Kingdom");
moviess("images/black-panther-web.jpg","new","https://www.youtube.com/watch?v=MXJYGdZlkXU","Aquaman And The Lost Kingdom");
moviess("images/p_junglecruise_21740_v2_bb7f0ae4.jpeg","new","https://www.youtube.com/watch?v=2JndCAKL898","Aquaman And The Lost Kingdom");
moviess("images/lockwood-and-co-new-on-netflix-january-27-2023-jpg.webp","new","https://www.youtube.com/watch?v=0bGwTndVdRo","Aquaman And The Lost Kingdom");
moviess("images/deadpool.jpg","new","https://www.youtube.com/watch?v=zdYqnjYNa6g","Aquaman And The Lost Kingdom");
moviess("images/beekeeper.webp","new","https://www.youtube.com/watch?v=9vGEVqHqMZQ","Aquaman And The Lost Kingdom");



 let input = document.getElementById(search);

 
