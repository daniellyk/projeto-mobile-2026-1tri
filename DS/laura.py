import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException

URL = "http://localhost:8081"

# Inicia o navegador
driver = webdriver.Chrome()

try:
    # Abre o localhost
    driver.get(URL)

    for i in range(3): # tenta até 3 vezes
        try:
            botao_entrar = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, '[data-testid="botao-entrar"]'))
            )
            botao_entrar.click()
            break # Se clicou com sucesso, sai do loop
        except StaleElementReferenceException:
            if i == 2: raise # Se na terceira vez ainda der erro, explode o erro
            time.sleep(1) # Espera
        # Substitua 'id_da_mensagem' pelo ID ou classe real do erro no seu HTML
    try:
        msg_erro = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="msg-erro-vazio"]'))
        )
        erro_encontrado = True
    except:
        erro_encontrado = False

    # 3. Print do resultado no terminal
    print(erro_encontrado)

    # 4. Tira screenshot do estado atual
    driver.save_screenshot("resultado_erro.png")

finally:
    driver.quit()