#include <pebble.h>

Window *window;
TextLayer *text_layer;
TextLayer *text_layer_2;



void handle_init(void) {
	// Create a window and text layer
	window = window_create();
	text_layer = text_layer_create(GRect(0, 0, 144, 154));
	text_layer_2 = text_layer_create(GRect(0, 75, 144, 154));
	
	// Set the text, font, and text alignment
	text_layer_set_text(text_layer, "People Currently in Space?");
	text_layer_set_font(text_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));
	text_layer_set_text_alignment(text_layer, GTextAlignmentCenter);
	
	text_layer_set_text(text_layer_2, "Loading...");
	text_layer_set_font(text_layer_2, fonts_get_system_font(FONT_KEY_GOTHIC_28_BOLD));
	text_layer_set_text_alignment(text_layer_2, GTextAlignmentCenter);
	
	// Add the text layer to the window
	layer_add_child(window_get_root_layer(window), text_layer_get_layer(text_layer));
	layer_add_child(window_get_root_layer(window), text_layer_get_layer(text_layer_2));

	// Push the window
	window_stack_push(window, true);
	
	// App Logging!
	APP_LOG(APP_LOG_LEVEL_DEBUG, "Just pushed a window!");
}

void handle_deinit(void) {
	// Destroy the text layer
	text_layer_destroy(text_layer);
	text_layer_destroy(text_layer_2);
	
	// Destroy the window
	window_destroy(window);
}

int main(void) {
	handle_init();
	app_event_loop();
	handle_deinit();
}
