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
ssh-keygen
```

公鑰上傳到server
```
ssh-copy-id -i your_key_path username@server_host
```
路徑會在server的 ```~/.ssh/```
```
cat ~/.ssh/ubuntu_id_rsa.pub 
```
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDOZypQABxuCschD6jjRZFr1iPCqzrpo40Mzw6vXRfPlFwF9QJhLm3YYdtnpVekj9e1Y4kUduM924PAiLgfRw/6AJ1ueDR1BEDLeH8gAV1Cc90oPUvitYItPN8F1HrqiT37GZ3wKWKIFw70NL8Hs6BL61F+LgFmfXQDRyp7IIcyK9rmk24yqLSue/DiSbA0y85E4uvV7ekZD2NXeA9AnKHFe/cy614SQv2NNQCwi2ZRuP25du9xGVv0QvCwrZ4ANJky9V7xlO4dFFHqcNXUPQUm8EeRxySVCdTbenqiEQ3flLVBCCCxvnc7ApHlLNc/CZSpcft96xfGB3qOCrRvjb2/ xenby@demo.com
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