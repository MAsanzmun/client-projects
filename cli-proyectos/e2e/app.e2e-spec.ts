import { CliProyectosPage } from './app.po';

describe('cli-proyectos App', function() {
  let page: CliProyectosPage;

  beforeEach(() => {
    page = new CliProyectosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
