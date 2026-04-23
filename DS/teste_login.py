import pytest
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
        wait.until(EC.presence_of_element_located((By.XPATH, email_xpath))).send_keys("matheusdivonico@gmail.com")

        senha_xpath = "//input[@placeholder='Senha'] | //*[@id='input-senha']"
        driver.find_element(By.XPATH, senha_xpath).send_keys("123456")

        botao_xpath = "//*[contains(text(), 'entrar')] | //*[contains(text(), 'ENTRAR')] | //*[@id='botao-entrar']"
        
        for _ in range(10):
            try:
                elemento_botao = wait.until(EC.element_to_be_clickable((By.XPATH, botao_xpath)))
                driver.execute_script("arguments[0].click();", elemento_botao)
                break
            except StaleElementReferenceException:
                time.sleep(0.5)

        time.sleep(5)

        wait.until(EC.presence_of_element_located((
            By.XPATH, "//*[contains(text(), 'Agendamentos')] | //*[contains(text(), 'MedClinic')] | //*[contains(text(), 'TUDO PRONTO')]"
        )))
        
        print("\n TESTE PASSOU")

    except Exception as e:
        print(f"\n ERRO: {e}")
        raise e

    finally:
        driver.quit()