/*------*/
/* DATA */
/*------*/

var likeItems = [
    {
        item: 'creating mobile apps',
        color: '#4864BC'
    },
    {
        item: 'tweeting things',
        color: '#4C98AF'
    },
    {
        item: 'taking pictures',
        color: '#48BC97'
    },
    {
        item: 'writing clean code',
        color: '#4864BC'
    },
    {
        item: 'entrepreneurship',
        color: '#4CC6C2'
    }
];

//TODO : Change project content to array

/*Project content*/
var scanshareTxt = '<h2>Scan&amp;Share<span class="projectSubtitle"> - shopping iPhone App </span><span class="placeKeywords"> School project (2 Months) </span></h2><p><span class="blue">Scan&amp;Share</span> is a iPhone app that allows to scan products barcodes and get localized pricing information and consumers feedbacks.<br><br>This project was part of the Human Computer Interaction class at the University of Technology of Compiègne (U.T.C).<br><br>It was a simple prototype that we developed in a short period of time.<br><br>Contributors : Karim C. & Titouan R.</p>You can see the sources on <b><a href="https://github.com/TitouanR/Scan-Share">GitHub</a></b> <br><br><br><br><span class="keywords">iOS6</span><span class="keywords">RESTFull API</span> <span class="keywords">Map Kit</span></div>';
var scanshareImg = '<img src="img/scanshare0.png"><img src="img/scanshare1.png"><img src="img/scanshare3.png"><img src="img/scanshare2.png">';

var kidoriaTxt = '<h2>Kidoria<span class="projectSubtitle"> - social network iOS App </span><span class="placeKeywords"> Internship </span></h2><p>During my internship <span class="blue"><a href="http://www.actimage.com">@Actimage</a></span>, I worked on the Kidoria iOS application.<br><span class="blue">Kidoria</span> is a social network from Luxembourg which focuses on children. <br>We were in charge of both iPhone and iPad app.<br><br>It was my first iOS experience and I\'ve learned a lot working with great developers there.</p><br><br>The app is now available on <span class="blue"><a href="https://itunes.apple.com/app/kidoria/id659276611?mt=8">the AppStore</a></span><br><br><br><br><span class="keywords">iOS6</span><span class="keywords">RESTFull API</span><span class="keywords">Image processing</span>';
var kidoriaImg = '<img src="img/kid1.png"><img src="img/kid2.png"><img src="img/kid3.png"><img src="img/kid4.png">';


var iceTxt = '<h2>ICE<span class="projectSubtitle"> - bug tracking iPad App </span><span class="placeKeywords"> Job (1 Month) </span></h2><p>Last summer, I worked <span class="blue"><a href="http://www.digeetis.com">@Digeetis</a></span> as an iOS developer. I developed an iPad application for an agricultural compagny that allows to track farm equipment\'s dysfunctions.<br>The user has to fill a form, take a picture of the dyfunction and then annotate it.<br></p><span class="keywords">iOS6</span><span class="keywords">RESTFull API (RestKit)</span><span class="keywords">CoreData</span><span class="keywords">Quartz 2D</span>';
var iceImg = '<img src="img/ice1.png"><img src="img/ice2.png"><img src="img/ice3.png">';


var imaginariumTxt = '<h2>Imaginarium<span class="projectSubtitle"> - music festival iPhone App </span><span class="placeKeywords"> Personal project </span></h2><p><span class="blue"><a href="http://www.imaginariumfestival.com">Imaginarium</a></span> is a new music festival that will take place in Compiègne on Mai 2014.<br> The mobile application will allow to get all the information about the festival, such as the schedule, the map...</p><br>We are currently working on the back office which aims to provide data for the future mobile apps<br><br>The project will be completed in January<br>You can see the sources on <b><a href="https://github.com/TitouanR/IF-BackOffice">GitHub</a></b><br><br><br><b>App :</b><span class="keywords">iOS7</span><span class="keywords">RESTFull API</span><span class="keywords">CoreData</span><span class="keywords">Twitter API</span><br><b>BackOffice : </b><span class="keywords">HTML5/CSS3</span><span class="keywords">jQuery</span><span class="keywords">PHP</span><span class="keywords">MySQL</span><br>';
var imaginariumImg = '<img src="img/im1.png">';

var rougeorTxt = '<h2>Rouge&Or<span class="projectSubtitle"> - Java web application </span><span class="placeKeywords"> School project </span></h2><p>Rouge&Or is a Spring MVC application. It is a website that offer a booking system for sports events of the Rouge&Or teams of the Laval University (Québec)<br>You can see the sources on <b><a href="https://github.com/TitouanR/IF-BackOffice">GitHub</a></b><br><br><span class="keywords">Java</span><span class="keywords">Spring</span><span class="keywords">XML</span>';
var rougeorImg = '<img src="img/ro1.png"><img src="img/ro2.png">';

var shakeDuration = 2000;
var scrollDuration = 800;
var toCall = 0;
var blueColor = '#4c98af';
var didAlreadySeeProject = false;

$(document).ready(function () {
    init();
    launchAboutMeAnimation();
    setTimeout(function () {
        var toShow = getLikeItem(toCall);
        var text = toShow['item'];
        $('#likeItem').html(text);
        shakeLikeItem();
    }, 2000);
});

/*----------*/
/* NAV BAR  */
/**---------*/

/* navbar button onClick */
$('#aboutMeButton').click(function () {

    if (!$('#aboutMeButton').parent().hasClass("active")) {
        removeActiveTab();
        $('#aboutMeButton').parent().addClass("active");
        $.scrollTo(0, scrollDuration, {
            axis: 'y'
        });
    }
});

/*  skills button onClick */
$('#skillsButton').click(function () {
    if (!$('#skillsButton').parent().hasClass("active")) {
        $.scrollTo($("#part-skills"), scrollDuration, {
            axis: 'y'
        });
    }
});

/*  projects button onClick */
$('#projectsButton').click(function () {
    if (!$('#projectsButton').parent().hasClass("active")) {
        $.scrollTo($("#part-projects"), scrollDuration, {
            axis: 'y'
        });
    }
});


/* waypoints */
$('#part-aboutMe').waypoint(function (direction) {
    removeActiveTab();
    $('#aboutMeButton').parent().addClass("active");
});

$('#contactLine').waypoint(function (direction) {
    removeActiveTab();

    if (direction == 'down') {
        skillsWayPoint();
        $('#skillsButton').parent().addClass("active");
    } else {
        $('#aboutMeButton').parent().addClass("active");
    }
});

$('#otherSkills').waypoint(function (direction) {
    removeActiveTab();

    if (direction == 'down') {
        $('#projectsButton').parent().addClass("active");
        if (!didAlreadySeeProject) {
            projectsWayPoint();
            startCycle();
            didAlreadySeeProject = true;
        }
    } else {
        $('#skillsButton').parent().addClass("active");
    }
});


/* functions */

/* Lauch Skills Screen Animations */
function skillsWayPoint() {

    //Objective-C Chart
    $('#skill-objc').easyPieChart({
        barColor: '#4864BC',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 1600
    });

    $('#skill-java').easyPieChart({
        barColor: '#4C98AF',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 1800
    });

    $('#skill-cplus').easyPieChart({
        barColor: '#4CC6C2',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 2000
    });

    $('#skill-c').easyPieChart({
        barColor: '#48BC97',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 2200
    });



    //Web
    $('#skill-html').easyPieChart({
        barColor: '#4864BC',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 2400
    });

    $('#skill-php').easyPieChart({
        barColor: '#4C98AF',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 2600
    });

    $('#skill-javascript').easyPieChart({
        barColor: '#4CC6C2',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 2800
    });

    $('#skill-ajax').easyPieChart({
        barColor: '#48BC97',
        easing: 'easeOutBounce',
        trackColor: '#FFFFFF',
        scaleColor: '#FFFFFF',
        lineWidth: '8',
        lineCap: 'square',
        animate: 3000
    });

    $('#softDev').addClass("animated bounceInLeft").css('opacity', '1');
    $('#webDev').addClass("animated bounceInLeft").css('opacity', '1');
    $('#otherSkills').addClass("animated bounceInLeft").css('opacity', '1');

    $('#skill-vers').addClass("animated bounceInRight").css('opacity', '1');
    $('#skill-proj').addClass("animated bounceInRight").css('opacity', '1');
    $('#skill-lang').addClass("animated bounceInRight").css('opacity', '1');

}

/* Lauch Projects Screen Animations */
function projectsWayPoint() {
    showProject('scanshare');

    $('.iphone').css('opacity', '1');
    $('#projectTxt').css('opacity', '1');
    $('#nav-projects').css('opacity', '1');

    $('#scanshare').addClass('animated bounceInRight');
    $('#kidoria').addClass('animated bounceInRight');
    $('#ice').addClass('animated bounceInRight');
    $('#imaginarium').addClass('animated bounceInRight');
    $('#rougeor').addClass('animated bounceInRight');
    $('#test1').addClass('animated bounceInRight');
    $('#test2').addClass('animated bounceInRight');

}

/*----------*/
/* About Me */
/**---------*/

/* contact button hover*/
$('#twitter').hover(function () {
    $(this).find('span').css('color', '#2daae1');
    $(this).find('img').attr('src', 'img/twitter.png');
}, function () {
    $(this).find('span').css('color', 'gray');
    $(this).find('img').attr('src', 'img/twitterBW.png')
});

$('#email').hover(function () {
    $(this).find('span').css('color', '#dc5c5c');
    $(this).find('img').attr('src', 'img/email.png')
}, function () {
    $(this).find('span').css('color', 'gray');
    $(this).find('img').attr('src', 'img/emailBW.png')
});

$('#linkedin').hover(function () {
    $(this).find('span').css('color', '#0173b2');
    $(this).find('img').attr('src', 'img/linkedin.png')
}, function () {
    $(this).find('span').css('color', 'gray');
    $(this).find('img').attr('src', 'img/linkedinBW.png')
});

$('#github').hover(function () {
    $(this).find('span').css('color', 'black');
    $(this).find('img').attr('src', 'img/github.png')
}, function () {
    $(this).find('span').css('color', 'gray');
    $(this).find('img').attr('src', 'img/githubBW.png')
});

/*----------*/
/* PROJECTS */
/**---------*/

$('#nav-projects li a').click(function () {

    if ($(this).parent().hasClass('active'))
        return;
    var active = $(this).parent().parent().find('.active');


    active.removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).attr('id');
    changeProject(id);
    setTimeout(function () {
        startCycle()
    }, 1000);

});


/*-----------*/
/* FUNCTIONS */
/**----------*/



function init() {
    var wHeight = $(window).height();
    $("#part-aboutMe").height(wHeight - 80);
    $("#part-skills").height(wHeight - 60);
    $('#aboutMeButton').parent().addClass("active");
}


/* Remove all active tab from navbar  */
function removeActiveTab() {
    $('#aboutMeButton').parent().removeClass("active");
    $('#skillsButton').parent().removeClass("active");
    $('#projectsButton').parent().removeClass("active");
    $('#photosButton').parent().removeClass("active");
}



/* ABOUT ME  */
function launchAboutMeAnimation() {

    $('.navbar').addClass('animated fadeInDown').css('opacity', '1');

    $('#nameTitle').transition({
        opacity: 1.0,
        letterSpacing: '0em'
    }, 1000, 'ease');
    $('#professionSubtitle').transition({
        opacity: 1.0,
        letterSpacing: '0.3em'
    }, 1000, 'ease');
    $('.circularPicture').transition({
        opacity: 1.0
    }, 2000, 'ease');

    $('#likeSection').addClass('animated fadeInUp').css('opacity', '1');

    $('#twitter').addClass('animated bounceInUp').css('opacity', '1');
    $('#email').addClass('animated bounceInUp').css('opacity', '1');
    $('#linkedin').addClass('animated bounceInUp').css('opacity', '1');
    $('#github').addClass('animated bounceInUp').css('opacity', '1');
}

function shakeLikeItem() {

    $("#likeItem").toggleClass('animated flipInX');

    if ($("#likeItem").hasClass('animated')) {
        var toShow = getLikeItem(toCall);

        $('#likeItem').html(toShow.item);
        $('#likeItem').css('background', toShow.color);
    }

    setTimeout(shakeLikeItem, shakeDuration);
}

function getLikeItem(index) {

    if (index > likeItems.length - 1) {
        index = 0;
    }
    toCall = index + 1;
    return likeItems[index];
}

/* PROJECTS */
function changeProject(name) {
    hideProject();
    setTimeout(function () {
        showProject(name)
    }, 500);


}


function startCycle() {
    $('.screens').cycle({
        fx: 'scrollHorz',
        speed: 500,
        easing: 'easeInOutExpo',
        timeout: 2000,
    });
}

function showProject(name) {

    var left = $(document).find('.left');
    var right = $(document).find('.right');

    left.removeClass('animated bounceOutLeft');
    right.removeClass('animated bounceOutRight');

    left.addClass('animated bounceInLeft');
    right.addClass('animated bounceInRight');

    var iphone = $('.iphone');
    var ipad = $('.ipad');
    var mac = $('.mac');

    if (iphone) {
        iphone.removeClass('iphone');
    }

    if (ipad) {
        ipad.removeClass('ipad');
    }
    if (mac) {
        mac.removeClass('mac');
    }


    var target = $('.left');

    if (name == "ice") {
        //iPad Projects
        target.addClass('ipad');
        $('#projectTxt').css('top', '-10px');
        $('#projectTxt').css('left', '60px');
    } else if (name == "rougeor") {
        //Mac projects
        target.addClass('mac');
        $('#projectTxt').css('top', '-10px');
        $('#projectTxt').css('left', '0px');
    } else {
        //iPhone projects
        target.addClass('iphone');
        $('#projectTxt').css('top', '-60px');
        $('#projectTxt').css('left', '100px');
    }

    var txt = name + 'Txt';
    var img = name + 'Img';
    $('#projectTxt').html(eval(txt));
    $('.screens').html(eval(img));
    //  $.scrollTo($("#part-projects"), 0,{axis:'y'});
}


function hideProject() {
    var left = $(document).find('.left');
    var right = $(document).find('.right');

    left.removeClass('animated bounceInLeft');
    right.removeClass('animated bounceInRight');

    left.addClass('animated bounceOutLeft');
    right.addClass('animated bounceOutRight');
}