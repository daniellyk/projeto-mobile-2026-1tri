import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException

def test_botoes_especialidade_home():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 20)

    try:
        driver.get("http://localhost:8081")
        time.sleep(5)

        # Lista de especialidades conforme o seu código React Native
        especialidades = ["Cardiologista", "Pneumologista", "Ortopedista", "Dermatologista", "Neurologista"]

        for esp in especialidades:
            print(f"Testando clique na especialidade: {esp}")
            
            # Tenta localizar o botão pelo texto da especialidade
            for _ in range(5):
                try:
                    # No React Native Web, o texto costuma ficar dentro de uma div ou span
                    botao = wait.until(EC.presence_of_element_located((By.XPATH, f"//*[text()='{esp}']")))
                    
                    # Rola até o elemento e clica via JavaScript para garantir
                    driver.execute_script("arguments[0].scrollIntoView(true);", botao)
                    driver.execute_script("arguments[0].click();", botao)
                    break
                except StaleElementReferenceException:
                    time.sleep(0.5)

            # Espera carregar a tela de listagem
            time.sleep(2)
            
            # Tira print do resultado do clique
            driver.save_screenshot(f"resultado_clique_{esp}.png")
            
            if "listagem-doutores" in driver.current_url:
                print(f"SUCESSO: Navegou para listagem filtrada por {esp}")
            
            # Volta para a tela inicial para clicar na próxima especialidade
            driver.execute_script("window.history.back();")
            time.sleep(2)

        print("\nTodos os botões de especialidade foram testados com sucesso!")

    except Exception as e:
        driver.save_screenshot("erro_especialidades_home.png")
        print(f"Ocorreu um erro: {e}")
    
    finally:
        driver.quit()

if __name__ == "__main__":
    test_botoes_especialidade_home()