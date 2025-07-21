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
      AddBall('weird1', 'Weird1');
      AddBall('weird2', 'Weird3');
      AddBall('weird3', 'Weird5');
      AddBall('weird5', 'Weird4');
      AddBall('weird4', 'Weird2');
      break;
    case 'weird1':
      AddBall('weird1', 'Weird1');
      AddBall('weird3', 'Weird3');
      AddBall('weird5', 'Weird5');
      AddBall('weird4', 'Weird4');
      AddBall('weird2', 'Weird2');
      break;
    case 'weird2':
      AddBall('weird3', 'Weird3');
      AddBall('weird1', 'Weird1');
      AddBall('weird5', 'Weird5');
      AddBall('weird4', 'Weird4');
      AddBall('weird2', 'Weird2');
      break;
    case 'weird3':
      AddBall('weird5', 'Weird5');
      AddBall('weird1', 'Weird1');
      AddBall('weird4', 'Weird4');
      AddBall('weird3', 'Weird3');
      AddBall('weird2', 'Weird2');
      break;
    case 'weird4':
      AddBall('weird4', 'Weird4');
      AddBall('weird1', 'Weird1');
      AddBall('weird5', 'Weird5');
      AddBall('weird3', 'Weird3');
      AddBall('weird2', 'Weird2');
      break;
    case 'weird5':
      AddBall('weird2', 'Weird2');
      AddBall('weird1', 'Weird1');
      AddBall('weird5', 'Weird5');
      AddBall('weird3', 'Weird3');
      AddBall('weird4', 'Weird4');
      break;
  }

  addstandardmenus(category);
  addsettingmenu();

  // now document.write
  preparedocument();
}

function addstandardmenus(category) {
  AddMenu('weird1');
  AddMenuItem('-&nbsp;Weird1&nbsp;-', '', 'TITLE');
  // AddMenuItem("<CENTER><EM><B>Andi</B></EM></CENTER>","","");
  AddMenuItem('Weird2', 'aboutme.html', '');
  AddMenuItem('Weird3', 'curriculumvitae.html', '');
  AddMenuItem('Weird4', 'contactme.html', '');
  //AddMenuItem("Guestbook","guestbook.html","");
  AddMenuItem('Werid', 'links.html', '');
  addhome(category);

  AddMenu('weird2');
  //AddMenuItem('<CENTER><SPAN class="menutitle">- Physics -</SPAN></CENTER>',"","");
  AddMenuItem('-&nbsp;Physics&nbsp;-', '', 'TITLE');
  AddMenuItem('Physics', 'physics.html', '');
  AddMenuItem('Quark&nbsp;Gluon&nbsp;Plasma', 'qgp.html', '');
  AddMenuItem('My&nbsp;current&nbsp;research', 'currentresearch.html', '');
  AddMenuItem('Data&nbsp;tables', 'datatables.html', '');
  AddMenuItem('Diploma&nbsp;thesis', 'diplomathesis.html', '');
  addhome(category);

  AddMenu('weird3');
  AddMenuItem('-&nbsp;Music&nbsp;-', '', 'TITLE');
  AddMenuItem('Music', 'music.html', '');
  AddMenuItem('Performances', 'performances.html', '');
  AddMenuItem('Compositions', 'compositions.html', '');
  //AddMenuItem("","","");
  addhome(category);

  AddMenu('weird5');
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

  AddMenu('weird4');
  AddMenuItem('-&nbsp;Weird2&nbsp;-', '', 'TITLE');
  AddMenuItem('Weird2', 'programming.html', '');
  AddMenuItem('Weird3&nbsp;BallMenu', 'aboutballmenu.html', '');
  AddMenuItem('Weird1&nbsp;Settings...', '', 'showSettingMenu()');
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
