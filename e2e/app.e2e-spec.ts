import { Angular2ProPage } from './app.po';

describe('angular2-pro App', function() {
  let page: Angular2ProPage;

  beforeEach(() => {
    page = new Angular2ProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
