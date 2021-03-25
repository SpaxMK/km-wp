<?php
/**
 * lotus functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package lotus
 */

if ( ! function_exists( 'lotuslite_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function lotuslite_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on lotus, use a find and replace
	 * to change 'lotuslite' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'lotuslite', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'lotuslite-full-thumb', 768, 0, true );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'lotuslite' )
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'lotuslite_custom_background_args', array(
		'default-color' => 'f3f3f3',
		'default-image' => '',
	) ) );
	// Add Logo
	add_theme_support( 'custom-logo', array(
		'height'      => 50,
		'width'       => 180,
		'flex-height' => true,
		'flex-width'  => true,
	) );
}
endif;
add_action( 'after_setup_theme', 'lotuslite_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function lotuslite_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'lotuslite_content_width', 640 );
}
add_action( 'after_setup_theme', 'lotuslite_content_width', 0 );

/**
 *
 * Add Custom editor styles
 *
 */
function lotuslite_add_editor_styles() {
    add_editor_style( 'css/custom-editor-style.css' );
}
add_action( 'admin_init', 'lotuslite_add_editor_styles' );

/**
 *
 * Load Google Fonts
 *
 */
function lotuslite_google_fonts_url(){
	
    $fonts_url  = '';
    $Montserrat = _x( 'on', 'Montserrat font: on or off', 'lotuslite' );
    $WorkSans      = _x( 'on', 'Work Sans font: on or off', 'lotuslite' );
 
    if ( 'off' !== $Montserrat || 'off' !== $WorkSans ){

        $font_families = array();
 
        if ( 'off' !== $Montserrat ) {

            $font_families[] = 'Montserrat:400,500,600,700';

        }
 
        if ( 'off' !== $WorkSans ) {

            $font_families[] = 'Work Sans:400,500,600,700';

        }
        
 
        $query_args = array(

            'family' => urlencode( implode( '|', $font_families ) ),
            'subset' => urlencode( 'latin,latin-ext' ),
        );
 
        $fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );

    }
 
    return esc_url_raw( $fonts_url );
}

function lotuslite_enqueue_googlefonts() {

    wp_enqueue_style( 'lotuslite-googlefonts', lotuslite_google_fonts_url(), array(), null );
}

add_action( 'wp_enqueue_scripts', 'lotuslite_enqueue_googlefonts' );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function lotuslite_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'lotuslite' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'lotuslite' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar(array(
		'name' => esc_html__( 'Instagram Footer','lotuslite' ),
		'id' => 'sidebar-2',
		'before_widget' => '<div id="%1$s" class="instagram-widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="instagram-title">',
		'after_title' => '</h4>',
		'description' => esc_html__('Use the "Instagram" widget here. IMPORTANT: For best result set number of photos to 6.', 'lotuslite' ),
	));
}
add_action( 'widgets_init', 'lotuslite_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function lotuslite_scripts() {
	wp_enqueue_style( 'lotuslite-style', get_stylesheet_uri() );
	wp_enqueue_style( 'font-awesome', trailingslashit( get_template_directory_uri() ) . 'css/font-awesome.min.css');

	wp_enqueue_script( 'lotuslite-navigation', trailingslashit( get_template_directory_uri() ) . 'js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( 'lotuslite-skip-link-focus-fix', trailingslashit( get_template_directory_uri() ) . 'js/skip-link-focus-fix.js', array(), '20151215', true );
	wp_enqueue_script( 'lotuslite-script', trailingslashit( get_template_directory_uri() ) . 'js/lotuslite.js', array('jquery'), false, true);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	
	if ( function_exists( 'lotuslite_get_custom_style' ) ) {
        wp_add_inline_style( 'lotuslite-style', lotuslite_get_custom_style() );
    }
}
add_action( 'wp_enqueue_scripts', 'lotuslite_scripts' );

/**
 * Custom template tags for this theme.
 */
require trailingslashit( get_template_directory() ) . 'inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require trailingslashit( get_template_directory() ) . 'inc/extras.php';

/**
 * Customizer additions.
 */
require trailingslashit( get_template_directory() ) . 'inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require trailingslashit( get_template_directory() ) . 'inc/jetpack.php';

/**
 * Add theme info page
 */
require get_template_directory() . '/inc/dashboard.php';