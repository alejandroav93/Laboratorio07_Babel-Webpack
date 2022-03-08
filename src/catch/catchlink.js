import "./catch.css"

import {imagecatch} from './catch.js'

function catchs(){
    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.id = 'container';
    container.className = 'container';
    
    let titleindex = document.createElement('h1');
    titleindex.id="header_catch";
    titleindex.innerHTML = "Catching your first Pokémon!";
    container.appendChild(titleindex);
    titleindex.className = 'header_catch';

    let paragraph = document.createElement('p');
    paragraph.id ="p_catch1";
    paragraph.className="p_catch1";
    paragraph.innerHTML = "After throwing a Pokéball, you managed to catch Pikachu with ease as it was meant to happen. You realized that your rival was getting a Pokémon from Prof. Oak.";
    container.appendChild(paragraph);
    let br = document.createElement('br');
    container.appendChild(br);
    container.appendChild(br);

    let paragraph2 = document.createElement('p');
    paragraph2.id ="p_catch2";
    paragraph.className="p_catch2";
    paragraph2.innerHTML = "It's time to have your first Pokémon Battle!";
    container.appendChild(paragraph2);

    let container2 = document.createElement('div');
    container2.id="encounter_img";
    container.appendChild(container2);
    
    
    container2 = imagecatch(container2);

    let list = document.createElement('ul');
    let listindex = document.createElement('li');
    container.appendChild(list)
    listindex.id = 'link_';
    list.appendChild(listindex);
    let link = document.createElement('a');
    link.id = 'link_catch';
    link.className = 'link_catch';
    link.innerHTML = "Let's Battle Your Eternal Rival";
    link.href='../rival/rival.html';
    listindex.appendChild(link);
    container.appendChild(br);
    
    let container3 = document.createElement('div');
    container3.id = 'catch_file';
    container3.className = 'catch_file';
    container.appendChild(container3);
    let label = document.createElement('label');
    label.id = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    
    container3.appendChild(br);
    progress.id = 'file';
    progress.max='100';
    progress.value = '25.00';
    container3.appendChild(progress);

    document.getElementById('catch').appendChild(container);
}
catchs();



