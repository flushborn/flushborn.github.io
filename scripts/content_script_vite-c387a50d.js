async function d() {
  const e = await import('../../../renderContent-9d534bdd.js'),
    o = await import('../../../AppVite-af7ada5f.js'),
    n = e.default,
    t = o.default;
  await n(
    ['assets/AppVite-041b9295.css'],
    'modheader-shadow-root-host-el-id',
    'modhader-tool-root',
    (a) => {
      new t({ target: a });
    }
  );
}
chrome.storage.local.get(
  ['show_side_ball', 'disable_side_ball_domains'],
  async (e) => {
    const o = e.disable_side_ball_domains || [];
    e.show_side_ball === !0 &&
      o.indexOf(window.location.hostname) === -1 &&
      d().catch(console.error);
  }
);
