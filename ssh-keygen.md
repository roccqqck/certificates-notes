# 免密碼登入

再來查看server ssh的設定：
```
# /etc/ssh/sshd_config

PubkeyAuthentication    yes                    #公開金鑰認證登入方式
AuthorizedKeysFile      .ssh/authorized_keys   #公開金鑰檔案位置

PasswordAuthentication  yes                    # 密碼登入先別關
```

產生金鑰
```
ssh-keygen -t rsa -b 2048
```
產出的key跟pub預設路徑會在```~/.ssh/```
```
cat ~/.ssh/id_rsa.pub
```
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDHC0CiVKUAs4/w7FojIC2Jnbww8dQ6DmolygcAmUZ/Ayg5wyp8SGL8V5RHilKXWtFRhQmZFBxyimtIYDSikUvm2PCMqsuBAXP2BnisKM1BmTt+0bmjbc5HJakNDFmMvXPp6QiLi0t38B1TCf8Z0cGL4yCxZuin0wtFY98h0yP6/SFwlsrWCrEZcv5LMjdw7P3XS7K1gRNYjlmFrWifFbNfNrsIA2z+GX93BlVPL+OZEpzFShXPddC3UaeGVg1/lgvSlykE21TJ05G4HX6QyDdknAbbRKhrfcqK16Mdx8aN3IrWS2hXXO9bBu5nwLPXQ54C4gPD2AvLeYBLSl7MGXw/ hello@demo.com
```
cat ~/.ssh/id_rsa
```
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn
NhAAAAAwEAAQAAAQEAxwtAolSlALOP8OxaIyAtiZ28MPHUOg5qJcoHAJlGfwMoOcMqfEhi
/FeUR4pSl1rRUYUJmRQccoprSGA0opFL5tjwjKrLgQFz9gZ4rCjNQZk7ftG5o23ORyWpDQ
xZjL1z6ekIi4tLd/AdUwn/GdHBi+MgsWbop9MLRWPfIdMj+v0hcJbK1gqxGXL+SzI3cOz9
10uytYETWI5Zha1onxWzXza7CANs/hl/dwZVTy/jmRKcxUoVz3XQt1GnhlYNf5YL0pcpBN
tUydORuB1+kMg3ZJwG20Soa33KitejHcfGjdyK1ktoV1zvWwbuZ8Cz10OeAuIDw9gLy3mA
S0pezBl8PwAAA9DNWjz1zVo89QAAAAdzc2gtcnNhAAABAQDHC0CiVKUAs4/w7FojIC2Jnb
ww8dQ6DmolygcAmUZ/Ayg5wyp8SGL8V5RHilKXWtFRhQmZFBxyimtIYDSikUvm2PCMqsuB
AXP2BnisKM1BmTt+0bmjbc5HJakNDFmMvXPp6QiLi0t38B1TCf8Z0cGL4yCxZuin0wtFY9
8h0yP6/SFwlsrWCrEZcv5LMjdw7P3XS7K1gRNYjlmFrWifFbNfNrsIA2z+GX93BlVPL+OZ
EpzFShXPddC3UaeGVg1/lgvSlykE21TJ05G4HX6QyDdknAbbRKhrfcqK16Mdx8aN3IrWS2
hXXO9bBu5nwLPXQ54C4gPD2AvLeYBLSl7MGXw/AAAAAwEAAQAAAQBSBUMHIZY06cmA4ARs
wQ/Cy6sHCEAKBHKdS9kC2CaCpExpMRFK0ZFoprZFnKxYDmZ/DzFbUTw/vuZilrJZ40HByN
enP6JIcM7WLOiBGPcr9vbbVZUH0XHVQ6Gb7ODh7Bfd5ddNmYLp05ph45apjxQQjvGj6OIq
df8JAxSpnZYQEJCaLan5nWMMr6Au+3lDqDPGYJLVduuEXRVSvg1baZTXX58CVBt/NQpyDv
jV9QH+lVd7v1Z99zM/IZdRHsi1FubPTeUQeuw7wSdDXDlg6hTEF/PX1zTrPccaZdTGwmfq
fxse0yFzwaGmIG9WU6X/CHUnoGdVCFRC+7ZxggDLue3BAAAAgEOAoOyUIYZTmU/If3Yrd0
+8sbfMDaPD4KZ4jtLBEFKnefwk8IG9GGwaKxIabkfdQVUGsf2MoDorlM1q513zDW+Zg2+l
mK4BZ5xpT2ZAApf24UNrytFj/mf94mti+WLPCl2Hswf8/aL89GvtLn2IFr41KlYR+rOidO
RW4ihUgXvWAAAAgQD0jg4WuKEW9oL2hfb551Oszv4y1BPlP4XlWZtT29vvhKBn7aZDj0gl
U6FmuLa3qaFUEr3sRw0z7kSNk9IcWndavZDC3Mw/ddKdqq8VDO1k4oK+dorhfiB3+bi0ev
2zosth+1wMEG5YZEL3tBb9wqHkcuE7qkh/+nnaDb4jF32lLwAAAIEA0FvxfLSOxh69yAtY
F9/sUsVpt7a2+ihYk5HKTWXAB0zPLaQWsZ69iyLecvfKQjc6BMIHbgS5XX923jOZjnwgE6
C01cNZpC0HxNJEEf2c7M1lZxvM5jR0CCbxZq1Wkh91lnTW+hTQUXakNn2j3m/zpNIipt7Z
Q7Que6DoB1M19fEAAAAXYmFycnlAYmFycnlNQlBSMTMubG9jYWwBAgME
-----END OPENSSH PRIVATE KEY-----
```



公鑰上傳到某server的某username
```
ssh-copy-id  -i  your_key_path/id_rsa  username@server_host
```


pub上傳預設路徑會在```~/.ssh/authorized_keys```
```
cat ~/.ssh/authorized_keys
```
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDHC0CiVKUAs4/w7FojIC2Jnbww8dQ6DmolygcAmUZ/Ayg5wyp8SGL8V5RHilKXWtFRhQmZFBxyimtIYDSikUvm2PCMqsuBAXP2BnisKM1BmTt+0bmjbc5HJakNDFmMvXPp6QiLi0t38B1TCf8Z0cGL4yCxZuin0wtFY98h0yP6/SFwlsrWCrEZcv5LMjdw7P3XS7K1gRNYjlmFrWifFbNfNrsIA2z+GX93BlVPL+OZEpzFShXPddC3UaeGVg1/lgvSlykE21TJ05G4HX6QyDdknAbbRKhrfcqK16Mdx8aN3IrWS2hXXO9bBu5nwLPXQ54C4gPD2AvLeYBLSl7MGXw/ hello@demo.com
```


測試```ssh```, ```scp```
```
ssh  -i  your_key_path/id_rsa   username@server_host
ssh  -i  your_key_path/id_rsa   ./file.txt  username@server_host:/home/username/
```

## 多台server 多把keys 管理
編輯 ```~/.ssh/config```
```
# - master
Host            master                # 代號
Hostname        192.168.11.24        # IP or Domain name
Port            2222                # 指定埠口
User            jonny                # 使用者名稱
identityfile    ~/.ssh/id_rsa_24    # 指定金鑰

# - slave
Host            slave                # 代號
Hostname        192.168.11.25        # IP or Domain name
Port            2223                # 指定埠口
User            jonny                # 使用者名稱
identityfile    ~/.ssh/id_rsa_25    # 指定金鑰
```


```
ssh jonny@192.168.11.24 -p 2222
ssh master
```
```
ssh jonny@192.168.11.25 -p 2223
ssh slave
```