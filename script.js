/* Ghazal Onglerie – small interactions: mobile menu and gentle scroll reveal. */
( function () {
	'use strict';

	// Mobile navigation toggle.
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
			if ( event.target.closest( 'a[href^="#"]' ) ) {
				setOpen( false );
			}
		} );

		document.addEventListener( 'keydown', function ( event ) {
			if ( 'Escape' === event.key && toggle.getAttribute( 'aria-expanded' ) === 'true' ) {
				setOpen( false );
				toggle.focus();
			}
		} );
	}

	// Fade-in on scroll (skipped when reduced motion is requested).
	var items = document.querySelectorAll( '.reveal' );
	var reduce = window.matchMedia && window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

	if ( ! items.length ) {
		return;
	}

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
/* Demo: French / Arabic switch without a server. */
( function () {
	'use strict';
	var dict = window.GHAZAL_I18N;
	var root = document.documentElement;
	var wa = document.querySelectorAll( 'a[data-wa]' );
	var buttons = document.querySelectorAll( '.lang-switch button' );

	function setLang( lang ) {
		var d = dict[ lang ];
		root.lang = 'ar' === lang ? 'ar' : 'fr-FR';
		root.dir = 'ar' === lang ? 'rtl' : 'ltr';
		document.body.className = 'lang-' + lang;
		document.querySelectorAll( '[data-i18n]' ).forEach( function ( el ) {
			var key = el.getAttribute( 'data-i18n' );
			if ( d[ key ] !== undefined ) { el.textContent = d[ key ]; }
		} );
		wa.forEach( function ( a ) {
			a.href = 'https://wa.me/212666417350?text=' + encodeURIComponent( d.wa_msg );
		} );
		buttons.forEach( function ( b ) {
			b.setAttribute( 'aria-pressed', b.getAttribute( 'data-lang' ) === lang ? 'true' : 'false' );
		} );
		document.title = d.title;
		try { window.localStorage.setItem( 'ghazal-demo-lang', lang ); } catch ( e ) {}
	}

	buttons.forEach( function ( b ) {
		b.addEventListener( 'click', function () { setLang( b.getAttribute( 'data-lang' ) ); } );
	} );

	var start = 'fr';
	try {
		var q = new URLSearchParams( window.location.search ).get( 'lang' );
		start = ( 'ar' === q || 'fr' === q ) ? q : ( window.localStorage.getItem( 'ghazal-demo-lang' ) || 'fr' );
	} catch ( e ) {}
	setLang( 'ar' === start ? 'ar' : 'fr' );
}() );
