export const socialLinks = [
    {
        url: 'https://github.com/D4nRossi',
        iconName: 'github',
        active: true
    },
    {
        url: 'https://linkedin.com/in/danielrossi2002',
        iconName: 'linkedin',
        active: true
    },
    {
        url: 'https://wa.me/5511939524211',
        iconName: 'whatsapp',
        active: true
    },
    {
        url: 'https://instagram.com/danielrossi.png',
        iconName: 'instagram',
        active: true
    },
    {
        url: 'https://discord.gg/BTtGEmysF3',
        iconName: 'discord',
        active: false
    }
];
export const whereNextLinks = [
    {
        url: 'https://github.com/D4nRossi',
        text: 'Meus repositórios',
        active: true
    },
    {
        url: 'https://docs.google.com/document/d/1FvsBbf9p4n9XLd6RsFdUIO4jgHNdVLZwp9fdvjf0whQ/edit?usp=sharing',
        text: 'Curriculum vitæ',
        active: true
    },
    {
        url: 'https://www.cursoemvideo.com/cursos/',
        text: 'Onde eu comecei',
        active: false
    }
];
export const headerName = {
    insta: '@danielrossi.png',
    allName: 'Daniel Amorim' 
}
export const resumeTagLineText = 'Um pouco sobre mim'
export const imagePath = {
    path: 'assets/images/Eu.jpg',

}

export const showcaseContainer = document.querySelector('#showcase');

export const layout1 = document.querySelector('#layout1')
export const layout2 = document.querySelector('#layout2')
export const layout3 = document.querySelector('#layout3')
export const layout4 = document.querySelector('#layout4')

export function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  var contador = getCookie("contador");
if (contador === null) {
  contador = 0;
}
document.getElementById("contador").innerHTML = contador;
contador++;
setCookie("contador", contador, 365);