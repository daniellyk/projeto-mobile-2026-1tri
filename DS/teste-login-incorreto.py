import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException

def test_login_senha_incorreta():
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
                campo_email.send_keys("usuario@teste.com")
                break
            except StaleElementReferenceException:
                time.sleep(0.5)

        senha_xpath = "//input[@placeholder='Senha'] | //*[@id='input-senha']"
        for _ in range(10):
            try:
                campo_senha = driver.find_element(By.XPATH, senha_xpath)
                campo_senha.clear()
                campo_senha.send_keys("senha_errada_123")
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

        # VALIDAÇÃO NA TELA (Igual ao de campos vazios)
        # Substituímos o switch_to.alert por busca de elemento de texto
        erro_xpath = "//*[contains(text(), 'credenciais inválidas')]"
        mensagem_erro = wait.until(EC.presence_of_element_located((By.XPATH, erro_xpath)))
        
        assert mensagem_erro.is_displayed()
        print("Sucesso: O sistema barrou a senha incorreta e exibiu a mensagem 'credenciais inválidas' na tela.")
        
        time.sleep(2)
        driver.save_screenshot("login_senha_incorreta_sucesso.png")

    except Exception as e:
        driver.save_screenshot("erro_teste_senha_incorreta.png")
        raise e

    finally:
        driver.quit()

if __name__ == "__main__":
    test_login_senha_incorreta()