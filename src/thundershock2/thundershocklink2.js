import './thundershock2.css'

function thundershock2(){


    let container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.id = 'container';
    container.className = 'container'
    
    let titleindex = document.createElement('h1');
    titleindex.id="h1_thundershock";
    titleindex.innerHTML = "Your Used Thundershock!";
    container.appendChild(titleindex);

    let paragraph = document.createElement('p');
    paragraph.id ="p1_thundershock";
    paragraph.innerHTML = "Your Pikachu Used Thundershock! It reduced Eevee health Points!";
    container.appendChild(paragraph);
    let br = document.createElement('br');
    container.appendChild(br);
    container.appendChild(br);

    let paragraph2 = document.createElement('p');
    paragraph2.id ="p2_thundershock";
    paragraph2.innerHTML = "What will you do?";
    container.appendChild(paragraph2);

    let container2 = document.createElement('div');
    container2.id="figure_thundershock";
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
    videosrc.src = '../source/Shock_2.mp4';
    videosrc.type = 'video/mp4';
    video.appendChild(videosrc);
    container2.appendChild(video);
    
    let caption = document.createElement('figcaption');
    caption.id = 'caption_thundershock';
    caption.innerHTML = "Copyright: The Pokémon Company Inc./Game Freak Co., Ltd/ Nintendo Co., Ltd";
    container2.appendChild(caption);


    let details = document.createElement('details');
    details.id = 'details_thundershock';
    let summary = document.createElement('summary');
    summary.id = 'summary_thundershock';
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
    link1.innerHTML ="Thundershock";
    link1.href='../thundershock3/thundershock3.html';
    listindex.appendChild(link1);
    let link2 = document.createElement('a');
    link2.id = 'link2';
    link2.innerHTML = "Tail Whip";
    link2.href='../tailwhip3/tailwhip3.html';
    listindex.appendChild(link2);
    let link3 = document.createElement('a');
    link3.id = 'link3';
    link3.innerHTML = "Growl";
    link3.href='../growl3/growl3.html';
    listindex.appendChild(link3);
    container.appendChild(details);
    container.appendChild(br);
    
    let container3 = document.createElement('div');
    container3.id = 'footer';
    container.appendChild(container3);
    let label = document.createElement('label');
    label.id = 'label_file';
    label.innerHTML= 'Story progress';
    container3.appendChild(label);
    let progress = document.createElement('progress');
    
    container3.appendChild(br);
    progress.id = 'file';
    progress.max='100';
    progress.value = '62.50';
    container3.appendChild(progress);

    document.getElementById('thundershock2').appendChild(container);
}
