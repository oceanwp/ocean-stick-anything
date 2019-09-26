var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	oceanwpStickAnything();
} );

// On resize
$j( window ).resize( function() {
	oceanwpStickAnything();
} );

/* ==============================================
STICK ANYTHING
============================================== */
function oceanwpStickAnything() {
	"use strict"

	var $offset 		= 0,
	    $stickOffset 	= $j( 'body' ).data( 'offset' ),
	    $adminBar 		= $j( '#wpadminbar' ),
	    $stickyTopBar 	= $j( '#top-bar-wrap' ),
	    $stickyHeader 	= $j( '#site-header' );

    // If custom offset
    if ( $stickOffset ) {
		$offset = $offset + $stickOffset;
	}

    // Offset adminbar
    if ( $adminBar.length
    	&& $j( window ).width() > 600 ) {
		$offset = $offset + $adminBar.outerHeight();
	}

    // Offset sticky topbar
    if ( true == oceanwpLocalize.hasStickyTopBar ) {
		$offset = $offset + $stickyTopBar.outerHeight();
	}

    // Offset sticky header
    if ( $j( '#site-header' ).hasClass( 'fixed-scroll' )
    	&& ! $j( '#site-header' ).hasClass( 'vertical-header' ) ) {
		$offset = $offset + $stickyHeader.outerHeight();
	}

	$j( oceanwpLocalize.stickElements ).stick_in_parent( {
		offset_top: $offset,
	} );

	// If un-stick
	if ( oceanwpLocalize.unStick
    	&& $j( window ).width() <= oceanwpLocalize.unStick ) {
		$j( oceanwpLocalize.stickElements ).trigger( 'sticky_kit:detach' );
	}

}