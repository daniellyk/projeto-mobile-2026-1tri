import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException, TimeoutException

def test_botao_inicio_final():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 25)

    try:
        driver.get("http://localhost:8081") # Tenta a raiz ou a rota final
        time.sleep(5)

        # XPath que ignora se o texto está maiúsculo ou minúsculo
        xpath_botao = "//*[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'ir para o início')]"

        print("Buscando botão de encerramento...")
        
        for _ in range(15):
            try:
                # 1. Espera o elemento estar presente
                botao = wait.until(EC.presence_of_element_located((By.XPATH, xpath_botao)))
                
                # 2. Rola até ele
                driver.execute_script("arguments[0].scrollIntoView(true);", botao)
                time.sleep(1)
                
                # 3. Força o clique via JavaScript
                driver.execute_script("arguments[0].click();", botao)
                print("Botão clicado com sucesso!")
                break
            except (StaleElementReferenceException, TimeoutException):
                time.sleep(1)
                continue
        else:
            print("Não foi possível encontrar o botão após várias tentativas.")

        time.sleep(3)
        driver.save_screenshot("confirmacao_retorno_inicio.png")

    except Exception as e:
        driver.save_screenshot("erro_final_debug.png")
        print(f"Erro detectado: {e}")
    
    finally:
        driver.quit()

if __name__ == "__main__":
    test_botao_inicio_final()