function toggleMode(){
   const html = document.documentElement

   /* if(html.classList.contains('light'))    {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/

    /*para simplificar o códico podemos usar esse: */
    
    html.classList.toggle('light')

    
    //mudar a foto quando mudar o mode light

    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }

    //mudar descrição da foto quando mudar de modo

    const alt = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        alt.setAttribute('alt', ' Foto de Rodrigo sorrindo na frente do espelho')
    } else {
        alt.setAttribute('alt', 'Foto de Rodrigo escondendo o rosto com o celular')
    }
}