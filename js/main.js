document.addEventListener('DOMContentLoaded',()=>{
    let sectionGraffiti = document.querySelector('#graffiti');
    let sectionCaps = document.querySelector('#caps');
    let sectionPro = document.querySelector('#pro');

    let sectionGraffitiSM = document.querySelector('#graffitiSM');
    let sectionCapsSM = document.querySelector('#capsSM');
    let sectionProSM = document.querySelector('#proSM');

    let btnGraffiti = document.querySelector('.btnGraffiti');
    let btnCaps = document.querySelector('.btnCaps');
    let btnPro = document.querySelector('.btnPro');
    let btnEL = document.querySelector('.btnEL');

    

    let anchoVentana = window.innerWidth;

    const funcion1 = () => {
        btnCaps.addEventListener('click',(event)=>{
            sectionGraffiti.setAttribute('class','d-none');
            sectionPro.setAttribute('class','d-none');
            sectionCaps.setAttribute('class','d-block');

            sectionProSM.setAttribute('class','d-none');
            sectionGraffitiSM.setAttribute('class','d-none');
            sectionCapsSM.setAttribute('class','d-none');
        })
        btnGraffiti.addEventListener('click',(event)=>{
            sectionCaps.setAttribute('class','d-none');
            sectionPro.setAttribute('class','d-none');
            sectionGraffiti.setAttribute('class','d-block');

            sectionProSM.setAttribute('class','d-none');
            sectionCapsSM.setAttribute('class','d-none');
            sectionGraffitiSM.setAttribute('class','d-none');
        })
        btnPro.addEventListener('click',(event)=>{
            sectionCaps.setAttribute('class','d-none');
            sectionGraffiti.setAttribute('class','d-none');
            sectionPro.setAttribute('class','d-block');

            sectionProSM.setAttribute('class','d-none');
            sectionCapsSM.setAttribute('class','d-none');
            sectionGraffitiSM.setAttribute('class','d-none');
        })
    }

    const funcion2 = () => {

            btnCaps.addEventListener('click',(event)=>{
                sectionGraffiti.setAttribute('class','d-none');
                sectionCaps.setAttribute('class','d-none');
                sectionPro.setAttribute('class','d-none');

                sectionGraffitiSM.setAttribute('class','d-none');
                sectionCapsSM.setAttribute('class','d-block');
                sectionProSM.setAttribute('class','d-none');
            })
            btnGraffiti.addEventListener('click',(event)=>{
                sectionGraffiti.setAttribute('class','d-none');
                sectionCaps.setAttribute('class','d-none');
                sectionPro.setAttribute('class','d-none');
                
                sectionProSM.setAttribute('class','d-none');
                sectionCapsSM.setAttribute('class','d-none');
                sectionGraffitiSM.setAttribute('class','d-block');
            })
            btnPro.addEventListener('click',(event)=>{
                sectionCaps.setAttribute('class','d-none');
                sectionGraffiti.setAttribute('class','d-none');
                sectionPro.setAttribute('class','d-none');
    
                sectionProSM.setAttribute('class','d-block');
                sectionCapsSM.setAttribute('class','d-none');
                sectionGraffitiSM.setAttribute('class','d-none');
            })

       
    }

    window.onresize = function(){
     anchoVentana = window.innerWidth;
     if(anchoVentana > 768){
        funcion1();
      }else if(anchoVentana <= 768){
        funcion2();
        
      }
    };
    console.log(anchoVentana)
   
    if(anchoVentana > 768){
        funcion1();
      }else if(anchoVentana <= 768){
        funcion2();
        
      }
    
    
    })