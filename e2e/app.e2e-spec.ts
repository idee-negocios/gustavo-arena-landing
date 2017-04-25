import { GustavoArenasLandingPage } from './app.po';

describe('gustavo-arenas-landing App', () => {
  let page: GustavoArenasLandingPage;

  beforeEach(() => {
    page = new GustavoArenasLandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
