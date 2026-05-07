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

def teste_fluxo_robusto():
    driver = iniciar_driver()
    wait = WebDriverWait(driver, 20, poll_frequency=0.5)
    
    try:
        driver.get(URL)
        print(f"Acessando {URL}...")

        # Salva o HTML para diagnóstico
        with open("pagina_atual.html", "w", encoding="utf-8") as f:
            f.write(driver.page_source)

        # XPATH robusto para capturar qualquer variação de "check-in" ou "tudo pronto"
        print("Procurando confirmação na tela...")
        xpath_sucesso = (
            "//*[contains(translate(text(), "
            "'abcdefghijklmnopqrstuvwxyzáàâãéèêíìîóòôõúùûç', "
            "'ABCDEFGHIJKLMNOPQRSTUVWXYZAAAAEEEIIIOOOOUUUC'), "
            "'CHECK')"
            " or contains(translate(text(), "
            "'abcdefghijklmnopqrstuvwxyzáàâãéèêíìîóòôõúùûç', "
            "'ABCDEFGHIJKLMNOPQRSTUVWXYZAAAAEEEIIIOOOOUUUC'), 'TUDO PRONTO')]"
        )
        
        wait.until(EC.visibility_of_element_located((By.XPATH, xpath_sucesso)))
        driver.save_screenshot("2_checkin_finalizado_sucesso.png")
        print("✅ Sucesso: Tela de Check-in encontrada!")

        # XPATH robusto para o botão "INÍCIO"
        print("Tentando avançar para a próxima tela...")
        xpath_botao = (
            "//*[contains(translate(text(), "
            "'abcdefghijklmnopqrstuvwxyzáàâãéèêíìîóòôõúùûç', "
            "'ABCDEFGHIJKLMNOPQRSTUVWXYZAAAAEEEIIIOOOOUUUC'), 'INICIO')]"
        )
        
        botao = wait.until(EC.element_to_be_clickable((By.XPATH, xpath_botao)))
        botao.click()
        
        print("✅ Botão clicado! Transição em curso.")
        time.sleep(2)
        driver.save_screenshot("3_proxima_tela.png")

    except Exception as e:
        print(f"❌ Erro: O Selenium não encontrou os elementos na página.")
        print("Dica: Verifique se a página carregou corretamente ou se o texto esperado mudou.")
        driver.save_screenshot("erro_captura_tela.png")
        print("Detalhes do erro:", e)

    finally:
        driver.quit()
        print("--- Teste Finalizado ---")

if __name__ == "__main__":
    teste_fluxo_robusto()
