import './index.css'

function index(){

        let container = document.createElement('div');
        container.style.width = '100%';
        container.style.height = '100%';
        container.id = 'container';
        
        let titleindex = document.createElement('h1');
        titleindex.id="title_index";
        titleindex.innerHTML = 'Lab 07: Pokémon';
        container.appendChild(titleindex);
        titleindex.style.color='black';

        let paragraph = document.createElement('p');
        paragraph.id ="p_index";
        paragraph.innerHTML = "This is the index for my first HTML story-telling the encounter with a wild Pikachu and the first Rival Battle with some decision making dynamics....";
        container.appendChild(paragraph);

        let paragraph2 = document.createElement('p');
        paragraph2.id='p2_index';
        paragraph2.innerHTML = "Should we start?";
        container.appendChild(paragraph2);

        let list = document.createElement('ul');
        let listindex = document.createElement('li');
        container.appendChild(list)
        listindex.id = 'list_index';
        list.appendChild(listindex);
        let link = document.createElement('a');
        link.id = 'link';
        link.innerHTML ='Start Story';
        link.href='../encounter/encounter.html'
        listindex.appendChild(link);

        let container2 = document.createElement('div');
        container2.id = 'list';
        container.appendChild(container2);
        let label = document.createElement('label');
        label.id = 'label_progress';
        label.innerHTML= 'Story progress';
        container2.appendChild(label);
        let progress = document.createElement('progress');
        let br = document.createElement('br');
        container2.appendChild(br);
        progress.id = 'file';
        progress.max='100';
        progress.value = '0';
        container2.appendChild(progress);

        document.getElementById('index').appendChild(container);
}


