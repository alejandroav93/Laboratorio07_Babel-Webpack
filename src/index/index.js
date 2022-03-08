export function imagecatch(container2){
        
        let label = document.createElement('label');
        label.id = 'label_progress';
        label.className = 'label_progress';
        label.innerHTML= 'Story progress';
        container2.appendChild(label);
        let progress = document.createElement('progress');
        let br = document.createElement('br');
        container2.appendChild(br);
        progress.id = 'file';
        progress.max='100';
        progress.value = '0';
        container2.appendChild(progress);
        
    
    
        return container2;
    }
    