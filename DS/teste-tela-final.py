import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

URL = "http://localhost:8081"

def iniciar_driver():
    return webdriver.Chrome()

# 1. Entrar e dar print (Apenas carregar a página de login)
def teste_carregamento_pagina():
    driver = iniciar_driver()
    try:
        driver.get(URL)
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="input-email"]')))
        driver.save_screenshot("1_tela_login.png")
        print("Teste 1: Página carregada e print tirado.")
    finally:
        driver.quit()