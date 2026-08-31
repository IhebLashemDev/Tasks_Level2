## API Testing (Postman)

### 1. Signup — إنشاء حساب Admin مع JWT
![Signup](docs/postman/01-signup.png)

### 2. Create Product — إضافة منتج (201 Created)
![Create Product](docs/postman/02-create-product.png)

### 3. Get Products — جلب كل المنتجات (200 OK)
![Get Products](docs/postman/03-get-products.png)

### 4. Update Product — تحديث منتج (200 OK)
![Update Product](docs/postman/04-update-product.png)

### 5. Delete Product — حذف منتج (200 OK)
![Delete Product](docs/postman/05-delete-product.png)

### 6. Unauthorized — طلب بدون Token (401)
![Unauthorized](docs/postman/06-unauthorized.png)

### 7. Forbidden — مستخدم عادي يحاول حذف منتج (403 Admin only)
![Forbidden](docs/postman/07-forbidden-admin-only.png)

### 8. Not Found — حذف منتج غير موجود (404)
![Not Found](docs/postman/08-not-found.png)
