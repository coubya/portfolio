const translations = {
    "fr": {
        "cv": "CV",
        "web-semantique": "Web Sémantique",
        "welcome": "Bienvenue sur mon Portfolio",
        "introduction": "Bonjour, je m'appelle Yacoub MESBAHI et ceci est mon portfolio. Vous trouverez ici mon CV et une présentation de mes travaux pratiques sur le web sémantique.",
        "copyright": "© 2024 Yacoub MESBAHI. Tous droits réservés."
    },
    "en": {
        "cv": "Resume",
        "web-semantique": "Semantic Web",
        "welcome": "Welcome to my Portfolio",
        "introduction": "Hello, my name is Yacoub MESBAHI and this is my portfolio. Here you will find my resume and a presentation of my practical work on semantic web.",
        "copyright": "© 2024 Yacoub MESBAHI. All rights reserved."
    },
    "ar": {
        "cv": "السيرة الذاتية",
        "web-semantique": "الويب الدلالي",
        "welcome": "مرحبًا بكم في ملفي الشخصي",
        "introduction": "مرحبًا، اسمي يعقوب مصبحي وهذا هو ملفي الشخصي. ستجد هنا سيرتي الذاتية وعرضًا لأعمالي العملية على الويب الدلالي.",
        "copyright": "© 2024 يعقوب مصبحي. كل الحقوق محفوظة."
    }
};

// Charger l'API IFrame Player de YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
        height: '390',
        width: '640',
        videoId: 'TEXaoSC_8lQ',
        playerVars: { 'cc_load_policy': 1, 'cc_lang_pref': 'fr' },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function updateContent(lang) {
    document.documentElement.lang = lang;
    if (lang === 'ar') {
        document.documentElement.classList.add('rtl');
    } else {
        document.documentElement.classList.remove('rtl');
    }
    document.querySelectorAll('[data-lang]').forEach(function(element) {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });

    // Mettre à jour le lien du CV
    const cvLink = document.getElementById('cv-link');
    switch (lang) {
        case 'fr':
            cvLink.href = 'cv.xml';
            break;
        case 'en':
            cvLink.href = 'cv_en.xml';
            break;
        case 'ar':
            cvLink.href = 'cv_ar.xml';
            break;
        default:
            cvLink.href = 'cv.xml';
    }

    // Mettre à jour les sous-titres de la vidéo
    if (player) {
        player.setOption('cc', 'track', {'languageCode': lang});
    }
}


document.querySelectorAll('.lang-flag').forEach(flag => {
    flag.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        updateContent(selectedLang);
    });
});

// Initial content update based on the default language
updateContent('fr');
