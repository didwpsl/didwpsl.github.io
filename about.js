
(() =>{

    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0];

   for (let i = 0; i < stepElems.length; i++){
   stepElems[i].dataset.index = i;
   graphicElems[i].dataset.index = i;
}

window.addEventListener('scroll', () =>{
    let step;
    let boundingRect;

    for(let i = 0; i < stepElems.length; i++){
        step = stepElems[i];
        boundingRect= step.getBoundingClientRect();
        
        if (boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8)  {
           
            if(currentItem){
                currentItem.classList.remove('visible');
            }
            currentItem.classList.remove('visible');
            currentItem =graphicElems[step.dataset.index];
            currentItem.classList.add('visible');
        }
    }
})

currentItem.classList.add('visible');
})();