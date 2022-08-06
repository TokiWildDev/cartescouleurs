
const pageCartes = document.getElementsByClassName('cartesContain');
const body = document.getElementsByTagName('body');
const homeLogo = document.getElementsByClassName('fa-solid fa-cat');


//Fonction pour montrer ou cacher la page des cartes et permettre au body de Scroll ou non//

    const hideCartesScroll = () => 
    {
        pageCartes[0].classList.add('containHide');
        body[0].classList.add('bodyScroll');
    }
    const hideCartesNoScroll = () => 
    {
        pageCartes[0].classList.add('containHide');
    }
    const showCartes =() =>
    {
        pageCartes[0].classList.remove('containHide');
        body[0].classList.remove('bodyScroll');
    }

// Section pour le nav on selectionne un lien et revele la page correspondante (je joue avec z-index et opacity)//

const lienCouleurs = () =>     //Lien vers la Page des couleurs //
{
    const linkColorr = document.getElementsByClassName('linkColor');
    const pageColor = document.getElementsByClassName('sectionBody sectionBody--couleurs');
    const home = document.getElementsByClassName('couleursHome')
    

    linkColorr[0].addEventListener('click',()=>
    {
        pageColor[0].classList.add('containShow');
        hideCartesScroll();
    });


    homeLogo[0].addEventListener('click',()=> //retour Index //
    {
        pageColor[0].classList.remove('containShow');
        showCartes();
    });

    
    home[0].addEventListener('click',()=> //retour Index //
    {
        pageColor[0].classList.remove('containShow');
        showCartes();
    });

    
};

const lienVitrine = () =>     //Lien Vers la page des vitrines //
{
    const linkVitrinee = document.getElementsByClassName('linkVitrine');
    const pageVitrine = document.getElementsByClassName('sectionBody sectionBody--vitrine');
    const home = document.getElementsByClassName('headerIllu__nav__link headerIllu__nav__link--home')
    

    linkVitrinee[0].addEventListener('click',()=> 
    {
        pageVitrine[0].classList.add('containShow');
        hideCartesScroll();
    });


    home[0].addEventListener('click',()=> // retour Index //
    {
        pageVitrine[0].classList.remove('containShow');
        showCartes();
    });

    
};
const lienJavascript = () =>     //Lien Vers la page de Javascript //
{
    const linkScript= document.getElementsByClassName('linkJavaScript');
    const pageScript = document.getElementsByClassName('sectionBody sectionBody--javascript');
    const home = document.getElementsByClassName('javaScriptHome');
    

    linkScript[0].addEventListener('click',()=> 
    {
        console.log('oui')
        pageScript[0].classList.add('containShow');
        hideCartesScroll();
    });


    home[0].addEventListener('click',()=> // retour Index //
    {
        console.log('yess');
        pageScript[0].classList.remove('containShow');
        showCartes();
    });

    
}
 
lienJavascript();
lienCouleurs();
lienVitrine();