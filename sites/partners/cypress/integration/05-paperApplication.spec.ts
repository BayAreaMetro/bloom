describe("Paper Application Tests", () => {
  before(() => {
    cy.login()
  })

  after(() => {
    cy.signOut()
  })

  beforeEach(() => {
    cy.visit("/")
    cy.getByTestId("listing-status-cell").eq(1).click()
    cy.getByTestId("addApplicationButton").contains("Add Application").click()
  })

  it("fill paper application form completely", () => {
    cy.fixture("application").then((application) => {
      cy.fillPrimaryApplicant(application)
      cy.fillAlternateContact(application)
      cy.fillHouseholdMember(application)
      cy.fillHouseholdDetails(application)
      cy.fillHouseholdIncome(application)
      cy.fillDemographics(application)
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdMembers(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("submit with no data", () => {
    cy.fixture("emptyApplication").then((application) => {
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("submit different data", () => {
    cy.fixture("partialApplicationA").then((application) => {
      cy.fillMailingAddress(application)
      cy.fillHouseholdIncome(application, ["incomeMonth"])
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("fill only applicant data", () => {
    cy.fixture("applicantOnlyData").then((application) => {
      cy.fillPrimaryApplicant(application, [
        "application.additionalPhoneNumber",
        "application.additionalPhoneNumberType",
        "application.applicant.address.street2",
      ])
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("fill only alternate contact data", () => {
    cy.fixture("alternateContactOnlyData").then((application) => {
      cy.fillAlternateContact(application, ["alternateContact.mailingAddress.street2"])
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("fill only household member data", () => {
    cy.fixture("householdMemberOnlyData").then((application) => {
      cy.fillHouseholdMember(application, [])
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdMembers(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("fill only household detail data", () => {
    cy.fixture("householdDetailsOnlyData").then((application) => {
      cy.fillHouseholdDetails(application, [])
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("fill only household income data", () => {
    cy.fixture("householdIncomeOnlyData").then((application) => {
      cy.fillHouseholdIncome(application, [])
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })

  it("fill only demographic data", () => {
    cy.fixture("demographicsOnlyData").then((application) => {
      cy.fillDemographics(application, [])
      cy.fillTerms(application, true)
      cy.verifyApplicationData(application)
      cy.verifyPrimaryApplicant(application)
      cy.verifyAlternateContact(application)
      cy.verifyHouseholdDetails(application)
      cy.verifyHouseholdIncome(application)
      cy.verifyTerms(application)
    })
  })
})
