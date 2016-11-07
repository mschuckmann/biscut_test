import { BiscutPage } from './app.po';

describe('biscut App', function() {
  let page: BiscutPage;

  beforeEach(() => {
    page = new BiscutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
