import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class AngularLab2Page {
=======
export class Anglular2Lab2Page {
>>>>>>> 422a8dea89f444a0f74eda29af0e90fcf6273b65
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
