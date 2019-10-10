import { getMainMenuItem } from 'testcafe-browser-provider-electron';

fixture ('electron test').page('./index.html');

test('first electron test', async (t) => {
  const menuItem = await getMainMenuItem(['View']);
  console.log(menuItem);
  await t.expect(menuItem.submenu[0].role).eql('reload');
});