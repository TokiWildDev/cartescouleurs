


window.addEventListener('scroll',()=>
{
    console.log(window.scrollY); // log la position du scroll //

    const headerIllu = document.getElementsByClassName('headerIllu')
    const navIllu = document.getElementsByClassName('headerIllu__nav__link')
    const line = document.getElementsByClassName('illustrator__containLine')
    const btns =document.getElementsByClassName('illustrator__containButonIllu')
    const media = document.getElementsByClassName('illustrator__media')
    const foot = document.getElementsByClassName('illustratorFoot')



    if(window.scrollY>15)
    {
      media[0].classList.add('none')
      line[0].classList.add('none')
      foot[0].classList.add('illustratorFootShow')

      
    }
    else
    {
        media[0].classList.remove('none')
        line[0].classList.remove('none')
        foot[0].classList.remove('illustratorFootShow')
    }


    if(window.scrollY>201) // taille en px //
    {
        headerIllu[0].classList.add('headerIlluAnim');
        btns[0].classList.add('none')
        

        for(let i=0; i<navIllu.length; i++)
        {
            navIllu[i].classList.add('headerIllu__nav__LinkAnim');
        }
       
    }
    else
    {
        headerIllu[0].classList.remove('headerIlluAnim');
        btns[0].classList.remove('none')

        for(let i =0; i<navIllu.length; i++)
        {
            navIllu[i].classList.remove('headerIllu__nav__LinkAnim');
        }
        
    }
});