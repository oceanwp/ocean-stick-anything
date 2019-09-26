<?php
/**
 * Plugin Name:			Ocean Stick Anything
 * Plugin URI:			https://oceanwp.org/extension/ocean-stick-anything/
 * Description:			A simple plugin to stick anything you want on your site.
 * Version:				1.0.3
 * Author:				OceanWP
 * Author URI:			https://oceanwp.org/
 * Requires at least:	4.5.0
 * Tested up to:		5.2
 *
 * Text Domain: ocean-stick-anything
 * Domain Path: /languages/
 *
 * @package Ocean_Stick_Anything
 * @category Core
 * @author OceanWP
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Returns the main instance of Ocean_Stick_Anything to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Ocean_Stick_Anything
 */
function Ocean_Stick_Anything() {
	return Ocean_Stick_Anything::instance();
} // End Ocean_Stick_Anything()

Ocean_Stick_Anything();

/**
 * Main Ocean_Stick_Anything Class
 *
 * @class Ocean_Stick_Anything
 * @version	1.0.0
 * @since 1.0.0
 * @package	Ocean_Stick_Anything
 */
final class Ocean_Stick_Anything {
	/**
	 * Ocean_Stick_Anything The single instance of Ocean_Stick_Anything.
	 * @var 	object
	 * @access  private
	 * @since 	1.0.0
	 */
	private static $_instance = null;

	/**
	 * The token.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $token;

	/**
	 * The version number.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $version;

	// Admin - Start
	/**
	 * The admin object.
	 * @var     object
	 * @access  public
	 * @since   1.0.0
	 */
	public $admin;

	/**
	 * Constructor function.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function __construct( $widget_areas = array() ) {
		$this->token 			= 'ocean-stick-anything';
		$this->plugin_url 		= plugin_dir_url( __FILE__ );
		$this->plugin_path 		= plugin_dir_path( __FILE__ );
		$this->version 			= '1.0.3';

		register_activation_hook( __FILE__, array( $this, 'install' ) );

		add_action( 'init', array( $this, 'load_plugin_textdomain' ) );

		add_action( 'init', array( $this, 'setup' ) );
	}

	/**
	 * Main Ocean_Stick_Anything Instance
	 *
	 * Ensures only one instance of Ocean_Stick_Anything is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @static
	 * @see Ocean_Stick_Anything()
	 * @return Main Ocean_Stick_Anything instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) )
			self::$_instance = new self();
		return self::$_instance;
	} // End instance()

	/**
	 * Load the localisation file.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function load_plugin_textdomain() {
		load_plugin_textdomain( 'ocean-stick-anything', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Cloning is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	}

	/**
	 * Installation.
	 * Runs on activation. Logs the version number and assigns a notice message to a WordPress option.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function install() {
		$this->_log_version_number();
	}

	/**
	 * Log the plugin version number.
	 * @access  private
	 * @since   1.0.0
	 * @return  void
	 */
	private function _log_version_number() {
		// Log the version number.
		update_option( $this->token . '-version', $this->version );
	}

	/**
	 * Setup all the things.
	 * Only executes if OceanWP or a child theme using OceanWP as a parent is active and the extension specific filter returns true.
	 * @return void
	 */
	public function setup() {
		$theme = wp_get_theme();

		if ( 'OceanWP' == $theme->name || 'oceanwp' == $theme->template ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ), 999 );
			add_filter( 'ocean_localize_array', array( $this, 'localize_array' ) );
			add_filter( 'body_class', array( $this, 'body_class' ), 999 );
			add_action( 'admin_menu', array( $this, 'add_page' ), 60 );
			add_action( 'admin_init', array( $this, 'register_settings' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
		}
	}

	/**
	 * Enqueue scripts.
	 *
	 * @since   1.0.0
	 */
	public function scripts() {
		wp_enqueue_script( 'sticky-kit', plugins_url( '/assets/js/sticky-kit.min.js', __FILE__ ), array( 'jquery' ), $this->version, true );
		wp_enqueue_script( 'osa-script', plugins_url( '/assets/js/main.min.js', __FILE__ ), array( 'jquery' ), $this->version, true );
	}

	/**
	 * Localize array
	 *
	 * @since  1.0.0
	 */
	public function localize_array( $array ) {

		$array['stickElements'] = get_option( 'osa_stick_elements' );

		// If un-stick
		$unstick = get_option( 'osa_unstick' );
		if ( ! empty( $unstick ) ) {
			$array['unStick'] = $unstick;
		}
		
		return $array;

	}

	/**
	 * Add data-offset in the body to make the Offset setting to work
	 *
	 * @since  1.0.0
	 */
	public function body_class( $classes ) {

		// If custom offset
		$offset = get_option( 'osa_stick_offset' );
		if ( ! empty( $offset ) ) {
			$classes[] = '" data-offset="'. $offset;
		}

		return $classes;

	}

	/**
	 * Add sub menu page
	 *
	 * @since  1.0.0
	 */
	public function add_page() {
		
		add_submenu_page(
			'oceanwp-panel',
			esc_html__( 'Stick Elements', 'ocean-stick-anything' ),
			esc_html__( 'Stick Elements', 'ocean-stick-anything' ),
			'manage_options',
			'oceanwp-panel-stick',
			array( $this, 'create_admin_page' )
		);
	}

	/**
	 * Get settings.
	 *
	 * @since  1.0.0
	 */
	public static function get_settings() {

		$settings = array(
			'stick_elements' 	=> get_option( 'osa_stick_elements' ),
			'stick_offset' 		=> get_option( 'osa_stick_offset' ),
			'unstick' 			=> get_option( 'osa_unstick' ),
		);

		return apply_filters( 'osa_stick_settings', $settings );
	}

	/**
	 * Settings page output
	 *
	 * @since  1.0.0
	 */
	public function create_admin_page() {

		// Get settings
		$settings = self::get_settings(); ?>

		<div class="wrap oceanwp-theme-panel clr">

			<h1><?php esc_attr_e( 'Stick Anything', 'ocean-stick-anything' ); ?></h1>
			<p class="description"><?php esc_html_e( 'On this page, you can stick any element of your site just by adding the elements in the input.', 'ocean-stick-anything' ); ?></p>

			<div class="oceanwp-settings clr">

				<?php
				if ( ! class_exists( 'Ocean_Sticky_Header' )
					&& true != apply_filters( 'oceanwp_theme_panel_sidebar_enabled', false ) ) { ?>
					<div class="oceanwp-sidebar right clr">
						<?php self::admin_page_sidebar(); ?>
					</div>
				<?php } ?>

				<div class="left clr">

					<form method="post" action="options.php">

						<?php settings_fields( 'osa_settings' ); ?>

						<div class="oceanwp-panels clr">

							<h2><?php esc_html_e( 'Stick', 'ocean-stick-anything' ); ?></h2>
							<p class="description">
								<?php echo
									sprintf(
										esc_html__( 'You need to add your CSS selector in the Elements field, %1$sfollow this article%2$s to know how to get a CSS selector.', 'ocean-extra' ),
										'<a href="https://docs.oceanwp.org/article/529-how-to-get-a-css-selector" target="_blank">',
										'</a>'
									); ?>
							</p>

							<table class="form-table">
								<tbody>
									<tr id="osa_stick_elements_tr">
										<th scope="row">
											<label for="osa_stick_elements"><?php esc_html_e( 'Elements', 'ocean-stick-anything' ); ?></label>
										</th>
										<td>
											<input name="osa_settings[stick_elements]" type="text" id="osa_stick_elements" value="<?php echo esc_attr( $settings['stick_elements'] ); ?>" class="regular-text">
											<p class="description">
												<?php esc_html_e( 'Add the element(s) you want to stick separated by a comma. If you want to stick the sidebar, add ".widget-area".', 'ocean-stick-anything' ); ?>
											</p>
										</td>
									</tr>
									<tr id="osa_stick_offset_tr">
										<th scope="row">
											<label for="osa_stick_offset"><?php esc_html_e( 'Offset (px)', 'ocean-stick-anything' ); ?></label>
										</th>
										<td>
											<input name="osa_settings[stick_offset]" type="number" id="osa_stick_offset" value="<?php echo esc_attr( $settings['stick_offset'] ); ?>" class="regular-text">
											<p class="description">
												<?php esc_html_e( 'Add a space in pixels between the top of the page and the sticky element .', 'ocean-stick-anything' ); ?>
											</p>
										</td>
									</tr>
								</tbody>
							</table>

							<hr>

							<h2><?php esc_html_e( 'Responsive', 'ocean-stick-anything' ); ?></h2>

							<p class="description">
								<?php esc_html_e( 'Here you can choose to un-stick the element(s) when your screen is smaller.', 'ocean-stick-anything' ); ?>
							</p>

							<table class="form-table">
								<tbody>
									<tr id="osa_unstick_tr">
										<th scope="row">
											<label for="osa_unstick"><?php esc_html_e( 'Un-stick From (px)', 'ocean-stick-anything' ); ?></label>
										</th>
										<td>
											<input name="osa_settings[unstick]" type="number" id="osa_unstick" value="<?php echo esc_attr( $settings['unstick'] ); ?>" class="regular-text">
										</td>
									</tr>
								</tbody>
							</table>

							<?php submit_button(); ?>

						</div>

					</form>

				</div>

			</div><!-- .oceanwp-settings -->

		</div>

	<?php
	}

	/**
	 * Settings page sidebar
	 *
	 * @since 1.4.0
	 */
	public static function admin_page_sidebar() {

		// Link
		$link = 'https://oceanwp.org/extension/ocean-sticky-header/?utm_source=dash&utm_medium=stick-panel&utm_campaign=sticky'; ?>

		<div class="oceanwp-bloc oceanwp-sticky">
			<h3><?php esc_html_e( 'Ocean Sticky Header', 'ocean-extra' ); ?></h3>
			<div class="content-wrap">
				<p class="content"><?php esc_html_e( 'This plugin is a must-have for any type of website, it allow you to fix your header automatically or manually if you create a custom header style with many control settings.', 'ocean-extra' ); ?></p>
				<a href="<?php echo esc_url( $link ) ?>" class="button owp-button" target="_blank"><?php esc_html_e( 'Read More', 'ocean-extra' ); ?></a>
			</div>
			<i class="dashicons dashicons-admin-post"></i>
		</div>

	<?php
	}

	/**
	 * Register a setting and its sanitization callback.
	 *
	 * @since 1.0.0
	 */
	public static function register_settings() {
		register_setting( 'osa_settings', 'osa_settings', array( 'Ocean_Stick_Anything', 'sanitize_settings' ) ); 
	}

	/**
	 * Main Sanitization callback
	 *
	 * @since 1.0.0
	 */
	public static function sanitize_settings() {

		// Get settings
		$settings = self::get_settings();

		foreach( $settings as $key => $setting ) {
			if ( isset( $_POST['osa_settings'][$key] ) ) {
				update_option( 'osa_'. $key, sanitize_text_field( wp_unslash( $_POST['osa_settings'][$key] ) ) );
			}
		}

	}

	/**
	 * Load scripts
	 *
	 * @since  1.0.0
	 */
	public static function admin_scripts( $hook ) {

		// Only load scripts when needed
		if ( OE_ADMIN_PANEL_HOOK_PREFIX . '-stick' != $hook ) {
			return;
		}

		// CSS
		wp_enqueue_style( 'oceanwp-stick-anything', plugins_url( '/assets/css/main.min.css', __FILE__ ) );

	}

} // End Class

#--------------------------------------------------------------------------------
#region Freemius
#--------------------------------------------------------------------------------

	if ( ! function_exists( 'ocean_stick_anything_fs' ) ) {
		// Create a helper function for easy SDK access.
		function ocean_stick_anything_fs() {
			global $ocean_stick_anything_fs;

			if ( ! isset( $ocean_stick_anything_fs ) ) {
				$ocean_stick_anything_fs = OceanWP_EDD_Addon_Migration::instance( 'ocean_stick_anything_fs' )->init_sdk( array(
					'id'              => '3815',
					'slug'            => 'ocean-stick-anything',
					'public_key'      => 'pk_f9a790f52e74ee60eb2812ba763dd',
					'is_premium'      => false,
					'is_premium_only' => false,
					'has_paid_plans'  => false,
				) );
			}

			return $ocean_stick_anything_fs;
		}

		function ocean_stick_anything_fs_addon_init() {
			if ( class_exists( 'Ocean_Extra' ) ) {
				OceanWP_EDD_Addon_Migration::instance( 'ocean_stick_anything_fs' )->init();
			}
		}

		if ( 0 == did_action( 'owp_fs_loaded' ) ) {
			// Init add-on only after parent theme was loaded.
			add_action( 'owp_fs_loaded', 'ocean_stick_anything_fs_addon_init', 15 );
		} else {
			if ( class_exists( 'Ocean_Extra' ) ) {
				/**
				 * This makes sure that if the theme was already loaded
				 * before the plugin, it will run Freemius right away.
				 *
				 * This is crucial for the plugin's activation hook.
				 */
				ocean_stick_anything_fs_addon_init();
			}
		}
	}

#endregion