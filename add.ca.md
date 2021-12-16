+ Open a webpage that uses the CA with Firefox
+ Click the lock-icon in the addressbar -> show information -> show certificate
+ the certificate viewer will open
+ click details and choose the certificate of the certificate-chain, you want to import to CentOS
+ click "Export..." and save it as .crt file

# Centos
+ Copy the .crt file to `/etc/pki/ca-trust/source/anchors` on your CentOS machine
+ run `update-ca-trust extract`
+ test it with `wget https://thewebsite.org`

# Debian, Ubuntu and Alpine
On debian and ubuntu the directory is `/usr/local/share/ca-certificates/` and the command to update is `update-ca-certificates`

At least on ubuntu:  
Be sure that the filename ends with `.crt` and that its content starts with `-----BEGIN CERTIFICATE-----` and ends with `-----END CERTIFICATE-----` and make sure you have "root CA" & "intermediate" in the same .crt file



 # if it is not working , Edit the ```CAfile``` or add crt file to ```CApath```

check the CAfile and CApath
```
curl -v https://google.com
```
```
*   Trying 172.217.163.46:443...
* TCP_NODELAY set
* Connected to google.com (172.217.163.46) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
```

