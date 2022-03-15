import './index.css'
import {imagecatch} from './index.js'

function index(){

        let container = document.createElement('div');
        container.style.width = '100%';
        container.style.height = '100%';
        container.id = 'container';
        
        let titleindex = document.createElement('h1');
        titleindex.id="title_index";
        titleindex.className="title_index";
        titleindex.innerHTML = 'Lab 07: Pokémon';
        container.appendChild(titleindex);
    

        let paragraph = document.createElement('p');
        paragraph.id ="p_index";
        paragraph.className ="p_index";
        paragraph.innerHTML = "This is the index for my first HTML story-telling the encounter with a wild Pikachu and the first Rival Battle with some decision making dynamics....";
        container.appendChild(paragraph);

        let paragraph2 = document.createElement('p');
        paragraph2.id='p2_index';
        paragraph2.className='p2_index';
        paragraph2.innerHTML = "Should we start?";
        container.appendChild(paragraph2);

        let list = document.createElement('ul');
        let listindex = document.createElement('li');
        listindex.id = 'list_index';
        listindex.className = 'list_index';

        let link = document.createElement('a');
        link.id = 'link';
        link.className = 'link';
        link.innerHTML ='Start Story';
        link.href='encounter.html'
        listindex.appendChild(link);
        list.appendChild(listindex);
        container.appendChild(list)
        

        let container2 = document.createElement('div');
        container2.id = 'list';
        container2.className = 'list';
        container.appendChild(container2);

        container2 = imagecatch(container2);


        document.getElementById('index').appendChild(container);
        document.getElementById('index').style.backgroundImage = '../source/background_scroll.jpg'
      /*  let sheets = document.styleSheets[document.styleSheets.length-1]
        let rules = sheets.rules;
        sheets.insertRule(`#index { background-image: ${fondo}}`, rules);*/
}
index();

