<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package lotus
 */

get_header(); ?>
<?php
	$lotuslite_home_sidebar = get_theme_mod( 'lotuslite_home_sidebar' );
?>

	<div id="primary" class="content-area container">
		<main id="main" class="site-main <?php if($lotuslite_home_sidebar) : ?>full-width<?php endif; ?> " role="main">

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>

			<?php
			endif;

			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_format() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->

		<?php if( $lotuslite_home_sidebar == false ) : ?>

		<aside class="sidebar widget-area">
			<?php get_sidebar(); ?>
		</aside><!-- #sidebar -->

		<?php endif; ?>
	</div><!-- #primary -->

<?php

get_footer();
