/**
 * أهل الصنعة - سكريبت الموقع التفاعلي
 * Ahel El-Sanaa - Main JavaScript
 */

// 1. Lenis Smooth Scroll (آمن ولا يسبب أخطاء إذا لم تتوفر المكتبة)
let lenis = null;
if (typeof Lenis !== 'undefined') {
    try {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smoothWheel: true,
            smoothTouch: false
        });

        function raf(time) {
            if (lenis) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
        }
        requestAnimationFrame(raf);
    } catch (e) {
        console.warn('Lenis smooth scroll initialization skipped:', e);
    }
}

// 2. GSAP Animations on Load
if (typeof gsap !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        try {
            if (document.querySelector(".hero-badge")) {
                gsap.from(".hero-badge", { opacity: 0, y: -20, duration: 0.8, delay: 0.2 });
            }
            if (document.querySelector(".hero h2")) {
                gsap.from(".hero h2", { opacity: 0, y: 30, duration: 1, delay: 0.4 });
            }
            if (document.querySelector(".hero p")) {
                gsap.from(".hero p", { opacity: 0, y: 20, duration: 1, delay: 0.6 });
            }
            if (document.querySelector(".search-box-wrapper")) {
                gsap.from(".search-box-wrapper", { opacity: 0, scale: 0.95, duration: 1, delay: 0.8 });
            }
        } catch (e) {
            console.warn('GSAP animation skipped:', e);
        }
    });
}

// 3. قاعدة بيانات التخصصات والمهنيين الموثوقين
const categories = {
    "اشراف هندسى": {
        label: "التخصصات الهندسية",
        description: "اختاري المهندس المناسب لمشروعك بأعلى كفاءة",
        peopleTitle: "المهندسين المتاحين",
        people: [
            {
                id: 1,
                name: "م. أحمد محمد",
                initials: "أم",
                job: "مهندس إشراف هندسي ومعماري",
                location: "القاهرة - التجمع الخامس",
                experience: "8 سنوات خبرة",
                phone: "01012345678",
                rating: "4.9",
                specialties: ["إشراف وتنفيذ", "مطابقة المواصفات", "استلام مراحل التشطيب"]
            },
            {
                id: 2,
                name: "م. محمد علي",
                initials: "مع",
                job: "مهندس تنفيذ إنشائي",
                location: "الجيزة - الشيخ زايد",
                experience: "6 سنوات خبرة",
                phone: "01123456789",
                rating: "4.8",
                specialties: ["تنفيذ خرسانات", "تعديلات معمارية", "متابعة مقاولين"]
            },
            {
                id: 3,
                name: "م. محمود حسن",
                initials: "مح",
                job: "مهندس استشاري تشطيبات",
                location: "القاهرة - مدينة نصر",
                experience: "12 سنة خبرة",
                phone: "01234567890",
                rating: "5.0",
                specialties: ["إدارة مشاريع كاملة", "مراجعة جداول الكميات", "استشارات هندسية"]
            }
        ]
    },

    "الهدم والتكسير": {
        label: "التخصصات الفنية",
        description: "أفضل فنيي ومقاولي الهدم والتكسير وإزالة الردم بأمان",
        peopleTitle: "المتخصصين المتاحين",
        people: [
            {
                id: 4,
                name: "المعلم إبراهيم خليل",
                initials: "إخ",
                job: "مقاول هدم وتكسير خرسانات",
                location: "القاهرة - حلوان والمعادي",
                experience: "10 سنوات خبرة",
                phone: "01098765432",
                rating: "4.8",
                specialties: ["تكسير حوائط وأرضيات", "قص خرسانات بالصاروخ", "ترحيل الركام والمخلفات"]
            },
            {
                id: 5,
                name: "سعيد عبد الله",
                initials: "سع",
                job: "فني إزالة وتكسير حوائط",
                location: "الجيزة - فيصل والهرم",
                experience: "7 سنوات خبرة",
                phone: "01187654321",
                rating: "4.7",
                specialties: ["فتح شبابيك وأبواب", "تكسير سيراميك قديم", "عمالة مدربة وسريعة"]
            },
            {
                id: 6,
                name: "كرم عبد الرحمن",
                initials: "كع",
                job: "متخصص فتح وتعديل قواطيع",
                location: "القليوبية - شبرا الخيمة",
                experience: "9 سنوات خبرة",
                phone: "01287654321",
                rating: "4.9",
                specialties: ["تكسير دقيق بدون إضرار", "تفريغ واجهات", "معدات هيلتي حديثة"]
            },
            {
                id: 7,
                name: "حمادة الشرقاوي",
                initials: "حش",
                job: "مقاول نقل مخلفات وتكسير",
                location: "القاهرة - المعادي والمقطم",
                experience: "5 سنوات خبرة",
                phone: "01598765432",
                rating: "4.6",
                specialties: ["سيارات نقل مخلفات", "تنظيف الموقع بالكامل", "التزام صارم بالمواعيد"]
            }
        ]
    },

    "نقاشة ودهانات": {
        label: "التخصصات الفنية",
        description: "أحدث صيحات الدهانات والديكورات الحديثة بأيدي أمهر النقاشين",
        peopleTitle: "النقاشين المتاحين",
        people: [
            {
                id: 8,
                name: "الأسطى ياسر فتحي",
                initials: "يف",
                job: "معلم دهانات وديكورات حديثة",
                location: "القاهرة - مصر الجديدة ومدينة نصر",
                experience: "11 سنة خبرة",
                phone: "01022334455",
                rating: "4.9",
                specialties: ["دهانات قطيفة وميتاليك", "تأسيس معجون دقيق", "تشطيب واجهات وفلل"]
            },
            {
                id: 9,
                name: "طارق عثمان",
                initials: "طع",
                job: "فني دهانات كمبيوتر وبلاستيك",
                location: "الجيزة - الدقي والمهندسين",
                experience: "8 سنوات خبرة",
                phone: "01133445566",
                rating: "4.8",
                specialties: ["مطابقة درجات الألوان", "معالجة الرطوبة والنشع", "ورق حائط وبديل رخام"]
            },
            {
                id: 10,
                name: "حسام الديب",
                initials: "حد",
                job: "نقاش تشطيبات سوبر لوكس",
                location: "الإسكندرية - سموحة وسيدي بشر",
                experience: "6 سنوات خبرة",
                phone: "01244556677",
                rating: "4.7",
                specialties: ["دهانات إيبوكسي", "تشطيبات فاخرة", "نظافة الموقع وحماية الأرضيات"]
            },
            {
                id: 11,
                name: "شريف جابر",
                initials: "شج",
                job: "مقاول دهانات داخلية وخارجية",
                location: "القاهرة - الشروق ومدينتي",
                experience: "14 سنة خبرة",
                phone: "01555667788",
                rating: "5.0",
                specialties: ["مشاريع كبيرة وفلل", "فريق عمل متكامل", "التزام بأحدث التصاميم"]
            }
        ]
    },

    "نجارين وأبواب وشباك": {
        label: "التخصصات الفنية",
        description: "أفضل صنايعية النجارة للأبواب والشبابيك والمطابخ وتجليد الحوائط",
        peopleTitle: "النجارين المتاحين",
        people: [
            {
                id: 12,
                name: "الأسطى مجدي النجار",
                initials: "من",
                job: "نجار باب وشباك وتجليد حوائط",
                location: "القاهرة - الزيتون وعين شمس",
                experience: "15 سنة خبرة",
                phone: "01033445566",
                rating: "4.9",
                specialties: ["تفصيل أبواب خشب زان", "حلوق وزوايا خشبية", "تجليد جدران كلاسيك ومودرن"]
            },
            {
                id: 13,
                name: "مصطفى كمال",
                initials: "مك",
                job: "فني تركيب أبواب مصفحة وغرف",
                location: "الجيزة - الهرم وفيصل",
                experience: "9 سنوات خبرة",
                phone: "01144556677",
                rating: "4.8",
                specialties: ["تركيب أبواب مصفحة تركي وصيني", "كالونات وأقفال إلكترونية", "ضبط مقاسات"]
            },
            {
                id: 14,
                name: "علاء الدين حسن",
                initials: "عح",
                job: "نجار صيانة وتفصيل ديكور",
                location: "القاهرة - الرحاب والتجمع",
                experience: "7 سنوات خبرة",
                phone: "01255667788",
                rating: "4.7",
                specialties: ["إصلاح وتركيب كالونات", "تعديل مقاسات الأبواب", "صيانة شبابيك وشيش"]
            },
            {
                id: 15,
                name: "أشرف عبد العزيز",
                initials: "أع",
                job: "معلم نجارة موبيليا وأبواب",
                location: "دمياط والقاهرة",
                experience: "18 سنة خبرة",
                phone: "01066778899",
                rating: "5.0",
                specialties: ["أعمال خشب طبيعي وأرو", "مطابخ دريسنج روم", "تصاميم حسب الطلب"]
            },
            {
                id: 16,
                name: "هاني فريد",
                initials: "هف",
                job: "فني مطابخ خشب وأبواب سحاب",
                location: "الجيزة - المهندسين والدقي",
                experience: "8 سنوات خبرة",
                phone: "01177889900",
                rating: "4.8",
                specialties: ["أبواب سحاب جرار بكتيب", "مفصلات هيدروليك", "صيانة فورية"]
            },
            {
                id: 17,
                name: "وليد صابر",
                initials: "وص",
                job: "نجار تشطيبات عامة",
                location: "القاهرة - العبور والشروق",
                experience: "10 سنوات خبرة",
                phone: "01288990011",
                rating: "4.9",
                specialties: ["تأسيس حلوق زفرة وموسكي", "بارتشنات خشبية", "دقة في الاستلام بالميزان"]
            }
        ]
    },

    "سيراميك وبلاط": {
        label: "التخصصات الفنية",
        description: "تركيب سيراميك وبورسلين ورخام بأعلى دقة واستواء بالليزر",
        peopleTitle: "فنيي السيراميك المتاحين",
        people: [
            {
                id: 18,
                name: "الأسطى فرج المصري",
                initials: "فم",
                job: "معلم تركيب سيراميك وبورسلين بالليزر",
                location: "القاهرة - المقطم والمعادي",
                experience: "13 سنة خبرة",
                phone: "01044556677",
                rating: "4.9",
                specialties: ["تركيب بميزان الليزر", "كلبسات تسوية البورسلين", "قص دقيق 45 درجة"]
            },
            {
                id: 19,
                name: "خالد عبد الوهاب",
                initials: "خع",
                job: "فني أرضيات بورسلين كبير الحجم",
                location: "الجيزة - 6 أكتوبر والشيخ زايد",
                experience: "10 سنوات خبرة",
                phone: "01155667788",
                rating: "4.9",
                specialties: ["سيراميك باركيه وديكورات", "عزل أرضيات حمامات", "استخدام مادة لاصقة ممتازة"]
            },
            {
                id: 20,
                name: "تامر سلامة",
                initials: "تس",
                job: "فني سيراميك حمامات ومطابخ",
                location: "القاهرة - عين شمس ومدينة نصر",
                experience: "8 سنوات خبرة",
                phone: "01266778899",
                rating: "4.8",
                specialties: ["تشطيب سيراميك دقيق", "سقاية إسمنت أبيض وألوان", "معالجة الميول للصرف"]
            }
        ]
    },

    "مهندسين واستشاريين": {
        label: "التخصصات الهندسية",
        description: "نخبة من الاستشاريين والمهندسين المعتمدين لجميع التخصصات",
        peopleTitle: "الاستشاريين المتاحين",
        people: [
            {
                id: 21,
                name: "د.م. حازم القاضي",
                initials: "حق",
                job: "استشاري تصميم إنشائي ودراسات تربة",
                location: "القاهرة - التجمع الأول",
                experience: "20 سنة خبرة",
                phone: "01055667788",
                rating: "5.0",
                specialties: ["تقارير سلامة إنشائية", "تصميم فيلات وأبراج", "تراخيص بناء"]
            },
            {
                id: 22,
                name: "م. ريم الشافعي",
                initials: "رش",
                job: "مهندسة تصميم داخلي وديكور 3D",
                location: "القاهرة - الزمالك والمهندسين",
                experience: "9 سنوات خبرة",
                phone: "01166778899",
                rating: "4.9",
                specialties: ["تصميمات 3D Max واقعية", "اختيار الخامات وتنسيقها", "إشراف على الفرش"]
            },
            {
                id: 23,
                name: "م. عمرو سليمان",
                initials: "عس",
                job: "مهندس كهروميكانيك شبكات MEP",
                location: "الجيزة - الدقي",
                experience: "11 سنة خبرة",
                phone: "01277889900",
                rating: "4.8",
                specialties: ["مخططات سباكة وكهرباء", "أنظمة تكييف مركزي", "أنظمة إطفاء الحريق"]
            },
            {
                id: 24,
                name: "م. كريم الألفي",
                initials: "كل",
                job: "مهندس مكتب فني وحصر كميات",
                location: "القاهرة - المعادي",
                experience: "7 سنوات خبرة",
                phone: "01588990011",
                rating: "4.8",
                specialties: ["ميزانيات ومقايسات دقيقة", "جداول زمنية للمشروع", "مراجعة فواتير المقاولين"]
            },
            {
                id: 25,
                name: "م. سارة نور",
                initials: "سن",
                job: "مهندسة إشراف وتصميم معماري",
                location: "الإسكندرية - كفر عبده",
                experience: "10 سنوات خبرة",
                phone: "01099001122",
                rating: "4.9",
                specialties: ["تصميم معماري حديث", "استغلال مساحات ذكي", "إشراف هندسي متكامل"]
            }
        ]
    },

    "سباكة": {
        label: "التخصصات الفنية",
        description: "تأسيس وتشطيب السباكة وشبكات الصرف والمياه بأعلى معايير الأمان",
        peopleTitle: "السباكين المتاحين",
        people: [
            {
                id: 26,
                name: "الأسطى رمضان السباك",
                initials: "رس",
                job: "فني تأسيس وتشطيب شبكات صحية",
                location: "القاهرة - مدينة نصر والتجمع",
                experience: "12 سنة خبرة",
                phone: "01011122233",
                rating: "4.9",
                specialties: ["تأسيس مواسير حراري بضمان", "اختبار كبس بالضغط", "تركيب شاور ودواليب حمام"]
            },
            {
                id: 27,
                name: "مدحت فوزي",
                initials: "مف",
                job: "متخصص كشف تسريبات وصيانة",
                location: "الجيزة - فيصل والدقي",
                experience: "8 سنوات خبرة",
                phone: "01122233344",
                rating: "4.8",
                specialties: ["كشف إلكتروني بدون تكسير", "صيانة سيفونات مدفونة", "تركيب فلاتر ومضخات"]
            },
            {
                id: 28,
                name: "عماد عبد السيد",
                initials: "عس",
                job: "سباك تشطيب وصحي مودرن",
                location: "القاهرة - المعادي وحلوان",
                experience: "10 سنوات خبرة",
                phone: "01233344455",
                rating: "4.9",
                specialties: ["تركيب خلاطات دش دفن", "أحواض رخام وجاكوزي", "صرف أجهزة التكييف"]
            },
            {
                id: 29,
                name: "سامح نبيل",
                initials: "سن",
                job: "فني صحي ومواتير مياه",
                location: "القليوبية - بنها وشبرا",
                experience: "6 سنوات خبرة",
                phone: "01544455566",
                rating: "4.7",
                specialties: ["تركيب وصيانة مواتير كالبيدا", "شبكات بولي بروبلين", "إصلاح سريع للأعطال"]
            }
        ]
    },

    "كهرباء": {
        label: "التخصصات الفنية",
        description: "تأسيس وصيانة الكهرباء المنزلية والإنارة الحديثة والسمارت هوم",
        peopleTitle: "الكهربائيين المتاحين",
        people: [
            {
                id: 30,
                name: "الأسطى كمال الكهربائي",
                initials: "كك",
                job: "تأسيس وصيانة شبكات كهرباء",
                location: "القاهرة - مصر القديمة والمعادي",
                experience: "14 سنة خبرة",
                phone: "01055566677",
                rating: "4.9",
                specialties: ["تأسيس خراطيم وأسلاك سويدي أصلية", "تقسيم أحمال ذكي", "لوحات أوتوماتيك شنايدر"]
            },
            {
                id: 31,
                name: "هيثم بدوي",
                initials: "هب",
                job: "فني سمارت هوم ولوحات تحكم",
                location: "الجيزة - الشيخ زايد و6 أكتوبر",
                experience: "9 سنوات خبرة",
                phone: "01166677788",
                rating: "5.0",
                specialties: ["تحكم بالإضاءة والتكييف بالموبايل", "كاميرات مراقبة وإنتركم", "أنظمة صوت ساوند سيستم"]
            },
            {
                id: 32,
                name: "يوسف النجار",
                initials: "ين",
                job: "فني إضاءة ديكورية وليد بروفايل",
                location: "القاهرة - التجمع والشروق",
                experience: "7 سنوات خبرة",
                phone: "01277788899",
                rating: "4.8",
                specialties: ["تركيب ليد بروفايل ومجنتيك", "سبوت لايت وشاسيهات ديكور", "توزيع إنارة هندسي"]
            },
            {
                id: 33,
                name: "ناصر عبد المطلب",
                initials: "نع",
                job: "كهربائي صيانة وطوارئ",
                location: "القاهرة - عين شمس والزيتون",
                experience: "11 سنة خبرة",
                phone: "01588899900",
                rating: "4.7",
                specialties: ["إصلاح شورت وسخانات", "تغيير خطوط ومفاتيح", "كشف الأعطال بأجهزة قياس"]
            }
        ]
    }
};

// خريطة لتسوية مسميات التخصصات (Normalization Map)
const categoryAliases = {
    "اشراف هندسى": "اشراف هندسى",
    "إشراف هندسي": "اشراف هندسى",
    "اشراف هندسي": "اشراف هندسى",
    "الهندسه": "اشراف هندسى",
    "الهندسة": "اشراف هندسى",
    "هندسة": "اشراف هندسى",
    "مهندسين واستشاريين": "مهندسين واستشاريين",
    "مهندسين": "مهندسين واستشاريين",
    "استشاريين": "مهندسين واستشاريين",
    "الهدم والتكسير": "الهدم والتكسير",
    "اعمال الهدم والتكسير": "الهدم والتكسير",
    "أعمال الهدم والتكسير": "الهدم والتكسير",
    "اعمال الهدم": "الهدم والتكسير",
    "هدم وتكسير": "الهدم والتكسير",
    "هدم": "الهدم والتكسير",
    "تكسير": "الهدم والتكسير",
    "نقاشة": "نقاشة ودهانات",
    "نقاشة ودهانات": "نقاشة ودهانات",
    "الدهانات": "نقاشة ودهانات",
    "دهانات": "نقاشة ودهانات",
    "نجارة": "نجارين وأبواب وشباك",
    "نجارين": "نجارين وأبواب وشباك",
    "نجارين وأبواب وشباك": "نجارين وأبواب وشباك",
    "سيراميك": "سيراميك وبلاط",
    "سيراميك وبلاط": "سيراميك وبلاط",
    "السيراميك": "سيراميك وبلاط",
    "بلاط": "سيراميك وبلاط",
    "سباكة": "سباكة",
    "سباكه": "سباكة",
    "السباكة": "سباكة",
    "كهرباء": "كهرباء",
    "الكهرباء": "كهرباء"
};

// دالة لتنظيف النص العربي للبحث والمطابقة
function normalizeArabic(text) {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[إأآا]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .replace(/[\u064B-\u065F]/g, ''); // إزالة التشكيل
}

// استخراج الجذور التقريبية للكلمات لمطابقة أشكال الجموع والمؤنث
function getStemWords(text) {
    if (!text) return [];
    return normalizeArabic(text)
        .split(/[\s,،\-]+/)
        .filter(w => w.length >= 2)
        .map(w => w.replace(/^(ال|و)/, '').replace(/(ه|ي|ين|ون|ات|ان)$/, ''))
        .filter(w => w.length >= 2);
}

// دالة لجلب كائن التخصص مع دعم أسماء بديلة
function getCategoryData(name) {
    if (!name) return categories["اشراف هندسى"];
    if (categories[name]) return categories[name];

    const cleanName = name.trim();
    if (categoryAliases[cleanName] && categories[categoryAliases[cleanName]]) {
        return categories[categoryAliases[cleanName]];
    }

    const normInput = normalizeArabic(cleanName);
    for (const key in categories) {
        if (normalizeArabic(key) === normInput) {
            return categories[key];
        }
    }
    for (const alias in categoryAliases) {
        if (normalizeArabic(alias) === normInput) {
            const target = categoryAliases[alias];
            if (categories[target]) return categories[target];
        }
    }

    // مطابقة بالجذور
    const inputStems = getStemWords(cleanName);
    for (const key in categories) {
        const keyStems = getStemWords(key);
        if (inputStems.some(s => keyStems.some(k => k.includes(s) || s.includes(k)))) {
            return categories[key];
        }
    }

    // Fallback ديناميكي إذا كان التخصص مسجلاً في القائمة المنسدلة بدون بيانات مسجلة بعد
    return {
        label: "التخصصات المتاحة",
        description: `اختر المتخصص المناسب في تخصص ${cleanName}`,
        peopleTitle: `المتخصصين المتاحين في ${cleanName}`,
        people: []
    };
}

// 4. منطق البحث والفلترة في الصفحة الرئيسية
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const searchCategory = document.getElementById('searchCategory');
const searchCity = document.getElementById('searchCity');
const categoryCards = document.querySelectorAll('.category-card');
const proCards = document.querySelectorAll('.pro-card');

function cardMatchesQuery(cardText, query) {
    if (!query) return true;
    const normCard = normalizeArabic(cardText);
    const normQuery = normalizeArabic(query);
    if (normCard.includes(normQuery)) return true;

    const queryStems = getStemWords(query);
    const cardStems = getStemWords(cardText);
    return queryStems.some(qs => cardStems.some(cs => cs.includes(qs) || qs.includes(cs)));
}

function performSearch() {
    const textVal = searchInput ? searchInput.value.trim() : '';
    const catVal = searchCategory ? searchCategory.value.trim() : '';

    if (catVal) {
        window.location.href = `category.html?category=${encodeURIComponent(catVal)}`;
        return;
    }

    if (categoryCards.length) {
        let matchCount = 0;
        categoryCards.forEach(card => {
            const isMatch = cardMatchesQuery(card.innerText, textVal);
            if (isMatch) {
                card.style.display = 'flex';
                matchCount++;
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(card, { opacity: 0.5, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
                }
            } else {
                card.style.display = 'none';
            }
        });

        // إذا لم يكن هناك بطاقات مطابقة وكان هناك نص بحث، نوجه لصفحة التخصص
        if (matchCount === 0 && textVal) {
            window.location.href = `category.html?category=${encodeURIComponent(textVal)}`;
            return;
        }

        const categoriesSection = document.getElementById('categories');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // فلترة فورية أثناء الكتابة
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (categoryCards.length) {
            categoryCards.forEach(card => {
                const isMatch = cardMatchesQuery(card.innerText, query);
                card.style.display = isMatch ? 'flex' : 'none';
            });
        }
    });
}

if (searchCategory) {
    searchCategory.addEventListener('change', () => {
        const selectedVal = searchCategory.value.trim();
        if (selectedVal && categoryCards.length) {
            let anyMatch = false;
            categoryCards.forEach(card => {
                const isMatch = cardMatchesQuery(card.innerText, selectedVal);
                card.style.display = isMatch ? 'flex' : 'none';
                if (isMatch) anyMatch = true;
            });
            if (!anyMatch && selectedVal) {
                window.location.href = `category.html?category=${encodeURIComponent(selectedVal)}`;
            }
        } else if (!selectedVal && categoryCards.length) {
            categoryCards.forEach(card => card.style.display = 'flex');
        }
    });
}

// دالة مساعدة لربط كروت الأقسام بالبحث
function filterByCat(cat) {
    if (searchCategory) {
        searchCategory.value = cat;
    }
    window.location.href = `category.html?category=${encodeURIComponent(cat)}`;
}

// 5. زر القائمة المتنقلة (Mobile Hamburger Menu)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-label', 'فتح القائمة');

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileMenuBtn.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            if (isOpen) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        }
    });

    // إغلاق القائمة عند النقر على أي رابط
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            }
        }
    });
}

// 6. شريط التنقل السفلي في الموبايل (Mobile Bottom Navigation)
const bottomNavLinks = document.querySelectorAll('.mobile-bottom-nav a');
if (bottomNavLinks.length) {
    bottomNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            bottomNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // تحديث التاب النشط عند التمرير
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 200;
        const sections = [
            { id: 'join', link: document.querySelector('.mobile-bottom-nav a[href="#join"]') },
            { id: 'categories', link: document.querySelector('.mobile-bottom-nav a[href="#categories"]') },
            { id: 'home', link: document.querySelector('.mobile-bottom-nav a[href="#home"]') }
        ];

        for (const item of sections) {
            const sec = document.getElementById(item.id);
            if (sec && item.link) {
                const top = sec.offsetTop;
                const height = sec.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    bottomNavLinks.forEach(l => l.classList.remove('active'));
                    item.link.classList.add('active');
                    break;
                }
            }
        }
    }, { passive: true });
}

// 7. منطق صفحة التخصصات (category.html)
function initCategoryPage() {
    const engineersGrid = document.getElementById("engineersGrid");
    if (!engineersGrid) return;

    const categoryParams = new URLSearchParams(window.location.search);
    const rawCategoryName = categoryParams.get("category");
    const categoryName = rawCategoryName ? rawCategoryName.trim() : "اشراف هندسى";
    const category = getCategoryData(categoryName);

    const categoryTitle = document.getElementById("categoryTitle");
    const categoryLabel = document.getElementById("categoryLabel");
    const categoryDescription = document.getElementById("categoryDescription");
    const peopleTitle = document.getElementById("peopleTitle");
    const peopleCount = document.getElementById("peopleCount");

    if (categoryTitle) categoryTitle.textContent = categoryName;
    if (categoryLabel) categoryLabel.textContent = category.label || "التخصصات";
    if (categoryDescription) categoryDescription.textContent = category.description || "اختاري الشخص المناسب لمشروعك";
    if (peopleTitle) peopleTitle.textContent = category.peopleTitle || "الأشخاص المتاحين";

    const peopleList = category.people || [];
    if (peopleCount) {
        peopleCount.textContent = peopleList.length > 0 
            ? `${peopleList.length} متاحين` 
            : "قريباً";
    }

    if (peopleList.length > 0) {
        engineersGrid.innerHTML = peopleList.map(person => {
            const waText = encodeURIComponent(`السلام عليكم ${person.name}، تواصلت معك من خلال منصة أهل الصنعة بخصوص خدمات: ${person.job}`);
            const waUrl = `https://wa.me/201000000000?text=${waText}`;

            return `
            <div class="engineer-card" data-id="${person.id || ''}">
                <div class="engineer-info">
                    <div class="engineer-avatar" aria-label="${person.name}">${person.initials}</div>
                    <div class="engineer-bio">
                        <h3>${person.name}</h3>
                        <p>${person.job}</p>
                    </div>
                    <span class="available"><i class="fa-solid fa-circle" style="font-size: 8px; margin-left: 4px;"></i>متاح</span>
                </div>

                <div class="engineer-details">
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${person.location}</span>
                    </p>
                    <p>
                        <i class="fas fa-briefcase"></i>
                        <span>${person.experience}</span>
                    </p>
                    ${person.rating ? `
                    <p>
                        <i class="fas fa-star" style="color: #fbbf24;"></i>
                        <span>تقييم ${person.rating} / 5</span>
                    </p>` : ''}
                </div>

                <div class="engineer-actions">
                    <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> واتساب
                    </a>
                    <button type="button" class="details-btn" onclick="openPersonDetails(${person.id})">التفاصيل</button>
                </div>
            </div>`;
        }).join("");
    } else {
        engineersGrid.innerHTML = `
            <div class="no-engineers" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--card-bg); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
                <i class="fa-solid fa-users-slash" style="font-size: 48px; color: var(--accent-gold); margin-bottom: 16px; opacity: 0.8;"></i>
                <h3 style="color: #fff; font-size: 20px; margin-bottom: 8px;">لا يوجد أشخاص مسجلون في هذا التخصص حاليًا</h3>
                <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 24px; max-width: 450px; margin-left: auto; margin-right: auto;">
                    نعمل حاليًا على مراجعة واعتماد أوراق حرفيين ومهندسين في هذا التخصص. يمكنك تصفح باقي التخصصات المتاحة.
                </p>
                <a href="index.html#categories" class="btn-gold" style="padding: 10px 24px; font-size: 14px; text-decoration: none;">
                    تصفح باقي التخصصات
                </a>
            </div>
        `;
    }
}

// تشغيل فور تحميل المستند أو مباشرة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCategoryPage);
} else {
    initCategoryPage();
}

// 8. نافذة التفاصيل التفاعلية (Details Modal)
function openPersonDetails(personId) {
    let selectedPerson = null;
    for (const catKey in categories) {
        const found = (categories[catKey].people || []).find(p => p.id === personId);
        if (found) {
            selectedPerson = found;
            break;
        }
    }

    if (!selectedPerson) return;

    let modal = document.getElementById('detailsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'detailsModal';
        modal.className = 'custom-modal';
        document.body.appendChild(modal);
    }

    const waText = encodeURIComponent(`السلام عليكم ${selectedPerson.name}، تواصلت معك من خلال منصة أهل الصنعة`);
    const waUrl = `https://wa.me/201000000000?text=${waText}`;
    const specsHtml = (selectedPerson.specialties || ['خدمات متكاملة', 'أعلى معايير الجودة', 'التزام تام بالمواعيد'])
        .map(s => `<li style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #d1d5db; margin-bottom: 6px;"><i class="fa-solid fa-check" style="color: var(--accent-gold);"></i> ${s}</li>`)
        .join('');

    modal.innerHTML = `
        <div class="custom-modal-backdrop" onclick="closePersonDetails()"></div>
        <div class="custom-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <button class="custom-modal-close" onclick="closePersonDetails()" aria-label="إغلاق">&times;</button>
            <div class="modal-header-content" style="text-align: center; margin-bottom: 16px;">
                <div class="engineer-avatar" style="width: 60px; height: 60px; font-size: 20px; margin: 0 auto 10px; border: 2px solid var(--accent-gold);">${selectedPerson.initials}</div>
                <h3 id="modalTitle" style="color: #fff; font-size: 20px; font-weight: 800; margin-bottom: 4px;">${selectedPerson.name}</h3>
                <p style="color: var(--accent-gold-light); font-size: 13.5px; font-weight: 600;">${selectedPerson.job}</p>
                <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(212,175,55,0.15); border: 1px solid var(--border-color); padding: 3px 12px; border-radius: 20px; font-size: 11.5px; color: var(--accent-gold); margin-top: 6px;">
                    <i class="fa-solid fa-shield-halved"></i> تم التحقق من الهوية والخبرة
                </div>
            </div>

            <div style="background: rgba(7, 25, 18, 0.7); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px; color: #d1d5db;">
                    <span><i class="fas fa-map-marker-alt" style="color: var(--accent-gold); margin-left: 6px;"></i> النطاق:</span>
                    <strong style="color: #fff;">${selectedPerson.location}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px; color: #d1d5db;">
                    <span><i class="fas fa-briefcase" style="color: var(--accent-gold); margin-left: 6px;"></i> سنوات الخبرة:</span>
                    <strong style="color: #fff;">${selectedPerson.experience}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; color: #d1d5db;">
                    <span><i class="fas fa-star" style="color: #fbbf24; margin-left: 6px;"></i> التقييم:</span>
                    <strong style="color: #fff;">★ ${selectedPerson.rating || '4.9'} / 5 (موثوق)</strong>
                </div>
            </div>

            <div style="margin-bottom: 18px;">
                <h4 style="color: #fff; font-size: 13.5px; font-weight: 700; margin-bottom: 8px;">أبرز الخدمات والمهام:</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${specsHtml}
                </ul>
            </div>

            <div style="display: flex; gap: 10px;">
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" style="flex: 1; padding: 11px; text-decoration: none; border-radius: 10px; font-weight: 700; text-align: center; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
                    <i class="fab fa-whatsapp"></i> تواصل عبر واتساب
                </a>
                <a href="tel:${selectedPerson.phone || '01000000000'}" class="details-btn" style="padding: 11px 16px; text-decoration: none; border-radius: 10px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
                    <i class="fa-solid fa-phone"></i> اتصال
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePersonDetails() {
    const modal = document.getElementById('detailsModal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// إغلاق النافذة بزر Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePersonDetails();
    }
});
