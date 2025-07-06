console.log("My Custom Script is running!")

function setBackgroundBasedOnTime(){
    const body = document.body;
    const currentHour = new Date().getHours();

    body.classList.remove('dawn-bg', 'day-bg', 'dusk-bg', 'night-bg')

    if (currentHour >=5 && currentHour < 12){
        body.classList.add('dawn-bg');
    } else if (currentHour >=12 && currentHour < 18){
        body.classList.add('day-bg');
    } else if (currentHour >=18 && currentHour < 21){
        body.classList.add('dusk-bg');
    } else {
        body.classList.add('night-bg');
    }

    if (currentHour >= 18 || currentHour < 6){ 
        body.style.color = '#ecf0f1';
    } else {
        body.style.color = '#333';
    }
}

setBackgroundBasedOnTime();

const searchInput = document.querySelector('.search-input');
const suggestionsDropdown = document.querySelector('.suggestions-dropdown');

const selectedCharDisplay = document.querySelector('.selected-character-display');
const selectedCharImage = document.getElementById('selected-char-image');
const selectedCharName = document.getElementById('selected-char-name');

const gotoPageBtn = document.getElementById('goto-page-btn');
let selectedCharacterData = null;


const characters = [
    { name: "Albedo", image: "bg_img/characters/albedo.png" },
    { name: "Alhaitham", image: "bg_img/characters/alhaitham.png" },
    { name: "Amber", image: "bg_img/characters/amber.png" },
    { name: "Arataki Itto", image: "bg_img/characters/arataki_itto.png" },
    { name: "Baizhu", image: "bg_img/characters/baizhu.png" },
    { name: "Barbara", image: "bg_img/characters/barbara.png" },
    { name: "Beidou", image: "bg_img/characters/beidou.png" },
    { name: "Bennett", image: "bg_img/characters/bennett.png" },
    { name: "Candace", image: "bg_img/characters/candace.png" },
    { name: "Charlotte", image: "bg_img/characters/charlotte.png" },
    { name: "Chevreuse", image: "bg_img/characters/chevreuse.png" },
    { name: "Chiori", image: "bg_img/characters/chiori.png" },
    { name: "Chongyun", image: "bg_img/characters/chongyun.png" },
    { name: "Collei", image: "bg_img/characters/collei.png" },
    { name: "Cyno", image: "bg_img/characters/cyno.png" },
    { name: "Dehya", image: "bg_img/characters/dehya.png" },
    { name: "Diluc", image: "bg_img/characters/diluc.png" },
    { name: "Diona", image: "bg_img/characters/diona.png" },
    { name: "Dori", image: "bg_img/characters/dori.png" },
    { name: "Eula", image: "bg_img/characters/eula.png" },
    { name: "Faruzan", image: "bg_img/characters/faruzan.png" },
    { name: "Fischl", image: "bg_img/characters/fischl.png" },
    { name: "Freminet", image: "bg_img/characters/freminet.png" },
    { name: "Furina", image: "bg_img/characters/furina.png" },
    { name: "Gaming", image: "bg_img/characters/gaming.png" },
    { name: "Ganyu", image: "bg_img/characters/ganyu.png" },
    { name: "Gorou", image: "bg_img/characters/gorou.png" },
    { name: "Hu Tao", image: "bg_img/characters/hu_tao.png" },
    { name: "Jean", image: "bg_img/characters/jean.png" },
    { name: "Kaedehara Kazuha", image: "bg_img/characters/kaedehara_kazuha.png" },
    { name: "Kaeya", image: "bg_img/characters/kaeya.png" },
    { name: "Kaveh", image: "bg_img/characters/kaveh.png" },
    { name: "Keqing", image: "bg_img/characters/keqing.png" },
    { name: "Kirara", image: "bg_img/characters/kirara.png" },
    { name: "Klee", image: "bg_img/characters/klee.png" },
    { name: "Kujou Sara", image: "bg_img/characters/kujou_sara.png" },
    { name: "Kuki Shinobu", image: "bg_img/characters/kuki_shinobu.png" },
    { name: "Layla", image: "bg_img/characters/layla.png" },
    { name: "Lisa", image: "bg_img/characters/lisa.png" },
    { name: "Lynette", image: "bg_img/characters/lynette.png" },
    { name: "Lyney", image: "bg_img/characters/lyney.png" },
    { name: "Mika", image: "bg_img/characters/mika.png" },
    { name: "Nahida", image: "bg_img/characters/nahida.png" },
    { name: "Neuvillette", image: "bg_img/characters/neuvillette.png" },
    { name: "Nilou", image: "bg_img/characters/nilou.png" },
    { name: "Ningguang", image: "bg_img/characters/ningguang.png" },
    { name: "Noelle", image: "bg_img/characters/noelle.png" },
    { name: "Qiqi", image: "bg_img/characters/qiqi.png" },
    { name: "Raiden Shogun", image: "bg_img/characters/raiden_shogun.png" },
    { name: "Razor", image: "bg_img/characters/razor.png" },
    { name: "Rosaria", image: "bg_img/characters/rosaria.png" },
    { name: "Sangonomiya Kokomi", image: "bg_img/characters/sangonomiya_kokomi.png" },
    { name: "Sayu", image: "bg_img/characters/sayu.png" },
    { name: "Shenhe", image: "bg_img/characters/shenhe.png" },
    { name: "Shikanoin Heizou", image: "bg_img/characters/shikanoin_heizou.png" },
    { name: "Sucrose", image: "bg_img/characters/sucrose.png" },
    { name: "Tartaglia", image: "bg_img/characters/tartaglia.png" },
    { name: "Thoma", image: "bg_img/characters/thoma.png" },
    { name: "Tighnari", image: "bg_img/characters/tighnari.png" },
    { name: "Venti", image: "bg_img/characters/venti.png" },
    { name: "Wanderer", image: "bg_img/characters/wanderer.png" },
    { name: "Wriothesley", image: "bg_img/characters/wriothesley.png" },
    { name: "Xiangling", image: "bg_img/characters/xiangling.png" },
    { name: "Xiao", image: "bg_img/characters/xiao.png" },
    { name: "Xingqiu", image: "bg_img/characters/xingqiu.png" },
    { name: "Xinyan", image: "bg_img/characters/xinyan.png" },
    { name: "Yae Miko", image: "bg_img/characters/yae_miko.png" },
    { name: "Yanfei", image: "bg_img/characters/yanfei.png" },
    { name: "Yaoyao", image: "bg_img/characters/yaoyao.png" },
    { name: "Yelan", image: "bg_img/characters/yelan.png" },
    { name: "Yoimiya", image: "bg_img/characters/yoimiya.png" },
    { name: "Yun Jin", image: "bg_img/characters/yun_jin.png" },
    { name: "Zhongli", image: "bg_img/characters/zhongli.png" },
    { name: "Traveler (Aether)", image: "bg_img/characters/traveler_aether.png" },
    { name: "Traveler (Lumine)", image: "bg_img/characters/traveler_lumine.png" }
];

searchInput.addEventListener('input', function(){
    const searchTerm = this.value.toLowerCase();
    suggestionsDropdown.innerHTML = '';
    selectedCharDisplay.style.display = 'none';
    gotoPageBtn.disabled = true;
    gotoPageBtn.style.opacity = '0.5';
    gotoPageBtn.style.pointerEvents = 'none';
    selectedCharacterData = null; 

    if (searchTerm.length === 0){
        suggestionsDropdown.style.display = 'none';
        return;
    }

    const filteredSuggestions = characters.filter(character =>
        character.name.toLowerCase().startsWith(searchTerm)
    );

    if (filteredSuggestions.length > 0){
        filteredSuggestions.forEach(charObj => { 
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');

           
            const charImage = document.createElement('img');
            charImage.src = charObj.image;
            charImage.alt = charObj.name;
            suggestionItem.appendChild(charImage);

           
            const charNameSpan = document.createElement('span');
            charNameSpan.textContent = charObj.name;
            suggestionItem.appendChild(charNameSpan);

          
            suggestionItem.addEventListener('click', function(){
                searchInput.value = charObj.name; 
                suggestionsDropdown.style.display = 'none'; 
               
                selectedCharImage.src = charObj.image;
                selectedCharImage.alt = charObj.name;
                selectedCharName.textContent = charObj.name;
                selectedCharDisplay.style.display = 'flex'; 

                selectedCharacterData = charObj;
                gotoPageBtn.disabled = false;
                gotoPageBtn.style.opacity = '1';
                gotoPageBtn.style.pointerEvents = 'auto';
            });

            suggestionsDropdown.appendChild(suggestionItem);
        });
        suggestionsDropdown.style.display = 'block';
    } else {
        suggestionsDropdown.style.display = 'none';
    }
});

document.addEventListener('click', function(event){
    if (!suggestionsDropdown.contains(event.target) && event.target !== searchInput){
        suggestionsDropdown.style.display = 'none';
        if (selectedCharacterData === null || searchInput.value !== selectedCharacterData.name) {
             selectedCharDisplay.style.display = 'none';
             gotoPageBtn.disabled = true;
             gotoPageBtn.style.opacity = '0.5';
             gotoPageBtn.style.pointerEvents = 'none';
        }
    }
});

gotoPageBtn.addEventListener('click', function() {
    if (selectedCharacterData) {
        window.location.href = `character-page.html?name=${encodeURIComponent(selectedCharacterData.name)}&image=${encodeURIComponent(selectedCharacterData.image)}`;

    } else {
        alert("Please select a character first!");
    }
});