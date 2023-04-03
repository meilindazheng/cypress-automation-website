
describe('Test Run Rakamin Staging Web Page', function()  {

  it('TC 01 - POSITIVE -  Open and Verify Title', function()  {
    Cypress.config('defaultCommandTimeout', 10000);
    // TC 01 objective is to verify web-staging URL is opened successfully and verify its title.
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
    cy.title().should('eq','Rakamin Academy')
  })

  it('TC 02 - POSITIVE - Click Question Mark and Verify Directed URL', function()  {
    // TC 02 objective is to verify question mark button and verify its current URL direction.
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
    cy.get('a[href="/career-path"]').click()
    cy.url().should('eq','https://web-staging.rakamin.com/career-path')
  })

  it('TC 03 - POSITIVE - Insert Kenali Minat Form ', function()  {
    // TC 03 objective is to verify element and inserted data correctly to the Kenali Minat Form
    cy.visit("https://rakamin.typeform.com/kenaliminatmu?typeform-source=web-staging.rakamin.com")
    //Given user verify on Start button
    cy.xpath("//*[contains(text(), 'Start')]").should("be.visible")
    // Then user click on Start button
    cy.xpath("//button[@class='ButtonWrapper-sc-__sc-1qu8p4z-0 gLBQPw']").click()
    // Then user insert name with input correctly.
    cy.xpath("//*[@placeholder='Type your answer here...']").type("Meilinda{enter}")
    // Then user select current job and directly directed to next page
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Mahasiswa Aktif')]").click()
    // Then user insert age correctly with Integer
    cy.xpath("(//*[@placeholder='Type your answer here...'])[2]").type("20{enter}")
    // Then user click on dropdown icon to select province name
    cy.xpath("//*[@class='IconWrapperRoot-sc-__sc-1w8q90m-4 dGifJN']").click()
    // Then user click on their own province
    cy.xpath("//*[@data-qa='option-2-2-readable-element']").click()
    // Then user inserted city name
    cy.xpath("(//*[@placeholder='Type your answer here...'])[2]").type("Denpasar{enter}")
    // Then user hit enter
    cy.xpath("(//button[@class='ButtonWrapper-sc-__sc-1qu8p4z-0 imnVAi'])[2]").click()
    // Then user give rate based on preference about marketing
    cy.xpath("(//*[@class='Wrapper-sc-__sc-4gb4qd-0 jVZeSQ'])[4]").click()
    // give extra waiting time
    cy.wait(5000)
    // Then user give rate based on preference about data analytic
    cy.xpath("(//*[@class='Wrapper-sc-__sc-4gb4qd-0 jVZeSQ'])[4]").click()
    // give extra waiting time
    cy.wait(5000)
    // Then user give rate based on preference about Designing Application
    cy.xpath("(//*[@class='Wrapper-sc-__sc-4gb4qd-0 jVZeSQ'])[7]").click()
    // give extra waiting time
    cy.wait(5000)
    // Then user give rate based on preference about Innovating Digital Product
    cy.xpath("(//*[@class='Wrapper-sc-__sc-4gb4qd-0 jVZeSQ'])[5]").click()
    // give extra waiting time
    cy.wait(5000)
    // Then user give rate based on preference about coding
    cy.xpath("(//*[@class='Wrapper-sc-__sc-4gb4qd-0 jVZeSQ'])[6]").click()
    // give extra waiting time
    cy.wait(5000)
    // Then user give rate based on preference about working environment
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Banyak melakukan analisis dan menggunakan logika berpikir.')]").click()
    // Then user give rate based on preference about working style
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Menggunakan kreativitas dan berpikir alternatif.')]").click()
    // Then user give rate based on preference about things mastered most
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Mengembangkan ide dan solusi kreatif.')]").click()
    // Then user give rate based on preference about things mastered most
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Mengkomunikasikan informasi secara lisan.')]").click()
    // Then user give rate based on preference about things mastered most
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Menyediakan dokumentasi, instruksi, gambaran atau spesifikasi pekerjaan.')]").click()
    // Then user give rate based on preference about things mastered most
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Menerjemahkan dan memafaatkan informasi kepada orang lain.')]").click()
    // Then user insert phone number
    cy.xpath("//*[@placeholder='0812-345-678']").type("08123456789{enter}")
    // Then user confirm phone number
    cy.xpath("(//*[contains(text(), 'Yes')])[1]").click()
    // Then user insert email
    cy.xpath("//*[@placeholder='name@example.com']").type("jenius@gmail.com{enter}")
    // Then user give rate based on preference about from where user know Rakamin
    cy.xpath("//*[@class='TextWrapper-sc-__sc-1f8vz90-0 juHQah' and contains(text(),'Instagram Ads')]").click()
    // Then user give rate based on preference about joinning class
    cy.xpath("(//*[@class='Distribute-sc-__sc-5km20m-0 VerticalDistribute-sc-__sc-di826r-1 kzcRuG hjdoid'])[5]").click()
    cy.xpath("(//*[contains(text(), 'Skip')])[1]").click()
    cy.xpath("//*[@data-qa='submit-button deep-purple-submit-button']").click()
    // Then user verify all data is loaded and greeting message with their name is appear
    cy.xpath("//*[contains(text(), 'Hai Meilinda!')]").should("be.visible")
  })

  it('TC 04 - POSITIVE - Verify That 12 Cards is Appeared in Web Page Catalog', function()  {
    // TC 02 objective is to verify that 12 Cards is appeared in Web Page Catalog
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
    cy.scrollTo(0,500)
    cy.xpath("//*[@class='sc-gtIISA eUTpXu card-body-container']").should('have.length',12)
  })

  it('TC 05 - NEGATIVE - Verify that user cannot register to an event without login', function()  {
    // TC 02 objective is to verify that login is mandatory for every event registration
    // Zoom out the scale of the desktop
    cy.viewport(1200, 800)
    // Given user opened Rakamin Website
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
    // Then user scroll to event offered by Rakamin
    cy.scrollTo(0,500)
    // Then user clicked on the first event in the catalog
    cy.xpath("(//*[@class='sc-gtIISA eUTpXu card-body-container'])[1]").click()
    cy.wait(3000)
    // Scroll to view
    cy.xpath("//*[@class='sc-fGFwAa hFBocZ sc-haKnfc fxuGp' and contains(text(),'Daftar sekarang')]").scrollIntoView()
    // Then user click on register
    cy.xpath("//*[@class='sc-fGFwAa hFBocZ sc-haKnfc fxuGp' and contains(text(),'Daftar sekarang')]").click()
    // Verify that wording regarding login is mandatory is provided.
    cy.xpath("//*[contains(text(), 'Login terlebih dahulu')]").should("be.visible")
    cy.xpath("//*[contains(text(), 'Kamu harus login sebelum dapat mengakses Virtual Internship')]").should("be.visible")
    // Verify on both login and cancel button is provided
    // Verify on button batal
    cy.xpath("//button[contains(text(),'Batal')]").should('be.visible')
    // Verify on button login
    cy.xpath("(//button[contains(text(),'Login')])[2]").should('be.visible')

  })

  it('TC 06 - POSITIVE - Verify That VIP Access Button is Functionally Worked', function()  {
    // TC 06 objective is to verify VIP Access Button is directing to expected pages
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
    // Then user is scrolled to expected button
    cy.xpath("//*[@class='sc-fGFwAa dJLXkd' and contains(text(),'Selebihnya Tentang VIP Access')]").scrollIntoView()
    // Then user is clicking to expected button
    cy.xpath("//*[@class='sc-fGFwAa dJLXkd' and contains(text(),'Selebihnya Tentang VIP Access')]").click()
    // Then user is verifying the current URL is expected 
    cy.url().should('eq','https://web-staging.rakamin.com/virtual-internship-experience/about-vip-access')
    // Then user verify the wording is provided for associated pages
    cy.xpath("//*[contains(text(), 'Tentang VIP Access')]").should("be.visible")
    cy.xpath("//*[contains(text(), 'VIP Access adalah layanan PLUS program Magang Virtual Rakamin dengan fasilitas tambahan berupa')]").should("be.visible")
  })

  it('TC 07 - POSITIVE - Verify That Footer Link is Well Directed', function()  {
    // TC 07 objective is to verify all link is directed to the expected link
    // Given user directed to main page of VIX
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
    // Then user try to click on Explore Course Link
    cy.xpath("//a[@href='/courses']").scrollIntoView()
    cy.xpath("//a[@href='/courses']").click()
    // Then user verify the associated link
    cy.url().should('eq','https://web-staging.rakamin.com/courses')
    // Then user go back to the first link
    cy.go('back')

    // Then user try to click on career profiler
    cy.xpath("//a[@href='/career-profiler']").scrollIntoView()
    cy.xpath("//a[@href='/career-profiler']").click()
    // Then user verify the associated link
    cy.url().should('eq','https://web-staging.rakamin.com/career-profiler')
    // Then user go back to the first link
    cy.go('back')

    // Then user try to click on vix event
    cy.xpath("//a[@href='/virtual-internship-experience']").scrollIntoView()
    cy.xpath("//a[@href='/virtual-internship-experience']").click()
    // Then user verify the associated link
    cy.url().should('eq','https://web-staging.rakamin.com/virtual-internship-experience')
    // Then user go back to the first link
    cy.go('back')

    // Then user try to click on rakamin tutor
    cy.xpath("//a[@href='/rakamin-tutor']").scrollIntoView()
    cy.xpath("//a[@href='/rakamin-tutor']").click()
    // Then user verify the associated link
    cy.url().should('eq','https://web-staging.rakamin.com/rakamin-tutor')
    // Then user go back to the first link
    cy.go('back')

    // Then user try to click on refund policies
    cy.xpath("//a[@href='/refund-policies']").scrollIntoView()
    cy.xpath("//a[@href='/refund-policies']").click()
    // Then user verify the associated link
    cy.url().should('eq','https://web-staging.rakamin.com/refund-policies')
    // Then user go back to the first link
    cy.go('back')

    // Then user try to click on Explore Course Link
    cy.xpath("//a[@href='/faq']").scrollIntoView()
    cy.xpath("//a[@href='/faq']").click()
    // Then user verify the associated link
    cy.url().should('eq','https://web-staging.rakamin.com/faq')
    // Then user go back to the first link
    cy.go('back')

    // Then user try to click on privacy policy
    cy.xpath("//a[@href='/privacy-policy']").scrollIntoView()
    cy.xpath("//a[@href='/privacy-policy']").click()
    // Then user verify the associated link
    cy.url().should('eq','https://web-staging.rakamin.com/privacy-policy')
    // Then user go back to the first link
    cy.go('back')

  })

    it('TC 08 - POSITIVE - Verify Social Media Icon is Well Directed', function()  {
      cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/explore")
      // Then user try to click on Social Media Link
      cy.xpath("//a[@href='https://www.instagram.com/rakaminacademy/']").scrollIntoView()
      cy.xpath("//a[@href='https://www.instagram.com/rakaminacademy/']").click()
      cy.wait(5000)
      // Then user verify the associated link
      cy.url().should('eq','https://www.instagram.com/rakaminacademy/')
      // Then user go back to the first link
      cy.go('back')

      cy.xpath("//a[@href='https://www.linkedin.com/company/rakaminacademy/']").scrollIntoView()
      cy.xpath("//a[@href='https://www.linkedin.com/company/rakaminacademy/']").click()
      cy.wait(5000)
      // Then user verify the associated link
      cy.url().should('eq','https://www.linkedin.com/company/rakaminacademy/')
      // Then user go back to the first link
      cy.go('back')

      
  })

  it('TC 09 - POSITIVE - Login with the correct email and password', function()  {
    // TC 09 objective is to verify that user can login with the correct email and password.
    // Given user opened Rakamin Staging Website
    cy.visit("https://web-staging.rakamin.com/")
    // Then user verify on navbar button
    cy.xpath("//*[@class='sc-iAolhz dFOiqC']").should('be.visible')
    // Then user click on navbar button
    cy.xpath("//*[@class='sc-iAolhz dFOiqC']").click()
    // Then user verify on login button
    cy.xpath("(//button[contains(text(),'Login')])[2]").should('be.visible')
    // Then user click on login button
    cy.xpath("(//button[contains(text(),'Login')])[2]").click()
    // Then user set email
    cy.xpath("//*[@data-cy='login-email-text-field']").type("abcd@gmail.com")
    // Then user set password
    cy.xpath("//*[@data-cy='login-password-text-field']").type("pandabear")
    // Then user click submit button
    cy.xpath("//*[@data-cy='login-submit-button']").click()
    // Then user verify on navbar button
    cy.xpath("//*[@class='sc-iAolhz dFOiqC']").should('be.visible')
    // Then user click on navbar button
    cy.xpath("//*[@class='sc-iAolhz dFOiqC']").click()
    // Then user verify he/she already login successfully
    cy.xpath("//*[contains(text(), 'Panda')]").should('be.visible')
  })
})
