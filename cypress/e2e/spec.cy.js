beforeEach(() => {
  cy.open();
});

context('macbook-11', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)
  })
  it('displays full header', () => {
    cy.visible('Books list', 'be.visible');
    cy.visible('Log in', 'be.visible');
  })
}),

context('iphone-x', () => {
  beforeEach(() => {
    cy.viewport(375, 812)
  })
  it('displays full header', () => {
    cy.visible('Books list', 'be.visible');
    cy.visible('Log in', 'be.visible');
  })
}),

describe('test log in', () => {
  it('successfully log in', () => {
    cy.login('#mail', 'bropet@mail.ru', '#pass', '123');
    cy.visible('Добро пожаловать bropet@mail.ru','be.visible');
  }),

  it('test not login with empty mail', () => {
    cy.login('#mail', ' ', '#pass', ' 123');
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  }),

  it("Should not login with empty password", () => {
    cy.login('#mail','bropet@mail.ru','#pass', ' ');
    cy.visible('Неправильая почта или пароль','be.visible');
    });
})

describe('test function app', () => {
  it('successfully add book', () => {
    cy.login('#mail', 'bropet@mail.ru', '#pass', '123');
    cy.clickElement('.p-0');
    cy.write('#title','Гарри Поттер','#description', 'Книга про мальчика-мага, который победил Волан-де-Морта', '#authors', 'Джоан Роулинг');
    cy.clickElement('#fileCover');
    cy.clickElement('#fileBook');
    cy.clickElement('#favorite').check();
    cy.clickElement('form > .ml-2');
    cy.visible('Гарри Поттер','be.visible'); 
  }),

  it('unsuccessfully add book', () => {
    cy.login('#mail', 'bropet@mail.ru', '#pass', '123');
    cy.clickElement('.p-0');
    cy.clickElement('form > .ml-2');
    cy.get('#title').then((elements) => {
    expect(elements[0].checkValidity()).to.be.false
    expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  }),

  it('delete book', () => {
    cy.login('#mail', 'bropet@mail.ru', '#pass', '123');
    cy.visible('Гарри Поттер','be.visible'); 
    cy.clickElement('[href="book/6bb58e5a-39c5-499d-8976-e1092d4cbc41"] > .h-100 > .card-footer > .btn');
    cy.visible('Add to favorite','be.visible'); 
  })
})