# nodejs-mongo
MongoDB database operations in NodeJS application


Bu uygulama NoSQL mantığında çalışan MongoDB'nin Node.JS ile beraber kullanım örneğidir. Projede Express Framewok çatısında oluşturuldu ve MongoDB bağlantısı için mongoose kütüphanesi kullanıldı.

## Gereksinimler

## Kullanım

`npm start`komutu ile projeyi başlatabilirsiniz. İstekter tamamen kodlar içerisinde ayarlanmış olup json postlarının içeriklerini ayarlamak için Postman vb. bir uygulama kullanılabilir. Çalışma başladığında  MongoDB bağlantısı otomatik olarak kurulacaktır. 

Bazı istek örnekleri aşağıda açıklamalarıyla listelenmiştir:

- _http://localhost:3000/books/new_ yeni kitap kaydı. POST request method.
- _http://localhost:3000/users/new_ yeni kullanıcı kaydı. POST request method.
- _http://localhost:3000/books/search_ çeşitli arama fonksiyonları için. Sonuç json olarak döner. GET request
- _http://localhost:3000/books/searchById_  kitap Id'sine göre arama yapılır ve sonuc json olarak döner. GET request
- _http://localhost:3000/books/updateById_ istenilen kitap Id'sine göre güncelleme yapılır. Put request.
- _http://localhost:3000/books/delete2_ _findOneAndRemove_ methodu ile Id' bazlı arama yapılıp silme işlemi gerçekleştirilebilir. Delete request
- _http://localhost:3000/books/aggregate_ çeşitli gruplama yöntemleri ile veriler listelenir. Get request
- _http://localhost:3000/books/aggregate-lookup_ collection'lar arasında join işlemi ile listeleme yapılmak için kullanılır. Get request
