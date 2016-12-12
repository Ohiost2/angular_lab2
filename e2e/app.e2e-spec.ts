<<<<<<< HEAD
import { AngularLab2Page } from './app.po';

describe('angular-lab2 App', function() {
  let page: AngularLab2Page;

  beforeEach(() => {
    page = new AngularLab2Page();
=======
import { Anglular2Lab2Page } from './app.po';

describe('anglular2-lab2 App', function() {
  let page: Anglular2Lab2Page;

  beforeEach(() => {
    page = new Anglular2Lab2Page();
>>>>>>> 422a8dea89f444a0f74eda29af0e90fcf6273b65
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
