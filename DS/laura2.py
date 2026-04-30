import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

URL = "http://localhost:8081"
driver = webdriver.Chrome()

try:
    driver.get(URL)
    wait = WebDriverWait(driver, 10)

    # 1. Preenche o Email
    email_field = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="input-email"]')))
    email_field.send_keys("mateusdivonico@gmail.com")

    # 2. Preenche a Senha
    senha_field = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="input-senha"]')))
    senha_field.send_keys("lindoperfeito")

    # 3. Clica no Botão Entrar
    botao_entrar = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '[data-testid="botao-entrar"]')))
    botao_entrar.click()

    # 4. Verifica se a tela mudou
    # Vamos esperar que a URL mude para incluir '/explore' ou que um elemento da nova tela apareça
    try:
        # Espera até 10 segundos pela mudança na URL
        wait.until(EC.url_contains("/explore"))
        login_sucesso = True
        print("Login realizado com sucesso! Tela alterada.")
    except:
        login_sucesso = False
        print("Falha na mudança de tela.")

    # 5. Tira print da nova tela
    time.sleep(2)  # Pequena pausa para garantir que a animação de transição acabou
    driver.save_screenshot("screenshot_apos_login.png")
    
    print(f"Resultado do teste: {login_sucesso}")

finally:
    driver.quit()
