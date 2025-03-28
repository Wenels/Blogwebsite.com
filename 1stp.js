document.addEventListener('DOMContentLoaded', () => {
    console.log('The Multimedia Hive Blog is live!');
});





const animeItem = document.querySelector('.anime');
animeItem.addEventListener('mouseover', () => {
    animeItem.style.transform = 'scale(1.2)';
    animeItem.style.transition = 'transform 0.3s';
});

animeItem.addEventListener('mouseout', () => {
    animeItem.style.transform = 'scale(1)';
});

animeItem.addEventListener('click', () => {
    alert('You clicked on Latest Blog!');
});