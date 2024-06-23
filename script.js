const translations = {
    "fr": {
        "cv": "CV",
        "web-semantique": "Web Sémantique",
        "welcome": "Bienvenue sur mon Portfolio",
        "introduction": "Bonjour, je m'appelle [Ton Nom] et ceci est mon portfolio. Vous trouverez ici mon CV et une présentation de mes travaux pratiques sur le web sémantique.",
        "copyright": "© 2024 [Ton Nom]. Tous droits réservés."
    },
    "en": {
        "cv": "Resume",
        "web-semantique": "Semantic Web",
        "welcome": "Welcome to my Portfolio",
        "introduction": "Hello, my name is [Your Name] and this is my portfolio. Here you will find my resume and a presentation of my practical work on semantic web.",
        "copyright": "© 2024 [Your Name]. All rights reserved."
    },
    "ar": {
        "cv": "السيرة الذاتية",
        "web-semantique": "الويب الدلالي",
        "welcome": "مرحبًا بكم في ملفي الشخصي",
        "introduction": "مرحبًا، اسمي [اسمك] وهذا هو ملفي الشخصي. ستجد هنا سيرتي الذاتية وعرضًا لأعمالي العملية على الويب الدلالي.",
        "copyright": "© 2024 [اسمك]. كل الحقوق محفوظة."
    }
};

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
}

document.getElementById('language-switcher').addEventListener('change', function() {
    const selectedLang = this.value;
    updateContent(selectedLang);
});

// Initial content update based on the default language
updateContent('fr');
