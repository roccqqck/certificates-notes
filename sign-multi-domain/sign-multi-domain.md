# sign multi-domain 

reference https://thesecmasterblog.medium.com/how-to-generate-a-csr-for-multi-domain-ssl-certificates-using-openssl-2136734812fc

https://medium.com/@pubudu538/how-to-create-a-self-signed-ssl-certificate-for-multiple-domains-25284c91142b

Create a copy of the existing config file. The existing OpenSSL config file will be at ```/etc/ssl/openssl.cnf``` or ```/usr/lib/ssl/openssl.cnf```



```
cp /etc/ssl/openssl.cnf ./
mv ./openssl.cnf myconfig.cnf
```



## edit ```myconfig.cnf```

```
req_extensions = v3_req # The extensions to add to a certificate request
```
```
[ v3_req ]
subjectAltName = @alt_names 
keyUsage = nonRepudiation, digitalSignature, keyEncipherment, cRLSign, keyCertSign
```
```
[ alt_names ] # multi-domain multi-ip
DNS.1 = www.exampledomain.com
DNS.2 = exampledomain.com
DNS.3 = thesecmaster.local
DNS.4 = mydomain.local
IP.1 = 127.0.0.1
IP.2 = 192.168.0.3
```


## 用```myconfig.cnf```產生server的CSR
```
openssl req -nodes -newkey rsa:2048 -sha256 -keyout server.key -out server.csr -config myconfig.cnf
```

```
openssl req -in server.csr -noout -text
```
```
        Requested Extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Key Usage: 
                Digital Signature, Non Repudiation, Key Encipherment, Certificate Sign, CRL Sign
            X509v3 Subject Alternative Name: 
                DNS:www.exampledomain.com, DNS:exampledomain.com, DNS:thesecmaster.com, DNS:mydomain.com, IP Address:127.0.0.1, IP Address:192.168.0.3
```
表示成功


## 用```myconfig.cnf```生成無CA自簽名證書 3650天
```
openssl req -x509 -new -nodes -sha256 -days 3650 -newkey rsa:2048 -keyout server.key -out server.crt -extensions v3_req -config myconfig.cnf
```
```
openssl x509 -in server.crt -text -noout
```
```
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Key Usage: 
                Digital Signature, Non Repudiation, Key Encipherment, Certificate Sign, CRL Sign
            X509v3 Subject Alternative Name: 
                DNS:www.exampledomain.com, DNS:exampledomain.com, DNS:thesecmaster.com, DNS:mydomain.com, IP Address:127.0.0.1, IP Address:192.168.0.3
```
表示成功