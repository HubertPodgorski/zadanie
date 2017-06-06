import { ZadaniePage } from './app.po';

describe('zadanie App', () => {
  let page: ZadaniePage;

  beforeEach(() => {
    page = new ZadaniePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
