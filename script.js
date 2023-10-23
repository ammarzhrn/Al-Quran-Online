const container = document.getElementById('content');
const url = 'https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json'

fetch(url).then(response => response.json()).then(data => {

    const list = data

    list.forEach(el => {
        const card = document.createElement('div');
        card.classList.add('card');

        const row1 = document.createElement('div');
        row1.classList.add('row1');

        const item1 = document.createElement('div');
        item1.classList.add('item-1');

        const nama = document.createElement('h1');
        nama.classList.add('nama');
        nama.innerText = el.name

        const type = document.createElement('h2');
        type.classList.add('type');
        type.innerText = el.type

        const item2 = document.createElement('div');
        item2.classList.add('item-2');

        const titleSurahKe = document.createElement('p');
        titleSurahKe.innerText = 'Surah Ke'

        const ke = document.createElement('h1');
        ke.classList.add('surah-ke');
        ke.innerText = el.number_of_surah

        const row2 = document.createElement('div');
        row2.classList.add('row2');

        const ayat = document.createElement('h1');
        ayat.classList.add('ayat');
        ayat.innerText = el.number_of_ayah

        const titleAyah = document.createElement('p');
        titleAyah.innerText = 'Ayat'

        const row3 = document.createElement('div');
        row3.classList.add('row3');

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.classList.add("audio");
        audio.src = el.recitation;

        container.append(card)
        card.append(row1, row2, row3)
        row1.append(item1, item2)
        item1.append(nama, type)
        item2.append(titleSurahKe, ke)
        row2.append(ayat, titleAyah)
        row3.append(audio)
    });

    const footer = document.getElementById('footer')
    const footerText = document.createElement('p')
    footerText.innerText = '© Ammar Zahran. All right reserved'
    footer.append(footerText)

});