export function imagecatch(container2){
        
    let figure = document.createElement('figure');
    figure.id = 'figure_encounter';
    figure.className = 'figure_encounter';
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

    return container2;
}
