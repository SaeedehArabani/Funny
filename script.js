const heart = document.getElementById('heart');
const maxDistance = 150; // Distance at which the heart starts escaping

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const heartRect = heart.getBoundingClientRect();
    const heartX = heartRect.left + heartRect.width / 2;
    const heartY = heartRect.top + heartRect.height / 2;

    const distX = mouseX - heartX;
    const distY = mouseY - heartY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < maxDistance) {
        const escapeX = heartX - distX * (maxDistance / distance);
        const escapeY = heartY - distY * (maxDistance / distance);

        heart.style.left = `${escapeX - heartRect.width / 2}px`;
        heart.style.top = `${escapeY - heartRect.height / 2}px`;
    }
});
