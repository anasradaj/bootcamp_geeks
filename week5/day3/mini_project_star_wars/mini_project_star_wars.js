// Star Wars Character Web App

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('get-character');
    const loading = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const card = document.getElementById('character-info');
    const nameEl = document.getElementById('name');
    const heightEl = document.getElementById('height');
    const genderEl = document.getElementById('gender');
    const birthYearEl = document.getElementById('birth-year');
    const homeWorldEl = document.getElementById('home-world');

    async function getCharacterData() {
        errorDiv.classList.add('hidden');
        card.classList.add('hidden');
        loading.classList.remove('hidden');

        const id = Math.floor(Math.random() * 83) + 1;
        try {
            const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
            if (!res.ok) throw new Error('Character not found');
            const data = await res.json();
            const char = data.result.properties;

            let homeWorld = 'Unknown';
            if (char.homeworld) {
                try {
                    const hwRes = await fetch(char.homeworld);
                    if (hwRes.ok) {
                        const hwData = await hwRes.json();
                        homeWorld = hwData.result.properties.name;
                    }
                } catch {}
            }

            nameEl.textContent = char.name;
            heightEl.textContent = char.height + ' cm';
            genderEl.textContent = char.gender;
            birthYearEl.textContent = char.birth_year;
            homeWorldEl.textContent = homeWorld;

            card.classList.remove('hidden');
        } catch (err) {
            errorDiv.textContent = 'Error: Could not fetch character data.';
            errorDiv.classList.remove('hidden');
        } finally {
            loading.classList.add('hidden');
        }
    }

    btn.addEventListener('click', getCharacterData);
});