<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lotus
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'lotuslite' ); ?></a>

	<header id="masthead" class="site-header" role="banner">

		<div id="top-social">
			<?php lotuslite_get_social_icons(); ?>
		</div>

		<!-- #main-menu -->
		<nav class="main-navigation" id="main-nav">
		<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
			<span class="m_menu_icon"></span>
			<span class="m_menu_icon"></span>
			<span class="m_menu_icon"></span>
		</button>
		<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu', 'menu_class' => 'nav-menu menu' ) ); ?>
		</nav>
		<div id="top-bar-right">
			<div class="top-search desktop-search">
				<?php get_search_form(); ?>
			</div>
		</div>

	</header><!-- #masthead -->

	<div class="site-branding">

		<?php
			if ( has_custom_logo() ) {

				lotuslite_the_custom_logo();

			}else{ ?>

			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>

			<?php
				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) : ?>
					<p class="site-description"><?php bloginfo( 'description' ); ?></p>
			<?php endif; ?>

		<?php } ?>

	</div><!-- .site-branding -->

	<div id="content" class="site-content">
