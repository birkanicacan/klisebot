var theklise='';
var indx=0;
	
var kliselist = [
	{definition:'Atıyorum isteyene'},
	{definition:'Çok sınav var'},
	{definition:'Finalde midterm öncesi dahil değil'},
	{definition:'Çok bozdu çok'},
	{definition:'Ellere dikkat'},
	{definition:'Naptın?'},
	{definition:'Amacın ne?'},
	{definition:'Naber'},
	{definition:'Koyduk mu?'},
	{definition:'Sen meşgulsun sanırım ben yatıyorum iyi geceler!'},
];



var newklise = function() {
	indx=Math.round(Math.random()*10);
	theklise= kliselist[indx].definition;	
    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = theklise;
};



/*function fbs_click() {
    var twtTitle = document.title;
    var twtUrl = location.href;
    var maxLength = 140 - (twtUrl.length + 1);
    if (twtTitle.length > maxLength) {
        twtTitle = twtTitle.substr(0, (maxLength - 3)) + '...';
    }
    var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(theklise);
    window.open(twtLink);
}*/

function face_click() {
    var faceTitle = document.title;
    var faceUrl = location.href;
    /*var faceLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(theklise) + 'facebook-share-dialog', 
      'width=626,height=436'); */
    window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
      'facebook-share-dialog', 
      'width=626,height=436');
};


document.querySelector('#givemeklise').addEventListener('click', newklise);
	  
$('#givemeklise').on('click', function(ev) {
    ev.preventDefault();
    // Remove existing iframe
    $('#tweetBtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
		.attr('data-url', 'www.klisebot.com')
		.attr('data-hashtags', 'KliseBot')
		.attr('data-via', 'KliseBot')
		.attr('data-text', theklise);
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();
	
});

function face_click_test() {
    FB.init({
        appId: '183214308523716', cookie: true, status: true, xfbml: true, oauth: true
    });
    $("#fb-publish").click(function() {
        FB.ui({
            method: "feed",
            link: "https://vast-citadel-8806.herokuapp.com/",
            caption: "Deneme",
            description: "Here is the text I want to share.",
            picture: "http://google.com.tr/images/google_favicon_128.png"
        });
    });
};

