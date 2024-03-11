function loadVcScript() {
    setTimeout(function () {
        if(document.getElementsByTagName('vc-root').length) return;
        document.body.appendChild(document.createElement('vc-root'));

        const comfortaaFont = document.createElement('link');
        comfortaaFont.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
        comfortaaFont.setAttribute('rel', 'stylesheet');
        document.body.appendChild(comfortaaFont);

        const appJs = document.createElement('script');
        appJs.setAttribute('type', 'module');
        appJs.setAttribute('src', 'https://visitorchat-client.s3.eu-west-2.amazonaws.com/dist/assets/index-c50eb453.js');
        document.body.appendChild(appJs);

        const legacyOne = document.createElement('script');
        legacyOne.setAttribute('type', 'module');
        legacyOne.innerHTML = 'import.meta.url;import("_").catch(()=>1);async function* g(){};if(location.protocol!="file:"){window.__vc_vite_is_modern_browser=true}';
        document.body.appendChild(legacyOne);

        const legacyTwo = document.createElement('script');
        legacyTwo.setAttribute('type', 'module');
        legacyTwo.innerHTML = '!function(){if(window.__vc_vite_is_modern_browser)return;console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored");var e=document.getElementById("vc-vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById(\'vc-vite-legacy-entry\').getAttribute(\'data-src\'))},document.body.appendChild(n)}();';
        document.body.appendChild(legacyTwo);

        const legacyThree = document.createElement('script');
        legacyThree.setAttribute('nomodule', 'nomodule');
        legacyThree.innerHTML = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
        document.body.appendChild(legacyThree);

        const legacyFour = document.createElement('script');
        legacyFour.setAttribute('nomodule', 'nomodule');
        legacyFour.setAttribute('id', 'vc-vite-legacy-polyfill');
        legacyFour.setAttribute('src', 'https://visitorchat-client.s3.eu-west-2.amazonaws.com/dist/assets/polyfills-legacy-83179297.js');
        document.body.appendChild(legacyFour);

        const legacyFive = document.createElement('script');
        legacyFive.setAttribute('nomodule', 'nomodule');
        legacyFive.setAttribute('id', 'vc-vite-legacy-entry');
        legacyFive.setAttribute('data-src', 'https://visitorchat-client.s3.eu-west-2.amazonaws.com/dist/assets/index-legacy-6518ddd4.js');
        legacyFive.innerHTML = 'System.import(document.getElementById(\'vc-vite-legacy-entry\').getAttribute(\'data-src\'))';
        document.body.appendChild(legacyFive);
    }, 500);
};

loadVcScript();
