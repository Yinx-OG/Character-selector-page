console.log("My Custom Script is running!")

function setBackgroundBasedOnTime(){
    const body = document.body;
    const currentHour = new Date().getHours();
    // NEW: Get the background overlay element
    const backgroundOverlay = document.querySelector('.background-overlay');

    // It's good practice to remove these classes from body, though they no longer set background-image in CSS
    body.classList.remove('dawn-bg', 'day-bg', 'dusk-bg', 'night-bg');

    let backgroundImagePath = ''; // To store the path for the background image
    let bodyTextColor = ''; // To store the color that will be applied to body.style.color

    if (currentHour >=5 && currentHour < 12){
        backgroundImagePath = 'url("bg_img/dawn_bg.jpg")';
        bodyTextColor = '#2c3e50';
        body.classList.add('dawn-bg'); // Keep class on body for potential other styles
    } else if (currentHour >=12 && currentHour < 18){
        backgroundImagePath = 'url("bg_img/day_bg.jpg")';
        bodyTextColor = '#34495e';
        body.classList.add('day-bg');
    } else if (currentHour >=18 && currentHour < 21){
        backgroundImagePath = 'url("bg_img/dusk_bg.jpg")';
        bodyTextColor = '#34495e';
        body.classList.add('dusk-bg');
    } else {
        backgroundImagePath = 'url("bg_img/night_bg.jpg")';
        bodyTextColor = 'black'; // Your preferred black for night
        body.classList.add('night-bg');
    }

    // Apply the background image to the new overlay element
    if (backgroundOverlay) {
        backgroundOverlay.style.backgroundImage = backgroundImagePath;
    }

    // Apply the body text color directly as per your existing working code
    body.style.color = bodyTextColor;
}

setBackgroundBasedOnTime();
setInterval(setBackgroundBasedOnTime, 1000 * 60 * 60); // Keep hourly update


const searchInput = document.querySelector('.search-input');
const suggestionsDropdown = document.querySelector('.suggestions-dropdown');

const selectedCharDisplay = document.querySelector('.selected-character-display');
const selectedCharImage = document.getElementById('selected-char-image');
const selectedCharName = document.getElementById('selected-char-name');

const gotoPageBtn = document.getElementById('goto-page-btn');
let selectedCharacterData = null;

function updateButtonState() {
    if (selectedCharacterData && searchInput.value === selectedCharacterData.name) {
        gotoPageBtn.disabled = false;
        gotoPageBtn.style.opacity = '1';
        gotoPageBtn.style.pointerEvents = 'auto';
        gotoPageBtn.style.display = 'block';
    } else {
        gotoPageBtn.disabled = true;
        gotoPageBtn.style.opacity = '0.5';
        gotoPageBtn.style.pointerEvents = 'none';
        gotoPageBtn.style.display = 'none';
    }
}

updateButtonState();


const characters = [
    { name: "Albedo", image: "bg_img/characters/albedo.png" },
    { name: "Alhaitham", image: "bg_img/characters/alhaitham.png" },
    { name: "Aloy", image: "bg_img/characters/aloy.png" },
    { name: "Amber", image: "bg_img/characters/amber.png" },
    { name: "Arataki Itto", image: "bg_img/characters/arataki_itto.png" },
    { name: "Arlecchino", image: "bg_img/characters/arlecchino.png" },
    { name: "Baizhu", image: "bg_img/characters/baizhu.png" },
    { name: "Barbara", image: "bg_img/characters/barbara.png" },
    { name: "Beidou", image: "bg_img/characters/beidou.png" },
    { name: "Bennett", image: "bg_img/characters/bennett.png" },
    { name: "Candace", image: "bg_img/characters/candace.png" },
    { name: "Charlotte", image: "bg_img/characters/charlotte.png" },
    { name: "Chasca", image: "bg_img/characters/chasca.png" },
    { name: "Chevreuse", image: "bg_img/characters/chevreuse.png" },
    { name: "Chiori", image: "bg_img/characters/chiori.png" },
    { name: "Chongyun", image: "bg_img/characters/chongyun.png" },
    { name: "Citlali", image: "bg_img/characters/citlali.png" },
    { name: "Clorinde", image: "bg_img/characters/clorinde.png" },
    { name: "Collei", image: "bg_img/characters/collei.png" },
    { name: "Cyno", image: "bg_img/characters/cyno.png" },
    { name: "Dahlia", image: "bg_img/characters/dahlia.png" },
    { name: "Dehya", image: "bg_img/characters/dehya.png" },
    { name: "Diluc", image: "bg_img/characters/diluc.png" },
    { name: "Diona", image: "bg_img/characters/diona.png" },
    { name: "Dori", image: "bg_img/characters/dori.png" },
    { name: "Emilie", image: "bg_img/characters/emilie.png" },
    { name: "Escoffier", image: "bg_img/characters/escoffier.png" },
    { name: "Eula", image: "bg_img/characters/eula.png" },
    { name: "Faruzan", image: "bg_img/characters/faruzan.png" },
    { name: "Fischl", image: "bg_img/characters/fischl.png" },
    { name: "Freminet", image: "bg_img/characters/freminet.png" },
    { name: "Furina", image: "bg_img/characters/furina.png" },
    { name: "Gaming", image: "bg_img/characters/gaming.png" },
    { name: "Ganyu", image: "bg_img/characters/ganyu.png" },
    { name: "Gorou", image: "bg_img/characters/gorou.png" },
    { name: "Hu Tao", image: "bg_img/characters/hu_tao.png" },
    { name: "Iansan", image: "bg_img/characters/iansan.png" },
    { name: "Ifa", image: "bg_img/characters/ifa.png" },
    { name: "Jean", image: "bg_img/characters/jean.png" },
    { name: "Kachina", image: "bg_img/characters/kachina.png" },
    { name: "Kaedehara Kazuha", image: "bg_img/characters/kazuha.png" },
    { name: "Kaeya", image: "bg_img/characters/kaeya.png" },
    { name: "Kamisato Ayaka", image: "bg_img/characters/ayaka.png" },
    { name: "Kamisato Ayato", image: "bg_img/characters/ayato.png" },
    { name: "Kaveh", image: "bg_img/characters/kaveh.png" },
    { name: "Keqing", image: "bg_img/characters/keqing.png" },
    { name: "Kinich", image: "bg_img/characters/kinich.png" },
    { name: "Kirara", image: "bg_img/characters/kirara.png" },
    { name: "Klee", image: "bg_img/characters/klee.png" },
    { name: "Kujou Sara", image: "bg_img/characters/sara.png" },
    { name: "Kuki Shinobu", image: "bg_img/characters/kuki.png" },
    { name: "Lan Yan", image: "bg_img/characters/lan_yan.png" },
    { name: "Layla", image: "bg_img/characters/layla.png" },
    { name: "Lisa", image: "bg_img/characters/lisa.png" },
    { name: "Lynette", image: "bg_img/characters/lynette.png" },
    { name: "Lyney", image: "bg_img/characters/lyney.png" },
    { name: "Mavuika", image: "bg_img/characters/mavuika.png" },
    { name: "Mika", image: "bg_img/characters/mika.png" },
    { name: "Mona", image: "bg_img/characters/mona.png" },
    { name: "Mualani", image: "bg_img/characters/mualani.png" },
    { name: "Nahida", image: "bg_img/characters/nahida.png" },
    { name: "Navia", image: "bg_img/characters/navia.png" },
    { name: "Neuvillette", image: "bg_img/characters/neuvi.png" },
    { name: "Nilou", image: "bg_img/characters/nilou.png" },
    { name: "Ningguang", image: "bg_img/characters/ningguang.png" },
    { name: "Noelle", image: "bg_img/characters/noelle.png" },
    { name: "Ororon", image: "bg_img/characters/ororon.png" },
    { name: "Qiqi", image: "bg_img/characters/qiqi.png" },
    { name: "Raiden Shogun", image: "bg_img/characters/raiden.png" },
    { name: "Razor", image: "bg_img/characters/razor.png" },
    { name: "Rosaria", image: "bg_img/characters/rosaria.png" },
    { name: "Sangonomiya Kokomi", image: "bg_img/characters/kokomi.png" },
    { name: "Sayu", image: "bg_img/characters/sayu.png" },
    { name: "Sethos", image: "bg_img/characters/sethos.png" },
    { name: "Shenhe", image: "bg_img/characters/shenhe.png" },
    { name: "Shikanoin Heizou", image: "bg_img/characters/heizou.png" },
    { name: "Sigewinne", image: "bg_img/characters/sigewinne.png" },
    { name: "Skirk", image: "bg_img/characters/skirk.png" },
    { name: "Sucrose", image: "bg_img/characters/sucrose.png" },
    { name: "Tartaglia", image: "bg_img/characters/childe.png" },
    { name: "Thoma", image: "bg_img/characters/thoma.png" },
    { name: "Tighnari", image: "bg_img/characters/tighnari.png" },
    { name: "Traveler (Aether)", image: "bg_img/characters/aether.png" },
    { name: "Traveler (Lumine)", image: "bg_img/characters/lumine.png" },
    { name: "Varesa", image: "bg_img/characters/varesa.png" },
    { name: "Venti", image: "bg_img/characters/venti.png" },
    { name: "Wanderer", image: "bg_img/characters/wanderer.png" },
    { name: "Wriothesley", image: "bg_img/characters/wrio.png" },
    { name: "Xiangling", image: "bg_img/characters/xiangling.png" },
    { name: "Xianyun", image: "bg_img/characters/xianyun.png" },
    { name: "Xiao", image: "bg_img/characters/xiao.png" },
    { name: "Xilonen", image: "bg_img/characters/xilonen.png" },
    { name: "Xingqiu", image: "bg_img/characters/xingqiu.png" },
    { name: "Xinyan", image: "bg_img/characters/xinyan.png" },
    { name: "Yae Miko", image: "bg_img/characters/yae_miko.png" },
    { name: "Yanfei", image: "bg_img/characters/yanfei.png" },
    { name: "Yaoyao", image: "bg_img/characters/yaoyao.png" },
    { name: "Yelan", image: "bg_img/characters/yelan.png" },
    { name: "Yoimiya", image: "bg_img/characters/yoimiya.png" },
    { name: "Yumemizuki Mizuki", image: "bg_img/characters/mizuki.png" },
    { name: "Yun Jin", image: "bg_img/characters/yun_jin.png" },
    { name: "Zhongli", image: "bg_img/characters/zhongli.png" }
];

searchInput.addEventListener('input', function(){
    const searchTerm = this.value.toLowerCase();
    suggestionsDropdown.innerHTML = '';
    selectedCharDisplay.style.display = 'none';

    selectedCharacterData = null; // Clear selected data when typing
    updateButtonState(); // Update button state immediately based on cleared selection

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

                selectedCharacterData = charObj; // Set selected data
                updateButtonState(); // Update button state after selection
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
        // Check if the input value still matches a selected character, otherwise clear it.
        if (selectedCharacterData && searchInput.value === selectedCharacterData.name) {
            // Do nothing, keep selected state and button visible
        } else {
            selectedCharDisplay.style.display = 'none';
            selectedCharacterData = null; // Clear selected data
        }
        updateButtonState(); // Update button state based on final selectedCharacterData
    }
});

gotoPageBtn.addEventListener('click', function() {
    if (selectedCharacterData) {
        window.location.href = `character-page.html?name=${encodeURIComponent(selectedCharacterData.name)}&image=${encodeURIComponent(selectedCharacterData.image)}`;

    } else {
        alert("Please select a character first!");
    }
});