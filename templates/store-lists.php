<?php

global $post;

$pagination_base = str_replace( $post->ID, '%#%', esc_url( get_pagenum_link( $post->ID ) ) );

$search_query = null;

if ( 'yes' === $search ) {
    $search_query = isset( $_GET['dokan_seller_search'] ) ? sanitize_text_field( $_GET['dokan_seller_search'] ) : '';
}

$show_seller_search = apply_filters( 'dokan_show_seller_search', true );

if ( $show_seller_search ) {
    $args = array(
        'search_query'    => $search_query,
        'pagination_base' => $pagination_base,
        'per_row'         => $per_row,
    );

    dokan_get_template_part( 'seller-search-form', false, $args );
}

/**
 *  Added extra search field after store listing search
 *
 * `dokan_after_seller_listing_serach_form` - action
 *
 *  @since 2.5.7
 *
 *  @param array|object $sellers
 */
do_action( 'dokan_after_seller_listing_serach_form', $sellers );

$template_args = array(
    'sellers'         => $sellers,
    'limit'           => $limit,
    'offset'          => $offset,
    'paged'           => $paged,
    'search_query'    => $search_query,
    'pagination_base' => $pagination_base,
    'per_row'         => $per_row,
    'search_enabled'  => $search,
    'image_size'      => $image_size,
);

dokan_get_template_part( 'store-lists-loop', false, $template_args );
?>
