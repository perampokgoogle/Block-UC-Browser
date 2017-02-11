&lt;p id=&quot;gaboleh&quot;&gt;&lt;/p&gt;
&lt;script&gt;
 
var cari = navigator.userAgent;
var dapet = cari.search(&quot;UCBrowser&quot;);
if(dapet&gt;1) {

    var strs=document.URL;
    var urlnya= strs.replace(&quot;http://&quot;, &quot;&quot;);
    var strings=&#39;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;&lt;h3 align=&quot;center&quot;&gt; Maaf, website kami tidak dapat dibuka dengan baik jika anda menggunakan UCBrowser&lt;br/&gt;&lt;br/&gt;klik tombol pilih dibawah ini , lalu salin/copy dan buka menggunakan browser lain (seperti Chrome, firefox ,Opera, browser bawaan hp dll)&lt;br/&gt;&lt;br/&gt;&lt;input type=&quot;text&quot; class=&quot;teks&quot; value=&quot;&#39;+ document.URL  +&#39;&quot; size=&quot;50&quot;&gt;&lt;br/&gt; &lt;button class=&quot;js-copy-btn&quot;&gt;Pilih&lt;/button&gt;&lt;br/&gt;&lt;/h3&gt;&#39;;


    document.getElementById(&quot;gaboleh&quot;).innerHTML = strings;
 
var copyTextareaBtn = document.querySelector(&#39;.js-copy-btn&#39;);

copyTextareaBtn.addEventListener(&#39;click&#39;, function(event) {
  var copyTextarea = document.querySelector(&#39;.teks&#39;);
  //copyTextarea.select();
copyTextarea.selectionStart=0;
copyTextarea.selectionEnd=copyTextarea.value.length;

  try {
    var successful = document.execCommand(&#39;copy&#39;);
    var msg = successful ? &#39;successful&#39; : &#39;unsuccessful&#39;;
    console.log(&#39;Copying text command was &#39; + msg);
  } catch (err) {
    console.log(&#39;Oops, unable to copy&#39;);
  }
});

   exit();
}

function exit( status ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // +      input by: Paul
    // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
    // +   improved by: Philip Peterson
    // +   bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
    // %        note 1: Should be considered expirimental. Please comment on this function.
    // *     example 1: exit();
    // *     returns 1: null

    var i;

    if (typeof status === &#39;string&#39;) {
        alert(status);
    }

    window.addEventListener(&#39;error&#39;, function (e) {e.preventDefault();e.stopPropagation();}, false);

    var handlers = [
        &#39;cut&#39;,
        &#39;beforeunload&#39;, &#39;blur&#39;, &#39;change&#39;, &#39;contextmenu&#39;, &#39;focus&#39;, &#39;keydown&#39;, &#39;keypress&#39;, &#39;keyup&#39;, &#39;mousedown&#39;, &#39;mousemove&#39;, &#39;mouseout&#39;, &#39;mouseover&#39;, &#39;mouseup&#39;, &#39;resize&#39;, &#39;scroll&#39;,
        &#39;DOMNodeInserted&#39;, &#39;DOMNodeRemoved&#39;, &#39;DOMNodeRemovedFromDocument&#39;, &#39;DOMNodeInsertedIntoDocument&#39;, &#39;DOMAttrModified&#39;, &#39;DOMCharacterDataModified&#39;, &#39;DOMElementNameChanged&#39;, &#39;DOMAttributeNameChanged&#39;, &#39;DOMActivate&#39;, &#39;DOMFocusIn&#39;, &#39;DOMFocusOut&#39;, &#39;online&#39;, &#39;offline&#39;, &#39;textInput&#39;,
        &#39;abort&#39;, &#39;close&#39;, &#39;dragdrop&#39;, &#39;load&#39;, &#39;paint&#39;, &#39;reset&#39;, &#39;submit&#39;, &#39;unload&#39;
    ];

    function stopPropagation (e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }
    for (i=0; i &lt; handlers.length; i++) {
        window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
    }

    if (window.stop) {
        window.stop();
    }

    throw &#39;&#39;;
}

&lt;/script&gt;
