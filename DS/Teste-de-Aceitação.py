import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException

def test_login_transicao_segura():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 20)

    try:
        driver.get("http://localhost:8081")
        
        # Espera inicial para o carregamento do JavaScript
        time.sleep(3)

        # Loop para evitar o erro de 'Stale Element' no botão
        for _ in range(10):
            try:
                xpath_botao = "//*[contains(translate(text(), 'ENTRAR', 'entrar'), 'entrar')]"
                botao = wait.until(EC.presence_of_element_located((By.XPATH, xpath_botao)))
                
                # Força o clique via JavaScript (mais estável para React)
                driver.execute_script("arguments[0].click();", botao)
                break 
            except StaleElementReferenceException:
                time.sleep(0.5)
                continue

        # Validação de sucesso: Verifica se a URL mudou
        time.sleep(3)
        if "localhost:8081" in driver.current_url and len(driver.current_url) > 22:
            print("SUCESSO: O sistema aceitou o clique e mudou de página!")
        else:
            print("Página atual: " + driver.current_url)

    except Exception as e:
        print(f"Erro: {e}")
    
    finally:
        time.sleep(2)
        driver.quit()

if __name__ == "__main__":
    test_login_transicao_segura()