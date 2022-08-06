
const calculette = () =>
{
    const addition = document.getElementsByClassName('calculateJvs__boiteMiddle__containBouton__bouton--addition');
    const soustraction =document.getElementsByClassName('calculateJvs__boiteMiddle__containBouton__bouton--soustraction');
    const multiplication =document.getElementsByClassName('calculateJvs__boiteMiddle__containBouton__bouton--multiplication');
    const division =document.getElementsByClassName('calculateJvs__boiteMiddle__containBouton__bouton--division');
    const modulo = document.getElementsByClassName('calculateJvs__boiteMiddle__containBouton__bouton--modulo');

    const valeur1 = document.getElementsByClassName('calculateJvs__boiteTop__containValeur__valeur--n1');
    const valeur2 = document.getElementsByClassName('calculateJvs__boiteTop__containValeur__valeur--n2');
    let resultat = document.getElementsByClassName('calculateJvs__boiteBottom__containResultat__resultat');
    
    addition[0].addEventListener('click', () =>
    {
        console.log('+')
        console.log(valeur1[0].value)
        console.log(valeur2[0].value)
        if(!valeur1[0].value && !valeur2[0].value)
        {
            valeur1[0].value="0",
            valeur2[0].value="0"
            resultat[0].value=parseFloat(valeur1[0].value) + parseFloat(valeur2[0].value);
        }
        else if(!valeur1[0].value)
        {
            valeur1[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) + parseFloat(valeur2[0].value);
        }
        else if(!valeur2[0].value)
        {
            valeur2[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) + parseFloat(valeur2[0].value);
        }
        else
        {
            resultat[0].value=parseFloat(valeur1[0].value) + parseFloat(valeur2[0].value);
        }  
    
    });
    soustraction[0].addEventListener('click', ()=>
    {
        console.log('-')
        if(!valeur1[0].value && !valeur2[0].value)
        {
            valeur1[0].value="0",
            valeur2[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) - parseFloat(valeur2[0].value);
        }
        else if(!valeur1[0].value)
        {
            valeur1[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) - parseFloat(valeur2[0].value);
        }
        else if(!valeur2[0].value)
        {
            valeur2[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) - parseFloat(valeur2[0].value);
        }
        else
        {
            resultat[0].value=parseFloat(valeur1[0].value) - parseFloat(valeur2[0].value);
        }
    
        console.log(valeur1[0].value)
        console.log(valeur2[0].value)
    });
    multiplication[0].addEventListener('click', ()=>
    {
        console.log('*')
        if(!valeur1[0].value && !valeur2[0].value)
        {
            valeur1[0].value="0",
            valeur2[0].value="0"
            resultat[0].value=parseFloat(valeur1[0].value) * parseFloat(valeur2[0].value);
        }
        else if(!valeur1[0].value)
        {
            valeur1[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) * parseFloat(valeur2[0].value);
        }
        else if(!valeur2[0].value)
        {
            valeur2[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) * parseFloat(valeur2[0].value);
        }
        else
        {
            resultat[0].value=parseFloat(valeur1[0].value) * parseFloat(valeur2[0].value);
        }
    
        console.log(valeur1[0].value)
        console.log(valeur2[0].value)
    });
    division[0].addEventListener('click', ()=>
    {
        console.log('/')
        if(!valeur1[0].value && !valeur2[0].value) // Si il n'y a aucune entrée dans les input //
        {
            resultat[0].value='Aucune entrée'
        }
        else if(!valeur1[0].value && valeur2[0].value=='0') // si il n'y a pas d'entrée dans l'input 1//
        {
             resultat[0].value='Il manque la valeur 1'      
        }
        else if(valeur1[0].value=='0' && !valeur2[0].value) // si il n'y a pas d'entrée dans l'input 2//
        {
             resultat[0].value='Il manque la valeur 2'      
        }
    
        else if(valeur1[0].value=='0' && valeur2[0].value=='0') // si les deux entrées = 0 //
        {
             resultat[0].value='Tu veux divisiser 0 par 0 ?'
                
        }
        else if(!valeur1[0].value) //Si il n'y a pas d'entrée dans l'input 1 alors sa valeur = 0 //
        {
            valeur1[0].value='0',
            resultat[0].value=parseFloat(valeur1[0].value) / parseFloat(valeur2[0].value);
        }
        else if(!valeur2[0].value) //Si il n'y a pas d'entrée dans l'input 2 alors sa valeur = 0 //
        {
            valeur2[0].value='0',
            resultat[0].value=parseFloat(valeur1[0].value) / parseFloat(valeur2[0].value);
        }
        else
        {
            resultat[0].value=parseFloat(valeur1[0].value) / parseFloat(valeur2[0].value);
        }
    
    });
    modulo[0].addEventListener('click', ()=>
    {
        console.log('%')
        if(!valeur1[0].value && !valeur2[0].value)
        {
           
            resultat[0].value='Aucune données'
        }
        else if(valeur1[0].value=="0" && valeur2[0].value=="0")
        {
            resultat[0].value = 'Pas de modulo de 0 par 0 !'
        }
        else if(!valeur1[0].value)
        {
            valeur1[0].value="0",
            resultat[0].value=parseFloat(valeur1[0].value) % parseFloat(valeur2[0].value);
        }
        else if(!valeur2[0].value)
        {
            valeur2[0].value="0",
            resultat[0].value="Impossible/infinity";
        }
        else if(valeur2[0].value=='0')
        {
            resultat[0].value="Impossible/infinity";
        }
        else if(valeur2[0].value>valeur1[0].value)
        {
            resultat[0].value="Salma réfléchi !?"
        }
        else
        {
            resultat[0].value=parseFloat(valeur1[0].value) % parseFloat(valeur2[0].value);
        }

        console.log(valeur1[0].value)
        console.log(valeur2[0].value)
    });
}
calculette();




