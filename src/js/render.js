//
// ========
// + RENDER.js +
// ========
//
const appsList = (x) => {
  $(x).append(`<div id="app-1" class="app-content current">
          <div class="popup">
            <div id="apps">
              <a href="https://github.com">
                <div class="app study_focus_mode relaxation_focus_mode">
                  <i class="lab la-github"></i>
                  <span>Github</span>
                </div></a
              >
              <a href="https://youtube.com">
                <div class="app study_focus_mode">
                  <span>YouTube</span>
                  <i class="lab la-youtube"></i></div
              ></a>
              <a href="https://reddit.com">
                <div class="app study_focus_mode programming_focus_mode">
                  <span>Reddit</span>
                  <i class="lab la-reddit"></i></div
              ></a>
              <a href="https://mail.protonmail.com">
                <div class="app relaxation_focus_mode">
                  <span>Proton Mail </span>
                  <i class="las la-inbox"></i></div
              ></a>

              <a href="https://mail.google.com">
                <div class="app relaxation_focus_mode">
                  <span>Gmail</span>
                  <i class="las la-envelope"></i></div
              ></a>
            </div>
          </div>
        </div>
        
        <div id="app-2" class="app-content">
          <div class="popup">
            <div id="apps">
              <a href="http://moodle.rbs.ac.mu/moodle/">
                <div class="app">
                  <i class="las la-school"></i>
                  <span>Rushm.. Moodle</span>
                </div></a>
              
                 <a href="https://docs.google.com">
                <div class="app">
                  <i class="las la-file-alt"></i>
                  <span>Google Docs</span>
                </div></a
              >

              <a href="https://udemy.com">
                <div class="app">
                  <i class="las la-chalkboard-teacher"></i>
                  <span>Udemy</span>
                </div></a>
              <a href="https://learn-anything.xyz/">
                <div class="app">
                  <i class="lar la-map"></i>
                  <span>Learn Anything</span>
                </div></a
              >
              <a href="https://www.litcharts.com/">
                <div class="app">
                  <i class="las la-book"></i>
                  <span>Litcharts</span>
                </div></a
              >
            </div>
          </div>
        </div>

        <div id="app-3" class="app-content">
          <div class="popup">
            <div class="popup">
              <div id="apps">
                <a href="https://instagram.com">
                  <div class="app">
                    <i class="lab la-instagram"></i>
                    <span>Instagr..</span>
                  </div></a
                >
                <a href="https://twitter.com">
                  <div class="app">
                    <i class="lab la-twitter"></i>
                    <span>Twitter</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
        
                <div id="app-4" class="app-content">
          <div class="popup">
            <div class="popup">
              <div class="popup">
                <div id="apps">
                  <a href="https://youtube.com">
                    <div class="app">
                      <i class="lab la-youtube"></i>
                      <span>YouTube</span>
                    </div></a
                  >
                  <a href="https://netflix.com">
                    <div class="app programming_focus_mode">
                      <i class="las la-film"></i>
                      <span>Netflix</span>
                    </div></a
                  >
                  <a href="https://twitch.tv">
                    <div class="app programming_focus_mode">
                      <i class="lab la-twitch"></i>
                      <span>Twitch</span>
                    </div></a
                  >
                <a href="https://lifeat.io/app">
                <div class="app">
                  <i class="las la-ticket-alt"></i>
                  <span>LifeAt</span>
                </div></a
              >
                  <a href="https://www.lofi.cafe/">
                    <div class="app">
                      <i class="las la-record-vinyl"></i>
                      <span>Lofi Cafe</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>`);
};

const settingAbout = (z) => {
  $(z).append(`<div id="tab-3" class="tab-content">
              <p class="settings-item-title">About</p>
              <p class="settings-item-under-title description">About Saturn Startpage & What's new.</p>
            <div class="settings-background">
              <p class="new-about">
              <img 
              style="margin-left: auto;
              padding-top:30px;
              margin-right: auto;
              display: block;"
                  src="/assets/img/dynamic-icon-big.png"
                  loading="lazy"
                  title="Saturn Logo"
                  alt="Saturn-logo.png"
                  /> 
            <p style="text-align:center;font-size:23px;" class="settings-item-title">Saturn Startpage</p>
            <p style="text-align:center;font-weight:500;margin-top:-15px;">
            <a  href="https://twitter.com/raifcoonjah" target="_blank">By <i class="la la-twitter"></i> Raif Coonjah</a>
            </p>
               <p style="text-align:center;"> 
               <a class="version-text red_background"
               href="https://github.com/mraif13/Saturn-startpage/releases/tag/v6.3.0"
               target="_blank" 
               >v6.3.80-BETA</i></a>
                </p>
              <div class="socials">
                <div class="aboutwidgets">
                <a href="https://github.com/raifcoonjah/Saturn-startpage/releases/tag/v6.3.80" class="aboutwidgets-container lk_container_top">
                Try out beta
                <i class="las la-external-link-alt"></i>
                </a>
                <a href="https://saturnstartpage.netlify.app/" class="aboutwidgets-container lk_container_bottom">
                Get chromium version
                <i class="las la-external-link-alt"></i>
                </a>
                <a href="https://github.com/raifcoonjah/Saturn-startpage/tree/master" class="aboutwidgets-container lk_container_top">
                Source Code
                <i class="las la-external-link-alt"></i>
                </a>

                <a href="https://github.com/raifcoonjah/Saturn-startpage/" class="aboutwidgets-container lk_container_bottom">
                Contribute
                <i class="las la-external-link-alt"></i>
                </a>

                <a href="https://github.com/raifcoonjah/Saturn-startpage/tree/master#data-whats-that" class="aboutwidgets-container">
                Privacy
                <i class="las la-external-link-alt"></i>
                </a>
                </div>
              </div>
             <p style="text-align: center; font-weight: 500; font-size: 13px">
             Thank you for using Saturn startpage.
              </p>
            </div>
            
          <p class="settings-item-title">What's new</p>
          <p class="settings-item-under-title description">Learn what's new in this release.</p>
          <div class="settings-background"> 
          <img style="margin-left: auto; padding-top:30px; margin-right: auto; display: block;" src="/assets/img/version.png" loading="lazy" />
          <p style="text-align:center;"> 
            <a class="version-text red_background"
            >Saturn v6.3.80-BETA</i></a>
          </p>
            <p style="text-align:center;"> 
            <a class="version-text"
            >Updated on: ??/??/2023</i></a>
          </p>
<p style="text-align:center;" class="description small_text">
No update description here...
</p>
<ul>
What to test:
Nothing here yet...
</ul>
</div>


          </div>`);
};

const kShortcuts = (ks) => {
  $(ks).append(`<!-- + Keyboard Shortcuts section + -->
          <div id="tab-5" class="tab-content">
            <p class="settings-item-title">Keyboard Shortcuts</p>
            <p class="settings-item-under-title description">Shortcuts allow you to do things without ever needing to touch your 
            <i class="las la-mouse"></i> mouse again.</p>
            <div class="settings-background">
              <p class="dropdown-seperator settings-seperator">
                <span>General</span>
              </p>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>/</kbd> to focus the search bar.</p>
              <p> Press <kbd>Ctrl</kbd> + <kbd><i class="las la-caret-square-up"></i></kbd> (Arrow Up) to switch between search engines.</p>
              <p> Press <kbd>Shift</kbd> + <kbd>S</kbd> to open & close settings menu. </p>
              <p></p>
              <p> Press <kbd>Shift</kbd> + <kbd>Z</kbd> to open add favorites menu. </p>
              <p> Press <kbd>Shift</kbd> + <kbd>B</kbd> to open soundboard. </p>
              <p> Press on <kbd>Esc</kbd> to close any modal.</p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>M</kbd> to mute audio. (Provided by Firefox) </p>
              <p class="dropdown-seperator settings-seperator">
                <span>Applications</span>
              </p>
              <p></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> to open <span style="font-weight: 700;">Github.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd> to open <span style="font-weight: 700;">Youtube.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>R</kbd> to open <span style="font-weight: 700;">Reddit.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> to open <span style="font-weight: 700;">ProtonMail.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> to open <span style="font-weight: 700;">Twitter.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd> to open <span style="font-weight: 700;">Google Calendar.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd> to open <span style="font-weight: 700;">Gmail.</span></p>
              <p> Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd> to open <span style="font-weight: 700;">Instagram.</span></p>
            </div>
             <p style="text-align: center; font-weight: 500; font-size: 13px">
                <a
                  href="https://github.com/mraif13/Saturn-startpage/issues/new"
                  target="_blank"
                  ><i class="las la-keyboard"></i> Request a shortcut
                </a>
              </p>
          </div>`);
};

const coolbg = (cbg) => {
  $(cbg).append(`<div class="fav_ptgi">
            <ul class="fav_ptgi_category">
              <a
                href="https://unsplash.com"
                title="Go to unsplash..."
                target="_blank"
              >
              <li class="fav_ptgi_btn"><img src="https://unavatar.io/unsplash.com" loading="lazy"> Unsplash</li></a
              >
              <a
                href="https://wallpaperaccess.com"
                title="Go to wallpaperaccess..."
                target="_blank"
              >
              <li class="fav_ptgi_btn"><img src="https://unavatar.io/wallpaperaccess.com" loading="lazy"> Wallpaperaccess</li></a
              >
              <a
              href="https://coolbackgrounds.io/"
              title="Go to coolbackgrounds..."
              target="_blank"
            >
            <li class="fav_ptgi_btn"><img src="https://unavatar.io/coolbackgrounds.io" loading="lazy"> Coolbackgrounds</li></a
            >
            <a
            href="https://github.com/mraif13/Saturn-startpage/issues/new"
            title="A website missing? Suggest it!"
            target="_blank"
          >
          <li class="fav_ptgi_btn">Suggest website...</li></a
          >
            </ul>
          </div>`);
};

const render_in_js = (x, z, ks, cu, cbg) => {
  let apps_list = $("#apps_list");
  let setting_about = $("#setting_about");
  let kshortcuts = $("#k_shortcuts");
  let cool_background = $("#cool_backgrounds");

  // pls dont break
  loader = setTimeout(function () {
    appsList(apps_list);
    settingAbout(setting_about);
    kShortcuts(kshortcuts);
    coolbg(cool_background);
  });
};

window.onload = render_in_js();