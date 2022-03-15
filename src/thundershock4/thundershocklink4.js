import './thundershock4.css'
import {imagecatch} from './thundershock4.js'
function thundershock4(){

    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.id = 'container';
    container.className = 'container'
    
    let titleindex = document.createElement('h1');
    titleindex.id="h1_thundershock";
    titleindex.className="h1_thundershock";
    titleindex.innerHTML = "Your Used Thundershock!";
    container.appendChild(titleindex);

    let paragraph = document.createElement('p');
    paragraph.id ="p1_thundershock";
    paragraph.className ="p1_thundershock";
    paragraph.innerHTML = "Your Pikachu Used Thundershock! It reduced Eevee health Points!";
    container.appendChild(paragraph);
    let br = document.createElement('br');
    container.appendChild(br);
    container.appendChild(br);

    let paragraph2 = document.createElement('p');
    paragraph2.id ="p2_thundershock";
    paragraph2.className ="p2_thundershock";
    paragraph2.innerHTML = "Eevee Fainted!";
    container.appendChild(paragraph2);

    let container2 = document.createElement('div');
    container2.id="figure_thundershock";
    container2.className="figure_thundershock";
    container.appendChild(container2);
    
    container2 = imagecatch(container2);

    
    let caption = document.createElement('figcaption');
    caption.id = 'caption_thundershock';
    caption.className = 'caption_thundershock';
    caption.innerHTML = "Copyright: The Pokémon Company Inc./Game Freak Co., Ltd/ Nintendo Co., Ltd";
    container2.appendChild(caption);
    let paragraph3 = document.createElement('p');
    paragraph3.id ="p3_thundershock";
    paragraph3.className ="p3_thundershock";
    paragraph3.innerHTML = "You Defeated Your Rival!";
    container.appendChild(paragraph3);

    let details = document.createElement('details');
    details.id = 'details_thundershock';
    details.className = 'details_thundershock';
    let summary = document.createElement('summary');
    summary.id = 'summary_thundershock';
    summary.className = 'summary_thundershock';
    summary.innerHTML = 'Go to End';
    let list = document.createElement('ul');
    let listindex = document.createElement('li');
    listindex.id = 'list1';
    listindex.className = 'list1';
    list.appendChild(listindex);
    let link1 = document.createElement('a');
    link1.id = 'link1';
    link1.className = 'link1';
    link1.innerHTML ="Finish Story";
    link1.href='end.html';
    listindex.appendChild(link1);
    summary.appendChild(list);
    details.appendChild(summary);
    container.appendChild(details);
    container.appendChild(br);
    
    let container3 = document.createElement('div');
    container3.id = 'footer';
    container3.className = 'footer';
    container.appendChild(container3);
    let label = document.createElement('label');
    label.id = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    
    container3.appendChild(br);
    progress.id = 'file';
    progress.max='100';
    progress.value = '87.50';
    container3.appendChild(progress);

    document.getElementById('thundershock4').appendChild(container);

}
thundershock4();