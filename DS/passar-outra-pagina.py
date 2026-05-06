from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options=chrome_options)

try:
    # Tente 127.0.0.1 se o localhost falhar
    print("🚀 Acessando o App...")
    driver.get("http://127.0.0.1:8081") 
    
    for i in range(20):
        print(f"--- Tentativa {i+1} ---")
        
        # Pega todo o texto da página para saber onde estamos
        texto_da_tela = driver.find_element(By.TAG_NAME, "body").text
        
        if "Roberto" in texto_da_tela:
            print("✅ Roberto encontrado! Tentando clicar...")
            # Clica via JS
            driver.execute_script("""
                var el = Array.from(document.querySelectorAll('*')).find(e => e.innerText && e.innerText.includes('Roberto'));
                if (el) el.click();
            """)
            print("🎯 Clique enviado. Verifique o navegador.")
            break
        else:
            print("❌ Médico não está na tela. O que eu vejo é:")
            print(texto_da_tela[:100] + "...") # Mostra os primeiros 100 caracteres da tela
            
        time.sleep(2)

except Exception as e:
    print(f"Erro: {e}")