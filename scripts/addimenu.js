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
  SHOWMENU = true;
  HIDEMENU = false;

  dirgif = './images/balls/';

  startsetting = settingmenustyle;

  // order of menuitems is important
  switch (category) {
    case 'homepage':
      TraceMax = 15;
      startsetting = settingrandom;
      AddBall('weird1', 'Weird1');
      AddBall('weird2', 'Weird2');
      AddBall('weird3', 'Weird3');
      AddBall('home', 'Home');
      AddBall('weird4', 'Weird5');
      break;
    case 'weird1':
      AddBall('weird1', 'Weird1');
      AddBall('weird3', 'Weird3');
      AddBall('home', 'Home');
      AddBall('weird4', 'Weird4');
      AddBall('weird2', 'Weird2');
      break;
    case 'home':
      AddBall('weird3', 'Weird2', 'oracle.html', HIDEMENU);
      AddBall('weird4', 'Weird1', 'guestbook.html', HIDEMENU);
      AddBall('home', 'Home', 'index.html', SHOWMENU);
      AddBall('weird2', 'Weird3', 'oracle.html', HIDEMENU);
      AddBall('weird1', 'Weird4', 'guestbook.html', HIDEMENU);
      break;
    case 'weird3':
      AddBall('home', 'Home');
      AddBall('weird1', 'Weird1');
      AddBall('weird4', 'Weird4');
      AddBall('weird3', 'Weird3');
      AddBall('weird2', 'Weird2');
      break;
    case 'weird4':
      AddBall('weird4', 'Weird4');
      AddBall('weird1', 'Weird1');
      AddBall('home', 'Home');
      AddBall('weird3', 'Weird3');
      AddBall('weird2', 'Weird2');
      break;
    case 'weird2':
      AddBall('weird2', 'Weird2', 'oracle.html', HIDEMENU);
      AddBall('weird1', 'Weird1', 'guestbook.html', HIDEMENU);
      AddBall('home', 'Home', 'index.html', SHOWMENU);
      AddBall('weird3', 'Weird3', 'oracle.html', HIDEMENU);
      AddBall('weird4', 'Weird4', 'guestbook.html', HIDEMENU);

      break;
  }

  addstandardmenus(category);
  addsettingmenu();
  preparedocument();
}

function addstandardmenus(category) {
  AddMenu('weird1');
  AddMenuItem('-&nbsp;Weird1&nbsp;-', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  AddMenuItem('Werid', 'links.html', '');
  addhome(category);

  AddMenu('home');
  AddMenuItem('-&nbsp;Home&nbsp;-', '', 'TITLE');
  AddMenuItem('Settings...', '', 'showSettingMenu()');
  addhome(category);

  AddMenu('weird3');
  AddMenuItem('-&nbsp;Weird3&nbsp;-', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  AddMenuItem('Settings...', '', 'showSettingMenu()');
  addhome(category);

  AddMenu('weird2');
  AddMenuItem('-&nbsp;Weird5&nbsp;-', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  AddMenuItem('Settings...', '', 'showSettingMenu()');
  addhome(category);

  AddMenu('weird4');
  AddMenuItem('-&nbsp;Weird4&nbsp;-', '', 'TITLE');
  AddMenuItem('Oracle', 'oracle.html', '');
  AddMenuItem('GuestBook', 'guestbook.html', '');
  AddMenuItem('Home', 'index.html', '');
  AddMenuItem('Settings...', '', 'showSettingMenu()');
  addhome(category);
}

function addhome(category) {
  if (category != 'homepage') {
    AddMenuItem('<HR>', '', '');
    AddMenuItem('<CENTER>Main&nbsp;Page</CENTER>', 'index.html', '');
    AddMenuItem('<CENTER>Guestbook</CENTER>', 'guestbook.html', '');
    AddMenuItem('<CENTER>Oracle</CENTER>', 'oracle.html', '');
  }
}

function addsettingmenu() {
  AddMenu('setting');
  AddMenuItem(
    '-&nbsp;Start&nbsp;with&nbsp;new&nbsp;settings&nbsp;-',
    '',
    'TITLE'
  );
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
  AddMenuItem('<HR>', '', '');
  AddMenuItem('How&nbsp;does&nbsp;this&nbsp;work?', 'aboutballmenu.html', '');
  AddMenuItem('Start/Stop&nbsp;animation', '', 'toggleanimation()');
  if (TraceMax > 0) AddMenuItem('Start/Stop&nbsp;trace', '', 'toggletrace()');
}
