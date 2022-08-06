const toggle = () =>
{
    const btn = document.getElementsByClassName('rangeToggle')

    btn[0].addEventListener('click', ()=>
    {
        const ouvrir = document.getElementsByClassName('rangeToggle__ouvrir');
        const fermer = document.getElementsByClassName('rangeToggle__fermer');
        const menu = document.getElementsByClassName('menuQuerry');
    

            ouvrir[0].classList.toggle('rangeToggle__cacher')
            fermer[0].classList.toggle('rangeToggle__visible')
            menu[0].classList.toggle('menuQuerryVisible')
        
            
              
        
    });
}

toggle ();

