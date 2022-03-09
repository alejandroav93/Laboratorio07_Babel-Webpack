import videox from '../source/Shock_1.mp4';


export function imagecatch(container2){
        
    let figure = document.createElement('figure');
    figure.id = 'figure';
    figure.className = 'figure';
    container2.appendChild(figure);
    let video = document.createElement('video');
    video.id = 'video';
    video.width = 540;
    video.height = 320;
    video.autoplay = true;
    video.controls = true;
    let videosrc = document.createElement('source');
    videosrc.src = videox;
    videosrc.type = 'video/mp4';
    video.appendChild(videosrc);
    container2.appendChild(video);

    return container2;
}
