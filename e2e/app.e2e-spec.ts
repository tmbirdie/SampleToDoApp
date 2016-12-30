import { TodoAppTmathewsPage } from './app.po';

describe('todo-app-tmathews App', function() {
  let page: TodoAppTmathewsPage;

  beforeEach(() => {
    page = new TodoAppTmathewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
