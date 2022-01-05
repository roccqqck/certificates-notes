# CSR decode
```
openssl req -in mycsr.csr -noout -text
```
# crt decode
```
openssl x509 -in certificate.crt -text -noout
```

# Check a PKCS#12 file (.pfx or .p12)
```
openssl pkcs12 -info -in keyStore.p12 -nodes
```


# View contents of DER-encoded certificate file
```
openssl x509 -inform der -in CERTIFICATE.der -text -noout
```

# get crt from website
```
openssl s_client -showcerts -connect ${REMHOST}:${REMPORT}
```

# 指定 TLS 1.2 進行加密連線
```
openssl s_client -connect www.yahoo.com:443 -tls1_2
```