import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException

URL = "http://localhost:8081/"

def iniciar_driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized") 
    return webdriver.Chrome(options=options)

def teste_carregamento_pagina():
    driver = iniciar_driver()
    print(f"\n--- Iniciando Teste em: {URL} ---")
    
    try:
        # Tenta acessar a URL
        driver.get(URL)
        
        # Espera até que o corpo da página (tag <body>) esteja presente
        wait = WebDriverWait(driver, 10)
        wait.until(EC.presence_of_element_located((By.TAG_NAME, "body")))
        
        # Confirmação de sucesso
        print(f"URL: {URL}")
        print("✅ Sucesso: Página carregada e elemento de login encontrado.")
        driver.save_screenshot("sucesso_carregamento.png")

    except TimeoutException:
        print(f"❌ Erro: O tempo limite foi atingido ao tentar carregar {URL}.")
        
    except WebDriverException:
        print(f"❌ Erro de Conexão: Não foi possível acessar {URL}. Verifique se o servidor local está ativo.")

    finally:
        driver.quit()
        print("--- Teste Finalizado ---\n")

if __name__ == "__main__":
    teste_carregamento_pagina()
