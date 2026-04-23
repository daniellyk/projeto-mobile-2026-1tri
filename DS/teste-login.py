import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException

def test_fluxo_login_web():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 20)
    
    try:
        driver.get("http://localhost:8081")

        email_xpath = "//input[@placeholder='Email'] | //*[@id='input-email']"
        for _ in range(10):
            try:
                campo_email = wait.until(EC.visibility_of_element_located((By.XPATH, email_xpath)))
                campo_email.clear()
                campo_email.send_keys("matheusdivonico@gmail.com")
                break
            except StaleElementReferenceException:
                time.sleep(0.5)

        senha_xpath = "//input[@placeholder='Senha'] | //*[@id='input-senha']"
        for _ in range(10):
            try:
                campo_senha = driver.find_element(By.XPATH, senha_xpath)
                campo_senha.clear()
                campo_senha.send_keys("123456")
                break
            except StaleElementReferenceException:
                time.sleep(0.5)

        botao_xpath = "//*[contains(text(), 'entrar')] | //*[contains(text(), 'ENTRAR')] | //*[@id='botao-entrar']"
        for _ in range(10):
            try:
                elemento_botao = wait.until(EC.element_to_be_clickable((By.XPATH, botao_xpath)))
                driver.execute_script("arguments[0].click();", elemento_botao)
                break
            except StaleElementReferenceException:
                time.sleep(0.5)

        validacao_xpath = "//*[contains(text(), 'Agendamentos')] | //*[contains(text(), 'MedClinic')] | //*[contains(text(), 'TUDO PRONTO')]"
        resultado = wait.until(EC.presence_of_element_located((By.XPATH, validacao_xpath)))
        
        assert resultado.is_displayed()

    finally:
        driver.quit()
