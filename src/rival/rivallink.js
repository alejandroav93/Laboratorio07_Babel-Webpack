import "./rival.css"

function change(){
    
    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.id = 'container';
    container.className = 'container'
    
    let titleindex = document.createElement('h1');
    titleindex.id="h1_rival";
    titleindex.innerHTML = "Your First Pokémon Battle";
    container.appendChild(titleindex);

    let paragraph = document.createElement('p');
    paragraph.id ="p_rival1";
    paragraph.innerHTML = "After meeeting with your rival, you decided to have a Pokémon Battle he sent Eevee out, while you sent Pikachu to fight. ";
    container.appendChild(paragraph);
    let br = document.createElement('br');
    container.appendChild(br);
    container.appendChild(br);

    let paragraph2 = document.createElement('p');
    paragraph2.id ="p_rival2";
    paragraph2.innerHTML = "What will you do?";
    container.appendChild(paragraph2);

    let container2 = document.createElement('div');
    container2.id="figure_rival";
    container.appendChild(container2);
    
    let figure = document.createElement('figure');
    figure.id = 'figure';
    container2.appendChild(figure);
    let video = document.createElement('video');
    video.id = 'video';
    video.width = 540;
    video.height = 320;
    video.controls;
    let videosrc = document.createElement('source');
    videosrc.src = '../source/Rival.mp4';
    videosrc.type = 'video/mp4';
    video.appendChild(videosrc);
    container2.appendChild(video);
    
    let caption = document.createElement('figcaption');
    caption.id = 'caption_rival';
    caption.innerHTML = "Copyright: The Pokémon Company Inc./Game Freak Co., Ltd/ Nintendo Co., Ltd";
    container2.appendChild(caption);


    let details = document.createElement('details');
    details.id = 'details_rival';
    let summary = document.createElement('summary');
    summary.id = 'summary_rival';
    summary.innerHTML = 'Battle Moves (dropdown)';
    let list = document.createElement('ul');
    let listindex = document.createElement('li');
    listindex.id = 'list1';
    list.appendChild(listindex);
    let listindex2 = document.createElement('li');
    listindex.id = 'list2';
    list.appendChild(listindex2);
    let listindex3 = document.createElement('li');
    listindex.id = 'list3';
    list.appendChild(listindex3);
    let link1 = document.createElement('a');
    link1.id = 'link1';
    link1.innerHTML =="Thundershock";
    link1.href='../thundershock1/thundershock.html';
    listindex.appendChild(link1);
    let link2 = document.createElement('a');
    link2.id = 'link2';
    link2.innerHTML = "Tail Whip";
    link2.href='../tailwhip1/tailwhip.html';
    listindex.appendChild(link2);
    let link3 = document.createElement('a');
    link3.id = 'link3';
    link3.innerHTML = "Growl";
    link3.href='../growl1/growl.html';
    listindex.appendChild(link3);
    container.appendChild(details);
    container.appendChild(br);
    
    let container3 = document.createElement('div');
    container3.id = 'list';
    container.appendChild(container3);
    let label = document.createElement('label');
    label.id = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    
    container3.appendChild(br);
    progress.id = 'file';
    progress.max='100';
    progress.value = '37.50';
    container3.appendChild(progress);

    document.getElementById('rivals').appendChild(container);
}
