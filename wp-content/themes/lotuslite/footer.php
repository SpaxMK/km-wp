<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lotus
 */

?>

	</div><!-- #content -->


	<footer id="colophon" class="site-footer" role="contentinfo">

		<div id="instagram-footer" class="instagram-footer">

		<?php	/* Widgetised Area */	if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('sidebar-2') ) ?>
		
		</div>
		<div class="site-info container">
			<p class="footer-text left"><?php printf(esc_html__('%1$s %2$s %3$s  - All Rights Reserved', 'lotuslite'), '&copy;', esc_attr(date_i18n(__('Y', 'lotuslite'))), esc_attr(get_bloginfo())); ?></p>
            <p class="footer-text right"><?php printf(esc_html__('%1$s Lotuslite themes by %2$s', 'lotuslite'), '', '<a href="' . esc_url('https://zthemes.net/', 'lotuslite') . '">ZThemes Studio</a>'); ?></p>
		</div><!-- .site-info -->
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
