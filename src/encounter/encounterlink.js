function encounter(){

    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.id = 'container';
    container.className = 'container'
    
    let titleindex = document.createElement('h1');
    titleindex.id="header_encounter";
    titleindex.innerHTML = "Encounter with Pikachu";
    container.appendChild(titleindex);

    let paragraph = document.createElement('p');
    paragraph.id ="p_encounter";
    paragraph.innerHTML = " You are starting your journey as a Pokémon trainer, as soon as you leave your house you encounter a wild Pikachu in the tall grass! It's time to catch your first Pokémon.";
    container.appendChild(paragraph);

    let container2 = document.createElement('div');
    container2.id="encounter_img";
    pcontainer2.innerText = "Should we start?";
    container.appendChild(container2);

    let figure = document.createElement('figure');
    figure.id = 'figure_encounter';
    container2.appendChild(figure);
    let image = document.createElement('img');
    image.id = 'image';
    image.alt = 'Wild Pikachu';
    image.src = '../souce.SHot_1.jpg';
    image.width = 540;
    image.height = 320;
    container2.appendChild(image);
    let caption = document.createElement('figcaption');
    caption.id = 'caption_encounter';
    caption.innerHTML = "Copyright: The Pokémon Company Inc./Game Freak Co., Ltd/ Nintendo Co., Ltd";
    container2.appendChild(caption);



    let list = document.createElement('ul');
    let listindex = document.createElement('li');
    container.appendChild(list)
    listindex.id = 'list_encounter';
    list.appendChild(listindex);
    let link = document.createElement('a');
    link.id = 'link';
    link.innerHTML ="Throw Pokéball";
    link.href='../catch/catch.html';
    listindex.appendChild(link);

    let container3 = document.createElement('div');
    container3.id = 'list';
    container.appendChild(container3);
    let label = document.createElement('label');
    label.id = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    let br = document.createElement('br');
    container3.appendChild(br);
    progress.id = 'file';
    progress.max='100';
    progress.value = '12.50';
    container3.appendChild(progress);

    document.getElementById('encounter').appendChild(container);
}
