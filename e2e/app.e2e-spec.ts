import { KaytvblogPage } from './app.po';

describe('kaytvblog App', () => {
  let page: KaytvblogPage;

  beforeEach(() => {
    page = new KaytvblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
