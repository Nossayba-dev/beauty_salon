/* Salon template – small script: edit the CONFIG block below to personalise the site. */
( function () {
	'use strict';

	/* ===== CONFIG: change these for each salon ===== */
	var CONFIG = {
		name: { fr: 'Votre Salon', ar: 'صالونك' },
		location: { fr: 'Votre ville, Pays', ar: 'مدينتك، بلدك' },
		whatsapp: '',          // digits with country code, e.g. '212600000000'. Empty = buttons scroll to Contact.
		whatsappDisplay: '',   // shown text, e.g. '+212 600 000 000'
		instagram: ''          // e.g. '@your_salon'. Empty = hidden.
	};
	/* ================================================= */

	var I18N = {
 "fr": {
  "title": "Salon de beauté – Modèle de site",
  "demo": "Modèle de démonstration – textes et photos provisoires",
  "skip": "Aller au contenu",
  "menu": "Menu",
  "wa_short": "WhatsApp",
  "n_about": "À propos",
  "n_services": "Nos services",
  "n_gallery": "Galerie",
  "n_reviews": "Avis",
  "n_contact": "Contact",
  "eyebrow": "Ongles · Coiffure · Beauté",
  "intro": "Un salon de beauté moderne : ongles, coiffure, maquillage et soins, dans un cadre élégant.",
  "cta": "Réserver par WhatsApp",
  "about_text": "Présentez ici votre salon en quelques phrases : votre histoire, votre équipe, ce qui vous distingue.\nCe texte est facile à modifier.",
  "services_intro": "Contactez-nous sur WhatsApp pour connaître les tarifs et la disponibilité.",
  "price": "Prix à confirmer",
  "s0": "Coiffure",
  "a_s0": "Coiffure",
  "s1": "Coloration",
  "a_s1": "Coloration",
  "s2": "Extensions",
  "a_s2": "Extensions",
  "s3": "Maquillage",
  "a_s3": "Maquillage",
  "s4": "Soins capillaires",
  "a_s4": "Soins capillaires",
  "s5": "Lissage",
  "a_s5": "Lissage",
  "s6": "Épilation",
  "a_s6": "Épilation",
  "s7": "Onglerie",
  "a_s7": "Onglerie",
  "s8": "Pack mariée",
  "a_s8": "Pack mariée",
  "gallery_intro": "Vos réalisations et l’ambiance de votre salon.",
  "reviews_empty": "Les avis de nos clientes seront bientôt disponibles.",
  "contact_intro": "Pour prendre rendez-vous ou poser une question, écrivez-nous sur WhatsApp.",
  "contact_cta": "Prendre rendez-vous",
  "l_wa": "WhatsApp :",
  "l_loc": "Localisation :",
  "l_ig": "Instagram :",
  "wa_missing": "Votre numéro WhatsApp",
  "rights": "Tous droits réservés.",
  "o_tag": "Pour la gérante du salon",
  "o_title": "Ce que comprend votre site",
  "o_intro": "Cette page est une maquette. Voici ce que contiendrait votre site final :",
  "oh0": "Français et arabe",
  "od0": "Le site s’affiche en français ou en arabe (de droite à gauche), au choix de la cliente.",
  "oh1": "Réservation par WhatsApp",
  "od1": "Un bouton visible partout, avec un message déjà prêt, pour prendre rendez-vous en un clic.",
  "oh2": "Vos services et vos prix",
  "od2": "Vous les modifiez vous-même, sans connaissances techniques.",
  "oh3": "Vos vraies photos",
  "od3": "Une galerie de vos réalisations, facile à mettre à jour.",
  "oh4": "Avis de vos clientes",
  "od4": "Une section pour montrer les vrais avis.",
  "oh5": "Adapté au téléphone",
  "od5": "Pensé d’abord pour les visiteuses venant d’Instagram.",
  "oh6": "Votre style",
  "od6": "Plusieurs styles de couleurs au choix : testez-les avec les pastilles en bas de la page.",
  "style_label": "Style du site",
  "t_rose": "Rose",
  "t_nude": "Nude",
  "t_noir": "Noir et or",
  "t_sage": "Sauge",
  "lang_label": "Langue",
  "g0": "Intérieur du salon",
  "g1": "Nail art",
  "g2": "Maquillage",
  "g3": "Coiffure tressée",
  "g4": "Maquillage de mariée",
  "g5": "Soin des sourcils",
  "a_hero": "Intérieur élégant d’un salon de beauté",
  "wa_msg": "Bonjour, je souhaite prendre un rendez-vous chez {name}."
 },
 "ar": {
  "title": "صالون تجميل – نموذج موقع",
  "demo": "نموذج تجريبي – النصوص والصور مؤقتة",
  "skip": "انتقل إلى المحتوى",
  "menu": "القائمة",
  "wa_short": "واتساب",
  "n_about": "من نحن",
  "n_services": "خدماتنا",
  "n_gallery": "معرض الصور",
  "n_reviews": "آراء العميلات",
  "n_contact": "اتصال",
  "eyebrow": "أظافر · شعر · جمال",
  "intro": "صالون تجميل عصري: أظافر وشعر ومكياج وعناية، في أجواء أنيقة.",
  "cta": "احجزي عبر واتساب",
  "about_text": "عرّفي هنا بصالونك في بضع جمل: قصتك وفريقك وما يميّزك.\nيمكن تعديل هذا النص بسهولة.",
  "services_intro": "تواصلي معنا عبر واتساب لمعرفة الأسعار والمواعيد المتاحة.",
  "price": "السعر عند التأكيد",
  "s0": "تصفيف الشعر",
  "a_s0": "تصفيف الشعر",
  "s1": "صبغ الشعر",
  "a_s1": "صبغ الشعر",
  "s2": "إكستنشن",
  "a_s2": "إكستنشن",
  "s3": "مكياج",
  "a_s3": "مكياج",
  "s4": "العناية بالشعر",
  "a_s4": "العناية بالشعر",
  "s5": "تمليس الشعر",
  "a_s5": "تمليس الشعر",
  "s6": "إزالة الشعر",
  "a_s6": "إزالة الشعر",
  "s7": "العناية بالأظافر",
  "a_s7": "العناية بالأظافر",
  "s8": "باقة العروس",
  "a_s8": "باقة العروس",
  "gallery_intro": "أعمالك وأجواء صالونك.",
  "reviews_empty": "ستتوفر آراء عميلاتنا قريباً.",
  "contact_intro": "لحجز موعد أو لأي استفسار، راسلينا عبر واتساب.",
  "contact_cta": "احجزي موعداً",
  "l_wa": "واتساب:",
  "l_loc": "الموقع:",
  "l_ig": "إنستغرام:",
  "wa_missing": "رقم واتساب الخاص بك",
  "rights": "جميع الحقوق محفوظة.",
  "o_tag": "لصاحبة الصالون",
  "o_title": "ما يتضمنه موقعكم",
  "o_intro": "هذه الصفحة نموذج تجريبي. هذا ما سيتضمنه موقعكم النهائي:",
  "oh0": "العربية والفرنسية",
  "od0": "يظهر الموقع بالفرنسية أو العربية (من اليمين إلى اليسار) حسب اختيار العميلة.",
  "oh1": "الحجز عبر واتساب",
  "od1": "زر واضح في كل الصفحة مع رسالة جاهزة لحجز موعد بنقرة واحدة.",
  "oh2": "خدماتك وأسعارك",
  "od2": "تعدّلينها بنفسك دون أي معرفة تقنية.",
  "oh3": "صورك الحقيقية",
  "od3": "معرض لأعمالك يسهل تحديثه.",
  "oh4": "آراء عميلاتك",
  "od4": "قسم لعرض آراء العميلات الحقيقية.",
  "oh5": "مناسب للهاتف",
  "od5": "مصمم أولاً للزائرات القادمات من إنستغرام.",
  "oh6": "أسلوبك الخاص",
  "od6": "عدة أنماط ألوان للاختيار: جرّبيها بالدوائر الملونة أسفل الصفحة.",
  "style_label": "أسلوب الموقع",
  "t_rose": "وردي",
  "t_nude": "بيج",
  "t_noir": "أسود وذهبي",
  "t_sage": "أخضر",
  "lang_label": "اللغة",
  "g0": "داخل الصالون",
  "g1": "فن الأظافر",
  "g2": "مكياج",
  "g3": "تسريحة مضفورة",
  "g4": "مكياج عروس",
  "g5": "العناية بالحواجب",
  "a_hero": "أجواء أنيقة داخل صالون تجميل",
  "wa_msg": "مرحباً، أرغب في حجز موعد في {name}."
 }
};
	var THEMES = [ 'rose', 'nude', 'noir', 'sage' ];
	var root = document.documentElement;
	var lang = 'fr';

	function $all( sel ) { return document.querySelectorAll( sel ); }

	function waMessage( d ) {
		return d.wa_msg.replace( '{name}', CONFIG.name[ lang ] );
	}

	function render() {
		var d = I18N[ lang ];
		root.lang = 'ar' === lang ? 'ar' : 'fr-FR';
		root.dir = 'ar' === lang ? 'rtl' : 'ltr';
		document.body.className = 'lang-' + lang;
		document.title = d.title;

		$all( '[data-i18n]' ).forEach( function ( el ) {
			var v = d[ el.getAttribute( 'data-i18n' ) ];
			if ( v !== undefined ) { el.textContent = v; }
		} );
		$all( '[data-i18n-alt]' ).forEach( function ( el ) {
			var v = d[ el.getAttribute( 'data-i18n-alt' ) ];
			if ( v !== undefined ) { el.alt = v; }
		} );
		$all( '[data-i18n-aria]' ).forEach( function ( el ) {
			var v = d[ el.getAttribute( 'data-i18n-aria' ) ];
			if ( v !== undefined ) { el.setAttribute( 'aria-label', v ); el.title = v; }
		} );
		$all( '[data-brand]' ).forEach( function ( el ) { el.textContent = CONFIG.name[ lang ]; } );
		$all( '[data-location]' ).forEach( function ( el ) { el.textContent = CONFIG.location[ lang ]; } );
		$all( '[data-year]' ).forEach( function ( el ) { el.textContent = new Date().getFullYear(); } );

		var number = String( CONFIG.whatsapp ).replace( /\D+/g, '' );
		$all( 'a[data-wa]' ).forEach( function ( a ) {
			if ( number ) {
				a.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent( waMessage( d ) );
				a.target = '_blank';
				a.rel = 'noopener noreferrer';
			} else {
				a.href = '#contact';
				a.removeAttribute( 'target' );
			}
		} );
		if ( number ) {
			$all( '[data-wa-text] bdi' ).forEach( function ( el ) { el.textContent = CONFIG.whatsappDisplay || ( '+' + number ); } );
		}

		$all( '[data-ig]' ).forEach( function ( el ) { el.hidden = ! CONFIG.instagram; } );
		$all( '[data-ig-text]' ).forEach( function ( el ) { el.textContent = CONFIG.instagram; } );

		$all( '.lang-switch button' ).forEach( function ( b ) {
			b.setAttribute( 'aria-pressed', b.getAttribute( 'data-lang' ) === lang ? 'true' : 'false' );
		} );
	}

	$all( '.lang-switch button' ).forEach( function ( b ) {
		b.addEventListener( 'click', function () {
			lang = b.getAttribute( 'data-lang' );
			try { window.localStorage.setItem( 'salon-lang', lang ); } catch ( e ) {}
			render();
		} );
	} );

	/* Theme switcher */
	function setTheme( name ) {
		if ( THEMES.indexOf( name ) < 0 ) { name = 'rose'; }
		root.setAttribute( 'data-theme', name );
		$all( '.swatch' ).forEach( function ( s ) {
			s.setAttribute( 'aria-pressed', s.getAttribute( 'data-theme-pick' ) === name ? 'true' : 'false' );
		} );
		try { window.localStorage.setItem( 'salon-theme', name ); } catch ( e ) {}
	}
	$all( '.swatch' ).forEach( function ( s ) {
		s.addEventListener( 'click', function () { setTheme( s.getAttribute( 'data-theme-pick' ) ); } );
	} );
	setTheme( root.getAttribute( 'data-theme' ) );

	/* Start language: ?lang=ar, saved choice, or French */
	try {
		var q = new URLSearchParams( window.location.search ).get( 'lang' );
		var saved = window.localStorage.getItem( 'salon-lang' );
		lang = ( 'ar' === q || 'fr' === q ) ? q : ( 'ar' === saved ? 'ar' : 'fr' );
	} catch ( e ) {}
	render();

	/* Mobile navigation */
	var toggle = document.querySelector( '.nav-toggle' );
	var nav = document.getElementById( 'site-nav' );
	if ( toggle && nav ) {
		var setOpen = function ( open ) {
			toggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
			nav.classList.toggle( 'is-open', open );
		};
		toggle.addEventListener( 'click', function () {
			setOpen( toggle.getAttribute( 'aria-expanded' ) !== 'true' );
		} );
		nav.addEventListener( 'click', function ( event ) {
			if ( event.target.closest( 'a[href^="#"]' ) ) { setOpen( false ); }
		} );
		document.addEventListener( 'keydown', function ( event ) {
			if ( 'Escape' === event.key && toggle.getAttribute( 'aria-expanded' ) === 'true' ) {
				setOpen( false );
				toggle.focus();
			}
		} );
	}

	/* Gentle fade-in on scroll */
	var items = $all( '.reveal' );
	var reduce = window.matchMedia && window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
	if ( reduce || ! ( 'IntersectionObserver' in window ) ) {
		items.forEach( function ( el ) { el.classList.add( 'is-visible' ); } );
		return;
	}
	var observer = new IntersectionObserver( function ( entries ) {
		entries.forEach( function ( entry ) {
			if ( entry.isIntersecting ) {
				entry.target.classList.add( 'is-visible' );
				observer.unobserve( entry.target );
			}
		} );
	}, { threshold: 0.08 } );
	items.forEach( function ( el ) { observer.observe( el ); } );
}() );
