pem private key and crt to pkcs12

 
```
openssl pkcs12 -export \

-in prdocp_crt.pem \

-inkey prdocp_key.pem \

-out prdocp.p12 \

-name *.apps.devocp.firstbank.com.tw
```
 

 

 

 

 

Pkcs12 to keytool jks

 
```
keytool -v -importkeystore -srckeystore prdocp.p12 -srcstoretype PKCS12 -destkeystore tml-tm.jks -deststoretype JKS
```
 

 

 

 

 

Import the CA into the truststore, using the following command:
```
keytool -import -v -trustcacerts -alias endeca-ca -file eneCA.pem -keystore truststore.ks
```

https://docs.oracle.com/cd/E35976_01/server.740/es_admin/src/tadm_ssl_convert_pem_to_jks.html

 

https://docs.cloudera.com/documentation/enterprise/5-10-x/topics/cm_sg_openssl_jks.html