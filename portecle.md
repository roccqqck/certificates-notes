# keystore



use portecle ("https://github.com/scop/portecle/releases") to import base64.pem.crt to keystore.jks

* open portecle.jar
* File
  * open new keystore file 
    * select keystore.jks file
      * type password

keystore.jks password : ```changeit```

* Tools
  * Import Trusted Certificate
    * select the base64.pem.crt file you want to import
      * name it like ```ibank-dev-2030```



encode keystore.jks to base64
```
base64 -w 0 keystore.jks > keystore.jks.base64.txt
```

decode it to make sure keystore_new.jks is the identical file of keystore.jks
```
 base64 -d keystore.jks.base64.txt > keystore_new.jks
```

paste ```keystore.jks.base64.txt``` and replace it into ```keystore.jks-configmap``` and ```keystore.jks-secret```












