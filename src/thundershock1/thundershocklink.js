import './thundershock.css'
import {imagecatch} from './thundershock.js'

function thundershock1(){
    
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
    paragraph.innerHTML = "Your Pikachu Used Thundershock! It was a critial hit!! Eevee is now Paralized!";
    container.appendChild(paragraph);
    let br = document.createElement('br');
    container.appendChild(br);
    container.appendChild(br);

    let paragraph2 = document.createElement('p');
    paragraph2.id ="p2_thundershock";
    paragraph2.className ="p2_thundershock";
    paragraph2.innerHTML = "What will you do?";
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


    let details = document.createElement('details');
    details.id = 'details_thundershock';
    details.className = 'details_thundershock';
    let summary = document.createElement('summary');
    summary.id = 'summary_thundershock';
    summary.className = 'summary_thundershock';
    summary.innerHTML = "Battle Moves (dropdown)";
    let list = document.createElement('ul');
    let listindex = document.createElement('li');
    listindex.id = 'list1';
    listindex.className = 'list1';
    list.appendChild(listindex);
    let listindex2 = document.createElement('li');
    listindex2.id = 'list2';
    listindex2.className = 'list2';
    list.appendChild(listindex2);
    let listindex3 = document.createElement('li');
    listindex3.id = 'list3';
    listindex3.className = 'list3';
    list.appendChild(listindex3);
    let link1 = document.createElement('a');
    link1.id = 'link1';
    link1.className = 'link1';
    link1.innerHTML ="Thundershock";
    link1.href='thundershock2.html';
    listindex.appendChild(link1);
    let link2 = document.createElement('a');
    link2.id = 'link2';
    link2.className = 'link2';
    link2.innerHTML = "Tail Whip";
    link2.href='tailwhip2.html';
    listindex2.appendChild(link2);
    let link3 = document.createElement('a');
    link3.id = 'link3';
    link3.className = 'link3';
    link3.innerHTML = "Growl";
    link3.href='growl2.html';
    listindex3.appendChild(link3);
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
    label.className = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    
    container3.appendChild(br);
    progress.id = 'file';
    progress.className = 'file';
    progress.max='100';
    progress.value = '50';
    container3.appendChild(progress);

    document.getElementById('thundershock1').appendChild(container);

}
thundershock1();
