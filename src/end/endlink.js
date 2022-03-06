import './end.css'
function end(){


    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.id = 'container';
    container.className = 'container'
    
    let titleindex = document.createElement('h1');
    titleindex.id="h1_thundershock";
    titleindex.innerHTML = "You have Defeated your Rival!";
    container.appendChild(titleindex);

    let paragraph = document.createElement('p');
    paragraph.id ="p1_thundershock";
    paragraph.innerHTML = "After a tough battle, you have defeated your rival. You have earned some respect (and cash too!). Let's Prepare for your next battle...";
    container.appendChild(paragraph);
    let br = document.createElement('br');
    container.appendChild(br);
    container.appendChild(br);



    let container2 = document.createElement('div');
    container2.id="encounter_img";
    container.appendChild(container2);
    
    let figure = document.createElement('figure');
    figure.id = 'figure';
    container2.appendChild(figure);
    let image = document.createElement('img');
    image.id = 'image';
    image.alt = "Wild Pikachu in a Pokéball";
    image.src = '../source/Shot_3.jpg';
    image.width = 540;
    image.height = 320;
    container2.appendChild(image);
    let caption = document.createElement('figcaption');
    caption.id = 'caption_thundershock';
    caption.innerHTML = "Copyright: The Pokémon Company Inc./Game Freak Co., Ltd/ Nintendo Co., Ltd";
    container2.appendChild(caption);

    let paragraph2 = document.createElement('p');
    paragraph2.id ="p2_thundershock";
    paragraph2.innerHTML = "If you want to re-start the story:";
    container.appendChild(paragraph2);

    let list = document.createElement('ul');
    let listindex = document.createElement('li');
    container.appendChild(list)
    listindex.id = 'link_';
    list.appendChild(listindex);
    let link = document.createElement('a');
    link.id = 'link_catch';
    link.innerHTML = "Go back to beggining";
    link.href='../index/index.html';
    listindex.appendChild(link);
    container.appendChild(br);
    
    let container3 = document.createElement('div');
    container3.id = 'catch_file';
    container.appendChild(container3);
    let label = document.createElement('label');
    label.id = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    
    container3.appendChild(br);
    progress.id = 'file';
    progress.max='100';
    progress.value = '100.00';
    container3.appendChild(progress);

    document.getElementById('end').appendChild(container);


}
