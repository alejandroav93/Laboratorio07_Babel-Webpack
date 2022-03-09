import './end.css'
import {imagecatch} from './end.js'

function end(){


    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.id = 'container';
    container.className = 'container'
    
    let titleindex = document.createElement('h1');
    titleindex.id="h1_thundershock";
    titleindex.className="h1_thundershock";
    titleindex.innerHTML = "You have Defeated your Rival!";
    container.appendChild(titleindex);

    let paragraph = document.createElement('p');
    paragraph.id ="p1_thundershock";
    paragraph.className ="p1_thundershock";
    paragraph.innerHTML = "After a tough battle, you have defeated your rival. You have earned some respect (and cash too!). Let's Prepare for your next battle...";
    container.appendChild(paragraph);
    let br = document.createElement('br');
    container.appendChild(br);
    container.appendChild(br);

    let container2 = document.createElement('div');
    container2.id="encounter_img";
    
    
    container2 = imagecatch(container2);

    container.appendChild(container2);

    let paragraph2 = document.createElement('p');
    paragraph2.id ="p2_thundershock";
    paragraph2.className ="p2_thundershock";
    paragraph2.innerHTML = "If you want to re-start the story:";
    container.appendChild(paragraph2);

    let list = document.createElement('ul');
    let listindex = document.createElement('li');
    container.appendChild(list)
    listindex.id = 'link_';
    listindex.className = 'link_';
    list.appendChild(listindex);
    let link = document.createElement('a');
    link.id = 'link_catch';
    link.className = 'link_catch';
    link.innerHTML = "Go back to beggining";
    link.href='../index/index.html';
    listindex.appendChild(link);
    container.appendChild(br);
    
    let container3 = document.createElement('div');
    container3.id = 'catch_file';
    container3.className = 'catch_file';
    container.appendChild(container3);
    let label = document.createElement('label');
    label.id = 'label_file';
    label.className = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    
    container3.appendChild(br);
    progress.id = 'file';
    progress.className = 'file';
    progress.max='100';
    progress.value = '100.00';
    container3.appendChild(progress);

    document.getElementById('end').appendChild(container);

}
end();