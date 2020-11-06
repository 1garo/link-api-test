# Link API 

#### Os Kapivaras trabalham em um ambiente dinâmico, com grandes responsabilidades e muitas decisões que devem ser tomadas rapidamente. Nesta fase iremos ter um teste técnico. #dreamteam #kapivara 

* Technologies:
  * [node.js](https://nodejs.org/en/)
  * [express](https://expressjs.com/)
  * [mongoose](https://mongoosejs.com/)
  * [mongodb Atlas](https://www.mongodb.com/cloud/atlas)

## API Usage
**create .env file with the following information:**

```python
PIPEDRIVE_BASE_URL=https://api.pipedrive.com/v1
PIPEDRIVE_KEY=<your-pipedrive-key>

BLING_URL=https://bling.com.br/Api/v2
BLING_KEY=<your-bling-key>
```

**replace the uri content on src/app/database/config.js**

```python
module.exports = {
  uri: "<your-mongodb-uri>" # could be mongodb Atlas or your local database too
};
```

## Response  
### Codes
```
200: Success
50x: Server Error
```

## Bling

**Request:**
**Get Deals on PipeDrive**
```json
GET /bling HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy
```

**Successful Response:**
```json
HTTP/1.1 200 OK
Server: Link RESTFUL API
Content-Type: application/json
Content-Length: xy

{
    "pedidos": [
    {
      "id": 1,
      "value": 2600,
      "bling_send": false,
      "date": "2020-11-04"
    },
  ]
}
```

**Fail Response:**
```json
HTTP/1.1 
Server: Link RESTFUL API
Content-Type: application/json
Content-Length: xy

{
    "pedidos": "Não existem novos pedidos!"
}
```

**Request:**
**Create deals as orders on Bling**
```json
POST /bling HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy
```

**Successful Response:**
```json
HTTP/1.1 200 OK
Server: Link RESTFUL API
Content-Type: application/json
Content-Length: xy

{
   "confirm": "OK, caso existam novas oportunidades, elas foram inseridas corretamente!"
}
```

**Fail Response:**
```json
HTTP/1.1
Server: Link RESTFUL API
Content-Type: application/json
Content-Length: xy

{
    "confirm": "Não existem novas oportunidades"
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Made by ♥ Alexandre Vardai 👋 
[Find me here](https://www.linkedin.com/in/alexandre-vardai-b8255b15b/)
