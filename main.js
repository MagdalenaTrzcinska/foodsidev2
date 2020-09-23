setInterval(changingOpinions, 3000);

function changingOpinions() {
    const text = document.getElementsByClassName('testimonial__opinion1')[0];
    const text2 = document.getElementsByClassName('testimonial__opinion2')[0];

    if (text.style.opacity === '1') {
        text.style.opacity = '0';
        text2.style.opacity = '1';
    } else {
        text.style.opacity = '1';
        text2.style.opacity = '0';
    }
}

function onOpenMobileNav() {
    const container = document.querySelector('.forMobile');

    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
}

setInterval(changeOfPhotos, 4000);

function changeOfPhotos() {

    var photo = document.getElementsByClassName('photomain')[0];

    if (photo.classList.contains('photo1')) {
        photo.style.backgroundImage = 'url(img/hero_1.jpg)';
        photo.classList.remove('photo1');
    } else {
        photo.style.backgroundImage = 'url(img/hero_2.jpg)';
        photo.classList.add('photo1');
    }
    document.getElementsByClassName('photomain')[0].style.backgroundImage = photo;
}





