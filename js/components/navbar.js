var html = `
<link rel="stylesheet" href="/css/navbar.css">
<div id="background-navbar"></div>
<ul class="nav-ul" id="nav-ul">
    <li class="nav-link" id="home"><a href="/index.html">Home</a></li>
    <li class="nav-link" id="profprojects"><a href="/html/projects/professional-projects.html">Professional projects</a></li>
    <li class="nav-link" id="persoprojects"><a href="/html/projects/personal-projects.html">Personal projects</a></li>
    <li class="nav-link" id="about"><a href="/html/about.html">About</a></li>
    <li class="nav-link" id="resume"><a href="/html/resume.html">Resume</a></li>
    <li class="nav-link" id="blog"><a href="/html/projects/blog.html">Other works</a></li>
</ul>`

document.getElementById("navbar").innerHTML = html;

var navElem;
if (window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/'))
{
    navElem = document.getElementById("home");
    navElem.className += " active";
}
else if(window.location.pathname.endsWith('/professional-projects.html')
)
{
    navElem = document.getElementById("profprojects");
    navElem.className += " active"; 
}
else if(window.location.pathname.endsWith('/resume.html'))
{
    navElem = document.getElementById("resume");
    navElem.className += " active"; 
}
else if(window.location.pathname.endsWith('/about.html'))
{
    navElem = document.getElementById("about");
    navElem.className += " active"; 
}
else if(window.location.pathname.endsWith('/personal-projects.html')
|| window.location.pathname.endsWith('/frozen-heart.html')
|| window.location.pathname.endsWith('/ufko.html')
|| window.location.pathname.endsWith('/gow-ttrpg.html')
|| window.location.pathname.endsWith('/ball-brawl.html')
|| window.location.pathname.endsWith('/beyond-bounds.html')
|| window.location.pathname.endsWith('/ready-save-go.html')
|| window.location.pathname.endsWith('/exe-cuter.html')
)
{
    navElem = document.getElementById("persoprojects");
    navElem.className += " active"; 
}
else if(window.location.pathname.endsWith('/aeon.html')
|| window.location.pathname.endsWith('/analysis-sf6.html')
|| window.location.pathname.endsWith('/game-cooking.html')
|| window.location.pathname.endsWith('/analysis-fgc.html')
|| window.location.pathname.endsWith('/blog.html')
)
{
    navElem = document.getElementById("blog");
    navElem.className += " active"; 
}