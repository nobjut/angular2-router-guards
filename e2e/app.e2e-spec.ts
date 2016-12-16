import { Angular2RouterGuardsPage } from './app.po';

describe('angular2-router-guards App', function() {
  let page: Angular2RouterGuardsPage;

  beforeEach(() => {
    page = new Angular2RouterGuardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
