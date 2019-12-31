from selenium import webdriver
driver = webdriver.Chrome(r'C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe')
driver.get('https://dfhfgf.github.io/shopify-admin/#/orders/all_orders')
ele=driver.find_element_by_xpath('//div[@class="ant-card-head-title"]//div[@class="ant-select-sm ant-select ant-select-enabled"]')
ele.click()
driver.find_element_by_xpath('//span[@class="ant-form-item-children"]//div[@class="ant-select ant-select-enabled"]')[0].click()
ele=driver.find_element_by_xpath("//span[@class='ant-form-item-children']//div[@class='ant-select ant-select-enabled ant-select-allow-clear']")
ele.click()
driver.find_element_by_xpath('//span[@class="ant-form-item-children"]//div[@class="ant-select ant-select-enabled ant-select-allow-clear"]')[0].click()
ele=driver.find_element_by_xpath('//span[@class="ant-form-item-children"]//div[@aria-expanded="false"]')
ele.click()
driver.find_element_by_xpath('//div[@id="1d62df58-de44-4f1e-c76b-b6371908cdc8"]//ul[@class="ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical"]')[0].click()
ele=driver.find_element_by_css_selector("button[type='button']")
ele.click()


pass 