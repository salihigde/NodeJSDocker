# NodeJSDocker
### Redis, nginx ve Docker kullanılarak hazırlanan küçük çapta bir NodeJS örneği

##### Bu örnekte Ubuntu bir makinaya docker kurulduğunu varsayılarak ilerlenmiştir.

* nodetest01, nodetest02, nginx adında üç adet klasör oluşturunuz. 
```
mkdir nodetest01
mkdir nodetest02
mkdir nginx
```

* klasörler içerisine proje dosyaları taşınır. Burada hızlı ilerlemek adına linux'taki vim editör kullanılarak dosyalar kopyala/yapıştır şeklinde taşınabilir.

* Docker Compose kurulur (eğer permission denied hatası alırsanız sudo -i yapın tekrar deneyin)
```
curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

* ana dizine docker-compose.yml dosyası kopyalanır.

* ve en son docker-compose.yml dosyası içerisinden komutları yorumları container'larımızı ayağa kaldırması için aşağıdaki komut çalıştırılır.
```
docker-compose up -d
```

* bu işlemler sonrası sunucunun dışarıya açık IP ya da DNS'inden nginx üzerinden siteye erişim sağlanır.
