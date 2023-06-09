
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
    cy.xpath("(//a[@href='/virtual-internship-experience'])[2]").scrollIntoView()
    cy.xpath("(//a[@href='/virtual-internship-experience'])[2]").click()
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
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").should('be.visible')
    // Then user click on navbar button
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").click()
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

  it('TC 10 - NEGATIVE - Login with the correct email and wrong password', function()  {
    // TC 10 objective is to verify that user can't login with the correct email and wrong password.
    // Given user opened Rakamin Staging Website
    cy.visit("https://web-staging.rakamin.com/")
    // Then user verify on navbar button
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").should('be.visible')
    // Then user click on navbar button
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").click()
    // Then user verify on login button
    cy.xpath("(//button[contains(text(),'Login')])[2]").should('be.visible')
    // Then user click on login button
    cy.xpath("(//button[contains(text(),'Login')])[2]").click()
    // Then user set email
    cy.xpath("//*[@data-cy='login-email-text-field']").type("abcd@gmail.com")
    // Then user set password
    cy.xpath("//*[@data-cy='login-password-text-field']").type("pandabearing")
    // Then user click submit button
    cy.xpath("//*[@data-cy='login-submit-button']").click()
    // Then user verify wording to inform wrong password
    cy.xpath("//*[contains(text(), 'Kata sandi anda salah')]").should('be.visible')
  })

  it('TC 11 - NEGATIVE - Login with the wrong email and wrong password', function()  {
    // TC 11 objective is to verify that user can't login with the correct email and wrong password.
    // Given user opened Rakamin Staging Website
    cy.visit("https://web-staging.rakamin.com/")
    // Then user verify on navbar button
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").should('be.visible')
    // Then user click on navbar button
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").click()
    // Then user verify on login button
    cy.xpath("(//button[contains(text(),'Login')])[2]").should('be.visible')
    // Then user click on login button
    cy.xpath("(//button[contains(text(),'Login')])[2]").click()
    // Then user set email
    cy.xpath("//*[@data-cy='login-email-text-field']").type("abcdefgh@gmail.com")
    // Then user set password
    cy.xpath("//*[@data-cy='login-password-text-field']").type("pandabearing")
    // Then user click submit button
    cy.xpath("//*[@data-cy='login-submit-button']").click()
    // Then user verify wording to inform wrong password
    cy.xpath("//*[contains(text(), 'Email ini belum terdaftar sebagai akun di Rakamin Academy.')]").should('be.visible')
  })

  it('TC 12 - POSITIVE - Register with correct email password and name ', function()  {
    // TC 12 objective is to verify that user can register with correct name, email and password.
    // Given user opened Rakamin Staging Website
    cy.visit("https://web-staging.rakamin.com/")
    // Then user verify on navbar button
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").should('be.visible')
    // Then user click on navbar button
    cy.xpath("//img[contains(@src,'/assets/hamburger.d750d25a.svg')]").click()
    // Then user verify on register button
    cy.xpath("(//button[contains(text(),'Register')])[2]").should('be.visible')
    // Then user click on register button
    cy.xpath("(//button[contains(text(),'Register')])[2]").click()
    // Then user set full name
    cy.xpath("//*[@data-cy='full-name-text-field']").type("Zenith")
    // Then user set email
    cy.xpath("//*[@data-cy='login-email-text-field']").type("Zenith9@gmail.com")
    // Then user set password
    cy.xpath("//*[@data-cy='login-password-text-field']").type("Zenith123")
    // Then user click on daftar
    cy.xpath("//*[@data-cy='login-submit-button']").click()
    // Then user set user's age
    cy.xpath("//*[@placeholder='Tuliskan umur anda']").type("31")
    // Then user select last education
    cy.xpath("//*[@data-cy='SMA-radio-button']").click()
    // Then user click on education field
    cy.xpath("//*[@placeholder='Cari bidang pendidikan anda']").click()
    // Then user click on desain
    cy.xpath("//*[@data-cy='Ilmu Sosial-education-option']").click()
    // Then user click on dropdown
    cy.xpath("//*[@data-cy='job-experience-dropdown']").click()
    // Then user select 1 year
    cy.xpath("//*[@data-cy='1-job-experience-option']").click()
    // Then user search job field
    cy.xpath("//*[@placeholder='Cari bidang pekerjaan anda']").click()
    // Then user click on bisnis dan pemasaran
    cy.xpath("//*[@data-cy='Bisnis dan Pemasaran-jobfield-option']").click()
    // Then user select on preferred job field
    cy.xpath("//*[@data-cy='Engineering-radio-button']").click()
    // Then user submit
    cy.xpath("//*[@data-cy='submit-button']").click()
    // Then user click on verify later
    cy.xpath("//*[@data-cy='verify-later']").click()
    // Then user verify if they are registered by checking current URL
    cy.url().should('eq','https://web-staging.rakamin.com/dashboard/courses/enrolled')
  })
})
