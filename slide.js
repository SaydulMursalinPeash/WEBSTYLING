{
    let slide=document.querySelectorAll('.slide');
    let dots=document.querySelectorAll('.dot');
    let p=0;
    function autoAction(){
        
        setTimeout(function(item){
            slide.forEach(function(s){
                s.classList.remove('active');
            });
            dots.forEach(function(s){
                s.classList.remove('active');
            });
            slide[p].classList.add('active');
            dots[p].classList.add('active');
            p++;
            if(p===slide.length){
                p=0;
            }
            
            autoAction();
            
        },6000);
        
    }
    autoAction();
    function manualAction(manual){
        slide.forEach(function(s){
            s.classList.remove('active');
        });
        dots.forEach(function(s){
            s.classList.remove('active');
        });
        slide[manual].classList.add('active');
        dots[manual].classList.add('active');
    }
    dots.forEach(function(btn,i){
        btn.addEventListener('click',function(){
            manualAction(i);
            p=i;
        });
    });

    
    
}