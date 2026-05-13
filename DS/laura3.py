import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

URL = "http://localhost:8081/exames"  
driver = webdriver.Chrome()

try:
    driver.get(URL)
    wait = WebDriverWait(driver, 10)

    # 1. Espera a lista de exames carregar
    lista_exames = wait.until(EC.presence_of_all_elements_located(
        (By.CSS_SELECTOR, '[data-testid="exame-item"]')
    ))

    if not lista_exames:
        print("Nenhum exame encontrado.")
        driver.save_screenshot("erro_exames.png")
    else:
        print(f"{len(lista_exames)} exames encontrados.")

        # 2. Seleciona o primeiro exame
        primeiro_exame = lista_exames[0]
        nome_exame = primeiro_exame.text
        primeiro_exame.click()

        # 3. Espera a tela de detalhes do exame
        status_exame = wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '[data-testid="exame-status"]')
        ))

        # 4. Verifica se o exame está liberado
        if "liberado" in status_exame.text.lower():
            print(f"Exame '{nome_exame}' está liberado ✅")
            teste_sucesso = True
        else:
            print(f"Exame '{nome_exame}' NÃO está liberado ❌")
            teste_sucesso = False

        # 5. Tira print da tela de detalhes
        time.sleep(1)
        driver.save_screenshot("screenshot_exame.png")

    print(f"Resultado do teste de liberação de exame: {teste_sucesso}")

finally:
    driver.quit()