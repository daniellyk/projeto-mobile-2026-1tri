import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

URL = "http://localhost:8081/"

def iniciar_driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized") 
    return webdriver.Chrome(options=options)

def teste_fluxo_corrigido():
    driver = iniciar_driver()
    # Aumentamos o tempo de espera para 20 segundos
    wait = WebDriverWait(driver, 20)
    
    try:
        driver.get(URL)
        print(f"Acessando {URL}...")

        # 1. Busca o texto "TUDO PRONTO" de forma mais flexível (ignorando se é maiúsculo ou minúsculo)
        print("Procurando confirmação na tela...")
        xpath_sucesso = "//*[contains(translate(text(), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'check-in')]"
        
        wait.until(EC.visibility_of_element_located((By.XPATH, xpath_sucesso)))
        
        driver.save_screenshot("2_checkin_finalizado_sucesso.png")
        print("✅ Sucesso: Tela de Check-in encontrada!")

        # 2. Tenta clicar no botão de avançar
        # Se o botão for "IR PARA O INÍCIO", buscamos apenas por "INÍCIO" para evitar erros de acentuação
        print("Tentando avançar para a próxima tela...")
        xpath_botao = "//*[contains(text(), 'home') or contains(text(), 'home') or contains(text(), 'home')]"
        
        botao = wait.until(EC.element_to_be_clickable((By.XPATH, xpath_botao)))
        botao.click()
        
        print("✅ Botão clicado! Transição em curso.")
        time.sleep(2) # Aguarda a troca de tela
        driver.save_screenshot("3_proxima_tela.png")

    except Exception as e:
        print(f"❌ Erro: O Selenium não encontrou os elementos na página.")
        print("Dica: Verifique se o texto na tela é exatamente 'check-in!' ou se a página carregou em branco.")
        driver.save_screenshot("erro_captura_tela.png")

    finally:
        driver.quit()
        print("--- Teste Finalizado ---")

if __name__ == "__main__":
    teste_fluxo_corrigido()
