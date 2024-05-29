jQuery(document).ready(function($) {
    var form = $('.wpcf7-form'); // Change selector to match your form
    var submitButton = form.find('[type="submit"]');
    var submitted = false;

    form.on('submit', function(event) {
        if (submitted) {
            event.preventDefault(); // Prevent form submission if already submitted
            return false;
        } else {
            submitted = true;
            submitButton.prop('disabled', true); // Disable submit button to prevent multiple clicks

            // Re-enable the submit button after 3 seconds (adjust the delay as needed)
            setTimeout(function() {
                submitButton.prop('disabled', false);
                submitted = false; // Reset submitted flag
            }, 3000); // 3 seconds
        }
    });
});
