# GROQ ID API

## Deskripsi

GROQ ID API menyediakan layanan untuk menjawab berbagai macam pertanyaan dalam bahasa Indonesia. API ini dirancang untuk memudahkan integrasi dengan aplikasi atau layanan yang membutuhkan kemampuan tanya jawab berbasis teks.

## Fitur
- Mengirim pertanyaan dan mendapatkan jawaban dalam bahasa Indonesia

## Penggunaan

### Mengirim Pertanyaan

Endpoint: `GET /`
#### URL
```
groqapi-man.vercel.app?q=hai
```
#### Query Parameter
- `q` (string):Pertanyaan yang ingin diajukan
#### Contoh Request
```
curl -X GET "https://groqapi-man.vercel.app?q=hai"
```
#### Response
```
{
  "answer": "Hai! Bagaimana kabar?"
}
```

