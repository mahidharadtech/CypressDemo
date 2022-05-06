import BasePage from "./basePage";

export class ReviewOrderPage extends BasePage {
	constructor() {
		super();
	}

	get contentTitle() {
		return cy.get('[class*="content__title"]');
		// Review your order
	}

	get Title() {
		return cy.get('[class*="block-title"]');
		// When will you be visiting Boston?
	}

	get selectRandomDate() {
		return cy.get('[class="ui-state-default"]');
	}

	get datePickerElement() {
		return cy.get('[class*="travel-date--calendar travel-date-element hasDatepicker"]');
	}
	get button() {
		return cy.get('[class*="button active"]').click();
	}

	get deliveryEmailAddressTitle() {
		return cy.get('[class*="heading__wrapper"]');
	}

	get emailIdInput() {
		return cy.get('[name*="email"]');
	}
	get continueButton() {
		return cy.get('[data-testid="continueToPayment"]');

	}

	

	checkOrderReview(){

		let d = new Date();
    const offset = d.getTimezoneOffset();
    d = new Date(d.getTime() - (offset*60*1000));
    let myDate = d.toISOString().split('T')[0];


		this.contentTitle.should('contain', 'Review your order');
		this.Title.should('contain', 'When will you be visiting Boston?');
		this.datePickerElement.click();
		cy.get('[class*="ui-datepicker-today"]').click();
		// cy.get('[data-date='+myDate+']', { force: true }).click()

		// this.selectRandomDate.first().click();
		this.continueButton.first().click();
		this.deliveryEmailAddressTitle.should('contain', 'Delivery email address')
		this.emailIdInput.type('TestEmail@mailinator.com');

	}
}
export default ReviewOrderPage;
