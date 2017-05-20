import { Jukebot2Page } from './app.po';

describe('jukebot2 App', () => {
  let page: Jukebot2Page;

  beforeEach(() => {
    page = new Jukebot2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
