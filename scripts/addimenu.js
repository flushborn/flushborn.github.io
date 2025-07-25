//<SCRIPT>
/* andimenu
 * June 2002
 * Andreas Ipp
 * andreas.ipp@gmx.at
 * http://strange.itp.tuwien.ac.at/~ipp/
 *
 * special menu for my site
 */

function andimenuinit(category) {
  TraceMax = 0;

  dirgif = './images/balls/';
  SHOWMENU = true;
  HIDEMENU = false;
  FLUSHBORN_URL = 'https://flushborn.github.io/';
  UNLOST_URL = 'https://unlostscrews.github.io/';
  SNOWBLOOM_URL = 'https://moltensnowbloom.github.io/';
  SEQUAK_URL = 'https://sacredsequak.github.io/';
  LUMAEN_URL = 'https://lumaenmohair.github.io/';

  startsetting = settingmenustyle;

  // order of menuitems is important
  switch (category) {
    case 'homepage':
      TraceMax = 15;
      startsetting = settingrandom;
      AddBall('flushborn', 'Flushborn', FLUSHBORN_URL, SHOWMENU);
      AddBall('unlost', 'Unlost Screws', UNLOST_URL, HIDEMENU);
      AddBall('snowbloom', 'Molten Snowbloom', SNOWBLOOM_URL, HIDEMENU);
      AddBall('sequak', 'Sacred Sequak', SEQUAK_URL, HIDEMENU);
      AddBall('lumaen', 'Lumaen Mohair', LUMAEN_URL, HIDEMENU);
      break;
    case 'flushborn':
      AddBall('flushborn', 'Flushborn', FLUSHBORN_URL, SHOWMENU);
      AddBall('unlost', 'Unlost Screws', UNLOST_URL, HIDEMENU);
      AddBall('snowbloom', 'Molten Snowbloom', SNOWBLOOM_URL, HIDEMENU);
      AddBall('sequak', 'Sacred Sequak', SEQUAK_URL, HIDEMENU);
      AddBall('lumaen', 'Lumaen Mohair', LUMAEN_URL, HIDEMENU);
      break;
    case 'lumaen':
      AddBall('lumaen', 'Lumaen Mohair', LUMAEN_URL, SHOWMENU);
      AddBall('flushborn', 'Flushborn', FLUSHBORN_URL, HIDEMENU);
      AddBall('unlost', 'Unlost Screws', UNLOST_URL, HIDEMENU);
      AddBall('snowbloom', 'Molten Snowbloom', SNOWBLOOM_URL, HIDEMENU);
      AddBall('sequak', 'Sacred Sequak', SEQUAK_URL, HIDEMENU);
      AddBall('lumaen', 'Lumaen Mohair', LUMAEN_URL, HIDEMENU);
      break;
    case 'snowbloom':
      AddBall('snowbloom', 'Molten Snowbloom', SNOWBLOOM_URL, SHOWMENU);
      AddBall('flushborn', 'Flushborn', FLUSHBORN_URL, HIDEMENU);
      AddBall('unlost', 'Unlost Screws', UNLOST_URL, HIDEMENU);
      AddBall('sequak', 'Sacred Sequak', SEQUAK_URL, HIDEMENU);
      AddBall('lumaen', 'Lumaen Mohair', LUMAEN_URL, HIDEMENU);
      break;
    case 'sequak':
      AddBall('sequak', 'Sacred Sequak', SEQUAK_URL, SHOWMENU);
      AddBall('flushborn', 'Flushborn', FLUSHBORN_URL, HIDEMENU);
      AddBall('unlost', 'Unlost Screws', UNLOST_URL, HIDEMENU);
      AddBall('snowbloom', 'Molten Snowbloom', SNOWBLOOM_URL, HIDEMENU);
      AddBall('lumaen', 'Lumaen Mohair', LUMAEN_URL, HIDEMENU);
      break;
    case 'unlost':
      AddBall('unlost', 'Unlost Screws', UNLOST_URL, SHOWMENU);
      AddBall('flushborn', 'Flushborn', FLUSHBORN_URL, HIDEMENU);
      AddBall('snowbloom', 'Molten Snowbloom', SNOWBLOOM_URL, HIDEMENU);
      AddBall('sequak', 'Sacred Sequak', SEQUAK_URL, HIDEMENU);
      AddBall('lumaen', 'Lumaen Mohair', LUMAEN_URL, HIDEMENU);
      break;
  }

  addstandardmenus(category);
  addsettingmenu();

  // now document.write
  preparedocument();
}

function addstandardmenus(category) {
  AddMenu('flushborn');
  AddMenuItem('<CENTER><EM><B>Flushborn</B></EM></CENTER>', '', 'TITLE');
  // AddMenuItem("<CENTER><EM><B>Andi</B></EM></CENTER>","","");
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  addhome(category);

  AddMenu('lumaen');
  AddMenuItem('<CENTER><EM><B>Lumaen Mohair</B></EM></CENTER>', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  AddMenuItem('Flushborn&nbsp;Settings...', '', 'showSettingMenu()');
  addhome(category);

  AddMenu('snowbloom');
  AddMenuItem('<CENTER><EM><B>Molten Snowbloom</B></EM></CENTER>', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  AddMenuItem('Flushborn&nbsp;Settings...', '', 'showSettingMenu()');
  //AddMenuItem("","","");
  addhome(category);

  AddMenu('unlost');
  AddMenuItem('<CENTER><EM><B>Sacred Sequak</B></EM></CENTER>', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  // AddMenuItem('Impressions&nbsp;of&nbsp;China', 'chinapics.html', '');
  // AddMenuItem(
  //   'Chinazivis&nbsp;(extern)',
  //   'http://quark.itp.tuwien.ac.at/~ipp/chinazivis/" target="_blank',
  //   ''
  // );
  AddMenuItem('Flushborn&nbsp;Settings...', '', 'showSettingMenu()');
  addhome(category);

  AddMenu('sequak');
  AddMenuItem('<CENTER><EM><B>Unlost Screws</B></EM></CENTER>', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  // AddMenuItem('Flushborn&nbsp;Settings...', '', 'showSettingMenu()');
  AddMenuItem('Flushborn&nbsp;Settings...', '', 'showSettingMenu()');
  addhome(category);
}

function addhome(category) {
  if (category != 'homepage') {
    AddMenuItem('<HR>', '', '');
    AddMenuItem('<CENTER>Main&nbsp;Page</CENTER>', 'index.html', '');
    AddMenuItem('<CENTER>Guestbook</CENTER>', 'guestbook/index.html', '');
  }
}

function addsettingmenu() {
  AddMenu('setting');
  AddMenuItem(
    '-&nbsp;Start&nbsp;with&nbsp;new&nbsp;settings&nbsp;-',
    '',
    'TITLE'
  );
  //	AddMenuItem("Random&nbsp;setting", "", "settingrandom()");
  AddMenuItem(
    'Billiard&nbsp;table&nbsp;(no&nbsp;force,&nbsp;damping)',
    '',
    'settingnoforce()'
  );
  AddMenuItem(
    'Newtons&nbsp;pendulum&nbsp;(no&nbsp;force)',
    '',
    'settingnewtonpendulum()'
  );
  AddMenuItem(
    'Earth&nbsp;(Gravity&nbsp;downwards)',
    '',
    'settinggravitydown()'
  );
  AddMenuItem(
    'Binary&nbsp;Stars&nbsp;(Planetary&nbsp;Gravity)',
    '',
    'settingsolarsystem()'
  );
  AddMenuItem(
    'Three&nbsp;body&nbsp;system&nbsp;(Planetary&nbsp;Gravity)',
    '',
    'settingthreebody()'
  );
  AddMenuItem(
    'Menu&nbsp;Style&nbsp;(Invisible&nbsp;Springs,&nbsp;damping)',
    '',
    'settingmenustyle(0)'
  );
  //AddMenuItem("more...",""aboutballmenu.html","");
  AddMenuItem('<HR>', '', '');
  AddMenuItem('How&nbsp;does&nbsp;this&nbsp;work?', 'aboutballmenu.html', '');
  AddMenuItem('Start/Stop&nbsp;animation', '', 'toggleanimation()');
  if (TraceMax > 0) AddMenuItem('Start/Stop&nbsp;trace', '', 'toggletrace()');
}

//</SCRIPT>
