reference 

https://blog.davy.tw/posts/use-openssl-to-sign-intermediate-ca/
# 安裝openssl
```
yum install openssl mod_ssl
```



# 自簽CA或憑證
```
openssl req -x509 -new -nodes -sha256 -days 7300 -newkey rsa:2048 -keyout root.key -out root.crt
```
下方解釋了此命令的部份參數。如果您有興趣了解所有參數，請參考 `OpenSSL 官方文件 <<https://www.openssl.org/docs/man1.1.0/man1/req.html>`_ 。

-newkey rsa:2048 - 產生 CSR 與一個長度 2048 的 RSA 密鑰。如果您是要安裝在 Gandi Simple Hosting 的憑證，請務必使用 2048 長度的密鑰。
sha256 - 使用 SHA-2，SHA256 雜奏演算法。如果您使用 SHA1 憑證，Sectigo 將會自動轉換成 SHA2 憑證。

-keyout myserver.key - 將密鑰儲存在當下目錄的檔案 「myserver.key」 中。
-out server.csr - 儲存 CSR 檔案為 「server.csr」。

在您執行命令之後，系統會提示您輸入個人資料。此資料是憑證驗證單位在驗證憑證時會查閱的個人資料：

Country name: 二字元國碼。

State or Province Name: 地區或洲的名稱; 請不要用縮寫。

Locality Name: 城市名稱。

Organization Name: 您的組織 (公司) 英文名稱，此欄位在 標準型 SSL 憑證 非必要 ，但是 進階型 與 商業型 SSL 憑證則是必要欄位。

Organization Unit Name: 您的部門名稱，例如資訊部。

Common Name: 您要簽署的名稱。

Email Address: 您的電子信箱位址。此欄位為非必要，但是建議填寫。

A challenge password: 建議保留空白即可。

An optional company name: 建議保留空白即可。




# 產生中繼CA的CSR
```
openssl req -nodes -newkey rsa:2048 -sha256 -keyout middle.key -out middle.csr
```

# 用ROOT CA產生中繼CA的憑證 
```
openssl x509 -req -days 3650 -CA root.crt -CAkey root.key -in middle.csr -out middle.crt -set_serial 10
```
```-set_serial 10``` 下面還可以簽10層憑證


# 產生server的CSR
```
openssl req -nodes -newkey rsa:2048 -sha256 -keyout server.key -out server.csr
```

# 用中繼CA產生server的憑證
```
openssl x509 -req -days 730 -CA middle.crt -CAkey middle.key -in server.csr -out server.crt -set_serial 0
```






### ```nginx.crt``` 必須以pem格式照順序貼上 bundle crt
```
-----BEGIN CERTIFICATE-----
server憑證
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
middle uca憑證
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
Root ca憑證
-----END CERTIFICATE-----
```








# 產生rsa私鑰 有密碼(des3 aes256演算法) 2048bit
```
openssl genrsa -des3 -out apim.key 2048
openssl genrsa -aes256 -out apim.key 4096
```
輸入密碼

# 產生rsa私鑰無密碼
```
openssl genrsa -out apim.key 4096
```

# 產生csr 證書簽名需求
```
openssl req -sha512 -new -key apim.key -out apim.csr
```
輸入密碼 
輸入公司 url資訊 : 	*.ntu.edu.tw



# 退掉key的密碼
```
cp apim.key apim_pass.key
openssl rsa -in apim_pass.key -out apim.key
```
輸入密碼



# 生成無CA自簽名證書 3650天
```
openssl x509 -req -days 3650 -in apim.csr -signkey apim.no.pass.key -out apim.crt
```


