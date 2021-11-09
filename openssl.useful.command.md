# CSR decode
```
openssl req -in mycsr.csr -noout -text
```
# crt decode
```
openssl x509 -in certificate.crt -text -noout
```

# get crt from website
```
openssl s_client -connect ${REMHOST}:${REMPORT}
```

# 指定 TLS 1.2 進行加密連線
```
openssl s_client -connect www.yahoo.com:443 -tls1_2
```