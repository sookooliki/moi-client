import { MoiClientPage } from './app.po';

describe('moi-client App', function() {
  let page: MoiClientPage;

  beforeEach(() => {
    page = new MoiClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
