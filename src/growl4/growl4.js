export function imagecatch(container2){
        
    let figure = document.createElement('figure');
    figure.id = 'figure';
    figure.className = 'figure';
    container2.appendChild(figure);
    let video = document.createElement('video');
    video.id = 'video';
    video.width = 540;
    video.height = 320;
    video.controls;
    let videosrc = document.createElement('source');
    videosrc.src = '../source/Growl_.mp4';
    videosrc.type = 'video/mp4';
    video.appendChild(videosrc);
    container2.appendChild(video);
    


    return container2;
}
