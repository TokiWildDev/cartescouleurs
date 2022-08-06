/* coper le texte de la galerie pour le coller facilement */

const btnCopy = document.getElementsByClassName('BtnCopie')


for(let i=0; i<btnCopy.length; i++)
{
    btnCopy[i].addEventListener('click',() =>
    {
        console.log('yep')
        const aCopier = document.getElementsByClassName('copiable')
        navigator.clipboard.writeText(aCopier[i].innerText);
        
        
    });
}
/////////////////////////////////////////////////////////////