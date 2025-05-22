// Daily Challenge: Planets

document.addEventListener('DOMContentLoaded', function() {
    const planets = [
        { name: 'Mercury', color: 'gray', moons: 0 },
        { name: 'Venus', color: 'khaki', moons: 0 },
        { name: 'Earth', color: 'deepskyblue', moons: 1 },
        { name: 'Mars', color: 'orangered', moons: 2 },
        { name: 'Jupiter', color: 'burlywood', moons: 79 },
        { name: 'Saturn', color: 'goldenrod', moons: 83 },
        { name: 'Uranus', color: 'lightseagreen', moons: 27 },
        { name: 'Neptune', color: 'royalblue', moons: 14 }
    ];

    const section = document.querySelector('.listPlanets');

    planets.forEach((planet, idx) => {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.backgroundColor = planet.color;
        planetDiv.textContent = planet.name;
        planetDiv.style.margin = '20px';
        planetDiv.style.display = 'inline-block';
        planetDiv.style.position = 'relative';

        for (let i = 0; i < planet.moons; i++) {
            const moon = document.createElement('div');
            moon.classList.add('moon');
            const angle = (i / planet.moons) * 2 * Math.PI;
            const radius = 60;
            moon.style.left = 50 + radius * Math.cos(angle) + 'px';
            moon.style.top = 50 + radius * Math.sin(angle) + 'px';
            planetDiv.appendChild(moon);
        }

        section.appendChild(planetDiv);
    });
});
