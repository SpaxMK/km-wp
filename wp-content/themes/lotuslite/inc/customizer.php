<?php
/**
 * Lotuslite Theme Customizer.
 *
 * @package Lotuslite
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function lotuslite_customize_register( $wp_customize ) {

    require_once get_template_directory().'/inc/customizer-controls.php';

	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	$wp_customize->add_panel( 'theme_options' ,
        array(
            'title'       => esc_html__( 'Theme Options', 'lotuslite' ),
            'description' => ''
        )
    );

    // Sidebar settings
    $wp_customize->add_section( 'lotuslite_home_sidebar' ,
        array(
            'title'       => esc_html__( 'Sidebar', 'lotuslite' ),
            'description' => '',
            'panel'       => 'theme_options',
            'piority'     => 2
        )
    );

    $wp_customize->add_setting( 'lotuslite_home_sidebar', array(
        'sanitize_callback' => 'lotuslite_sanitize_checkbox',
        'default' => false,
    ) );

    $wp_customize->add_control(
        'lotuslite_home_sidebar',
            array(
                'type' => 'checkbox',
                'label'      => esc_html__( 'Disable Sidebar on Home Page, Archive Page', 'lotuslite' ),
                'section'    => 'lotuslite_home_sidebar',
            )
    );

    $wp_customize->add_setting( 'lotuslite_sidebar_post', array(
        'sanitize_callback' => 'lotuslite_sanitize_checkbox',
        'default' => false,
    ) );

    $wp_customize->add_control(
        'lotuslite_sidebar_post',
            array(
                'type' => 'checkbox',
                'label'      => esc_html__( 'Disable Sidebar on Single Post', 'lotuslite' ),
                'section'    => 'lotuslite_home_sidebar',
            )
    );

    $wp_customize->add_setting( 'lotuslite_sidebar_page', array(
        'sanitize_callback' => 'lotuslite_sanitize_checkbox',
        'default' => false,
    ) );

    $wp_customize->add_control(
        'lotuslite_sidebar_page',
            array(
                'type' => 'checkbox',
                'label'      => esc_html__( 'Disable Sidebar on Single Page', 'lotuslite' ),
                'section'    => 'lotuslite_home_sidebar',
            )
    );

    // Social Media Settings
    $wp_customize->add_section( 'lotuslite_social' ,
        array(
            'title'      => esc_html__('Social Media Settings', 'lotuslite'),
            'description'=> esc_html__('Enter your social media(URL). Icons will not show if left blank.', 'lotuslite'),
            'priority'   => 4,
            'panel'       => 'theme_options',
        ) 
    );

        $wp_customize->add_setting(
            'lotuslite_facebook',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );
        $wp_customize->add_setting(
            'lotuslite_twitter',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );
        $wp_customize->add_setting(
            'lotuslite_instagram',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );
        $wp_customize->add_setting(
            'lotuslite_pinterest',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );
        $wp_customize->add_setting(
            'lotuslite_bloglovin',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );
        $wp_customize->add_setting(
            'lotuslite_google',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );
        $wp_customize->add_setting(
            'lotuslite_youtube',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );
        $wp_customize->add_setting(
            'lotuslite_rss',
            array(
                'default'     => '',
                'sanitize_callback' => 'esc_url_raw'
            )
        );


    $wp_customize->add_control(
        new WP_Customize_Control(
            $wp_customize,
            'lotuslite_facebook',
            array(
                'label'      => esc_html__('Facebook', 'lotuslite'),
                'section'    => 'lotuslite_social',
                'settings'   => 'lotuslite_facebook',
                'type'       => 'text',
                'priority'   => 1
            )
        )
    );
        $wp_customize->add_control(
            new WP_Customize_Control(
                $wp_customize,
                'lotuslite_twitter',
                array(
                    'label'      => esc_html__('Twitter', 'lotuslite'),
                    'section'    => 'lotuslite_social',
                    'settings'   => 'lotuslite_twitter',
                    'type'       => 'text',
                    'priority'   => 2
                )
            )
        );
        $wp_customize->add_control(
            new WP_Customize_Control(
                $wp_customize,
                'lotuslite_instagram',
                array(
                    'label'      => esc_html__('Instagram', 'lotuslite'),
                    'section'    => 'lotuslite_social',
                    'settings'   => 'lotuslite_instagram',
                    'type'       => 'text',
                    'priority'   => 3
                )
            )
        );
        $wp_customize->add_control(
            new WP_Customize_Control(
                $wp_customize,
                'lotuslite_pinterest',
                array(
                    'label'      => esc_html__('Pinterest', 'lotuslite'),
                    'section'    => 'lotuslite_social',
                    'settings'   => 'lotuslite_pinterest',
                    'type'       => 'text',
                    'priority'   => 4
                )
            )
        );
        $wp_customize->add_control(
            new WP_Customize_Control(
                $wp_customize,
                'lotuslite_bloglovin',
                array(
                    'label'      => esc_html__('Bloglovin', 'lotuslite'),
                    'section'    => 'lotuslite_social',
                    'settings'   => 'lotuslite_bloglovin',
                    'type'       => 'text',
                    'priority'   => 5
                )
            )
        );
        $wp_customize->add_control(
            new WP_Customize_Control(
                $wp_customize,
                'lotuslite_google',
                array(
                    'label'      => esc_html__('Google Plus', 'lotuslite'),
                    'section'    => 'lotuslite_social',
                    'settings'   => 'lotuslite_google',
                    'type'       => 'text',
                    'priority'   => 6
                )
            )
        );
        $wp_customize->add_control(
            new WP_Customize_Control(
                $wp_customize,
                'lotuslite_youtube',
                array(
                    'label'      => esc_html__('Youtube', 'lotuslite'),
                    'section'    => 'lotuslite_social',
                    'settings'   => 'lotuslite_youtube',
                    'type'       => 'text',
                    'priority'   => 8
                )
            )
        );
        $wp_customize->add_control(
            new WP_Customize_Control(
                $wp_customize,
                'lotuslite_rss',
                array(
                    'label'      => esc_html__('Rss', 'lotuslite'),
                    'section'    => 'lotuslite_social',
                    'settings'   => 'lotuslite_rss',
                    'type'       => 'text',
                    'priority'   => 12
                )
            )
        );

    // Lotus Pro
    $wp_customize->add_section( 'lotus_pro', array(
        'title' => esc_html__( 'View PRO Version', 'lotuslite' ),
        'priority'     => 300,
    ) );

    $wp_customize->add_setting( 'lotus_pro' , array(
        'sanitize_callback' => 'sanitize_text_field',
        'default'     => '',
    ) );

    $wp_customize->add_control( new Lotuslite_Message_Control( $wp_customize, 'lotus_pro', array(
        'label'        => '',
        'description'  => '',
        'section'      => 'lotus_pro',
        'priority'     => 190,
        'type'         => 'list',
        'list'         => array(
            esc_html__( 'Featured Area Grid', 'lotuslite' ),
            esc_html__( '900+ GOOGLE FONTS', 'lotuslite' ),
            esc_html__( '5 Different Blog Layouts', 'lotuslite' ),
            esc_html__( 'WooCommerce Compatible', 'lotuslite' ),
            esc_html__( 'Blazing speed, Highload ready', 'lotuslite' ),
            esc_html__( 'Share Blog Posts', 'lotuslite' ),
            esc_html__( '5 Custom Widgets', 'lotuslite' ),
            esc_html__( 'Footer Copyright Text', 'lotuslite' ),
            esc_html__( 'Logo Upload', 'lotuslite' ),
            esc_html__( 'Well Documented', 'lotuslite' ),
            esc_html__( 'Child Theme included', 'lotuslite' ),
            esc_html__( 'And More...', 'lotuslite' ),
        ),
        'button' => array(
            'link' => lotuslite_get_premium_url(),
            'label' => esc_html__( 'Upgrade to Lotus Pro', 'lotuslite' ),
        )
    ) ) );


}

add_action( 'customize_register', 'lotuslite_customize_register' );

function lotuslite_sanitize_checkbox( $input ){
    if ( $input == 1 || $input == 'true' || $input === true ) {
        return 1;
    } else {
        return 0;
    }
}

function lotuslite_sanitize_number( $number, $setting ) {
    $number = absint( $number );
    return ( $number ? $number : $setting->default );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function lotuslite_customize_preview_js() {
	wp_enqueue_script( 'lotuslite_customizer', trailingslashit( get_template_directory_uri() ) . 'js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'lotuslite_customize_preview_js' );

/**
 * Load customizer style
 */
function lotuslite_customizer_load_css(){
    wp_enqueue_style( 'lotuslite-customizer', trailingslashit( get_template_directory_uri() ) . 'css/customizer.css' );
}
add_action('customize_controls_print_styles', 'lotuslite_customizer_load_css');
