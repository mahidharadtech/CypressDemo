import BasePage from "./basePage";

export class HomePage extends BasePage {
	constructor() {
		super();
	}

	get homeButton() {
		return cy.get('[class*= "region-navigation__wrapper-left"]');
	}
	get viewAttractions() {
		return cy.get('[class*="pass-product-tile-dest__content-btn"]');

	}
	get productTitle() {
		return cy.get('[class*="product-title"]');
	}
	get contentSummary() {
		return cy.get('[class*="content__subtitle"]');
	}
	get buyWidgetDropDown() {
		return cy.wait(500).get('#buy > div.lc-products-list__wrapper > div > select')

	}
	get itemPrice() {
		return cy.get('[class*="lc-cart__item-price"]');
	}
	get adultPriceSelection() {

		return cy.get('[class*="lc-cart__item-amount-plus"]');

	}
	get priceDecreaseSelection() {
		return cy.get('[class*="lc-cart__item-amount-minus"]');
	}
	get discountTotalPrice() {
		return cy.get('[class*="lc-cart__prices-discount"]');
	}
	get regularTotalPrice() {
		return cy.get('[class*="lc-cart__prices-total"]');
	}
	get continueButton() {
		return cy.get('[class*="lc-cart__purchase"]');
	}
	priceSelection(ref) {
		ref.find('cartItemIncrease').invoke('attr', 'text')
			.should('contain', 'Adult')
	}
	navigateToallInclusive() {
		this.homeButton.click({ force: true })
		
		this.viewAttractions.should((list) => {
			list[0].click();

		})
		this.productTitle.should('have.text', '\n      All-Inclusive Pass\n    ')
		this.contentSummary.should('have.text',
			'Visit as many Boston attractions as you wish over 1, 2, 3, 5 or 7 consecutive days.')

	}

	chooseYourPass() {
		cy.wait(5000)
		this.buyWidgetDropDown.select('Bos_Prod_Go_d2', { force: true });
		this.adultPriceSelection.each(($el, index, $list) => {
			cy.wait(1500).wrap($el).click()
		})
		this.discountTotalPrice.should('contain', 'Sale discount');
		this.discountTotalPrice.should('contain', '-$');
		this.regularTotalPrice.should('contain', 'Order Total');
		this.regularTotalPrice.should('contain', '$');
		this.continueButton.click();
	}
}

export default HomePage;
