localStorage.getItem('key');
localStorage.setItem('key','value');

$j(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $j('#popup').delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $j('#popup-close, #popup').click(function() // You are clicking the close button
    {
        $j('#popup').fadeOut(); // Now the pop up is hidden.
    });
});

<script type="text/javascript" src="scripts/jquery.cookies.2.2.0.min.js"></script>
