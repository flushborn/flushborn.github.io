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
  startsetting = settingmenustyle;

  // order of menuitems is important
  switch (category) {
    case 'homepage':
      TraceMax = 15;
      startsetting = settingrandom;
      AddBall('andi', 'Weird1');
      AddBall('plasma', 'Weird3');
      AddBall('piano', 'Weird5');
      AddBall('qiqihar', 'Weird4');
      AddBall('computer', 'Weird2');
      break;
    case 'andi':
      AddBall('andi', 'Weird1');
      AddBall('plasma', 'Weird3');
      AddBall('piano', 'Weird5');
      AddBall('qiqihar', 'Weird4');
      AddBall('computer', 'Weird2');
      break;
    case 'physics':
      AddBall('plasma', 'Weird3');
      AddBall('andi', 'Weird1');
      AddBall('piano', 'Weird5');
      AddBall('qiqihar', 'Weird4');
      AddBall('computer', 'Weird2');
      break;
    case 'music':
      AddBall('piano', 'Weird5');
      AddBall('andi', 'Weird1');
      AddBall('qiqihar', 'Weird4');
      AddBall('plasma', 'Weird3');
      AddBall('computer', 'Weird2');
      break;
    case 'travelling':
      AddBall('qiqihar', 'Weird4');
      AddBall('andi', 'Weird1');
      AddBall('piano', 'Weird5');
      AddBall('plasma', 'Weird3');
      AddBall('computer', 'Weird2');
      break;
    case 'programming':
      AddBall('computer', 'Weird2');
      AddBall('andi', 'Weird1');
      AddBall('piano', 'Weird5');
      AddBall('plasma', 'Weird3');
      AddBall('qiqihar', 'Weird4');
      break;
  }

  addstandardmenus(category);
  addsettingmenu();

  // now document.write
  preparedocument();
}

function addstandardmenus(category) {
  AddMenu('andi');
  AddMenuItem('-&nbsp;Weird1&nbsp;-', '', 'TITLE');
  // AddMenuItem("<CENTER><EM><B>Andi</B></EM></CENTER>","","");
  AddMenuItem('Weird2', 'aboutme.html', '');
  AddMenuItem('Weird3', 'curriculumvitae.html', '');
  AddMenuItem('Weird4', 'contactme.html', '');
  //AddMenuItem("Guestbook","guestbook.html","");
  AddMenuItem('Werid', 'links.html', '');
  addhome(category);

  AddMenu('plasma');
  //AddMenuItem('<CENTER><SPAN class="menutitle">- Physics -</SPAN></CENTER>',"","");
  AddMenuItem('-&nbsp;Physics&nbsp;-', '', 'TITLE');
  AddMenuItem('Physics', 'physics.html', '');
  AddMenuItem('Quark&nbsp;Gluon&nbsp;Plasma', 'qgp.html', '');
  AddMenuItem('My&nbsp;current&nbsp;research', 'currentresearch.html', '');
  AddMenuItem('Data&nbsp;tables', 'datatables.html', '');
  AddMenuItem('Diploma&nbsp;thesis', 'diplomathesis.html', '');
  addhome(category);

  AddMenu('piano');
  AddMenuItem('-&nbsp;Music&nbsp;-', '', 'TITLE');
  AddMenuItem('Music', 'music.html', '');
  AddMenuItem('Performances', 'performances.html', '');
  AddMenuItem('Compositions', 'compositions.html', '');
  //AddMenuItem("","","");
  addhome(category);

  AddMenu('qiqihar');
  AddMenuItem('-&nbsp;Travelling&nbsp;-', '', 'TITLE');
  AddMenuItem('Travelling', 'travelling.html', '');
  AddMenuItem('Wolfersdorf', 'wolfersdorfpics.html', '');
  AddMenuItem('Impressions&nbsp;of&nbsp;China', 'chinapics.html', '');
  AddMenuItem(
    'Chinazivis&nbsp;(extern)',
    'http://quark.itp.tuwien.ac.at/~ipp/chinazivis/" target="_blank',
    ''
  );
  addhome(category);

  AddMenu('computer');
  AddMenuItem('-&nbsp;Programming&nbsp;-', '', 'TITLE');
  AddMenuItem('Programming', 'programming.html', '');
  AddMenuItem('Andis&nbsp;BallMenu', 'aboutballmenu.html', '');
  AddMenuItem('Ball&nbsp;Settings...', '', 'showSettingMenu()');
  addhome(category);
}

function addhome(category) {
  if (category != 'homepage') {
    AddMenuItem('<HR>', '', '');
    AddMenuItem('<CENTER>Main&nbsp;Page</CENTER>', 'index.html', '');
    AddMenuItem('<CENTER>Guestbook</CENTER>', 'guestbook.html', '');
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
