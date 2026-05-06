import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException

# Certifique-se de que o servidor está rodando nesta URL
URL = "http://localhost:8081/"

def iniciar_driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized") 
    # Se o erro de "arquivo não encontrado" persistir, verifique o caminho do ChromeDriver
    return webdriver.Chrome(options=options)

def teste_print_checkin_sucesso():
    driver = iniciar_driver()
    print(f"\n--- Iniciando Teste 2: Validando Tela de Check-in ---")
    
    try:
        # 1. Acessa a página
        driver.get(URL)
        
        # 2. Aguarda até 15 segundos para o texto "TUDO PRONTO!" aparecer
        # O XPath abaixo procura o texto exato independente da tag (h1, div, span)
        wait = WebDriverWait(driver, 15)
        wait.until(EC.visibility_of_element_located(
            (By.XPATH, "//*[contains(text(), 'TUDO PRONTO!')]")
        ))
        
        # 3. Print da tela de sucesso
        print(f"URL detectada: {URL}")
        driver.save_screenshot("2_checkin_finalizado_sucesso.png")
        print("✅ Sucesso: Página de Check-in (Tudo Pronto) detectada e capturada!")

    except TimeoutException:
        print(f"❌ Erro: O texto 'TUDO PRONTO!' não apareceu. Verifique se o fluxo chegou ao fim.")
        driver.save_screenshot("erro_fluxo_checkin.png")
        
    except WebDriverException as e:
        print(f"❌ Erro de Conexão: O servidor em {URL} está ativo?")
        
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")

    finally:
        driver.quit()
        print("--- Teste 2 Finalizado ---\n")

if __name__ == "__main__":
    teste_print_checkin_sucesso()
