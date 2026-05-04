import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException

URL = "http://localhost:8081"

def iniciar_driver():
    # Adicionado opções para evitar erros comuns de inicialização
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized") 
    return webdriver.Chrome(options=options)

def teste_carregamento_pagina():
    driver = iniciar_driver()
    print("\n--- Iniciando Teste 1: Carregamento ---")
    
    try:
        # Tenta acessar a URL
        driver.get(URL)
        
        # Espera o elemento de email aparecer
        wait = WebDriverWait(driver, 10)
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="input-email"]')))
        
        # Se chegou aqui, deu certo
        driver.save_screenshot("1_tela_login_sucesso.png")
        print("✅ Sucesso: Página carregada e elemento de login encontrado.")

    except TimeoutException:
        print("❌ Erro: A página carregou, mas o campo de email [data-testid='input-email'] não apareceu em 10s.")
        driver.save_screenshot("erro_timeout_carregamento.png")
        
    except WebDriverException as e:
        print(f"❌ Erro de Conexão: Não foi possível acessar {URL}. O servidor está rodando?")
        print(f"Detalhes: {e}")

    except Exception as e:
        print(f"❌ Erro inesperado: {e}")

    finally:
        driver.quit()
        print("--- Teste 1 Finalizado ---\n")

if __name__ == "__main__":
    teste_carregamento_pagina()
