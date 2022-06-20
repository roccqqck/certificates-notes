## Convert pem private key and crt -> pkcs12

 
```
openssl pkcs12 -export \

-in prdocp_crt.pem \

-inkey prdocp_key.pem \

-out prdocp.p12 \

-name *.ntu.edu.tw
```

### Convert pem private key and crt -> pkcs12 with root uca crt
```
openssl pkcs12 -export \

-in prdocp_crt.pem \

-certfile root.pem \

-certfile uca.pem \

-inkey prdocp_key.pem \

-out prdocp.p12 \

-name *.ntu.edu.tw
```
 

 
## convert pkcs12 -> PEM
 
```
openssl pkcs12 -in path.p12 -out newfile.crt.pem -clcerts -nokeys
openssl pkcs12 -in path.p12 -out newfile.key.pem -nocerts -nodes
```

After that you have:

certificate in ```newfile.crt.pem```

private key in ```newfile.key.pem```

 
To put the certificate and key in the same file without a password, use the following, as an empty password will cause the key to not be exported:

```
openssl pkcs12 -in path.p12 -out newfile.pem -nodes
```
 

 

## Convert Pkcs12 -> jks keystore

 
```
keytool -v -importkeystore -srckeystore prdocp.p12 -srcstoretype PKCS12 -destkeystore tml-tm.jks -deststoretype JKS
```
```
keytool -importkeystore -deststorepass PASSWORD_STORE -destkeypass PASSWORD_KEYPASS -destkeystore keystore.jks -srckeystore pkcs.p12 -srcstoretype PKCS12 -srcstorepass STORE_PASS -alias NAME
```

 

 

## Import the CA into the truststore, using the following command:
```
keytool -list -v -keystore ./cacerts
```
```
keytool -import -v -trustcacerts -alias endeca-ca -file eneCA.pem -keystore truststore.ks

keytool -importcert -file nexus_prd.cer   -keypass changeit -storepass changeit -noprompt -alias prdnexus  -keystore ./cacerts
```
```
keytool  -delete -alias prdnexus ./cacerts

keytool  -delete -alias prdnexus  -keystore ./cacerts  -storepass changeit
```

https://docs.oracle.com/cd/E35976_01/server.740/es_admin/src/tadm_ssl_convert_pem_to_jks.html

 

https://docs.cloudera.com/documentation/enterprise/5-10-x/topics/cm_sg_openssl_jks.html



# Convert DER-encoded certificate to PEM
```
openssl x509 -inform der -in CERTIFICATE.der -out CERTIFICATE.pem
```