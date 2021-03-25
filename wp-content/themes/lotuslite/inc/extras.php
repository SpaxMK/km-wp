<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package lotus
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function lotuslite_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', 'lotuslite_body_classes' );

/**
 * Custom excerpt more
 */
function lotuslite_custom_excerpt_more( $link ) {
	if ( is_admin() ) {
		return $link;
	}
	return ' &hellip; ';
}
add_filter( 'excerpt_more', 'lotuslite_custom_excerpt_more' );

/**
 * Get Premium url
 */
function lotuslite_get_premium_url(){
    return 'https://zthemes.net/themes/lotus';
}

function lotuslite_comment_count() {
	if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments"><i class="fa fa-comment"></i>';
		comments_popup_link(
			sprintf(
				wp_kses(
					/* translators: %s: post title */
					__( 'Leave a Comment<span class="screen-reader-text"> on %s</span>', 'lotuslite' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			)
		);
		echo '</span>';
	}
}

function lotuslite_get_social_icons() { ?>
	<?php if(get_theme_mod('lotuslite_facebook')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_facebook')); ?>" target="_blank"><i class="fa fa-facebook"></i></a><?php endif; ?>
	<?php if(get_theme_mod('lotuslite_twitter')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_twitter')); ?>" target="_blank"><i class="fa fa-twitter"></i></a><?php endif; ?>
	<?php if(get_theme_mod('lotuslite_instagram')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_instagram')); ?>" target="_blank"><i class="fa fa-instagram"></i></a><?php endif; ?>
	<?php if(get_theme_mod('lotuslite_pinterest')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_pinterest')); ?>" target="_blank"><i class="fa fa-pinterest"></i></a><?php endif; ?>
	<?php if(get_theme_mod('lotuslite_bloglovin')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_bloglovin')); ?>" target="_blank"><i class="fa fa-heart"></i></a><?php endif; ?>
	<?php if(get_theme_mod('lotuslite_google')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_google')); ?>" target="_blank"><i class="fa fa-google-plus"></i></a><?php endif; ?>
	<?php if(get_theme_mod('lotuslite_youtube')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_youtube')); ?>" target="_blank"><i class="fa fa-youtube-play"></i></a><?php endif; ?>
	<?php if(get_theme_mod('lotuslite_rss')) : ?><a href="<?php echo esc_url(get_theme_mod('lotuslite_rss')); ?>" target="_blank"><i class="fa fa-rss"></i></a><?php endif; ?>
<?php }