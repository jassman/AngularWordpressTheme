<?php

/** Añadimos soporte para thumbsnails en el tema */
if ( function_exists( 'add_theme_support' ) )
  add_theme_support( 'post-thumbnails' );

  function wpb_custom_new_menu() {
    register_nav_menus(
      array(
        'main-menu' => __( 'Menu Principal' )
      )
    );
  }
  add_action( 'init', 'wpb_custom_new_menu' );

/*  */
function get_menu() {
  # Change 'menu' to your own navigation slug.
  return wp_get_nav_menu_items('menu');
}

add_action('rest_api_init', function () {
        register_rest_route( 'myroutes', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
    ) );
} );

?>
