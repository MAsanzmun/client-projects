import { ClientProjectsPage } from './app.po';

describe('client-projects App', function() {
  let page: ClientProjectsPage;

  beforeEach(() => {
    page = new ClientProjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
